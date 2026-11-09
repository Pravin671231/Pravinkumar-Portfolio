"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  // { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="animate-fade-in fixed inset-x-0 top-0 px-4 pt-3 md:px-6 md:pt-4"
      style={{ zIndex: "var(--z-nav)" }}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300 md:px-6",
          scrolled || mobileOpen
            ? "border-sky-400/20 bg-[#040b12]/80 shadow-[0_8px_32px_rgba(0,0,0,0.55),0_0_20px_rgba(56,189,248,0.08)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        {/* Modern Developer Tag Brand Logo */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="group relative inline-flex items-center gap-1.5 rounded-lg border border-sky-400/25 bg-[#07131e]/80 px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-slate-100 shadow-[0_0_15px_rgba(56,189,248,0.12)] transition-all duration-300 hover:border-sky-400/60 hover:bg-[#0a1f33] hover:shadow-[0_0_22px_rgba(56,189,248,0.3)] md:text-sm"
        >
          {/* Subtle Top Accent Shimmer */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <span className="text-sky-400 transition-transform duration-300 group-hover:-translate-x-0.5">
            &lt;
          </span>
          <span className="uppercase text-slate-100">
            Pravinkumar <span className="text-sky-400">K</span>
          </span>
          <span className="text-sky-400 transition-transform duration-300 group-hover:translate-x-0.5">
            /&gt;
          </span>
        </Link>

        {/* Desktop Navigation Links with Sliding Glow Underline */}
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-1 font-medium text-slate-300 transition-colors duration-200 hover:text-sky-300"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Quick CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg border border-sky-400/30 bg-sky-400/10 px-3.5 py-1.5 font-mono text-xs font-medium text-sky-300 transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-[#040b12] hover:shadow-[0_0_16px_rgba(56,189,248,0.4)] md:inline-flex"
          >
            Hire Me
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-sky-400/20 bg-[#07131e]/80 text-slate-200 transition-colors hover:border-sky-400/50 hover:text-sky-300 md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-5xl rounded-xl border border-sky-400/20 bg-[#040b12]/95 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-mono text-sm text-slate-300 transition-colors hover:bg-sky-400/10 hover:text-sky-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
