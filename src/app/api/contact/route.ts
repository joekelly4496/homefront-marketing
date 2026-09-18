import { NextResponse } from "next/server";
import { brand } from "@/lib/content";

export const dynamic = "force-dynamic";

/**
 * POST /api/contact — the contact form's inbox. Sends the lead to
 * CONTACT_EMAIL (fallback: brand.email) through Resend's REST API, with
 * reply-to set to the submitter so answering is one click.
 *
 * Requires RESEND_API_KEY in this project's Vercel env (same key the app
 * uses — one Resend account, one verified domain). Without it the route
 * answers 503 and the form falls back to a plain email link, so a missing
 * key never swallows a lead silently.
 *
 * Spam defenses: a honeypot field (real people never fill "website") and a
 * light per-IP rate limit. In-memory, so per serverless instance — good
 * enough to stop dumb bots without risking a real lead.
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
      return NextResponse.json(
        { success: false, error: "Too many messages — try again in a bit." },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => ({}));
    const name = String(body.name ?? "").trim().slice(0, 120);
    const company = String(body.company ?? "").trim().slice(0, 160);
    const email = String(body.email ?? "").trim().slice(0, 200);
    const phone = String(body.phone ?? "").trim().slice(0, 40);
    const homes = String(body.homes ?? "").trim().slice(0, 40);
    const message = String(body.message ?? "").trim().slice(0, 4000);
    const honeypot = String(body.website ?? "").trim();

    // Bots fill every field; people never see this one. Answer success so
    // the bot moves on.
    if (honeypot) return NextResponse.json({ success: true });

    if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Name, a valid email, and a message are required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set — lead NOT delivered");
      return NextResponse.json(
        { success: false, error: "unconfigured" },
        { status: 503 },
      );
    }

    const to = process.env.CONTACT_EMAIL || brand.email;
    const rows = [
      ["Name", name],
      ["Company", company || "—"],
      ["Email", email],
      ["Phone", phone || "—"],
      ["Homes per year", homes || "—"],
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 12px 4px 0;color:#64748b;font-size:13px;white-space:nowrap">${k}</td><td style="padding:4px 0;font-size:14px;color:#0f172a">${esc(v)}</td></tr>`,
      )
      .join("");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Afterkey Website <noreply@getafterkey.com>",
        to: [to],
        reply_to: email,
        subject: `New lead: ${name}${company ? ` — ${company}` : ""}`,
        html: `<h2 style="font-size:16px;color:#0f172a">New contact form message</h2><table>${rows}</table><p style="margin-top:16px;font-size:14px;color:#0f172a;white-space:pre-wrap">${esc(message)}</p><p style="margin-top:16px;font-size:12px;color:#94a3b8">Sent from the getafterkey.com contact form. Reply goes straight to them.</p>`,
        text: `New lead from the contact form\n\nName: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\nPhone: ${phone || "-"}\nHomes per year: ${homes || "-"}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      console.error("[contact] Resend send failed:", res.status, await res.text());
      return NextResponse.json(
        { success: false, error: "send_failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[contact] error:", e);
    return NextResponse.json({ success: false, error: "send_failed" }, { status: 500 });
  }
}
