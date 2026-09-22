import Link from "next/link";
import { Home } from "lucide-react";
import { brand } from "@/lib/content";

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
      className={`inline-flex items-center gap-2 ${className}`.trim()}
    >
      <span className="inline-flex w-8 h-8 rounded-[6px] bg-brass items-center justify-center">
        <Home className="w-[18px] h-[18px] text-ink" aria-hidden="true" />
      </span>
      <span className={`text-lg font-semibold tracking-tight ${text}`}>
        {brand.name}
      </span>
    </Link>
  );
}
