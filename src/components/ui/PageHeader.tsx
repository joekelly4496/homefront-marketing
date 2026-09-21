import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <section className="border-b border-drywall bg-paper">
      <Container className="py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="text-sm font-medium text-tape">{eyebrow}</p>
          )}
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-balance text-lg text-slate-600">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
