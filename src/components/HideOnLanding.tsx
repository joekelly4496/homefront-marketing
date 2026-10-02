"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { adLanding } from "@/lib/content";

/** Routes that are ad destinations: no site navigation, no footer, no exits. */
export function isLandingPath(pathname: string | null): boolean {
  return pathname === adLanding.path;
}

/** Renders its children everywhere except on ad landing routes. */
export function HideOnLanding({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (isLandingPath(pathname)) return null;
  return <>{children}</>;
}
