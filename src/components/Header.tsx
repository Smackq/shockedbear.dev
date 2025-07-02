'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="shrink-0 max-w-3xl w-full px-4 py-3 border-b border-white/10 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-semibold">shockedbear.dev</span>
      </Link>

      <nav className="flex gap-2 text-xs sm:gap-4 sm:text-base">
        <Link
          href="/"
          className={
            "transition-colors hover:text-primary " +
            (pathname === "/" ? "text-primary font-semibold" : "text-muted-foreground")
          }
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={
            "transition-colors hover:text-primary " +
            (pathname === "/projects" ? "text-primary font-semibold" : "text-muted-foreground")
          }
        >
          Projects
        </Link>
        <Link
          href="/writings"
          className={
            "transition-colors hover:text-primary " +
            (pathname === "/writings" ? "text-primary font-semibold" : "text-muted-foreground")
          }
        >
          Writings
        </Link>
      </nav>
    </header>
  );
}
