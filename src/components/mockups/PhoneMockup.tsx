import { Camera, CheckCircle2, Clock, MessageSquare } from 'lucide-react';

const timeline = [
  { label: 'Request submitted', time: 'Mon 9:14 AM', done: true },
  { label: 'Builder acknowledged', time: 'Mon 11:02 AM', done: true },
  { label: 'Sub assigned · Cool Air Co.', time: 'Mon 2:30 PM', done: true },
  { label: 'Scheduled for Thu 8–10 AM', time: 'Pending approval', done: false },
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
            Warranty request
          </p>
          <p className="text-sm font-semibold text-slate-900">
            HVAC not cooling
          </p>
          <p className="text-[11px] text-slate-500">142 Maple Court</p>
        </div>

        {/* photo */}
        <div className="mb-3 flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
          <Camera className="h-5 w-5 text-slate-300" aria-hidden="true" />
          <span className="ml-1.5 text-[10px] text-slate-400">2 photos</span>
        </div>

        {/* timeline */}
        <div className="space-y-2.5">
          {timeline.map((step) => (
            <div key={step.label} className="flex items-start gap-2">
              {step.done ? (
                <CheckCircle2
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
              ) : (
                <Clock
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500"
                  aria-hidden="true"
                />
              )}
              <div className="min-w-0">
                <p className="text-[11px] font-medium leading-tight text-slate-900">
                  {step.label}
                </p>
                <p className="text-[10px] text-slate-400">{step.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-600 px-3 py-2">
          <MessageSquare className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          <span className="text-[11px] font-semibold text-white">
            Message your builder
          </span>
        </div>
      </div>
    </div>
  );
}
