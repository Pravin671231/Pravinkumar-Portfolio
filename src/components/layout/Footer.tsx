"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-sky-400/15 bg-[#040b12]/80 px-6 py-10 backdrop-blur-md">
      {/* Subtle Top Luminous Hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/45 to-transparent"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-sm text-slate-400 md:flex-row">
        {/* Matching Developer Tag Brand Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 rounded-lg border border-sky-400/20 bg-[#07131e]/80 px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-slate-100 transition-all duration-300 hover:border-sky-400/50 hover:bg-[#0a1f33] hover:shadow-[0_0_18px_rgba(56,189,248,0.2)]"
        >
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

        {/* Social & Contact Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Pravin671231"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-sky-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pravinkumar31"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-sky-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pravinkumar671231@gmail.com"
            className="transition-colors duration-200 hover:text-sky-300"
          >
            Email
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-slate-500">
            © 2026 Pravinkumar K
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-sky-400/20 bg-[#07131e]/80 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/50 hover:text-sky-300"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
