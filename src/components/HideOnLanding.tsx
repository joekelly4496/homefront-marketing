"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { adLanding, welcomePath } from "@/lib/content";

/** Routes that are ad destinations: no site navigation, no footer, no exits. */
export function isLandingPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname === adLanding.path || pathname.startsWith(`${adLanding.path}/`);
}

/** The homeowner welcome page: the builder's page, with Afterkey in the background. */
export function isWelcomePath(pathname: string | null): boolean {
  return pathname === welcomePath;
}

/** Renders its children everywhere except on ad landing and welcome routes. */
export function HideOnLanding({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (isLandingPath(pathname) || isWelcomePath(pathname)) return null;
  return <>{children}</>;
}
