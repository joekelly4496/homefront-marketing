import {
  Camera,
  CheckCircle2,
  HardHat,
  Image as ImageIcon,
  ShieldCheck,
} from "lucide-react";

/**
 * One request, birth to record: the homeowner's submission with a photo,
 * the dispatch with the insurance check, the sub's field update, and the
 * timestamped close. The "how it works" section drawn as the product
 * instead of described in four paragraphs.
 */
export function RequestFlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 ${className}`.trim()}
      role="img"
      aria-label="A service request moving through Afterkey: the homeowner submits 'Kitchen faucet dripping' with a photo, the builder assigns Reliable Plumbing whose insurance is verified, the subcontractor posts an on-site photo update, and the request closes timestamped on the home's permanent record."
    >
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
        <p className="text-xs font-semibold text-slate-900">
          Request #241 · 88 Birch Lane
        </p>
        <p className="text-[11px] text-slate-500">Kitchen faucet dripping</p>
      </div>

      <div className="relative p-4">
        {/* the timeline spine */}
        <span
          className="absolute bottom-6 left-[27px] top-6 w-px bg-slate-200"
          aria-hidden="true"
        />

        <ol className="space-y-4">
          <li className="relative flex gap-3">
            <span className="z-10 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[10px] font-semibold text-white">
              1
            </span>
            <div className="min-w-0 flex-1 rounded-xl rounded-tl-sm bg-slate-100 px-3 py-2">
              <p className="text-[11px] font-medium text-slate-900">
                &ldquo;Dripping under the kitchen sink since yesterday.&rdquo;
              </p>
              <p className="mt-1 inline-flex items-center gap-1 rounded-md bg-white px-1.5 py-0.5 text-[10px] text-slate-500">
                <ImageIcon
                  className="h-3 w-3 text-slate-400"
                  aria-hidden="true"
                />
                photo attached · Tue 7:41am
              </p>
            </div>
          </li>

          <li className="relative flex gap-3">
            <span className="z-10 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[10px] font-semibold text-white">
              2
            </span>
            <div className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2">
              <p className="flex items-center gap-1.5 text-[11px] font-medium text-slate-900">
                <HardHat
                  className="h-3.5 w-3.5 shrink-0 text-amber-600"
                  aria-hidden="true"
                />
                Assigned to Reliable Plumbing
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-[10px] text-emerald-700">
                <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                Insurance current through Mar 2027
              </p>
            </div>
          </li>

          <li className="relative flex gap-3">
            <span className="z-10 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[10px] font-semibold text-white">
              3
            </span>
            <div className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-2">
              <p className="flex items-center gap-1.5 text-[11px] font-medium text-slate-900">
                <Camera
                  className="h-3.5 w-3.5 shrink-0 text-slate-500"
                  aria-hidden="true"
                />
                On site · 2 photos from the jobsite
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Homeowner sees this without calling you
              </p>
            </div>
          </li>

          <li className="relative flex gap-3">
            <span className="z-10 mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1 rounded-xl border border-emerald-200 bg-emerald-50/60 px-3 py-2">
              <p className="text-[11px] font-medium text-emerald-900">
                Complete · Thu 9:52am
              </p>
              <p className="mt-0.5 text-[10px] text-emerald-700">
                Timestamped on the home&rsquo;s permanent record
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
