import { Reveal } from '@/components/ui/Reveal';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';

export type LegalSection = { heading: string; body: string };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  disclaimer,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  disclaimer: string;
}) {
  return (
    <>
      <PageHeader title={title} subtitle={intro} />
      <section className="py-16 sm:py-20">
        <Container size="6xl">
          <Reveal className="mx-auto max-w-3xl">
            <p className="text-sm text-slate-500">Last updated: {updated}</p>
            <div className="mt-8 space-y-8">
              {sections.map((section, i) => (
                <div key={section.heading}>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {i + 1}. {section.heading}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-12 rounded-xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-500">
              {disclaimer}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
