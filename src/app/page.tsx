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
import { RepairPaySteps } from "@/components/RepairPaySteps";
import { graph, faqPageSchema, webPageSchema } from "@/lib/schema";
import {
  brand,
  steps,
  commitments,
  coreFaqs,
  pricing,
  pricingLine,
  planFraming,
  processingLine,
  whiteLabelPoints,
  signupHref,
  trial,
  primaryCta,
  competitorAnchor,
  thesis,
  callbackPoints,
  afterHours,
  dailyBrief,
  classification,
  onboarding,
} from "@/lib/content";

/** The three points the opening section carries; billing gets its own. */
const leadPoints = callbackPoints.filter((p) =>
  ["straight-to-sub", "clock", "status"].includes(p.id),
);

/** What the homeowner sees — the consumer side, in four lines. */
const homeownerGets = [
  "A portal under your name to submit a request with photos and two sentences",
  "The status of every request, and a thread with the sub, without calling you",
  classification.homeowner,
  "Their documents, maintenance reminders, and service history in one place, for the life of the home",
];

/** The FAQs surfaced on the home page — the four a builder asks first. */
const homeFaqs = coreFaqs.filter((f) =>
  [
    "If requests go straight to the sub, how do I know what’s happening?",
    "What happens when a homeowner submits a request after hours?",
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
              For home builders and remodelers
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-[3.5rem]">
              {thesis.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Homeowners send the request with photos through your portal. It
              goes straight to the sub for that trade, on a response clock,
              and you’re only pulled in when something needs you. All under
              your name.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                {primaryCta}
              </Button>
              <Button
                href="#how-it-works"
                size="lg"
                variant="secondary"
                className="border-paper/40 text-paper hover:border-paper hover:bg-paper/10"
              >
                See how a callback runs
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
              <li className="tabular-nums">
                <span className="font-semibold text-paper">
                  From ${pricing.startingPrice}/month
                </span>{" "}
                for up to {pricing.plans[0].homes} active homes
              </li>
              <li className="border-l border-paper/25 pl-5">No contracts</li>
              <li className="border-l border-paper/25 pl-5">
                {trial.headline}
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-400">{planFraming}</p>
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

      {/* 2 — What changes. The definition, the three callback points, and
          the two things that keep running when you aren't looking. */}
      <section
        id="every-callback"
        className="scroll-mt-24 bg-paper pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40"
      >
        <Container size="7xl">
          <div className="max-w-2xl">
            <SectionLabel>What changes</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Every callback, out of your phone and onto a record
            </h2>
            {/* The definition, quotable without context. */}
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              <strong className="font-semibold text-ink">
                {brand.definition}
              </strong>{" "}
              {thesis.supporting}
            </p>
          </div>

          <div className="mt-12 grid gap-x-16 gap-y-8 lg:grid-cols-3">
            {leadPoints.map((point) => (
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

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-semibold tracking-tight text-ink">
                {afterHours.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {afterHours.points.map((line) => (
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
            <div className="lg:col-span-5">
              <Card className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-ink">
                  {dailyBrief.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {dailyBrief.body}
                </p>
              </Card>
            </div>
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
              Homeowner’s phone to your sub’s list and back, without you in
              the middle. You’re notified, not asked.
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
                builder’s name on the portal they send requests through.
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
                A sub opens each job from a link, no app and no login: the
                address, the issue, the homeowner’s photos, and the home’s
                history. He accepts it, schedules it, taps a status from the
                driveway, and can’t close it without completion photos. On a
                paid job, his share arrives without him invoicing anyone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                The homeowner says nobody came; the sub says he called. Now
                there’s a record, so you don’t eat the second trip. Subs use
                it free, and unlimited subs are included in every plan.
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

      {/* 6 — Billable callbacks. When it isn't warranty, it gets priced,
          approved by the homeowner, and paid through the portal. */}
      <section id="billable" className="scroll-mt-24 bg-paper py-20 sm:py-28">
        <Container size="7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>When it isn’t warranty</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                The callback that isn’t warranty doesn’t have to be a favor
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                The dryer vent, the hose bib left open, the TV mount. Today
                you coordinate it for nothing and the sub bills the homeowner
                direct. On {brand.name} it runs through the same request: the
                sub quotes it, your markup goes on top, and the homeowner
                approves the price before anything is charged.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {processingLine}{" "}
                <Link
                  href="/pricing"
                  className="font-semibold text-tape underline decoration-brass decoration-2 underline-offset-2 hover:text-ink"
                >
                  See pricing
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-ink">
                  How a billable repair gets paid
                </h3>
                <RepairPaySteps className="mt-5" />
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
                we can put in writing is the price, the meters, and a free
                month to try it on your own homes.
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
              Plans by size. Published prices. No quote calls.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {pricingLine} The markup you charge on a billable repair is
              yours; Afterkey never sets it, and takes no platform fee on it.
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

      {/* 10 — CTA */}
      <section className="bg-ink py-20 text-paper sm:py-28">
        <Container size="7xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              The next callback can skip your cell.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Set up your first home, add your subs, and let the next request
              go straight to the trade. {onboarding.short} {trial.short}
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
