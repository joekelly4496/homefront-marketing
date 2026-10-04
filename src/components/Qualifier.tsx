"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft } from "lucide-react";
import posthog from "posthog-js";
import { buttonVariants } from "@/components/ui/Button";
import { TrackedCta } from "@/components/TrackedCta";
import {
  adLanding,
  brand,
  guarantee,
  primaryCta,
  signupHref,
} from "@/lib/content";
import {
  assessFit,
  questions,
  type Answers,
  type Fit,
  type QuestionId,
} from "@/lib/qualifier";

const ATTRIBUTION = /^(utm_[a-z]+|gclid|fbclid|msclkid|li_fat_id)$/;

/** The ad's utm / click-id parameters from the current URL. */
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

/** The booking link with the lead's name, email and ad attribution prefilled. */
function bookingUrl(base: string, name: string, email: string, utm: Record<string, string>) {
  try {
    const url = new URL(base);
    url.searchParams.set("name", name);
    url.searchParams.set("email", email);
    for (const [k, v] of Object.entries(utm)) url.searchParams.set(k, v);
    return url;
  } catch {
    return null;
  }
}

type Phase = "questions" | "contact" | "booking" | "result";

const inputCls =
  "w-full rounded-[6px] border border-paper/20 bg-paper px-3.5 py-3 text-base text-ink placeholder:text-slate-400 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/40";

