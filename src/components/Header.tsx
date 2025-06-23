'use client';


import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10 flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-lg font-semibold">shockedbear.dev</span>
      </Link>

      <nav className="flex gap-6">
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
          href="/portfolio"
          className={
            "transition-colors hover:text-primary " +
            (pathname === "/portfolio" ? "text-primary font-semibold" : "text-muted-foreground")
          }
        >
          Portfolio
        </Link>
      </nav>
    </header>
  );
}
