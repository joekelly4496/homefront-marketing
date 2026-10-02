import { NextResponse } from "next/server";
import { brand } from "@/lib/content";
import {
  answerLabel,
  assessFit,
  validAnswers,
  type Answers,
} from "@/lib/qualifier";

export const dynamic = "force-dynamic";

/**
 * POST /api/qualify — a qualified lead from the ad funnel (/start/book).
 * Emails the answers, the fit, and the ad attribution to CONTACT_EMAIL
 * (fallback: brand.email) through Resend, with reply-to set to the lead.
 * The fit is recomputed here from the raw answers, never trusted from the
 * browser. Same RESEND_API_KEY as /api/contact; without it the route
 * answers 503 and the page still lets the lead book.
 */

const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now > h.reset) {
    hits.set(ip, { count: 1, reset: now + 60 * 60 * 1000 });
    return false;
  }
  h.count += 1;
  return h.count > 5;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ success: false, error: "rate_limited" }, { status: 429 });
    }

    const body = await request.json().catch(() => ({}));
    if (String(body.website ?? "").trim()) return NextResponse.json({ success: true });

    const name = String(body.name ?? "").trim().slice(0, 120);
    const email = String(body.email ?? "").trim().slice(0, 200);
    const company = String(body.company ?? "").trim().slice(0, 160);
    const phone = String(body.phone ?? "").trim().slice(0, 40);
    const raw = (body.answers ?? {}) as Record<string, unknown>;
    const answers: Answers = {
      homes: typeof raw.homes === "string" ? raw.homes : undefined,
      role: typeof raw.role === "string" ? raw.role : undefined,
      pain: typeof raw.pain === "string" ? raw.pain : undefined,
    };
    const utmRaw = (body.utm ?? {}) as Record<string, unknown>;
    const utm = Object.entries(utmRaw)
      .filter(([k, v]) => /^(utm_[a-z]+|gclid|fbclid|msclkid|li_fat_id)$/.test(k) && typeof v === "string")
      .map(([k, v]) => [k, String(v).slice(0, 200)] as const);

    if (!name || !company || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !validAnswers(answers)) {
      return NextResponse.json({ success: false, error: "invalid" }, { status: 400 });
    }

    const fit = assessFit(answers);
    if (fit !== "qualified") {
      // The page never sends unqualified leads here; if something does, drop it quietly.
      return NextResponse.json({ success: true, fit });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[qualify] RESEND_API_KEY is not set — lead NOT delivered");
      return NextResponse.json({ success: false, error: "unconfigured" }, { status: 503 });
    }

    const rows: [string, string][] = [
      ["Name", name],
      ["Company", company],
      ["Email", email],
      ["Phone", phone || "—"],
      ["Homes per year", answerLabel("homes", answers.homes)],
      ["Describes them", answerLabel("role", answers.role)],
      ["Biggest time sink", answerLabel("pain", answers.pain)],
      ...utm.map(([k, v]) => [k, v] as [string, string]),
    ];
    const htmlRows = rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;color:#64748b;font-size:13px;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0;font-size:14px;color:#0f172a">${esc(v)}</td></tr>`,
      )
      .join("");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Afterkey Website <noreply@getafterkey.com>",
        to: [process.env.CONTACT_EMAIL || brand.email],
        reply_to: email,
        subject: `Qualified lead: ${name} — ${company} (${answerLabel("homes", answers.homes)} homes/yr)`,
        html: `<h2 style="font-size:16px;color:#0f172a">Qualified lead from the ad page</h2><p style="font-size:14px;color:#0f172a">They passed the qualifier and were sent to book a call.</p><table>${htmlRows}</table><p style="margin-top:16px;font-size:12px;color:#94a3b8">Sent from getafterkey.com/start/book. Reply goes straight to them.</p>`,
        text: `Qualified lead from the ad page\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`,
      }),
    });

    if (!res.ok) {
      console.error("[qualify] Resend send failed:", res.status, await res.text());
      return NextResponse.json({ success: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ success: true, fit });
  } catch (e) {
    console.error("[qualify] error:", e);
    return NextResponse.json({ success: false, error: "send_failed" }, { status: 500 });
  }
}
