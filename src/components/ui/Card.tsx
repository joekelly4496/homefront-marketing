import type { ReactNode } from 'react';

export function Card({
  children,
  className = '',
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm ${
        interactive
          ? 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5'
          : ''
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
