import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container size="6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            404
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            We couldn’t find that page
          </h1>
          <p className="mt-4 text-base text-slate-600">
            The page may have moved. Let’s get you back on track.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/demo" size="lg" variant="secondary">
              Book a demo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
