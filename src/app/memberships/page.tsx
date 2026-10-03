import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { WarrantyVsMaintenance } from "@/components/WarrantyVsMaintenance";
import { RepairPaySteps } from "@/components/RepairPaySteps";
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
  coreFaqs,
  signupHref,
  guarantee,
  primaryCta,
  thesis,
  revenuePoints,
  workedExample,
  membershipDistinction,
  newHomeMaintenance,
  classification,
} from "@/lib/content";

const title = "Maintenance Memberships for Home Builders";
const description =
  "Sell your homeowners a maintenance membership at a price you set, bill it to your own account, and earn on the repairs you used to coordinate for free. No platform fee.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/memberships",
});

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

const pageFaqs = [
  ...coreFaqs.filter((f) =>
    [
      "What should I charge homeowners for a maintenance membership?",
      "Do homeowners have to pay for a membership to get warranty work?",
      "My homes are new. What is there to maintain?",
      "How does paid repair work get billed and paid?",
      "Who decides whether a request is warranty or billable?",
      "Can Afterkey help me win back homes I built years ago?",
    ].includes(f.q),
  ),
];

export default function MembershipsPage() {
  const pageGraph = graph([
    webPageSchema({ name: title, description, path: "/memberships" }),
    breadcrumbSchema([{ name: "Memberships", path: "/memberships" }]),
    faqPageSchema(pageFaqs),
  ]);
  const ex = workedExample;

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* Header — the thesis, with the definition paragraph under it */}
      <section className="border-b border-drywall bg-paper">
        <Container size="7xl" className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-tape">
                Memberships and repair revenue
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Every home you’ve built is a customer
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
                {thesis.short} The builder sells a maintenance membership at a
                price he sets, gets paid on the repairs he used to coordinate
                for free, and stays the first call for the next job.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                {membershipDistinction}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={signupHref} size="lg">
                  {primaryCta}
                </Button>
                <Button href="#example" size="lg" variant="secondary">
                  See the math on {ex.homes} homes
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-5">
              <Image
                src="/images/page-pricing-ranch.webp"
                alt="A newly built ranch home with a wide front porch in late afternoon light"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="photo object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* The five points, in order of weight */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>What changes</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Five things a closed home does for you on Afterkey
            </h2>
          </div>
          <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-2">
            {revenuePoints.map((point, i) => (
              <div
                key={point.id}
                className={`flex gap-4 ${i === 0 ? "lg:col-span-2 lg:max-w-3xl" : ""}`}
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-ink text-paper">
                  <point.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-slate-700">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The worked example — a full table this time */}
      <section
        id="example"
        className="scroll-mt-24 bg-drywall py-20 sm:py-28"
      >
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>{ex.label}</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {ex.homes} closed homes, a ${ex.planPrice}-a-month plan
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                The arithmetic on inputs you control: your plan price, your
                markup, and how many homeowners say yes. Afterkey is early and
                has no customer averages to publish, so none of this is a
                benchmark. Substitute your own numbers.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                The repair line is the part most builders miss. One $
                {ex.repairJob} job a quarter per home — a dryer vent, a
                hose bib, a dishwasher — at a {ex.markupPercent}% markup is $
                {ex.markupPerJob} to you each time, on work you were already
                coordinating for nothing.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Card className="overflow-hidden p-0">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    Example annual revenue for a builder with {ex.homes} closed
                    homes on a ${ex.planPrice} monthly maintenance plan
                  </caption>
                  <thead>
                    <tr className="border-b border-drywall bg-paper text-xs font-semibold text-slate-600">
                      <th scope="col" className="px-5 py-3.5">
                        Per year
                      </th>
                      <th scope="col" className="px-5 py-3.5 text-right">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-drywall">
                    <tr>
                      <th
                        scope="row"
                        className="px-5 py-4 text-left font-medium text-ink"
                      >
                        Membership, every home joins
                        <span className="block text-xs font-normal text-slate-600">
                          {ex.homes} × ${ex.planPrice} × 12 ·{" "}
                          {money(ex.membershipMonthly)} a month
                        </span>
                      </th>
                      <td className="px-5 py-4 text-right text-lg font-semibold tabular-nums text-ink">
                        {money(ex.membershipYearly)}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-5 py-4 text-left font-medium text-ink"
                      >
                        Membership, half of them join
                      </th>
                      <td className="px-5 py-4 text-right text-lg font-semibold tabular-nums text-ink">
                        {money(ex.membershipYearlyAtHalf)}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-5 py-4 text-left font-medium text-ink"
                      >
                        Your markup on one priced repair a quarter
                        <span className="block text-xs font-normal text-slate-600">
                          {ex.homes} homes × {ex.repairsPerHomePerYear} jobs ×
                          ${ex.markupPerJob}
                        </span>
                      </th>
                      <td className="px-5 py-4 text-right text-lg font-semibold tabular-nums text-ink">
                        {money(ex.repairMarkupYearly)}
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-5 py-4 text-left font-medium text-ink"
                      >
                        Afterkey at {ex.homes} active homes
                        <span className="block text-xs font-normal text-slate-600">
                          ${pricing.base} + {ex.homes} × ${pricing.perHome} ·{" "}
                          {money(ex.afterkeyMonthly)} a month
                        </span>
                      </th>
                      <td className="px-5 py-4 text-right text-lg font-semibold tabular-nums text-ink">
                        {money(ex.afterkeyYearly)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Per year. Membership dues and repair payments bill to your own
                account, and there is no platform fee on either — you pay only
                processing, at the published rates on{" "}
                <Link
                  href="/pricing"
                  className="font-semibold text-tape underline decoration-brass decoration-2 underline-offset-2 hover:text-ink"
                >
                  the pricing page
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* A new house still needs maintenance — what's warranty, what's
          maintenance, as the homeowner sees it under the builder's brand */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>The objection, answered</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {newHomeMaintenance.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                {newHomeMaintenance.lede.replace(/:$/, ".")} Your homeowner
                sees the two lists side by side in your portal, so the plan
                makes sense to them and you never get the “why am I paying
                for this” call.
              </p>
              <p className="mt-4 text-base font-medium leading-relaxed text-ink">
                {newHomeMaintenance.close}
              </p>
              <div className="relative mt-8 hidden aspect-[3/2] overflow-hidden lg:block">
                <Image
                  src="/images/page-use-cases-modern-colonial.webp"
                  alt="A newly completed modern colonial home with dark trim on a clear afternoon"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="photo object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <WarrantyVsMaintenance />
            </div>
          </div>
        </Container>
      </section>

      {/* How the money moves */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>How the money moves</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Billed in your brand, paid to your account
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-ink">
                The membership
              </h3>
              <ol className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
                <li>
                  1. You build the plan and set the price — one tier or
                  several, priced per home. Afterkey never sets or caps it.
                </li>
                <li>
                  2. The homeowner joins in your branded portal and puts a card
                  or bank account on file.
                </li>
                <li>
                  3. It bills every month to your own account. Reminders, the
                  schedule, and the service history carry your name.
                </li>
              </ol>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {membershipDistinction}
              </p>
            </Card>
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-ink">
                How a repair gets paid
              </h3>
              <RepairPaySteps className="mt-4" />
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                You never invoice, chase a payment, or split a check by hand.
                The charge can never exceed what the homeowner approved.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Warranty vs. billable, both sides */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <SectionLabel>Warranty vs. billable</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {classification.title}
              </h2>
              <ul className="mt-6 space-y-3">
                {classification.how.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-tape"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-slate-700">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5 lg:col-span-6 lg:pt-12">
              <Card className="p-6">
                <p className="text-sm font-medium text-tape">
                  What your homeowner gets, under your brand
                </p>
                <p className="mt-2 text-base font-medium leading-relaxed text-ink">
                  {classification.homeowner}
                </p>
              </Card>
              <Card className="p-6">
                <p className="text-sm font-medium text-tape">What you get</p>
                <p className="mt-2 text-base font-medium leading-relaxed text-ink">
                  {classification.builder}
                </p>
              </Card>
              <p className="text-sm text-slate-600">
                Your homeowners can read their side of this at{" "}
                <Link
                  href="/for-homeowners"
                  className="font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                >
                  the homeowner page
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Questions</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                Membership questions
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                <Link
                  href="/faq"
                  className="font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                >
                  Read the full FAQ
                </Link>
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={pageFaqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-paper sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Put a plan in front of a homeowner this week
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {brand.name} is ${pricing.base} a month plus ${pricing.perHome}{" "}
              per active home. Past builds you’re pitching are free to add
              while you court them. {guarantee.short}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                {primaryCta}
              </Button>
              <Button
                href="/pricing"
                size="lg"
                variant="secondary"
                className="border-paper/40 text-paper hover:border-paper hover:bg-paper/10"
              >
                See pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