export function Qualifier() {
  const [phase, setPhase] = useState<Phase>("questions");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [fit, setFit] = useState<Fit | null>(null);
  const [lead, setLead] = useState({ name: "", email: "" });
  const [sending, setSending] = useState(false);
  const [delivered, setDelivered] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    track("qualifier_started");
  }, []);

  function choose(id: QuestionId, value: string) {
    const next = { ...answers, [id]: value };
    setAnswers(next);
    track("qualifier_step_completed", { step: step + 1, question: id, answer: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }
    const result = assessFit(next);
    setFit(result);
    track("qualifier_result", { fit: result });
    setPhase(result === "qualified" ? "contact" : "result");
  }

  function back() {
    setError("");
    if (phase === "questions") setStep(Math.max(0, step - 1));
    else {
      setPhase("questions");
      setStep(questions.length - 1);
    }
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setSending(true);
    let ok = false;
    try {
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, answers, utm: readAttribution() }),
      });
      if (res.status === 400) {
        setError("Check your name, company, and email, then try again.");
        setSending(false);
        return;
      }
      ok = res.ok;
    } catch {
      ok = false;
    }
    setSending(false);
    setDelivered(ok);
    setLead({ name: data.name ?? "", email: data.email ?? "" });
    track("qualifier_lead_submitted", { delivered: ok });
    setPhase("booking");
  }

  const card = "rounded-[6px] bg-paper/[0.04] p-6 ring-1 ring-paper/10 sm:p-10";

  if (phase === "questions") {
    const q = questions[step];
    return (
      <div className={card}>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>
            Question {step + 1} of {questions.length}
          </span>
          {step > 0 ? (
            <button type="button" onClick={back} className="inline-flex items-center gap-1.5 hover:text-paper">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
            </button>
          ) : null}
        </div>
        <div className="mt-3 h-1 w-full rounded-full bg-paper/10" aria-hidden="true">
          <div
            className="h-1 rounded-full bg-brass transition-[width]"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          {q.prompt}
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
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          You’re who we built this for.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">
          {adLanding.bookCallUrl
            ? "Tell us who you are, then pick a time. Fifteen minutes, on your screen, with a real request from start to finish."
            : "Tell us who you are and we’ll email you to set a time. Fifteen minutes, on your screen, with a real request from start to finish."}
        </p>
        <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-sm font-medium text-paper">
            Your name
            <input name="name" required autoComplete="name" className={inputCls} />
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
            Phone <span className="font-normal text-slate-400">(optional)</span>
            <input name="phone" type="tel" autoComplete="tel" className={inputCls} />
          </label>
          {/* Honeypot: hidden from people, filled by bots. */}
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <div className="sm:col-span-2">
            {error ? <p className="mb-3 text-sm text-red-300">{error}</p> : null}
            <button
              type="submit"
              disabled={sending}
              className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
            >
              {sending ? "Sending…" : adLanding.bookCallUrl ? "Show me times" : "Send"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (phase === "booking") {
    const firstName = lead.name.split(" ")[0] || "there";
    const url = adLanding.bookCallUrl
      ? bookingUrl(adLanding.bookCallUrl, lead.name, lead.email, readAttribution())
      : null;

    if (url) {
      const isCalendly = url.hostname.endsWith("calendly.com");
      const isCalcom = url.hostname === "cal.com" || url.hostname.endsWith(".cal.com");
      const embeds = isCalendly || isCalcom;
      // The plain link, for the "open in a new tab" fallback.
      const plain = url.toString();
      if (isCalendly) {
        url.searchParams.set("embed_type", "Inline");
        url.searchParams.set("embed_domain", window.location.hostname);
        url.searchParams.set("hide_gdpr_banner", "1");
      }
      if (isCalcom) {
        url.searchParams.set("embed", "true");
        url.searchParams.set("theme", "light");
        url.searchParams.set("layout", "month_view");
      }
      return (
        <div className={card}>
          <h2 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
            Pick a time, {firstName}.
          </h2>
          {embeds ? (
            <iframe
              src={url.toString()}
              title="Book a 15-minute call"
              onLoad={() => track("qualifier_booking_opened", { mode: "embed" })}
              className="mt-6 h-[720px] w-full rounded-[6px] bg-paper"
            />
          ) : null}
          {embeds ? (
            <p className="mt-4 text-sm text-slate-400">
              Calendar not loading?{" "}
              <a
                href={plain}
                target="_blank"
                rel="noopener"
                onClick={() => track("qualifier_booking_opened", { mode: "fallback_link" })}
                className="font-semibold text-paper underline decoration-brass decoration-2 underline-offset-4"
              >
                Open it in a new tab
              </a>
              .
            </p>
          ) : (
            <a
              href={url.toString()}
              target="_blank"
              rel="noopener"
              onClick={() => track("qualifier_booking_opened", { mode: "link" })}
              className={buttonVariants({ size: "lg", className: "mt-6" })}
            >
              Open the calendar
            </a>
          )}
        </div>
      );
    }

    return (
      <div className={card}>
        <h2 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
          {delivered ? `Got it, ${firstName}.` : "That didn’t reach us."}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-300">
          {delivered ? (
            <>We’ll email you at {lead.email} to set a time for the call.</>
          ) : (
            <>
              Email{" "}
              <a href={`mailto:${brand.email}`} className="font-semibold text-paper underline decoration-brass decoration-2 underline-offset-4">
                {brand.email}
              </a>{" "}
              and we’ll set a time.
            </>
          )}
        </p>
      </div>
    );
  }

  // Not a fit for a call: a useful next step instead of a dead end.
  const results: Record<Exclude<Fit, "qualified">, { title: string; body: string; href: string; label: string; cta: string }> = {
    sub: {
      title: "Subs use Afterkey free.",
      body: "Your builder adds you, and you get one list of the jobs assigned to you, with the address, the problem, and the homeowner’s photos. Nothing to buy and nothing to book.",
      href: "/for-subcontractors",
      label: "How it works for subs",
      cta: "qualifier_sub_page",
    },
    small: {
      title: "At your size, skip the call.",
      body: `Onboarding is free: add a home, add your subs, and log a real request today. ${guarantee.short}`,
      href: signupHref,
      label: primaryCta,
      cta: "qualifier_signup",
    },
    other: {
      title: "Afterkey is built for new-home builders.",
      body: "It runs on homes you’ve built and handed over, with warranty dates and a homeowner on the other end. If that’s your work, you can set up your first home yourself today.",
      href: signupHref,
      label: primaryCta,
      cta: "qualifier_signup",
    },
  };
  const r = results[(fit ?? "other") as Exclude<Fit, "qualified">];

  return (
    <div className={card}>
      <button type="button" onClick={back} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-paper">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
      </button>
      <h2 className="mt-6 text-2xl font-semibold tracking-tight text-paper sm:text-3xl">{r.title}</h2>
      <p className="mt-3 text-base leading-relaxed text-slate-300">{r.body}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <TrackedCta href={r.href} cta={r.cta} className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
          {r.label}
        </TrackedCta>
        <a href={`mailto:${brand.email}`} className="text-sm font-semibold text-paper underline decoration-brass decoration-2 underline-offset-4 hover:text-brass sm:ml-4">
          Questions? {brand.email}
        </a>
      </div>
    </div>
  );
}
