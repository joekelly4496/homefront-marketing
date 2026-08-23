import { CalendarClock, CheckCircle2, Clock, FileText } from "lucide-react";

/**
 * The homeowner portal, as a buyer sees it on their phone: an open request
 * with real status, and a maintenance item carrying its source footnote —
 * the honesty detail that makes the AI schedule credible.
 */
export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-[230px] overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl shadow-slate-900/20 ${className}`.trim()}
      role="img"
      aria-label="The Afterkey homeowner portal on a phone, showing an in-progress service request assigned to an HVAC subcontractor and a maintenance reminder citing the manufacturer's published schedule."
    >
      {/* status bar */}
      <div className="flex items-center justify-center bg-slate-900 py-1.5">
        <span className="h-1 w-16 rounded-full bg-slate-700" />
      </div>

      <div className="p-4">
        <div className="mb-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-600">
            Your home
          </p>
          <p className="text-sm font-semibold text-slate-900">
            142 Maple Court
          </p>
          <p className="text-[11px] text-slate-500">Built by Whitfield Homes</p>
        </div>

        {/* open request */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Your request
        </p>
        <div className="rounded-xl border border-slate-200 p-2.5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold leading-tight text-slate-900">
              HVAC not cooling
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
                Received · Tue 9:04am
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2
                className="h-3 w-3 shrink-0 text-emerald-600"
                aria-hidden="true"
              />
              <span className="text-[10px] text-slate-500">
                Assigned to Cool Air Co.
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock
                className="h-3 w-3 shrink-0 text-amber-500"
                aria-hidden="true"
              />
              <span className="text-[10px] text-slate-500">
                Arriving Thu, 8–10am
              </span>
            </div>
          </div>
        </div>

        {/* maintenance item with citation */}
        <p className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Maintenance
        </p>
        <div className="rounded-xl bg-emerald-50 px-2.5 py-2">
          <div className="flex items-start gap-1.5">
            <CalendarClock
              className="mt-px h-3.5 w-3.5 shrink-0 text-emerald-600"
              aria-hidden="true"
            />
            <span className="text-[10px] font-medium leading-tight text-emerald-900">
              Replace HVAC filter — every 90 days
              <sup className="ml-0.5 font-semibold">1</sup>
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-1 border-t border-emerald-200/70 pt-1.5">
            <FileText
              className="h-2.5 w-2.5 shrink-0 text-emerald-700"
              aria-hidden="true"
            />
            <span className="truncate text-[9px] text-emerald-700">
              1. Carrier owner’s manual, p.12
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
