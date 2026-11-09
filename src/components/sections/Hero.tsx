"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FloatingCode } from "@/components/ui/FloatingCode";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex h-dvh flex-col items-center justify-center overflow-hidden px-(--space-container-x)">
      <GlowBackground />
      <FloatingCode />

      <div className="relative max-w-3xl text-center">
        {/* Availability Status Pill */}
        <div className="mb-7 inline-flex items-center justify-center gap-2.5 rounded-full border border-sky-400/20 bg-[#07131e]/75 px-4 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-sky-300">
            Open to Full Stack Developer roles
          </p>
        </div>

        {/* Main Display Heading */}
        <h1 className="text-display font-semibold tracking-tight text-slate-100">
          <AnimatedText
            text="Hi, I'm Pravin."
            mode="words"
            trigger="mount"
            className="tracking-wider"
          />
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl"
          style={{ animationDelay: prefersReducedMotion ? "0.1s" : "0.7s" }}
        >
          Full Stack Developer building fast, thoughtful products with{" "}
          <span className="text-sky-300">Next.js</span>,{" "}
          <span className="text-sky-300">TypeScript</span> &amp;{" "}
          <span className="text-sky-300">Node.js</span>.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Luminous Cyan CTA */}
          <MagneticButton>
            <a
              href="#projects"
              className="
                group inline-flex items-center gap-2
                rounded-sm bg-sky-400 px-6 py-3.5
                text-sm font-medium text-[#040b12]
                shadow-[0_0_24px_rgba(56,189,248,0.35)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-sky-300
                hover:shadow-[0_0_32px_rgba(125,211,252,0.55)]
              "
            >
              <span>View My Work</span>
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          {/* Secondary Frosted Navy CTA */}
          <MagneticButton>
            <a
              href="#contact"
              className="
                inline-flex items-center rounded-sm
                border border-sky-400/25 bg-[#07131e]/70
                px-6 py-3.5 text-sm font-medium text-slate-100
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-sky-400/60
                hover:bg-[#0a1f33]/85
                hover:text-sky-300
              "
            >
              Let&apos;s Talk
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="animate-bob absolute bottom-10 flex flex-col items-center text-slate-400 transition-colors hover:text-sky-300"
      >
        <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em]">
          Scroll
        </span>
        <ChevronDown size={16} aria-hidden />
      </a>
    </section>
  );
}
