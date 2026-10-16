import { FileText, Library, Sparkles, CheckCircle2, CircleHelp } from "lucide-react";

const rows = [
  {
    item: "Furnace filter — replace",
    interval: "Every 90 days",
    note: 1,
    state: "confirmed" as const,
  },
  {
    item: "Water heater — flush tank",
    interval: "Every 12 months",
    note: 2,
    state: "confirmed" as const,
  },
  {
    item: "Dishwasher filter — clean",
    interval: "Every 3 months",
    note: 3,
    state: "review" as const,
  },
  {
    item: "Garbage disposal",
    interval: "Needs source — upload its manual",
    note: null,
    state: "needs" as const,
  },
];

/**
 * The AI Home Binder as the builder sees it: a proposed maintenance
 * schedule where every line carries a numbered source footnote (the
 * uploaded document or a verified library entry), the newest suggestion
 * sits in review until the builder confirms it, and an appliance with no
 * source says so instead of getting an interval.
 */
export function BinderMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 ${className}`.trim()}
      role="img"
      aria-label="The Afterkey AI Home Binder showing a proposed maintenance schedule for a home: maintenance lines each citing a numbered source — the owner's manual the builder uploaded or a verified entry in the shared appliance library — one suggestion awaiting the builder's review, and one appliance marked 'needs source' instead of being given an interval."
    >
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div>
          <p className="text-xs font-semibold text-slate-900">AI Home Binder</p>
          <p className="text-[11px] text-slate-500">142 Maple Court</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          4 appliances
        </span>
      </div>

      <div className="p-3 sm:p-4">
        <div className="overflow-hidden rounded-xl border border-slate-200">
          {rows.map((r, i) => (
            <div
              key={r.item}
              className={`flex items-center justify-between gap-3 px-3 py-2.5 ${
                i !== rows.length - 1 ? "border-b border-slate-100" : ""
              } ${r.state === "review" ? "bg-violet-50/60" : ""}`}
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-slate-900">
                  {r.item}
                  {r.note !== null && (
                    <sup className="ml-0.5 font-semibold text-violet-600">
                      {r.note}
                    </sup>
                  )}
                </p>
                <p className="text-[11px] text-slate-500">{r.interval}</p>
              </div>
              {r.state === "confirmed" ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                  Confirmed
                </span>
              ) : r.state === "needs" ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                  <CircleHelp className="h-3 w-3" aria-hidden="true" />
                  Needs source
                </span>
              ) : (
                <span className="shrink-0 rounded-full border border-violet-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-violet-700">
                  Review
                </span>
              )}
            </div>
          ))}
        </div>

        {/* The footnotes — the whole point of the drawing */}
        <div className="mt-3 space-y-1.5 rounded-xl bg-slate-50 px-3 py-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Sources
          </p>
          <p className="flex items-center gap-1.5 text-[10px] text-slate-600">
            <FileText
              className="h-3 w-3 shrink-0 text-slate-400"
              aria-hidden="true"
            />
            1. Carrier owner&rsquo;s manual, p.12 — your upload
          </p>
          <p className="flex items-center gap-1.5 text-[10px] text-slate-600">
            <Library
              className="h-3 w-3 shrink-0 text-slate-400"
              aria-hidden="true"
            />
            2. Appliance library — verified Rheem entry
          </p>
          <p className="flex items-center gap-1.5 text-[10px] text-slate-600">
            <FileText
              className="h-3 w-3 shrink-0 text-slate-400"
              aria-hidden="true"
            />
            3. Bosch use and care guide, p.31 — your upload
          </p>
        </div>
      </div>
    </div>
  );
}
