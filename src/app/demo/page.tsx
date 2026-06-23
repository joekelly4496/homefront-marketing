import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { DemoForm } from './DemoForm';

export const metadata: Metadata = {
  title: 'Book a demo',
  description:
    'Book a 20-minute demo and see how Homefront organizes your post-closing warranty and service work in one place.',
};

const points = [
  'A walkthrough of the builder, homeowner, and subcontractor portals',
  'How SLA tracking and reminders keep requests from slipping',
  'How cost intelligence shows what your service work really costs',
  'A plan that fits your volume — with a free trial to start',
];

export default function DemoPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container size="7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              See Homefront on your homes
            </h1>
            <p className="mt-5 text-balance text-lg text-slate-600">
              Book a 20-minute demo and we’ll show you exactly how to organize
              your post-closing service — from the first warranty request to the
              final completion photo.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-slate-600">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <DemoForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
