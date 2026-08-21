import { Plus } from 'lucide-react';
import type { Faq } from '@/lib/content';

/**
 * Renders a FAQ list. Each question is a real heading with the answer
 * immediately below it — the structure answer engines extract from — and the
 * answer text ships in the HTML rather than being revealed by JavaScript.
 *
 * Pair with `faqPageSchema(faqs)` so the visible copy and the FAQPage JSON-LD
 * always come from the same source.
 *
 * `headingLevel` keeps the document outline valid: use h2 when the list is the
 * page's own section, h3 when it sits under a section heading.
 */
export function FaqList({
  faqs,
  headingLevel = 'h3',
  defaultOpen = false,
}: {
  faqs: Faq[];
  headingLevel?: 'h2' | 'h3';
  defaultOpen?: boolean;
}) {
  const Heading = headingLevel;

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {faqs.map((faq) => (
        <details key={faq.q} className="group p-6" open={defaultOpen}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <Heading className="text-base font-semibold text-slate-900">
              {faq.q}
            </Heading>
            <Plus
              className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
