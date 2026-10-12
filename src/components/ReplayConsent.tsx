"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { REPLAY_CONSENT_KEY } from "@/lib/consent";

/**
 * Asks once before PostHog records a visit (session replay is off until
 * the visitor allows it - see instrumentation-client.ts). Pageview counts
 * don't need this; only the recording does. Renders nothing when PostHog
 * isn't configured or the visitor already chose.
 */
export function ReplayConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(REPLAY_CONSENT_KEY);
    } catch {
      return;
    }
    // Deferred so the first paint isn't blocked by the bar.
    const t = setTimeout(() => setShow(!stored), 1200);
    return () => clearTimeout(t);
  }, []);

  function choose(granted: boolean) {
    try {
      localStorage.setItem(REPLAY_CONSENT_KEY, granted ? "granted" : "declined");
    } catch {
      // Not stored; we'll ask again next visit.
    }
    if (granted) posthog.startSessionRecording();
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Recording your visit"
      className="fixed inset-x-4 bottom-20 z-40 rounded-[10px] border border-slate-200 bg-paper p-4 shadow-lg sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-sm"
    >
      <p className="text-sm leading-relaxed text-slate-700">
        Can we record this visit to see where the site is confusing? It&rsquo;s anonymous, and
        anything you type stays hidden.{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
          Privacy
        </a>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-[6px] bg-ink px-3.5 py-2 text-sm font-semibold text-paper hover:opacity-90"
        >
          Allow
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-[6px] border border-slate-300 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}
