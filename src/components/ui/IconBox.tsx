import type { LucideIcon } from 'lucide-react';

export type Accent = 'brand' | 'emerald' | 'amber' | 'red' | 'violet' | 'slate';

// Full class strings so Tailwind can detect them at build time.
const accentClasses: Record<Accent, string> = {
  brand: 'bg-brand-50 text-brand-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
  red: 'bg-red-50 text-red-600',
  violet: 'bg-violet-50 text-violet-600',
  slate: 'bg-slate-100 text-slate-600',
};

export function IconBox({
  icon: Icon,
  accent = 'brand',
  className = '',
}: {
  icon: LucideIcon;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex w-10 h-10 rounded-xl items-center justify-center ${accentClasses[accent]} ${className}`.trim()}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </span>
  );
}
