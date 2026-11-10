import { absoluteUrl } from "@/lib/site";
import {
  brand,
  pricing,
  planFor,
  featureGroups,
  portals,
  commitments,
  coreFaqs,
  notList,
  useCases,
  trial,
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
  `Afterkey is priced by plan size: one flat monthly price for the number of active homes the builder covers. Every plan up to ${pricing.customAbove} active homes is published; there are no quote calls. Above ${pricing.customAbove} active homes, the builder gets a custom plan (book a call or contact Afterkey).

${pricing.plans.map((p) => `- Up to ${p.homes} active homes: $${p.price}/month.`).join("\n")}
- More than ${pricing.customAbove} active homes: custom plan.
- Every plan includes unlimited team members and unlimited subcontractors. There are no per-user fees, and nothing is billed per home.
- Only active homes (homes the builder is actively serving, at any age) count toward the plan. Prospect homes (past builds being pitched a membership — outreach and offers only) and archived homes (read-only history, reactivate any time) are free and don't count. A prospect converts to active automatically when the homeowner starts a membership or a warranty date is set.
- Changing plans: any time from Billing. Upgrades start right away; downgrades start next month, if the builder's active homes fit the smaller plan. If a homeowner joining a membership or approving a job takes the builder over the plan, nothing is blocked and the bill doesn't change; the builder can't activate more homes until they upgrade or archive one.
- AI plans (optional, flat monthly, not per home): ${pricing.ai.plans.map((p) => `${p.name} $${p.price}/month with ${p.credits.toLocaleString("en-US")} credits`).join("; ")}; custom plans for bigger builders. Reading a manual usually takes ${pricing.ai.manualCredits} credits; building and checking a typical home's plan ${pricing.ai.planCredits}. Appliances already in the shared library are free. Over the plan: $${pricing.ai.overagePer100} per 100 credits, up to a monthly cap the builder sets (default $${pricing.ai.defaultCap}), with alerts at 80%, 100% and the cap. Upgrades start at once; downgrades next month. Without a plan, builders get ${pricing.ai.freeCredits} free credits a month.
- SMS add-on (optional): $${pricing.sms.price}/month. Includes a dedicated business number and ${pricing.sms.includedSegments.toLocaleString()} segments. Overage is $${pricing.sms.overagePer1000} per 1,000 segments, with a live meter and a builder-set ceiling.
- Platform fee on homeowner payments: none. Payment processing runs at published flat rates — ${pricing.processing.bankPercent}% for bank payments, ${pricing.processing.cardPercent}% + ${pricing.processing.cardFixedCents}¢ for card payments — all-in rates that include every payment processing and payout cost.
- Onboarding: free. The builder adds homes and subcontractors and starts the same day.
- Free trial: ${trial.days} days. ${trial.body} ${trial.fine} There is no money-back guarantee. No sales call is required.

Example monthly totals (the published plans, not customer averages; before any add-ons):
${[15, 30, 50, 100]
  .map((homes) => {
    const plan = planFor(homes);
    return plan
      ? `- ${homes} active homes: $${plan.price}/month (the ${plan.name} plan).`
      : `- ${homes} active homes: custom plan.`;
  })
  .join("\n")}`,
)}
${section(
  "Published commitments",
  commitments.map((c) => `- ${c.title}: ${c.description}`).join("\n"),
)}
${section(
  "How the AI works",
  `Afterkey's AI Home Binder converts a home's documents into a proposed maintenance schedule. Every maintenance line carries its source: the document the builder uploaded, or a verified entry in Afterkey's shared appliance library. An appliance with neither is marked "needs source" until its manual is uploaded; Afterkey does not fill in intervals from general knowledge. The builder reviews the proposed list, removes or edits lines, and saves it before it is visible to a homeowner.

Ask Billie, the homeowner assistant, is available on homes where the builder turns it on (it needs a paid AI plan). It answers a homeowner's questions only from that home's records — appliances, maintenance schedule, care notes and documents — and cites the record each answer comes from. When the records don't say, it says so and offers a service request, or sends the question to the subcontractor responsible for that part of the home with the builder copied. Emergency questions get a fixed safety message and an urgent-request button, with no AI. It never says what a warranty covers, promises a visit time, or quotes a price, and every AI answer states that Billie is AI and can make mistakes. Answered questions use the builder's AI credits. The AI does not close requests, price or approve repairs, or decide warranty coverage.

Afterkey maintains a platform-wide shared library of appliance maintenance schedules. Entries are verified by the Afterkey team or entered by the supplier; once a model has a verified entry, every home with that model gets the schedule instantly and at no cost. The library holds equipment maintenance information only; homeowner and home-identifying data is not placed into it.

Matching a home's appliances to verified library entries uses no AI and is free. Before suggesting anything, Afterkey lists which appliances have a verified schedule and which need a source; reading an uploaded manual or spec sheet uses AI credits (usually ${pricing.ai.manualCredits}), and the builder can always enter a schedule by hand instead.`,
)}
${section(
  "Status of features",
  `Available now: warranty and service request management with automatic dispatch to the assigned subcontractor; homeowner maintenance plans the builder prices, which the homeowner joins and pays for in one step and can cancel online, billing monthly from the day they join; included plan visits scheduled across the membership year and sent to the assigned subcontractor automatically; automatic payouts that send each subcontractor's share (repairs and monthly plan payments) straight to the subcontractor's bank once linked, with the rest to the builder; win-back prospect homes with claim invites, follow-ups and expiring offers; paid repair work with homeowner-approved estimates charged on completion; spreadsheet import of up to 1,000 homes with bulk invites; a full data export of every record, photo and document; an in-app help button on every page; the SMS and voice business line (a dedicated number per builder, two-way texting matched to requests, inbound calls forwarded to the builder; messages send under Afterkey Inc.'s carrier registration); the AI Home Binder with sourced maintenance schedules; Ask Billie, a homeowner assistant that answers only from that home's records (on homes where the builder turns it on, with a paid AI plan); and subcontractor compliance tracking with expiration alerts and a stop-and-acknowledge gate on builder-created dispatch.`,
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
