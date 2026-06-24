import type { Metadata } from 'next';
import { ArrowRight, PhoneOff, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Homefront is the warranty and homeowner-handoff platform for home builders. It moves post-closing requests off the builder’s phone and onto a tracked system — less work for the builder, a better experience for the homeowner.',
};

const values = [
  {
    icon: PhoneOff,
    title: 'Off your desk',
    description:
      'The default after closing shouldn’t be your phone. Homeowners reach the right sub directly, and you monitor instead of fielding every call.',
  },
  {
    icon: ShieldCheck,
    title: 'Documented, not adversarial',
    description:
      'The record protects everyone. You look responsive because you are — and when a delay isn’t on you, the history simply shows where it sat.',
  },
  {
    icon: Heart,
    title: 'A premium handoff',
    description:
      'A maintenance plan, the subs who did the work, and a complete home record the buyer keeps. You handed over something premium, not a drawer full of manuals.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Stop being your homeowners’ help desk"
        subtitle="Homefront is the warranty and homeowner-handoff platform for home builders — built to take post-closing requests off your phone and protect the reputation you’ve worked years to earn."
      />

      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <div className="space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                After closing, the builder is still on the hook for warranty and
                service requests — and for most builders, all of it runs through
                their phone. The calls come at dinner and on the weekend. A slow
                sub becomes the builder’s problem. And the cost shows up as bad
                reviews and lost referrals.
              </p>
              <p>
                Homefront moves post-closing requests off the builder’s phone and
                onto a tracked system. Homeowners reach the right sub directly,
                builders monitor instead of firefight, and every buyer walks away
                with a complete, lasting record of their home — every request
                timestamped, every dispatch logged.
              </p>
              <p>
                Less work for the builder, a better experience for the homeowner,
                and a reputation that takes care of itself.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <Card className="h-full p-6">
                  <IconBox icon={v.icon} accent="brand" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    {v.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Get out of the middle
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Book a demo and we’ll walk through Homefront on your own homes.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/demo" size="lg">
                Book a demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/features" size="lg" variant="secondary">
                Explore features
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
