'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative max-w-3xl w-full">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <Link href="/" className="text-lg font-medium hover:text-white transition-colors">
                    shockedbear.dev
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-row items-center justify-between gap-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                "text-md font-normal hover:text-white transition-colors " +
                                (pathname === item.href ? "text-primary" : "text-white/60")
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2 text-white/70">
                    <Link href="https://github.com" target="_blank" aria-label="GitHub">
                        <Github className="w-5 h-5 hover:text-white transition-colors" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/denissmagin/" target="_blank" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white/60 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6">
                        <Menu className={`w-6 h-6 absolute transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                        }`} />
                        <X className={`w-6 h-6 absolute transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                        }`} />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 md:hidden
                transform transition-all duration-300 ease-in-out overflow-hidden ${
                isMenuOpen 
                    ? 'opacity-100 translate-y-0 max-h-[400px]' 
                    : 'opacity-0 -translate-y-2 max-h-0'
            }`}>
                <nav className="flex flex-col p-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`py-2 text-md font-normal hover:text-white transition-all duration-300 ease-in-out
                                transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                                ${pathname === item.href ? 'text-primary' : 'text-white/60'}
                            `}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className={`flex gap-4 pt-4 border-t border-white/10 mt-4
                        transform transition-all duration-300 ease-in-out
                        ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        style={{
                            transitionDelay: `${menuItems.length * 100}ms`
                        }}
                    >
                        <Link href="https://github.com" target="_blank" aria-label="GitHub">
                            <Github className="w-5 h-5 hover:text-white transition-colors" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/denissmagin/" target="_blank" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}