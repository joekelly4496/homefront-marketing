import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/content";

/** Minimal footer for ad landing routes: the legal links ad platforms require, nothing else. */
export function LandingFooter() {
  return (
    <footer className="bg-ink">
      <Container size="6xl" className="border-t border-paper/10 py-6">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {brand.legalName} ·{" "}
          <Link href="/privacy" className="hover:text-paper">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link href="/terms" className="hover:text-paper">
            Terms
          </Link>{" "}
          ·{" "}
          <a href={`mailto:${brand.email}`} className="hover:text-paper">
            {brand.email}
          </a>
        </p>
      </Container>
    </footer>
  );
}
