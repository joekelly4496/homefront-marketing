import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Star,
  MonitorSmartphone,
  Smartphone,
  LogIn,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { BuilderDashboard } from '@/components/mockups/BuilderDashboard';
import { PhoneMockup } from '@/components/mockups/PhoneMockup';
import {
  portals,
  steps,
  features,
  stats,
  tiers,
} from '@/lib/content';

const chaos = [
  'Callbacks come in by text, voicemail, and email — with no system of record.',
  'Homeowners go quiet, then leave a one-star review because nobody updated them.',
  'You can’t tell which subs are slow or which jobs are overdue.',
  'Warranty obligations — and the liability that comes with them — slip through the cracks.',
];

const calm = [
  'Every request lands in one place, acknowledged on a deadline.',
  'Homeowners track status themselves and feel taken care of.',
  'You see who’s assigned, what’s overdue, and what it costs at a glance.',
  'Nothing gets forgotten, and every job is documented with photos.',
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <Container size="7xl" className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div>
              <Reveal>
                <Pill color="brand">Built for residential home builders</Pill>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                  Post-closing service, finally organized.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 max-w-xl text-balance text-lg text-slate-600">
                  Homefront keeps builders, homeowners, and subcontractors on
                  the same page — from the first warranty request to the final
                  completion photo.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/demo" size="lg">
                    Book a demo
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button href="/pricing" size="lg" variant="secondary">
                    Start free trial
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-sm text-slate-500">
                  No credit card to start · Subcontractors join free
                </p>
              </Reveal>
            </div>

            <Reveal delay={160} className="relative">
              <BuilderDashboard />
              <div className="absolute -bottom-8 -right-2 hidden sm:block lg:-right-6">
                <PhoneMockup />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Problem and solution */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>The problem</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              The work doesn’t stop at closing. Your system shouldn’t either.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Most builders run post-closing service on texts, spreadsheets, and
              voicemails. Here’s the difference a real system of record makes.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <IconBox icon={XCircle} accent="red" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    The chaos before
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {chaos.map((item) => (
                    <li key={item} className="flex gap-3">
                      <XCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-red-400"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={80}>
              <Card className="h-full border-brand-200 bg-brand-50/40 p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <IconBox icon={CheckCircle2} accent="emerald" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    The calm after
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {calm.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Three portals */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>One platform, three sides</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Every warranty request, handled
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Builders, homeowners, and the subs who do the work — connected in
              one system instead of a dozen group texts.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {portals.map((portal, i) => (
              <Reveal key={portal.name} delay={i * 80}>
                <Card interactive className="h-full p-6 sm:p-7">
                  <IconBox icon={portal.icon} accent={portal.accent} />
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {portal.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {portal.tagline}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {portal.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-600">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              From request to completion photo, in four steps
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <div className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <IconBox icon={step.icon} accent="slate" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature grid */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Everything in one place</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Nothing slips through the cracks
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The tools that turn post-closing service from a liability into a
              reason homeowners refer you.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 70}>
                <Card interactive className="h-full p-6">
                  <IconBox icon={feature.icon} accent={feature.accent} />
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Explore all features
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Co-branding + install */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionLabel>Your reputation</SectionLabel>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900">
                Looks like your service, runs on Homefront
              </h2>
              <p className="mt-4 text-base text-slate-600">
                The homeowner portal leads with your company name, with a light
                “powered by Homefront” underneath. Homeowners stay in your world
                during warranty season — one brand they trust, doing the
                unglamorous work of service well.
              </p>
              <p className="mt-4 text-base text-slate-600">
                It’s the reputation win without the busywork: every update,
                photo, and approval happens in a portal that feels like an
                extension of the home you built.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <Card className="p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Nothing to install
                </p>
                <ul className="mt-5 space-y-5">
                  <li className="flex gap-4">
                    <IconBox icon={MonitorSmartphone} accent="brand" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Works on any device
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Desktop, tablet, phone — the same portal everywhere.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <IconBox icon={Smartphone} accent="brand" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Add it to your home screen in two taps
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        No download, no app store — just a clean link.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <IconBox icon={LogIn} accent="brand" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Opens straight to your portal
                      </p>
                      <p className="mt-1 text-sm text-slate-600">
                        Builders, homeowners, and subs each land in the right
                        place automatically.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Outcomes / stats band */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-brand-700 px-6 py-12 sm:px-12 sm:py-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Better service, better reviews, fewer dropped balls
                </h2>
                <p className="mt-3 text-base text-brand-100">
                  What builders see when post-closing service finally has a home.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-semibold text-white sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-sm text-brand-100">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-brand-200">
                Placeholder figures — edit before launch.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-6 text-balance text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl">
              “We went from chasing warranty calls all week to a list everyone
              can see. Our homeowners stopped wondering what was happening — and
              our reviews show it.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                Placeholder Name
              </span>
              , Warranty Manager · Placeholder Homes
            </figcaption>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
              Trusted by residential builders
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {['Northgate', 'Birchwood', 'Summit Built', 'Harbor Homes'].map(
                (name) => (
                  <div
                    key={name}
                    className="flex h-14 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm font-semibold text-slate-400"
                  >
                    {name}
                  </div>
                )
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Pricing preview */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Simple plans that scale with your volume
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Start free. Subcontractors always join free. Upgrade as you grow.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={(i % 4) * 60}>
                <Card
                  className={`relative flex h-full flex-col p-6 ${
                    tier.popular ? 'border-brand-300 ring-1 ring-brand-200' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Pill color="brand">Most popular</Pill>
                    </div>
                  )}
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {tier.name}
                  </h3>
                  <p className="mt-3">
                    <span className="text-3xl font-semibold tracking-tight text-slate-900">
                      ${tier.price}
                    </span>
                    <span className="text-sm text-slate-500">/mo</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{tier.blurb}</p>
                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
                    {tier.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-600">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/demo"
                    variant={tier.popular ? 'primary' : 'secondary'}
                    className="mt-6 w-full"
                  >
                    Start free trial
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              See full pricing & feature comparison
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Stop chasing callbacks. Start running it like a business.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              See how Homefront organizes your post-closing service in one place
              — and what it does for your reviews, your subs, and your time.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/demo" size="lg">
                Book a demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                Start free trial
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
