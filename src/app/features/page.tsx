import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container, SectionLabel } from '@/components/ui/Container';
import { pillars, differentiators, features } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Three connected portals, stay-ahead automation, and the tools to run post-closing service like a business — SLA tracking, maintenance reminders, photo documentation, cost intelligence, and white-label branding.',
};

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Features</SectionLabel>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Built for post-closing, end to end
            </h1>
            <p className="mt-5 text-balance text-lg text-slate-600">
              Everything you need to handle warranty and service work after the
              keys change hands — organized around the three people who do it.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-16">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.title}>
                <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
                  <div>
                    <IconBox icon={pillar.icon} accent={pillar.accent} />
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                      {pillar.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      {String(idx + 1).padStart(2, '0')} / 03
                    </p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-3">
                    {pillar.points.map((point) => (
                      <Card key={point.title} className="h-full p-5">
                        <IconBox
                          icon={point.icon}
                          accent="slate"
                          className="h-9 w-9"
                        />
                        <h3 className="mt-4 text-base font-semibold text-slate-900">
                          {point.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-600">
                          {point.description}
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

      {/* Feature grid recap */}
      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
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
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why Homefront</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Not generic field-service software
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
      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              See it on your own homes
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Book a 20-minute demo and we’ll walk through your post-closing
              workflow in Homefront.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/demo" size="lg">
                Book a demo
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
