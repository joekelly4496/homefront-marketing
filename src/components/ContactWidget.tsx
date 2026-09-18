"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, MessageSquare, X } from "lucide-react";
import { brand } from "@/lib/content";

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100";

/**
 * The always-there quick-question widget, bottom right on every page.
 * Some builders will never navigate to /contact — this catches the
 * question at the moment they have it. Posts to the same /api/contact
 * endpoint as the contact page, tagged source: "widget".
 */
export function ContactWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  // The contact page already leads with the full form — a second form
  // floating over it is noise.
  if (pathname === "/contact") return null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "widget" }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setState("sent");
        form.reset();
        return;
      }
      setState("error");
    } catch {
      setState("error");
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="w-[min(21rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/20">
          <div className="flex items-center justify-between bg-brand-600 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">
                Have a question?
              </p>
              <p className="text-xs text-brand-100">
                A person answers within one business day.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-lg p-1 text-brand-100 hover:bg-brand-500 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {state === "sent" ? (
            <div className="p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                Got it — we&rsquo;ll get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setState("idle");
                  setOpen(false);
                }}
                className="mt-3 text-xs font-semibold text-brand-600 hover:text-brand-700"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-2.5 p-4">
              <input
                name="name"
                required
                maxLength={120}
                autoComplete="name"
                className={inputCls}
                placeholder="Name"
                aria-label="Name"
              />
              <input
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                className={inputCls}
                placeholder="Email"
                aria-label="Email"
              />
              <input
                name="phone"
                type="tel"
                maxLength={40}
                autoComplete="tel"
                className={inputCls}
                placeholder="Phone (optional)"
                aria-label="Phone"
              />
              <textarea
                name="message"
                required
                maxLength={4000}
                rows={3}
                className={inputCls}
                placeholder="What's your question?"
                aria-label="Your question"
              />
              {/* Honeypot — hidden from people, filled by bots. */}
              <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                <label htmlFor="widget-website">Website</label>
                <input
                  id="widget-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              {state === "error" && (
                <p className="text-xs text-amber-800">
                  That didn&rsquo;t go through — email{" "}
                  <a
                    href={`mailto:${brand.email}`}
                    className="font-semibold underline"
                  >
                    {brand.email}
                  </a>
                  .
                </p>
              )}
              <button
                type="submit"
                disabled={state === "sending"}
                className="w-full rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
              >
                {state === "sending" ? "Sending…" : "Send"}
              </button>
              <p className="text-[11px] text-slate-400">
                No newsletter, no spam — your question goes to a person.
              </p>
            </form>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700"
      >
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        {open ? "Close" : "Questions?"}
      </button>
    </div>
  );
}
