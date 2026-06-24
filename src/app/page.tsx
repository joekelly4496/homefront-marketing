import Link from 'next/link';
import { ArrowRight, CheckCircle2, XCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { BuilderDashboard } from '@/components/mockups/BuilderDashboard';
import { PhoneMockup } from '@/components/mockups/PhoneMockup';
import {
  lifecycle,
  builderValue,
  homeownerValue,
  steps,
  pricingModel,
  signupHref,
} from '@/lib/content';

const helpDesk = [
  'Every callback comes straight to your phone — at dinner, on a jobsite, on the weekend.',
  'Homeowners feel ignored when they can’t reach you, and it shows up in your reviews.',
  'You’re relaying messages between homeowners and subs with no record of who said what.',
  'A slow sub becomes your problem, and you have nothing to show where the delay really sat.',
];

const calm = [
  'Homeowners reach the sub who did the work directly — your phone stops ringing.',
  'You look responsive because every request is tracked and nothing gets dropped.',
  'Every dispatch is timestamped, so the record shows exactly what happened and when.',
  'Each buyer walks away with a complete home record that makes you look premium for years.',
];

const promise = [
  {
    title: 'Off your desk',
    description:
      'Routine warranty calls go to the right sub, not to you. You monitor; you don’t firefight.',
  },
  {
    title: 'On the record',
    description:
      'Every request and dispatch is documented, so responsiveness is something you can prove.',
  },
  {
    title: 'Always yours',
    description:
      'A maintenance plan and home record that keep making you look premium long after closing.',
  },
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
                <Pill color="brand">For residential home builders</Pill>
              </Reveal>
              <Reveal delay={60}>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                  Build homes. Not a help desk.
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 max-w-xl text-balance text-lg text-slate-600">
                  After closing, homeowners go straight to the right sub — not
                  straight to your phone. Every request is tracked, every handoff
                  documented, and every buyer gets a complete home record that
                  makes you look great for years. Homefront takes the warranty
                  headache off your desk without taking you out of the loop.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={signupHref} size="lg">
                    Get started
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button href="/features" size="lg" variant="secondary">
                    See how it works
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-sm text-slate-500">
                  Your phone stops ringing · Your reviews go up
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
              Somewhere after closing, you became the help desk
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The work doesn’t stop when the keys change hands — and right now
              all of it runs through your phone. Here’s what changes when you get
              out of the middle.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <IconBox icon={XCircle} accent="red" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    You, in the middle
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {helpDesk.map((item) => (
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
                    You, out of the middle
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

      {/* Lifecycle arc */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>One tool, the whole life of the home</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              From punch list to lasting handoff
            </h2>
            <p className="mt-4 text-base text-slate-600">
              You start using Homefront the day you walk a finished home — and it
              keeps working for you long after the warranty ends.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {lifecycle.map((phase, i) => (
              <Reveal key={phase.title} delay={i * 80}>
                <Card interactive className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <IconBox icon={phase.icon} accent={phase.accent} />
                    <Pill color={phase.accent}>{phase.stage}</Pill>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {phase.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {phase.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {phase.points.map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-600">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Builder value */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>What you get</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Less work. Better reputation.
            </h2>
            <p className="mt-4 text-base text-slate-600">
              This is the half you pay for: fewer calls on your phone, a record
              that protects you, and the visibility to run a tighter operation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {builderValue.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <Card interactive className="h-full p-6 sm:p-7">
                  <IconBox icon={item.icon} accent={item.accent} />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Homeowner value */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>What your buyers walk away with</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              The handoff that makes you look premium
            </h2>
            <p className="mt-4 text-base text-slate-600">
              This is the half that keeps you sticky. It’s built to make the
              builder look great — and it works on any phone, with nothing to
              download.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {homeownerValue.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Card interactive className="h-full p-6 sm:p-7">
                  <IconBox icon={item.icon} accent={item.accent} />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              When something breaks
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
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

      {/* Promise band */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <div className="rounded-3xl bg-brand-700 px-6 py-12 sm:px-12 sm:py-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Your phone stops ringing. Your reviews go up.
                </h2>
                <p className="mt-3 text-base text-brand-100">
                  You’re not buying software. You’re buying relief — and a
                  reputation that takes care of itself.
                </p>
              </div>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                {promise.map((p) => (
                  <div key={p.title} className="text-center">
                    <p className="text-lg font-semibold text-white">{p.title}</p>
                    <p className="mt-1.5 text-sm text-brand-100">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
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
              “My phone used to ring all weekend. Now the homeowner calls the sub
              who did the work, I can see it’s handled, and our buyers tell us the
              home record is the most professional thing they’ve been handed.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                Placeholder Name
              </span>
              , Owner · Placeholder Homes
            </figcaption>
          </Reveal>

          <Reveal delay={120} className="mt-14">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
              Built for production and custom home builders
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
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              The job that drives referrals — for a fraction of the price
            </h2>
            <p className="mt-4 text-base text-slate-600">
              All-in-one platforms bury warranty in an expensive tier full of
              tools you’ll never use. Homefront is $99 a month plus $7 per active
              home — so you only pay for the homes you’re servicing.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {pricingModel.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <Card className="h-full p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {point.title}
                  </p>
                  <p className="mt-2">
                    <span className="text-3xl font-semibold tracking-tight text-slate-900">
                      {point.price}
                    </span>
                    <span className="text-sm text-slate-500">{point.unit}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {point.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4">
            <p className="text-center text-sm text-slate-500">
              Subcontractors always join free. SMS notifications coming soon.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={signupHref} size="lg">
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              See full pricing
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
              Get the warranty headache off your desk
            </h2>
            <p className="mt-4 text-base text-slate-600">
              See how Homefront gets you out of the middle, keeps your reputation
              on the record, and hands every buyer a premium experience.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Get started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/pricing" size="lg" variant="secondary">
                See pricing
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
