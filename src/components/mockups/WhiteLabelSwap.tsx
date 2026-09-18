import { CheckCircle2, Clock } from "lucide-react";

const brands = [
  {
    initial: "W",
    name: "WHITFIELD HOMES",
    barClass: "bg-slate-900",
    chipClass: "bg-white/15 text-white",
  },
  {
    initial: "C",
    name: "CALDERA BUILDERS",
    barClass: "bg-emerald-800",
    chipClass: "bg-white/20 text-white",
  },
];

/**
 * The white-label claim, drawn: the exact same homeowner portal twice,
 * carrying two different builders' brands. The UI under the brand bar is
 * identical on purpose — the only thing that changes is whose name the
 * homeowner sees.
 */
export function WhiteLabelSwap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 ${className}`.trim()}
      role="img"
      aria-label="The same Afterkey homeowner portal shown twice, white-labeled under two different fictional builder brands — Whitfield Homes and Caldera Builders — with identical request tracking underneath. Only the builder's name and colors change."
    >
      {brands.map((b) => (
        <div
          key={b.name}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5"
        >
          <div
            className={`flex items-center gap-2 px-4 py-2.5 ${b.barClass}`}
          >
            <span
              className={`inline-flex h-5 w-5 items-center justify-center rounded text-[9px] font-bold ${b.chipClass}`}
            >
              {b.initial}
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-white">
              {b.name}
            </span>
          </div>
          <div className="p-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Your request
            </p>
            <div className="mt-1.5 rounded-xl border border-slate-200 p-2.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold text-slate-900">
                  Garage door sensor
                </p>
                <span className="shrink-0 rounded-full border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[9px] font-semibold text-amber-700">
                  In progress
                </span>
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-3 w-3 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] text-slate-500">
                    Received · Mon 8:12am
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock
                    className="h-3 w-3 shrink-0 text-amber-500"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] text-slate-500">
                    Arriving Wed, 12–2pm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
