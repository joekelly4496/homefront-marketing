"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { brand } from "@/lib/content";

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

/**
 * The contact form. Success and failure are both explicit: a delivered
 * message says so, and any send problem falls back to the plain email
 * address so a lead is never lost to a broken form.
 */
export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setState("sent");
        form.reset();
        return;
      }
      setError(
        res.status === 400 && json.error && json.error !== "unconfigured"
          ? json.error
          : "",
      );
      setState("error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 sm:p-8">
        <p className="flex items-center gap-2.5 text-base font-semibold text-emerald-900">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
          Got it. A person will get back to you within one business day.
        </p>
        <p className="mt-2 text-sm text-emerald-800">
          Usually faster. If it&rsquo;s urgent, email{" "}
          <a href={`mailto:${brand.email}`} className="font-semibold underline">
            {brand.email}
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={inputCls}
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="contact-company"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            maxLength={160}
            autoComplete="organization"
            className={inputCls}
            placeholder="Your building company"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={inputCls}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            className={inputCls}
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-homes"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Homes you close per year{" "}
          <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <select id="contact-homes" name="homes" className={inputCls} defaultValue="">
          <option value="">Choose one</option>
          <option value="1-5">1–5</option>
          <option value="6-15">6–15</option>
          <option value="16-50">16–50</option>
          <option value="50+">More than 50</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          What can we help with?
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={4000}
          rows={4}
          className={inputCls}
          placeholder="Ask anything — pricing, onboarding, whether it fits how you run post-closing."
        />
      </div>

      {/* Honeypot — hidden from people, filled by bots. */}
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state === "error" && (
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-sm text-amber-800">
          {error ||
            (
              <>
                That didn&rsquo;t go through. Email us directly at{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="font-semibold underline"
                >
                  {brand.email}
                </a>{" "}
                — a person answers.
              </>
            )}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? "Sending…" : "Send message"}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="text-xs text-slate-500">
        No newsletter, no drip campaign. Your message goes to a person and you
        get one reply.
      </p>
    </form>
  );
}
