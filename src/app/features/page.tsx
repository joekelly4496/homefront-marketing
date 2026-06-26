import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Hammer, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import {
  lifecycle,
  builderValue,
  homeownerValue,
  features,
  differentiators,
  signupHref,
  trialLength,
} from '@/lib/content';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Punch list, direct-to-sub dispatch, documented accountability, maintenance plans, and a complete home record — the warranty and homeowner-handoff platform built for home builders.',
};

const halves = [
  {
    icon: Hammer,
    accent: 'brand' as const,
    label: 'The half you pay for',
    title: 'Less work, better reputation',
    blurb:
      'Fewer calls on your phone, a record that protects you, and the visibility to run a tighter operation.',
    items: builderValue,
  },
  {
    icon: Sparkles,
    accent: 'violet' as const,
    label: 'The half that keeps you sticky',
    title: 'A handoff that makes you look premium',
    blurb:
      'Maintenance, who-to-call, and a lasting home record — built to make the builder look great for years.',
    items: homeownerValue,
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Features</SectionLabel>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Get out of the middle. Stay in the loop.
            </h1>
            <p className="mt-5 text-balance text-lg text-slate-600">
              Homefront splits cleanly in two: a builder-facing half that takes
              the work off your desk, and a homeowner-facing half that makes you
              look premium long after closing.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The two halves */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-16">
            {halves.map((half) => (
              <Reveal key={half.title}>
                <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
                  <div>
                    <IconBox icon={half.icon} accent={half.accent} />
                    <Pill color={half.accent} className="mt-4">
                      {half.label}
                    </Pill>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                      {half.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">{half.blurb}</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {half.items.map((item) => (
                      <Card key={item.title} className="h-full p-5">
                        <IconBox icon={item.icon} accent={item.accent} />
                        <h3 className="mt-4 text-base font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-600">
                          {item.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Lifecycle arc */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>The lifecycle</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              One story, across the life of the home
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {lifecycle.map((phase) => (
              <Reveal key={phase.title}>
                <Card className="flex h-full flex-col p-6 sm:p-7">
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

      {/* Toolkit at a glance */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              The toolkit at a glance
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 60}>
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
        </Container>
      </section>

      {/* Differentiators */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why Homefront</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              The one job that drives your referrals
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 60}>
                <Card className="h-full p-6 sm:p-7">
                  <div className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {d.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-600">
                        {d.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Run it on your own homes
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Start your {trialLength} free trial — set up your first home and
              run your punch list today. No demo, no sales call.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={signupHref} size="lg">
                Start free trial
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
