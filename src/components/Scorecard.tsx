"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import posthog from "posthog-js";
import { buttonVariants } from "@/components/ui/Button";
import { adLanding, pricingLine } from "@/lib/content";
import {
  calculator,
  defaultPastHomes,
  fitOf,
  painLineOf,
  planMonthly,
  promptFor,
  questions,
  resultTypeOf,
  scoreOf,
  validPhone,
  type Answers,
  type QuestionId,
} from "@/lib/scorecard";

const ATTRIBUTION = /^(utm_[a-z]+|gclid|fbclid|msclkid|li_fat_id)$/;

function readAttribution(): Record<string, string> {
  const carried: Record<string, string> = {};
  for (const [k, v] of new URLSearchParams(window.location.search).entries()) {
    if (ATTRIBUTION.test(k)) carried[k] = v;
  }
  return carried;
}

function track(event: string, props?: Record<string, unknown>) {
  if (posthog.__loaded) posthog.capture(event, props);
}

function bookingHref(name: string, email: string): string | null {
  if (!adLanding.bookCallUrl) return null;
  try {
    const url = new URL(adLanding.bookCallUrl);
    if (name) url.searchParams.set("name", name);
    if (email) url.searchParams.set("email", email);
    return url.toString();
  } catch {
    return null;
  }
}

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

type Phase = "intro" | "questions" | "contact" | "result";

const card = "rounded-[6px] bg-paper/[0.04] p-6 ring-1 ring-paper/10 sm:p-10";
// A quiet second button on the dark page (the shared variants are for light backgrounds).
const darkOutline =
  "inline-flex h-12 w-full items-center justify-center rounded-[6px] border border-paper/30 px-6 text-base font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10 sm:w-auto";
const inputCls =
  "w-full rounded-[6px] border border-paper/20 bg-paper px-3.5 py-3 text-base text-ink placeholder:text-slate-400 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/40";

