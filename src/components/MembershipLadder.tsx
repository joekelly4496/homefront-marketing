import { membershipLadder } from "@/lib/content";

/**
 * The membership ladder: the $40 plan is the floor, the whole house is the
 * ceiling. Three rungs, example prices, every number the builder's.
 */
export function MembershipLadder({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <ol className="grid gap-4 md:grid-cols-3">
        {membershipLadder.tiers.map((tier, i) => (
          <li
            key={tier.name}
            className={`flex flex-col rounded-[6px] border p-5 ${
              i === membershipLadder.tiers.length - 1
                ? "border-ink bg-ink text-paper"
                : "border-drywall bg-white text-ink"
            }`}
          >
            <p
              className={`text-sm font-medium ${
                i === membershipLadder.tiers.length - 1 ? "text-brass" : "text-tape"
              }`}
            >
              {tier.price}
            </p>
            <h3 className="mt-1 text-lg font-semibold">{tier.name}</h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                i === membershipLadder.tiers.length - 1
                  ? "text-slate-300"
                  : "text-slate-700"
              }`}
            >
              {tier.body}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-relaxed text-slate-600">
        {membershipLadder.foot}
      </p>
    </div>
  );
}
