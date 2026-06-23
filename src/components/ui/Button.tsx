import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary:
    'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400',
  ghost: 'text-slate-700 hover:text-slate-900 hover:bg-slate-100',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export function buttonVariants({
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

type ButtonAsButton = {
  href?: undefined;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
} & ComponentProps<'button'>;

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if (props.href !== undefined) {
    const { href, variant, size, className, children, external } = props;
    const classes = buttonVariants({ variant, size, className });
    if (external) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant, size, className, children, ...rest } = props;
  return (
    <button className={buttonVariants({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
