'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";

export function Header () {

    const pathname = usePathname();
    const menuItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Projects",
            href: "/projects",
        }
    ].map((item) => (
        <Link
            key={ item.href }
            href={ item.href }
            className={
                "text-md font-normal hover:text-white transition-colors " +
                (pathname === item.href ? "text-primary" : "text-white/60")
            }
        >
            { item.label }
        </Link>
    ))

    return (
        <header className="max-w-3xl w-full px-6 py-4 border-b border-white/10 flex items-center justify-between gap-12">
            <Link href="/" className="text-lg font-medium hover:text-white transition-colors">shockedbear.dev</Link>
            <nav className="flex flex-row items-center justify-between gap-6">
                { menuItems }
            </nav>
            <div className="flex items-center gap-2 text-white/70">
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                    <Github className="w-5 h-5 hover:text-white transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/denissmagin/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
                </Link>
            </div>
        </header>
    );
}
