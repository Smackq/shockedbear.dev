'use client';

import Link from 'next/link';

export function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer className="max-w-3xl w-full px-6 py-4 border-t border-white/10 flex flex-row items-center justify-between">
            <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">© { year } shockedbear.dev | All right reserved</Link>
        </footer>
    );
}
