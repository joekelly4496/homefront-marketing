import { NextResponse } from "next/server";
import { brand } from "@/lib/content";
import { forwardToCrm } from "@/lib/crm";
import {
  answerLabel,
  calculator,
  defaultPastHomes,
  fitOf,
  painLineOf,
  planMonthly,
  questions,
  resultTypeOf,
  scoreOf,
  validAnswers,
  validPhone,
  type Answers,
  type QuestionId,
} from "@/lib/scorecard";

export const dynamic = "force-dynamic";

/**
 * POST /api/scorecard — a finished After-the-Keys Scorecard.
 * Recomputes the score, result type and fit from the raw answers (never
 * trusted from the browser) and forwards the lead to Afterkey Sales, which
 * saves it (source Quiz), alerts Joe and sends the scorecard email. If the
 * CRM can't be reached, the lead is emailed to Joe instead so it is never
 * lost. The page shows the result either way.
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

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
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
    const answers: Answers = {};
    for (const q of questions) {
      const v = raw[q.id];
      if (typeof v === "string") answers[q.id] = v;
    }
    const utmRaw = (body.utm ?? {}) as Record<string, unknown>;
    const utm = Object.fromEntries(
      Object.entries(utmRaw)
        .filter(([k, v]) => /^(utm_[a-z]+|gclid|fbclid|msclkid|li_fat_id)$/.test(k) && typeof v === "string")
        .map(([k, v]) => [k, String(v).slice(0, 200)]),
    );

    if (
      !name ||
      !company ||
      !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
      !validPhone(phone) ||
      !validAnswers(answers)
    ) {
      return NextResponse.json({ success: false, error: "invalid" }, { status: 400 });
    }

    const score = scoreOf(answers);
    const type = resultTypeOf(score.total);
    const fit = fitOf(answers);
    const pastHomes = defaultPastHomes(answers);
    const exampleMonthly = planMonthly(pastHomes, calculator.join.start, calculator.price.start);

    const labeled: Record<string, string> = {};
    for (const q of questions) labeled[`Q${q.id.slice(1)} ${q.prompt}`] = answerLabel(q.id, answers[q.id]);

    const savedInCrm = await forwardToCrm({
      kind: "scorecard",
      name,
      company,
      email,
      phone,
      homes: answerLabel("q2", answers.q2),
      answers: labeled,
      utm,
      scorecard: {
        score: score.total,
        timeScore: score.time,
        moneyScore: score.money,
        resultType: type.title,
        resultLine: type.body,
        pain: answerLabel("q5", answers.q5),
        painLine: painLineOf(answers),
        role: answers.q1,
        fit,
        intent: answers.q9,
        pastHomes,
        examplePrice: calculator.price.start,
        exampleJoinPercent: calculator.join.start,
        exampleMonthly,
      },
    });

    if (savedInCrm) return NextResponse.json({ success: true, fit });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[scorecard] CRM unreachable and RESEND_API_KEY not set — lead NOT delivered");
      return NextResponse.json({ success: false, error: "unconfigured" }, { status: 503 });
    }
    const rows: [string, string][] = [
      ["Name", name],
      ["Company", company],
      ["Email", email],
      ["Phone", phone],
      ["Score", `${score.total}/100 (${type.title}); time ${score.time}/60, money ${score.money}/40`],
      ...questions.map((q) => [q.prompt, answerLabel(q.id as QuestionId, answers[q.id])] as [string, string]),
      ...Object.entries(utm).map(([k, v]) => [k, String(v)] as [string, string]),
    ];
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Afterkey Website <noreply@getafterkey.com>",
        to: [process.env.CONTACT_EMAIL || brand.email],
        reply_to: email,
        subject: `Scorecard lead: ${name} — ${company} (${score.total}/100)`,
        html: `<h2 style="font-size:16px">Scorecard lead (the Sales tab was unreachable)</h2><table>${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 12px 4px 0;color:#64748b;font-size:13px">${esc(k)}</td><td style="padding:4px 0;font-size:14px">${esc(v)}</td></tr>`,
          )
          .join("")}</table>`,
        text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("[scorecard] Resend fallback failed:", res.status, await res.text());
      return NextResponse.json({ success: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ success: true, fit });
  } catch (e) {
    console.error("[scorecard] error:", e);
    return NextResponse.json({ success: false, error: "send_failed" }, { status: 500 });
  }
}
