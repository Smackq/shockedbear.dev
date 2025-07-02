'use client';

import Link from 'next/link';
import { Github, Twitter, Dribbble } from 'lucide-react';

export function Footer() {
  return (
    <footer className="shrink-0 max-w-3xl w-full px-4 py-4 border-t border-white/10 text-sm text-muted-foreground">
      <div className="flex items-center justify-between">
        <span>@2025</span>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
          <Link href="https://dribbble.com" target="_blank" aria-label="Dribbble">
            <Dribbble className="w-5 h-5 hover:text-white transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
