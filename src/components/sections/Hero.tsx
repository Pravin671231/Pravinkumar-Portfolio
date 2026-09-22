"use client";

import { ChevronDown } from "lucide-react";
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
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="hidden md:flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80] animate-pulse" />
          <p className=" font-mono text-sm uppercase tracking-[0.08em] text-accent-blue">
            Open to Full Stack / Frontend Developer roles
          </p>
        </div>

        <h1 className="text-display font-semibold tracking-tight">
          <AnimatedText
            text="Hi, I'm Pravin."
            mode="words"
            trigger="mount"
            className="tracking-wider"
          />
        </h1>
        <p
          className="animate-fade-in mx-auto mt-6 max-w-xl text-lg text-text-muted md:text-xl"
          style={{ animationDelay: prefersReducedMotion ? "0.1s" : "0.7s" }}
        >
          Full Stack Developer building fast, thoughtful products with Next.js,
          TypeScript &amp; Node.js.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
        
          <MagneticButton>
            <a
              href="#projects"
              className="rounded-sm bg-text px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              View My Work
            </a>
          </MagneticButton>

          <a
            href="#contact"
            className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>

      <div className="animate-bob absolute bottom-10 flex flex-col items-center text-text-faint">
        <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em]">
          Scroll
        </span>
        <ChevronDown size={16} aria-hidden />
      </div>
    </section>
  );
}
