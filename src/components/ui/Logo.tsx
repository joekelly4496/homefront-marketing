import Link from 'next/link';
import { Home } from 'lucide-react';

export function Logo({
  className = '',
  tone = 'dark',
}: {
  className?: string;
  tone?: 'dark' | 'light';
}) {
  const text = tone === 'light' ? 'text-white' : 'text-slate-900';
  return (
    <Link
      href="/"
      aria-label="Homefront home"
      className={`inline-flex items-center gap-2 ${className}`.trim()}
    >
      <span className="inline-flex w-8 h-8 rounded-lg bg-brand-600 items-center justify-center">
        <Home className="w-[18px] h-[18px] text-white" aria-hidden="true" />
      </span>
      <span className={`text-lg font-semibold tracking-tight ${text}`}>
        Homefront
      </span>
    </Link>
  );
}
