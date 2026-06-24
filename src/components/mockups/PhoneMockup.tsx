import { Phone, Droplet, Zap, Wind, CalendarClock } from 'lucide-react';

const contacts = [
  { trade: 'Plumbing', name: 'Rivera Plumbing', icon: Droplet },
  { trade: 'Electrical', name: 'Bright Spark Electric', icon: Zap },
  { trade: 'HVAC', name: 'Cool Air Co.', icon: Wind },
];

export function PhoneMockup({ className = '' }: { className?: string }) {
  return (
    <div
      className={`w-[230px] overflow-hidden rounded-[2rem] border-[6px] border-slate-900 bg-white shadow-2xl shadow-slate-900/20 ${className}`.trim()}
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
          <p className="text-sm font-semibold text-slate-900">142 Maple Court</p>
          <p className="text-[11px] text-slate-500">Set up by Whitfield Homes</p>
        </div>

        {/* who to call */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Who to call
        </p>
        <div className="space-y-2">
          {contacts.map((c) => (
            <div
              key={c.trade}
              className="flex items-center justify-between rounded-xl border border-slate-200 px-2.5 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <c.icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium leading-tight text-slate-900">
                    {c.trade}
                  </p>
                  <p className="truncate text-[10px] text-slate-400">{c.name}</p>
                </div>
              </div>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-600">
                <Phone className="h-3 w-3 text-white" aria-hidden="true" />
              </span>
            </div>
          ))}
        </div>

        {/* maintenance reminder */}
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2">
          <CalendarClock
            className="h-3.5 w-3.5 shrink-0 text-emerald-600"
            aria-hidden="true"
          />
          <span className="text-[10px] font-medium leading-tight text-emerald-800">
            Replace HVAC filter · due this month
          </span>
        </div>
      </div>
    </div>
  );
}
