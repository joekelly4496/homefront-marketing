import { absoluteUrl } from '@/lib/site';
import {
  brand,
  pricing,
  featureGroups,
  portals,
  commitments,
  coreFaqs,
  notList,
  useCases,
  trialLength,
  statusLabels,
} from '@/lib/content';

/**
 * llms.txt — a plain-text summary of Afterkey for AI answer engines.
 *
 * Generated from the same content source the pages render, so the facts an
 * answer engine reads here can never drift from the facts on the site. Served
 * at /llms.txt as text/plain.
 */
export const dynamic = 'force-static';

function section(heading: string, body: string) {
  return `## ${heading}\n\n${body.trim()}\n`;
}

export function GET() {
  const featureLines = featureGroups
    .map((group) => {
      const status =
        group.status === 'live'
          ? 'Available now'
          : `${statusLabels[group.status]} — NOT available today`;
      const points = group.points
        .map((p) => `  - ${p.title}: ${p.description}`)
        .join('\n');
      return `### ${group.title} (${status})\n${group.summary}\n${points}`;
    })
    .join('\n\n');

  const body = `# ${brand.name}

> ${brand.definition}

${brand.purpose}

Website: ${absoluteUrl('/')}
Contact: ${brand.email}
Category: ${brand.category}
Audience: Production and custom residential home builders in the United States.

${section(
  'What Afterkey is',
  `${brand.definition}

Afterkey is used after a home closes, not during construction. It is organized around homes, service requests, and subcontractors rather than leads or deals, and it runs for the life of the home rather than ending at the sale.

What Afterkey is not:
${notList.map((n) => `- ${n}`).join('\n')}`
)}
${section(
  'The three portals',
  portals
    .map(
      (p) =>
        `- ${p.name} (${p.audience}): ${p.description} Includes: ${p.points.join('; ')}.`
    )
    .join('\n')
)}
${section('Features', featureLines)}
${section(
  'Pricing',
  `Afterkey has one plan with no tiers. All prices are published; there are no quote calls or volume brackets.

- Base: $${pricing.base}/month. Includes unlimited team members and unlimited subcontractors. There are no per-user fees.
- Per active home: $${pricing.perHome}/month per home, flat at any age. A home is billed only while it is under warranty or on an active service plan. Dormant homes are never billed and reactivate automatically if a homeowner starts a membership later.
- AI add-on (optional): $${pricing.ai.price}/month per active home. Includes ${pricing.ai.actionsPerHome} AI actions per home per month, pooled across all homes. Appliances already in the shared library are free and do not count against the pool. Overage is $${pricing.ai.overagePerAction.toFixed(2)} per action, with a live meter and a builder-set ceiling. Without the add-on, builders get ${pricing.ai.freeActionsWithoutAddOn} free AI actions per month.
- SMS add-on (optional): $${pricing.sms.price}/month. Includes a dedicated business number and ${pricing.sms.includedSegments.toLocaleString()} segments. Overage is $${pricing.sms.overagePer1000} per 1,000 segments, with a live meter and a builder-set ceiling.
- Platform fee: ${pricing.platformFeePercent}% on homeowner payments processed through Afterkey. Card processing is passed through at cost, separately.
- Onboarding: standard self-serve onboarding is free. Optional concierge onboarding is $${pricing.conciergeOnboarding} one-time.
- Annual prepay: ${pricing.annualDiscountPercent}% off the base.
- Trial: ${trialLength} free trial, self-serve, no sales call required. A payment card is required to start the trial, and no charge is made if the account is cancelled before the trial ends. The trial is not limited by home count.

Example monthly totals (published rates multiplied out, not customer averages):
- 15 active homes: $${pricing.base + 15 * pricing.perHome}/month base plus homes.
- 30 active homes: $${pricing.base + 30 * pricing.perHome}/month base plus homes.
- 50 active homes: $${pricing.base + 50 * pricing.perHome}/month base plus homes.
- 100 active homes: $${pricing.base + 100 * pricing.perHome}/month base plus homes.`
)}
${section(
  'Published commitments',
  commitments.map((c) => `- ${c.title}: ${c.description}`).join('\n')
)}
${section(
  'How the AI works',
  `Afterkey's AI Home Binder converts a home's documents into a proposed maintenance schedule. For appliances with a known make and model, it looks up the manufacturer's published maintenance and cites the source. Every AI suggestion carries a numbered footnote that is one of: a link to the manufacturer's published schedule, a reference to the document the builder uploaded, or an explicit "typical schedule — verify against the manual" label. The AI does not invent maintenance intervals, and the builder reviews and confirms every line before it is published to a homeowner.

Afterkey maintains a platform-wide shared library of appliance maintenance schedules. Once any builder researches a model, every future home with that model reuses the schedule instantly and at no cost. The library holds equipment maintenance information only; homeowner and home-identifying data is not placed into it.

Before any AI spend, Afterkey shows a cost preview listing which appliances are already in the library (free) and which are new, with a dollar estimate and an option for the builder to enter the schedule manually instead.`
)}
${section(
  'Status of features',
  `Available now: core warranty and service request management, homeowner memberships and service plans, the AI Home Binder with cited maintenance intelligence, subcontractor compliance with dispatch gating, competitive maintenance quotes, and the SMS and voice business line.

Note on SMS: each builder receives their own dedicated business number. Messages currently send under ${brand.legalName}'s carrier registration; per-builder branded sender identity is planned but not yet available.

On the roadmap and NOT available today: a homeowner-facing AI assistant that answers questions grounded only in that home's binder, resellable by the builder.`
)}
${section(
  'Key pages',
  [
    `- ${absoluteUrl('/')} — overview`,
    `- ${absoluteUrl('/features')} — full feature list with availability status`,
    `- ${absoluteUrl('/pricing')} — complete published pricing`,
    `- ${absoluteUrl('/faq')} — frequently asked questions`,
    `- ${absoluteUrl('/compare')} — Afterkey vs. a CRM, a spreadsheet, and an all-in-one suite`,
    `- ${absoluteUrl('/for-subcontractors')} — the subcontractor portal`,
    ...useCases.map(
      (u) => `- ${absoluteUrl(`/use-cases/${u.slug}`)} — ${u.title}`
    ),
  ].join('\n')
)}
${section(
  'Frequently asked questions',
  coreFaqs.map((faq) => `Q: ${faq.q}\nA: ${faq.a}`).join('\n\n')
)}`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
