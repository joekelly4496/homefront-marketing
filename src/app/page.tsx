import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, SectionLabel } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { BuilderDashboard } from "@/components/mockups/BuilderDashboard";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { WhiteLabelSwap } from "@/components/mockups/WhiteLabelSwap";
import { RequestFlow } from "@/components/mockups/RequestFlow";
import { MembershipLadder } from "@/components/MembershipLadder";
import { graph, faqPageSchema, webPageSchema } from "@/lib/schema";
import {
  brand,
  steps,
  commitments,
  coreFaqs,
  pricing,
  pricingLine,
  whiteLabelPoints,
  signupHref,
  guarantee,
  primaryCta,
  competitorAnchor,
  thesis,
  revenuePoints,
  workedExample,
  membershipDistinctionShort,
  newHomeMaintenance,
  classification,
  membershipLadder,
} from "@/lib/content";

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

/** Points 1, 2 and 5 carry the revenue story; 3 and 4 live in the workflow and the CTA. */
const moneyPoints = revenuePoints.filter((p) =>
  ["membership", "repairs", "next-job"].includes(p.id),
);

/** What the homeowner sees — the consumer side, in four lines. */
const homeownerGets = [
  "A maintenance schedule built from their own house’s manuals, with reminders when something is due",
  "A portal under your name to submit a request with photos, watch it move, and talk to the sub directly",
  classification.homeowner,
  "Their documents, warranties, and service history in one place, for the life of the home",
];

/** The FAQs surfaced on the home page — the four a builder asks first. */
const homeFaqs = coreFaqs.filter((f) =>
  [
    "What does a homeowner actually get for $40 a month?",
    "Do homeowners have to pay for a membership to get warranty work?",
    "Who decides whether a request is warranty or billable?",
    "How much does Afterkey cost?",
  ].includes(f.q),
);

