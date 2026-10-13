import Link from "next/link";
import { brand } from "@/lib/content";
import {
  LOCKUP_MARK_TRANSFORM,
  LOCKUP_VIEWBOX,
  LOCKUP_WORD_TRANSFORM,
  WORDMARK_PATH,
} from "./logo-geometry";

const BRASS = "#B08D42";

/** The Afterkey house-key mark (brass), in its native 240×120 box. */
export function AfterkeyMarkShapes({ color = BRASS }: { color?: string }) {
  return (
    <>
      <circle cx="44" cy="62" r="26" fill="none" stroke={color} strokeWidth="16" />
      <path d="M70 54H214L222 62L214 70H70Z" fill={color} />
      <path
        d="M150 54V32L172 14L194 32V54ZM166 54V40H178V54Z"
        fill={color}
        fillRule="evenodd"
      />
    </>
  );
}

/**
 * The full lockup: house-key mark + lowercase "afterkey" wordmark (outlined
 * Bricolage Grotesque, so it renders identically everywhere). The wordmark
 * takes currentColor so it follows the text color it sits in.
 */
export function AfterkeyLockup({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={LOCKUP_VIEWBOX}
      className={className}
      role="img"
      aria-label={brand.name}
    >
      <g transform={LOCKUP_MARK_TRANSFORM}>
        <AfterkeyMarkShapes />
      </g>
      <path transform={LOCKUP_WORD_TRANSFORM} d={WORDMARK_PATH} fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const text = tone === "light" ? "text-paper" : "text-ink";
  return (
    <Link
      href="/"
      aria-label={`${brand.name} home`}
      className={`inline-flex items-center ${text} ${className}`.trim()}
    >
      <AfterkeyLockup className="h-7 w-auto" />
    </Link>
  );
}
