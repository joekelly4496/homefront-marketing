import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { StatusPill } from "@/components/ui/StatusPill";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import {
  graph,
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from "@/lib/schema";
import {
  brand,
  pricing,
  commitments,
  pricingFaqs,
  signupHref,
  trialLength,
  trial,
  smsStatus,
} from "@/lib/content";

const title = `Pricing: $${pricing.base}/month + $${pricing.perHome} Per Active Home`;
const description = `One plan, published. $${pricing.base}/month plus $${pricing.perHome} per active home, unlimited users and subcontractors. Optional AI and SMS add-ons. No contracts, no quote calls.`;

export const metadata = pageMetadata({
  title,
  description,
  path: "/pricing",
});

const priceLines = [
  {
    price: `$${pricing.base}`,
    unit: "/month",
    title: "Platform base",
    description:
      "Unlimited team members and unlimited subcontractors. Headcount never changes your bill.",
  },
  {
    price: `+ $${pricing.perHome}`,
    unit: "/month per active home",
    title: "Per active home",
    description:
      "Flat at any age. Billed only while a home is under warranty or on an active service plan — dormant homes are never billed, and homes go dormant automatically.",
  },
  {
    price: `+ $${pricing.ai.price}`,
    unit: "/month per active home (optional)",
    title: "AI add-on",
    description: `${pricing.ai.actionsPerHome} AI actions per home per month, pooled across all your homes. Appliances already in the shared library are free and don’t count. Beyond the pool, $${pricing.ai.overagePerAction.toFixed(2)} per action with a live meter and a ceiling you set.`,
  },
  {
    price: `+ $${pricing.sms.price}`,
    unit: "/month (optional)",
    title: "SMS add-on",
    description: `Your own dedicated business number with ${pricing.sms.includedSegments.toLocaleString()} segments included. Additional segments are $${pricing.sms.overagePer1000} per 1,000, on a live meter with a ceiling you set.`,
  },
];

/**
 * Illustrative bills. Arithmetic only — these are the published rates applied
 * to a home count, not a claim about what any customer pays.
 */
const exampleBills = [
  { homes: 15 },
  { homes: 30 },
  { homes: 50 },
  { homes: 100 },
].map(({ homes }) => {
  const core = pricing.base + homes * pricing.perHome;
  const withAi = core + homes * pricing.ai.price;
  return {
    homes: `${homes} active homes`,
    core: `$${core.toLocaleString()}`,
    withAi: `$${withAi.toLocaleString()}`,
    withBoth: `$${(withAi + pricing.sms.price).toLocaleString()}`,
  };
});

const included = [
  "Warranty and service request management with SLA tracking",
  "Punch list and closeout items in the same queue",
  "Automated email reminders, free and unmetered",
  "Subcontractor dispatch with per-trade assignment",
  "Day-of arrival tracking and subcontractor ratings",
  "Subcontractor cost intelligence across every home",
  "Compliance document tracking with expiration reminders",
  "Compliance gating on dispatch, with logged overrides",
  "Homeowner portal — requests, status, messaging, history",
  "Subcontractor portal — jobs, photo updates, documents",
  "AI Home Binder with cited maintenance schedules",
  "Shared appliance library — reused models are always free",
  "Homeowner memberships and service plans with recurring billing",
  "Competitive maintenance quotes across your own roster",
  "Photo documentation on every request",
  "Unlimited homes, team members, and subcontractors",
];

export default function PricingPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: "/pricing" }),
    breadcrumbSchema([{ name: "Pricing", path: "/pricing" }]),
    faqPageSchema(pricingFaqs),
  ]);

  const annualBase = (
    pricing.base *
    (1 - pricing.annualDiscountPercent / 100)
  ).toFixed(2);

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* 1 — Hero */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              One plan. Published price. No quote calls.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Afterkey costs ${pricing.base} per month plus ${pricing.perHome}{" "}
              per active home. Unlimited team members and unlimited
              subcontractors are included, there are no tiers, and there is no
              per-user fee. Optional add-ons for AI and SMS are priced below.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start your {trialLength} free trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <a
                href="#included"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                See everything included ↓
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-500">{trial.terms}</p>
          </Reveal>
        </Container>
      </section>

      {/* 2 — The price */}
      <section className="py-16 sm:py-20">
        <Container size="6xl">
          <Reveal>
            <Card className="mx-auto max-w-3xl p-6 sm:p-10">
              <h2 className="sr-only">Price breakdown</h2>
              <ul className="divide-y divide-slate-200">
                {priceLines.map((line) => (
                  <li
                    key={line.title}
                    className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <p className="w-64 shrink-0">
                      <span className="text-3xl font-semibold tracking-tight text-slate-900">
                        {line.price}
                      </span>
                      <span className="text-sm text-slate-500">
                        {line.unit}
                      </span>
                    </p>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                        {line.title}
                      </h3>
                      <p className="mt-1 text-base text-slate-600">
                        {line.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-5 max-w-3xl">
            <p className="text-center text-sm leading-relaxed text-slate-500">
              Annual prepay takes {pricing.annualDiscountPercent}% off the base
              (${annualBase}/month). A {pricing.platformFeePercent}% platform
              fee applies to homeowner payments processed through {brand.name},
              with card processing passed through at cost. Optional concierge
              onboarding — we build the digital binder for your entire existing
              home roster from your documents — is $
              {pricing.conciergeOnboarding} one-time. Standard self-serve
              onboarding is free.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 3 — Example bills */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              What the plan costs at your size
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The published rates, multiplied out. Nothing here is an estimate —
              it is the same arithmetic you can do yourself.
            </p>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[560px] text-left text-sm">
                <caption className="sr-only">
                  Monthly Afterkey cost by number of active homes, with and
                  without the optional AI and SMS add-ons
                </caption>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th scope="col" className="px-5 py-3.5">
                      Active homes
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      Base + homes
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      + AI add-on
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      + AI and SMS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {exampleBills.map((row) => (
                    <tr key={row.homes}>
                      <th
                        scope="row"
                        className="px-5 py-4 text-left font-medium text-slate-900"
                      >
                        {row.homes}
                      </th>
                      <td className="px-5 py-4 text-slate-600">{row.core}</td>
                      <td className="px-5 py-4 text-slate-600">{row.withAi}</td>
                      <td className="px-5 py-4 text-slate-600">
                        {row.withBoth}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Per month, before any AI or SMS overage. Only homes under warranty
              or on an active plan count toward the total.
            </p>
          </Reveal>

          {/* Membership math — explicitly illustrative, not a customer claim */}
          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
            <Card className="border-emerald-200 bg-emerald-50/50 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Illustrative: what memberships could offset
              </h3>
              <p className="mt-2 text-sm font-medium text-emerald-800">
                Worked example, not a benchmark. Afterkey is early and has no
                customer averages to publish. Substitute your own plan price and
                your own attach rate.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Say you have <strong>50 active homes</strong> and you sell a{" "}
                <strong>$45/month</strong> maintenance membership to{" "}
                <strong>40% of them</strong>. That is 20 memberships, or{" "}
                <strong>$900/month</strong> in gross homeowner billing. Afterkey
                takes {pricing.platformFeePercent}% of payments processed
                through the platform ($22.50), and card processing is passed
                through at cost. Your Afterkey bill at 50 homes with the AI
                add-on is $899.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Whether that math works depends entirely on your plan price and
                how many buyers say yes — both of which you control, and neither
                of which we are going to pretend to predict for you.
              </p>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* 4 — What's included */}
      <section id="included" className="scroll-mt-20 py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              One plan. Everything in it.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              There is no upsell tier. Everything below is in the $
              {pricing.base} base plus your per-home rate.
            </p>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* 5 — Add-on detail */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    The AI add-on
                  </h2>
                  <StatusPill status="live" />
                </div>
                <p className="mt-3 text-base text-slate-600">
                  ${pricing.ai.price}/month per active home, with{" "}
                  {pricing.ai.actionsPerHome} AI actions per home per month
                  pooled across your whole portfolio — so a complicated home can
                  borrow from ten simple ones. Appliances already in the shared
                  library cost nothing and never touch the pool.
                </p>
                <p className="mt-3 text-base text-slate-600">
                  Afterkey shows you a cost preview before it spends anything:
                  which appliances are free, which are new, the dollar estimate,
                  and a do-it-yourself option if you would rather save the
                  money. Overage is ${pricing.ai.overagePerAction.toFixed(2)}{" "}
                  per action against a ceiling you set. Without the add-on you
                  still get {pricing.ai.freeActionsWithoutAddOn} free actions a
                  month to try it.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={80}>
              <Card className="h-full p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MessageSquare className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    The SMS add-on
                  </h2>
                  <StatusPill
                    status={smsStatus === "live" ? "live" : "coming-soon"}
                  />
                </div>
                <p className="mt-3 text-base text-slate-600">
                  ${pricing.sms.price}/month for your own dedicated business
                  number, including{" "}
                  {pricing.sms.includedSegments.toLocaleString()} segments.
                  Automated maintenance reminders, day-of coordination, and
                  inbound calls forwarded to you.
                </p>
                <p className="mt-3 text-base text-slate-600">
                  Additional segments are ${pricing.sms.overagePer1000} per
                  1,000, tracked on a live meter with a ceiling you control. You
                  get alerts as you approach your included volume — no surprise
                  bills.
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Messages currently send under {brand.legalName}’s carrier
                  registration. Per-builder branded sender identity is planned;
                  your dedicated number is yours either way.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 6 — The six commitments */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Published commitments</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Six things we put in writing
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80}>
                <Card className="h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <c.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {c.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 7 — FAQ */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Pricing questions
            </h2>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-10 max-w-3xl">
            <FaqList faqs={pricingFaqs} />
            <p className="mt-6 text-center text-sm text-slate-600">
              Looking for something else?{" "}
              <Link
                href="/faq"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                Read the full FAQ
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 8 — Footer CTA */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Try it on a real home
            </h2>
            <p className="mt-4 text-balance text-lg text-slate-600">
              {trialLength} free trial. No contracts, no per-user fees, no
              termination fees, and no sales call required — though we are happy
              to walk you through it.
            </p>
            <p className="mt-3 text-sm text-slate-500">{trial.terms}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free trial
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Ask a question
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
