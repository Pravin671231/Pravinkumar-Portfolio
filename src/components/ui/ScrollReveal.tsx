"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  duration,
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  if (prefersReducedMotion) {
    // Skip animation entirely — render already in final state, no flash, and
    // no need to wait on scroll for reduced-motion users.
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn("transition-[opacity,transform] ease-out-expo", className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transitionDuration: duration !== undefined ? `${duration}s` : "var(--duration-slow)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
