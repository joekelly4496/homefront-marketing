import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { signupUrl, trialLength } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Start your free trial',
  description:
    'Start your 30-day free trial. Create your Homefront account and run your punch list, warranty, and homeowner handoff in minutes. Then $99/month plus $7 per active home.',
};

export default function SignupPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container size="6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Start your free trial
          </h1>
          <p className="mt-4 text-balance text-lg text-slate-600">
            Your first {trialLength.replace('-day', ' days')} are free — no demo,
            no sales call. After that it’s $99/month plus $7 per active home, and
            subcontractors join free.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              src={signupUrl}
              title="Create your Homefront account"
              className="h-[680px] w-full"
            />
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">
            Trouble loading the form?{' '}
            <a
              href={signupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700"
            >
              Open sign-up in a new tab
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
