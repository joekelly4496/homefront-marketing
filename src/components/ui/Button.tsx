import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ink" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[6px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tape disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Brass is the accent the brand is named for — spent on the primary CTA only.
  primary: "bg-brass text-ink hover:bg-brass-dark hover:text-paper",
  // Ink is the everyday solid button (nav, forms) so brass stays rare.
  ink: "bg-ink text-paper hover:bg-tape",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-drywall/60",
  ghost: "text-ink hover:bg-drywall/60",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className = "",
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
} & ComponentProps<"button">;

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
