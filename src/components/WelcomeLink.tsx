"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { welcomePath } from "@/lib/content";

/**
 * Builds the link a builder sends his homeowners: /welcome with his company
 * name in it, so the page greets them as his. Copy button, nothing else.
 */
export function WelcomeLink({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://getafterkey.com";
  const trimmed = name.trim();
  const url = `${origin}${welcomePath}${trimmed ? `?builder=${encodeURIComponent(trimmed)}` : ""}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: the URL is selectable text below.
    }
  }

  return (
    <div className={className}>
      <label
        htmlFor="welcome-builder"
        className="block text-sm font-medium text-ink"
      >
        Your company name, as homeowners know it
      </label>
      <input
        id="welcome-builder"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={60}
        placeholder="Whitfield Homes"
        className="mt-1.5 w-full rounded-[6px] border border-drywall bg-white px-3 py-2 text-base text-ink placeholder:text-slate-400 focus:border-tape focus:outline-none focus:ring-2 focus:ring-tape/30"
      />
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <code className="min-w-0 flex-1 truncate rounded-[6px] bg-drywall px-3 py-2 text-sm text-ink">
          {url}
        </code>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-[6px] bg-ink px-3 py-2 text-sm font-semibold text-paper hover:bg-ink/90"
        >
          {copied ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        Text it, put it in the closing packet, or add it to your invite
        email. The page greets them as yours.
      </p>
    </div>
  );
}
