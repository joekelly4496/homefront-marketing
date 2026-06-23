import type { Metadata } from 'next';
import { ArrowRight, Hammer, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Homefront is built for residential home builders who care about what happens after closing — replacing texts, spreadsheets, and voicemails with one system of record.',
};

const values = [
  {
    icon: Hammer,
    title: 'Built for builders',
    description:
      'We started with one question: where does post-closing service actually break down? Then we built the tool to fix it — not a generic platform bent to fit.',
  },
  {
    icon: Heart,
    title: 'Homeowners first',
    description:
      'A homeowner who feels taken care of is a referral. Self-service and proactive updates protect the reputation you spent years building.',
  },
  {
    icon: ShieldCheck,
    title: 'Accountability, not chaos',
    description:
      'Deadlines, documentation, and a clear record of who did what. Service work you can stand behind — and prove.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Post-closing service deserves a real system"
        subtitle="Homefront replaces the texts, spreadsheets, and voicemails builders use to manage warranty work with one platform that connects builders, homeowners, and subcontractors."
      />

      <section className="py-20 sm:py-24">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <div className="space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                After a homeowner gets the keys, the builder is still on the hook
                for warranty and service requests. For most builders, that work
                runs on whatever’s within reach — a group text here, a
                spreadsheet there, a voicemail nobody returns. It works until it
                doesn’t, and the cost shows up as bad reviews, lost referrals,
                and liability that slips through the cracks.
              </p>
              <p>
                Homefront brings that work into one place. Homeowners submit
                requests and track them. Builders see every home, every request,
                and every subcontractor at a glance. Subs get their jobs on their
                phone and update them from the field. Everyone stays on the same
                page, and every job is documented from the first photo to the
                last.
              </p>
              <p>
                The result is service work you can run like a business — and a
                homeowner experience that carries your brand, not ours.
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
              See what organized looks like
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
