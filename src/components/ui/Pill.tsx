import type { ReactNode } from 'react';

export type PillColor =
  | 'brand'
  | 'emerald'
  | 'amber'
  | 'red'
  | 'violet'
  | 'slate';

const colors: Record<PillColor, string> = {
  brand: 'bg-brand-50 text-brand-700 border-brand-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  violet: 'bg-violet-50 text-violet-700 border-violet-200',
  slate: 'bg-slate-50 text-slate-700 border-slate-200',
};

export function Pill({
  children,
  color = 'brand',
  className = '',
}: {
  children: ReactNode;
  color?: PillColor;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colors[color]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
