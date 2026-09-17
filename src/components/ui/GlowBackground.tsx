"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const MAX_PARALLAX = 18; // px, within the 15-20px range from docs/DESIGN-TOKENS.md

interface GlowBackgroundProps {
  className?: string;
}

// Normalize a raw viewport coordinate to a small clamped offset around center.
function parallax(value: number, extent: number): number {
  if (extent <= 0) return 0;
  const offset = (value / extent - 0.5) * MAX_PARALLAX * 2;
  return Math.max(-MAX_PARALLAX, Math.min(MAX_PARALLAX, offset));
}

export function GlowBackground({ className }: GlowBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;

    // CSS-custom-property pattern: no React state, just an imperative write;
    // the `var(--glow-x, 0px)` fallback in globals.css keeps SSR and the
    // pre-interaction client render identical.
    const handleMove = (event: MouseEvent) => {
      const el = rootRef.current;
      if (!el) return;
      el.style.setProperty("--glow-x", `${parallax(event.clientX, window.innerWidth)}px`);
      el.style.setProperty("--glow-y", `${parallax(event.clientY, window.innerHeight)}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReducedMotion]);

  return (
    <div
      ref={rootRef}
      data-testid="glow-parallax"
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
    >
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <div
        data-testid="glow-blob"
        className="glow-blob glow-blob-a absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-accent-blue opacity-[0.06] blur-[90px]"
      />
      <div className="glow-blob glow-blob-b absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-accent-cyan opacity-[0.05] blur-[90px]" />
    </div>
  );
}