export function Scorecard() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [lead, setLead] = useState({ name: "", email: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    track("scorecard_viewed");
  }, []);

  function start() {
    track("scorecard_started");
    setPhase("questions");
  }

  function choose(id: QuestionId, value: string) {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    track("scorecard_step_completed", { step: step + 1, question: id, answer: value });
    if (step < questions.length - 1) setStep(step + 1);
    else setPhase("contact");
  }

  function back() {
    setError("");
    if (phase === "questions") {
      if (step === 0) setPhase("intro");
      else setStep(step - 1);
    } else {
      setPhase("questions");
      setStep(questions.length - 1);
    }
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (!validPhone(data.phone ?? "")) {
      setError("Enter a 10-digit phone number.");
      return;
    }
    setSending(true);
    let ok = false;
    try {
      const res = await fetch("/api/scorecard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, answers, utm: readAttribution() }),
      });
      if (res.status === 400) {
        setError("Check your name, company, email and phone, then try again.");
        setSending(false);
        return;
      }
      ok = res.ok;
    } catch {
      ok = false;
    }
    setSending(false);
    setLead({ name: data.name ?? "", email: data.email ?? "" });
    const s = scoreOf(answers);
    track("scorecard_lead_submitted", { delivered: ok, score: s.total, fit: fitOf(answers) });
    setPhase("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (phase === "intro") {
    return (
      <div className={card}>
        <p className="text-sm font-medium text-brass">For home builders and remodelers</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
          Are your finished homes making you money, or just making you calls?
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          Nine quick questions about the year after the keys. Get your After-the-Keys Score, the one change
          that cuts the most calls, and what a maintenance plan could bring in across your past homes.
        </p>
        <button type="button" onClick={start} className={buttonVariants({ size: "lg", className: "mt-8 w-full sm:w-auto" })}>
          Get my score (60 seconds)
        </button>
        <p className="mt-3 text-sm text-slate-400">No sales call required.</p>
      </div>
    );
  }

  if (phase === "questions") {
    const q = questions[step];
    return (
      <div className={card}>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>
            Question {step + 1} of {questions.length}
          </span>
          <button type="button" onClick={back} className="inline-flex items-center gap-1.5 hover:text-paper">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
          </button>
        </div>
        <div className="mt-3 h-1 w-full rounded-full bg-paper/10" aria-hidden="true">
          <div
            className="h-1 rounded-full bg-brass transition-[width]"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
        <h2 className="mt-8 text-balance text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          {promptFor(q, answers)}
        </h2>
        <div className="mt-6 grid gap-3">
          {q.options.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => choose(q.id, o.value)}
              aria-pressed={answers[q.id] === o.value}
              className={`w-full rounded-[6px] border px-5 py-4 text-left text-base font-medium transition-colors ${
                answers[q.id] === o.value
                  ? "border-brass bg-brass/10 text-paper"
                  : "border-paper/15 text-paper hover:border-brass hover:bg-paper/[0.06]"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (phase === "contact") {
    return (
      <div className={card}>
        <button type="button" onClick={back} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-paper">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-paper sm:text-3xl">Your score is ready.</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">Where should we send your scorecard?</p>
        <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-sm font-medium text-paper">
            First name
            <input name="name" required autoComplete="given-name" className={inputCls} />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-paper">
            Company
            <input name="company" required autoComplete="organization" className={inputCls} />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-paper">
            Email
            <input name="email" type="email" required autoComplete="email" className={inputCls} />
          </label>
          <label className="grid gap-1.5 text-sm font-medium text-paper">
            Mobile phone
            <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={inputCls} />
          </label>
          {/* Honeypot: hidden from people, filled by bots. */}
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <div className="sm:col-span-2">
            {error ? <p className="mb-3 text-sm text-red-300">{error}</p> : null}
            <button type="submit" disabled={sending} className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
              {sending ? "Scoring…" : "Show my score"}
            </button>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              We’ll email your scorecard and a couple of short follow-ups, and Joe may call to walk you through it.
              We don’t text. One click to unsubscribe. We never sell your information. By continuing you agree to
              Afterkey’s{" "}
              <Link href="/terms" className="underline hover:text-paper">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-paper">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    );
  }

  return <Result answers={answers} name={lead.name} email={lead.email} />;
}

function Bar({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-paper">{label}</span>
        <span className="tabular-nums text-slate-300">
          {value} / {max}
        </span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-paper/10" aria-hidden="true">
        <div className="h-2 rounded-full bg-brass" style={{ width: `${Math.max(2, (value / max) * 100)}%` }} />
      </div>
    </div>
  );
}

function Slider(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="flex items-baseline justify-between">
        <span className="font-medium text-paper">{props.label}</span>
        <span className="tabular-nums font-semibold text-paper">{props.display}</span>
      </span>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="w-full accent-brass"
      />
    </label>
  );
}

function Result({ answers, name, email }: { answers: Answers; name: string; email: string }) {
  const s = useMemo(() => scoreOf(answers), [answers]);
  const type = resultTypeOf(s.total);
  const pain = painLineOf(answers);
  const fit = fitOf(answers);
  const first = name.trim().split(/\s+/)[0] || "";

  const [homes, setHomes] = useState(() => defaultPastHomes(answers));
  const [price, setPrice] = useState<number>(calculator.price.start);
  const [join, setJoin] = useState<number>(calculator.join.start);
  const monthly = planMonthly(homes, join, price);
  const booking = bookingHref(name, email);

  return (
    <div className="grid gap-6">
      <div className={card}>
        <p className="text-sm font-medium text-brass">
          {first ? `${first}, here’s your After-the-Keys Score` : "Your After-the-Keys Score"}
        </p>
        <div className="mt-4 flex items-end gap-3">
          <span className="text-6xl font-semibold leading-none tracking-tight text-paper tabular-nums">{s.total}</span>
          <span className="pb-1 text-lg text-slate-400">/ 100</span>
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-paper sm:text-3xl">{type.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">{type.body}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Bar label="Time after the keys" value={s.time} max={60} />
          <Bar label="Money after the keys" value={s.money} max={40} />
        </div>
        {pain ? (
          <p className="mt-8 border-l-2 border-brass pl-4 text-base leading-relaxed text-paper">{pain}</p>
        ) : null}
      </div>

      {fit === "sub" ? (
        <div className={card}>
          <h3 className="text-xl font-semibold tracking-tight text-paper">Afterkey is free for subs.</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            Your builder invites you, and every job comes to you from a link. No app, no login.
          </p>
          <Link href="/for-subcontractors" className={buttonVariants({ size: "lg", className: "mt-6 w-full sm:w-auto" })}>
            How it works for subs
          </Link>
        </div>
      ) : (
        <div className={card}>
          <h3 className="text-xl font-semibold tracking-tight text-paper">What a plan could bring in</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">Drag the numbers. Every one of them is yours to set.</p>
          <div className="mt-6 grid gap-6">
            <Slider
              label="Past homes you could offer a plan to"
              value={homes}
              min={calculator.homes.min}
              max={calculator.homes.max}
              step={calculator.homes.step}
              display={String(homes)}
              onChange={setHomes}
            />
            <Slider
              label="Monthly plan price you’d charge"
              value={price}
              min={calculator.price.min}
              max={calculator.price.max}
              step={calculator.price.step}
              display={usd(price)}
              onChange={setPrice}
            />
            <Slider
              label="Share of homeowners who join"
              value={join}
              min={calculator.join.min}
              max={calculator.join.max}
              step={calculator.join.step}
              display={`${join}%`}
              onChange={setJoin}
            />
          </div>
          <p className="mt-8 text-lg leading-relaxed text-paper" aria-live="polite">
            {homes} homes × {join}% × {usd(price)} ={" "}
            <span className="font-semibold">
              {usd(monthly)} a month, {usd(monthly * 12)} a year
            </span>{" "}
            running through your company.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Example only. You set the price and the plan. Plan revenue is gross, before your subs are paid.{" "}
            {pricingLine}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {fit === "qualified" && booking ? (
              <a
                href={booking}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("scorecard_book_clicked")}
                className={buttonVariants({ size: "lg", className: "w-full text-center sm:w-auto" })}
              >
                Book a 15-minute call
              </a>
            ) : null}
            {fit === "other" ? (
              <Link href="/features" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
                See how it works
              </Link>
            ) : (
              <Link
                href="/pricing"
                onClick={() => track("scorecard_pricing_clicked")}
                className={fit === "qualified" ? darkOutline : buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
              >
                See pricing
              </Link>
            )}
          </div>
        </div>
      )}
      <p className="text-center text-sm text-slate-400">Your scorecard is on its way to your inbox.</p>
    </div>
  );
}
