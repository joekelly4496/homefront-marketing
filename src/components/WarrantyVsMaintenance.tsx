import { CheckCircle2, Wrench, CalendarClock } from "lucide-react";
import { warrantyVsMaintenance } from "@/lib/content";

/**
 * What's warranty, what's maintenance — drawn as the homeowner sees it,
 * under the demo builder's brand ("Whitfield Homes"), so a builder reading
 * it sees how the two stay separate on his own portal.
 */
export function WarrantyVsMaintenance({ className = "" }: { className?: string }) {
  const { warranty, maintenance } = warrantyVsMaintenance;
  const columns = [
    { ...warranty, icon: Wrench, tone: "text-tape" },
    { ...maintenance, icon: CalendarClock, tone: "text-brass-dark" },
  ];
  return (
    <div
      className={`overflow-hidden rounded-[6px] border border-drywall bg-white shadow-xl shadow-ink/5 ${className}`.trim()}
    >
      {/* The builder's brand bar, not Afterkey's. */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-900 px-4 py-2.5 sm:px-6">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/15 text-[9px] font-bold text-white">
          W
        </span>
        <span className="text-[11px] font-semibold tracking-wide text-white">
          WHITFIELD HOMES
        </span>
        <span className="ml-auto text-[11px] text-slate-400">
          Your home · 142 Maple Court
        </span>
      </div>
      <div className="grid divide-y divide-drywall sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {columns.map((col) => (
          <div key={col.title} className="p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <col.icon className={`h-5 w-5 ${col.tone}`} aria-hidden="true" />
              <h3 className="text-lg font-semibold text-ink">{col.title}</h3>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
              {col.lede}
            </p>
            <ul className="mt-4 space-y-2">
              {col.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-tape"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-drywall pt-3 text-xs font-medium text-slate-600">
              {col.foot}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
