import { absoluteUrl } from "@/lib/site";
import {
  brand,
  pricing,
  featureGroups,
  portals,
  commitments,
  coreFaqs,
  notList,
  useCases,
  guarantee,
  statusLabels,
  thesis,
  revenuePoints,
  membershipDistinction,
  newHomeMaintenance,
  classification,
  membershipLadder,
} from "@/lib/content";

/**
 * llms.txt — a plain-text summary of Afterkey for AI answer engines.
 *
 * Generated from the same content source the pages render, so the facts an
 * answer engine reads here can never drift from the facts on the site. Served
 * at /llms.txt as text/plain.
 */
export const dynamic = "force-static";

function section(heading: string, body: string) {
  return `## ${heading}\n\n${body.trim()}\n`;
}

export function GET() {
  const featureLines = featureGroups
    .map((group) => {
      const status =
        group.status === "live"
          ? "Available now"
          : `${statusLabels[group.status]} — NOT available today`;
      const points = group.points
        .map((p) => `  - ${p.title}: ${p.description}`)
        .join("\n");
      return `### ${group.title} (${status})\n${group.summary}\n${points}`;
    })
    .join("\n\n");

  const body = `# ${brand.name}

> ${brand.definition}

${brand.purpose}

Website: ${absoluteUrl("/")}
Contact: ${brand.email}
Category: ${brand.category}
Audience: Production and custom residential home builders, and residential remodelers (additions, extensions, whole-house renovations), in the United States.

${section(
  "What Afterkey is",
  `${brand.definition}

Afterkey is used after a home closes, not during construction. It is organized around homes, service requests, and subcontractors rather than leads or deals, and it runs for the life of the home rather than ending at the sale.

What Afterkey is not:
${notList.map((n) => `- ${n}`).join("\n")}`,
)}
${section(
  "The business model for builders",
  `${thesis.short}

${revenuePoints.map((p) => `- ${p.title}: ${p.body}`).join("\n")}

${membershipDistinction} A new house still needs maintenance from day one, whoever built it: ${newHomeMaintenance.items.join("; ").toLowerCase()}.

${membershipLadder.heading}: ${membershipLadder.lede}
${membershipLadder.tiers.map((t) => `- ${t.name} (${t.price}): ${t.summary} Includes: ${t.includes.join("; ")}. ${t.visits}`).join("\n")}
${membershipLadder.builder} ${membershipLadder.foot}

Warranty vs. billable: ${classification.how.join(" ")} For the homeowner: ${classification.homeowner} For the builder: ${classification.builder}`,
)}
${section(
  "The three portals",
  portals
    .map(
      (p) =>
        `- ${p.name} (${p.audience}): ${p.description} Includes: ${p.points.join("; ")}.`,
    )
    .join("\n"),
)}
${section("Features", featureLines)}
${section(
  "Pricing",
  `Afterkey has one plan with no tiers. All prices are published; there are no quote calls or volume brackets.

- Base: $${pricing.base}/month. Includes unlimited team members and unlimited subcontractors. There are no per-user fees.
- Per active home: $${pricing.perHome}/month per home, flat at any age, for homes the builder is actively serving. Prospect homes (past builds being pitched a membership — outreach and offers only) and archived homes (read-only history, reactivate any time) are free. A prospect converts to active automatically when the homeowner starts a membership or a warranty date is set.
- AI plans (optional, flat monthly, not per home): ${pricing.ai.plans.map((p) => `${p.name} $${p.price}/month with ${p.credits.toLocaleString("en-US")} credits`).join("; ")}; custom plans for bigger builders. Reading a manual usually takes ${pricing.ai.manualCredits} credits; building and checking a typical home's plan ${pricing.ai.planCredits}. Appliances already in the shared library are free. Over the plan: $${pricing.ai.overagePer100} per 100 credits, up to a monthly cap the builder sets (default $${pricing.ai.defaultCap}), with alerts at 80%, 100% and the cap. Upgrades start at once; downgrades next month. Without a plan, builders get ${pricing.ai.freeCredits} free credits a month.
- SMS add-on (optional): $${pricing.sms.price}/month. Includes a dedicated business number and ${pricing.sms.includedSegments.toLocaleString()} segments. Overage is $${pricing.sms.overagePer1000} per 1,000 segments, with a live meter and a builder-set ceiling.
- Platform fee on homeowner payments: none. Payment processing runs at published flat rates — ${pricing.processing.bankPercent}% for bank payments, ${pricing.processing.cardPercent}% + ${pricing.processing.cardFixedCents}¢ for card payments — all-in rates that include every payment processing and payout cost.
- Onboarding: free. The builder adds homes and subcontractors and starts the same day.
- Free trial: none. Afterkey uses a ${guarantee.days}-day money-back guarantee instead. ${guarantee.body} No sales call is required.

Example monthly totals (published rates multiplied out, not customer averages):
- 15 active homes: $${(pricing.base + 15 * pricing.perHome).toLocaleString()}/month total ($${pricing.base} base + $${(15 * pricing.perHome).toLocaleString()} for 15 homes at $${pricing.perHome} each).
- 30 active homes: $${(pricing.base + 30 * pricing.perHome).toLocaleString()}/month total ($${pricing.base} base + $${(30 * pricing.perHome).toLocaleString()} for 30 homes at $${pricing.perHome} each).
- 50 active homes: $${(pricing.base + 50 * pricing.perHome).toLocaleString()}/month total ($${pricing.base} base + $${(50 * pricing.perHome).toLocaleString()} for 50 homes at $${pricing.perHome} each).
- 100 active homes: $${(pricing.base + 100 * pricing.perHome).toLocaleString()}/month total ($${pricing.base} base + $${(100 * pricing.perHome).toLocaleString()} for 100 homes at $${pricing.perHome} each).`,
)}
${section(
  "Published commitments",
  commitments.map((c) => `- ${c.title}: ${c.description}`).join("\n"),
)}
${section(
  "How the AI works",
  `Afterkey's AI Home Binder converts a home's documents into a proposed maintenance schedule. Every maintenance line carries its source: the document the builder uploaded, or a verified entry in Afterkey's shared appliance library. An appliance with neither is marked "needs source" until its manual is uploaded; Afterkey does not fill in intervals from general knowledge. The builder reviews the proposed list, removes or edits lines, and saves it before it is visible to a homeowner. The AI does not answer homeowner questions, close requests, or decide anything about a repair.

Afterkey maintains a platform-wide shared library of appliance maintenance schedules. Entries are verified by the Afterkey team or entered by the supplier; once a model has a verified entry, every home with that model gets the schedule instantly and at no cost. The library holds equipment maintenance information only; homeowner and home-identifying data is not placed into it.

Matching a home's appliances to verified library entries uses no AI and is free. Before suggesting anything, Afterkey lists which appliances have a verified schedule and which need a source; reading an uploaded manual or spec sheet uses AI credits (usually ${pricing.ai.manualCredits}), and the builder can always enter a schedule by hand instead.`,
)}
${section(
  "Status of features",
  `Available now: warranty and service request management with automatic dispatch to the assigned subcontractor; homeowner maintenance plans the builder prices, which the homeowner joins and pays for in one step and can cancel online, billing monthly from the day they join; included plan visits scheduled across the membership year and sent to the assigned subcontractor automatically; automatic payouts that send each subcontractor's share (repairs and monthly plan payments) straight to the subcontractor's bank once linked, with the rest to the builder; win-back prospect homes with claim invites, follow-ups and expiring offers; paid repair work with homeowner-approved estimates charged on completion; spreadsheet import of up to 1,000 homes with bulk invites; a full data export of every record, photo and document; an in-app help button on every page; the SMS and voice business line (a dedicated number per builder, two-way texting matched to requests, inbound calls forwarded to the builder; messages send under Afterkey Inc.'s carrier registration); the AI Home Binder with sourced maintenance schedules; and subcontractor compliance tracking with expiration alerts and a stop-and-acknowledge gate on builder-created dispatch.

On the roadmap and NOT available today: a homeowner-facing AI assistant that answers questions grounded only in that home's binder, resellable by the builder.`,
)}
${section(
  "Key pages",
  [
    `- ${absoluteUrl("/")} — overview`,
    `- ${absoluteUrl("/features")} — full feature list with availability status`,
    `- ${absoluteUrl("/pricing")} — complete published pricing`,
    `- ${absoluteUrl("/faq")} — frequently asked questions`,
    `- ${absoluteUrl("/compare")} — Afterkey vs. a CRM, a spreadsheet, and an all-in-one suite`,
    `- ${absoluteUrl("/for-subcontractors")} — the subcontractor portal`,
    ...useCases.map(
      (u) => `- ${absoluteUrl(`/use-cases/${u.slug}`)} — ${u.title}`,
    ),
  ].join("\n"),
)}
${section(
  "Frequently asked questions",
  coreFaqs.map((faq) => `Q: ${faq.q}\nA: ${faq.a}`).join("\n\n"),
)}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
