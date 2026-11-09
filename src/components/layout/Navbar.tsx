"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  // { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "animate-fade-in fixed inset-x-0 top-0 border-b transition-all duration-300",
        scrolled
          ? "border-sky-400/15 bg-[#040b12]/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
      style={{ zIndex: "var(--z-nav)" }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        {/* Brand Logo with subtle cyan accent */}
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-widest text-slate-100 transition-colors hover:text-sky-400"
        >
          PRAVINKUMAR <span className="text-sky-400">K</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-sky-500 font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