export default function HomePage() {
  const pageGraph = graph([
    webPageSchema({
      name: "Warranty Callback Software for Home Builders | Afterkey",
      description: brand.definition,
      path: "/",
    }),
    faqPageSchema(homeFaqs),
  ]);

  const ex = workedExample;

  return (
    <>
      <JsonLd data={pageGraph} />

      {/* 1 — Hero. Ink ground, the dusk photograph under a dark gradient,
          and the builder dashboard breaking the bottom edge. */}
      <section className="relative z-10 flow-root bg-ink text-paper">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/hero-colonial-dusk.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="photo object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/75 to-ink/35 sm:via-ink/60 sm:to-ink/25" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink to-ink/0" />
        </div>

        <Container size="7xl" className="pt-20 sm:pt-28 lg:pt-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-brass">
              For residential home builders
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.5rem]">
              {thesis.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Afterkey turns the homes you’ve already closed into a service
              business: a maintenance plan you price — from reminders to the
              whole house — repairs paid through your branded portal with your
              markup on them, and your subs on the work.{" "}
              {thesis.supporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                {primaryCta}
              </Button>
              <Button
                href="#economics"
                size="lg"
                variant="secondary"
                className="border-paper/40 text-paper hover:border-paper hover:bg-paper/10"
              >
                See the math on {ex.homes} homes
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <li className="tabular-nums">
                <span className="font-semibold text-paper">
                  ${pricing.base}/month
                </span>{" "}
                + ${pricing.perHome} per active home
              </li>
              <li className="border-l border-paper/25 pl-5">No contracts</li>
              <li className="border-l border-paper/25 pl-5">
                {guarantee.headline}
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-400">
              ${pricing.perHome} a home is small next to a ${ex.planPrice}
              -a-month plan — or a ${ex.fullServicePrice} whole-house one — on
              the same home. {membershipDistinctionShort}
            </p>
          </div>

          <div className="relative z-10 mt-14 -mb-16 sm:mt-16 sm:-mb-24 lg:-mb-28">
            <div className="flex justify-center sm:hidden">
              <PhoneMockup />
            </div>
            <div className="mx-auto hidden max-w-5xl sm:block">
              <BuilderDashboard />
            </div>
          </div>
        </Container>
      </section>

      {/* 2 — How you make money. The definition, the three revenue points,
          the ladder, and the one objection that comes before all of it. */}
      <section
        id="every-home"
        className="scroll-mt-24 bg-paper pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40"
      >
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>How you make money</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Every home you’ve built is a customer
            </h2>
            {/* The definition, quotable without context. */}
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              <strong className="font-semibold text-ink">
                {brand.definition}
              </strong>{" "}
              Easier is the side effect. More money from homes you already
              built is the point.
            </p>
          </div>

          <div className="mt-12 grid gap-x-16 gap-y-8 lg:grid-cols-3">
            {moneyPoints.map((point) => (
              <div key={point.id}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[6px] bg-ink text-paper">
                  <point.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-base leading-relaxed text-slate-700">
                  {point.body}
                </p>
              </div>
            ))}
          </div>

          {/* What the plan actually is — the thing a homeowner asks first,
              and the pitch a builder has to picture landing. */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              {membershipLadder.heading}
            </h3>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-700">
              {membershipLadder.lede}
            </p>
            <MembershipLadder compact className="mt-6" />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700">
              <strong className="font-semibold text-ink">
                “My homes are new.”
              </strong>{" "}
              {newHomeMaintenance.lede.replace(/:$/, " —")}{" "}
              {newHomeMaintenance.items
                .slice(0, 4)
                // Lowercase a leading capital, but leave acronyms (HVAC) alone.
                .map((i) =>
                  i.charAt(1) === i.charAt(1).toLowerCase()
                    ? i.charAt(0).toLowerCase() + i.slice(1)
                    : i,
                )
                .join(", ")}
              , appliances on the manufacturer’s schedule. Warranty covers
              what you got wrong and stays free. The plan covers the rest.
            </p>
            <p className="mt-4">
              <Link
                href="/memberships"
                className="text-sm font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
              >
                Every line item in each tier, and how the money moves
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* 3 — How the workflow works. The request flow, with you out of the
          middle; warranty vs. billable decided on the way. */}
      <section
        id="how-it-works"
        className="scroll-mt-24 bg-drywall py-20 sm:py-28"
      >
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>How the workflow works</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              A request handled without you in the middle
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              It goes from the homeowner’s phone to your sub’s list and back
              without anyone calling you for a status. Every request is
              classified warranty or billable — by you before dispatch, or by
              the sub on site when the “leak” turns out to be a hose bib left
              open — and anything billable needs you and the homeowner to
              approve before a dollar moves.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <RequestFlow className="mx-auto w-full max-w-md" />
            <ol className="space-y-7">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] bg-ink text-sm font-semibold text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-10 max-w-3xl text-base font-medium leading-relaxed text-ink">
            {classification.builder}
          </p>
        </Container>
      </section>

      {/* 4 — Homeowner experience. Under your name; what they get; why they
          stop calling your cell. */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <SectionLabel>Homeowner experience</SectionLabel>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {brand.whiteLabelHeadline}
              </h2>
              <ul className="mt-6 space-y-3">
                {homeownerGets.map((line) => (
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
              <p className="mt-6 text-base leading-relaxed text-slate-700">
                Some will still text you the first month. Then they try the
                portal once — a photo, two sentences, a sub who answers them
                directly — and that’s what they do the next time.
              </p>
              <p className="mt-3 text-sm text-slate-600">
                {whiteLabelPoints.map((p) => p.title).join(" · ")}. We stay in
                the background.
              </p>
            </div>
            <div className="lg:col-span-6">
              <WhiteLabelSwap />
              <p className="mt-3 text-sm text-slate-600">
                Two builders, one platform, and each buyer sees their own
                builder’s name on the portal they pay in.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5 — Sub experience */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="relative aspect-[16/9] overflow-hidden lg:col-span-6">
              <Image
                src="/images/reserve-truck-black.webp"
                alt="A pickup truck pulling into the driveway of a white colonial home at dusk"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="photo object-cover"
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <SectionLabel>Sub experience</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Your subs get a list, not a group text
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                A sub signs in to one list: the jobs assigned to him, each
                with the address, the issue, the homeowner’s photos, and the
                home’s history. He taps a status and attaches a finished-work
                photo from the driveway. On a paid job, his share arrives
                without him invoicing anyone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                The homeowner says nobody came; the sub says he called. Now
                there’s a record, so you don’t eat the second trip. Subs use
                it free, and unlimited subs are included in your base.
              </p>
              <p className="mt-6">
                <Link
                  href="/for-subcontractors"
                  className="text-sm font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                >
                  What the sub sees
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6 — Real economics. The worked example, labeled as one. */}
      <section id="economics" className="scroll-mt-24 bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Real economics</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                The math on {ex.homes} closed homes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Arithmetic on inputs you control: your plan price, your
                markup, and how many homeowners say yes. Afterkey is early and
                has no customer averages to publish, so none of this is a
                benchmark. Substitute your own numbers.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                The repair line is the part most builders miss: one $
                {ex.repairJob} job a quarter per home — a dryer vent, a hose
                bib, a dishwasher — at {ex.markupPercent}% markup is $
                {ex.markupPerJob} to you each time, on work you were already
                coordinating for nothing.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8">
                <p className="text-sm font-medium text-tape">{ex.label}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  {ex.homes} closed homes, a ${ex.planPrice}/month plan, per
                  year
                </h3>
                <dl className="mt-6 divide-y divide-drywall">
                  {[
                    {
                      label: "Membership, every home joins",
                      sub: `${money(ex.membershipMonthly)} a month`,
                      value: ex.membershipYearly,
                    },
                    {
                      label: "Membership, half of them join",
                      value: ex.membershipYearlyAtHalf,
                    },
                    {
                      label: `${ex.fullServiceHomes} of them take a $${ex.fullServicePrice}/month whole-house plan instead`,
                      sub: "gross, before you pay your subs for the work",
                      value: ex.fullServiceYearly,
                    },
                    {
                      label: "Your markup on one priced repair a quarter",
                      sub: `${ex.homes} homes × ${ex.repairsPerHomePerYear} jobs × $${ex.markupPerJob}`,
                      value: ex.repairMarkupYearly,
                    },
                    {
                      label: `Afterkey at ${ex.homes} active homes`,
                      sub: `${money(ex.afterkeyMonthly)} a month`,
                      value: ex.afterkeyYearly,
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <dt className="text-sm text-slate-700">
                        {row.label}
                        {row.sub && (
                          <span className="block text-xs text-slate-600">
                            {row.sub}
                          </span>
                        )}
                      </dt>
                      <dd className="text-lg font-semibold tabular-nums text-ink">
                        {money(row.value)}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-xs leading-relaxed text-slate-600">
                  There’s no platform fee on what your homeowners pay you —
                  you pay only processing, at the published rates on{" "}
                  <Link
                    href="/pricing"
                    className="font-semibold text-tape underline decoration-brass decoration-2 underline-offset-2 hover:text-ink"
                  >
                    the pricing page
                  </Link>
                  .
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* 7 — Proof. Only what's real: who built it, and what's in writing.
          No testimonials or logos until there are real ones. */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>Who built it</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Built by a builder. Priced in writing.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                <strong className="font-semibold text-ink">
                  {brand.founder}
                </strong>{" "}
                Someone who has handed over keys, taken the call three weeks
                later, and sent a sub over for nothing. We don’t have customer
                logos to show you yet, and we’re not going to invent any. What
                we can put in writing is the price, the meters, and the
                guarantee.
              </p>
            </div>
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-ink">
                  Seven things we put in writing
                </h3>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {commitments.map((c) => (
                    <li key={c.title} className="flex gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-tape"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700">{c.title}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6">
                  <Link
                    href="/pricing#commitments"
                    className="text-sm font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                  >
                    Read all seven in plain language
                  </Link>
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* 8 — Pricing */}
      <section className="bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              One plan. Published price. The homeowner revenue is yours.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {pricingLine} What you charge your homeowners is yours; Afterkey
              never sets or caps it, and takes no platform fee on it.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              It replaces the spreadsheet, the group text, the free
              coordinating, and the warranty module inside{" "}
              {competitorAnchor.name}, which starts at $
              {competitorAnchor.monthlyFrom} a month. It doesn’t replace your
              CRM or your scheduling software; it starts the day those stop.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={signupHref} size="lg">
                {primaryCta}
              </Button>
              <Link
                href="/pricing"
                className="text-sm font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink sm:ml-4"
              >
                Add-ons, processing rates, and the rate lock
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 9 — FAQ, the four a builder asks first */}
      <section className="bg-drywall py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Questions</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                Questions builders ask first
              </h2>
              <p className="mt-4 text-sm text-slate-600">
                <Link
                  href="/faq"
                  className="font-semibold text-tape underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
                >
                  Read all {coreFaqs.length} questions
                </Link>
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={homeFaqs} />
            </div>
          </div>
        </Container>
      </section>

      {/* 10 — CTA. Point 4, in two sentences. */}
      <section className="bg-ink py-20 text-paper sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              A builder with 200 homes on a plan has an asset.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              A builder with a phone full of homeowner texts has a job. Set up
              your first home, add your subs, and put a plan in front of a
              homeowner this week. Self-serve setup, no sales call.{" "}
              {guarantee.short}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                {primaryCta}
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="secondary"
                className="border-paper/40 text-paper hover:border-paper hover:bg-paper/10"
              >
                Ask a question
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
