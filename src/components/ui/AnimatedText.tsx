"use client";

import type { CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  mode?: "chars" | "words";
  trigger?: "mount" | "inView";
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

export function AnimatedText({
  text,
  mode = "words",
  trigger = "mount",
  delay = 0,
  staggerChildren,
  className,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const stagger = staggerChildren ?? (mode === "chars" ? 0.035 : 0.08);
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.2 });
  // `animation-delay` handles the "mount" wait on its own — nothing plays
  // before scroll only when trigger is "inView".
  const visible = trigger === "mount" ? true : inView;

  if (prefersReducedMotion) {
    // Structurally simpler fallback: plain opacity fade, no mask/stagger.
    return (
      <span
        ref={trigger === "inView" ? ref : undefined}
        className={cn("reveal-fade inline-block", className)}
        data-visible={visible || undefined}
        style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
      >
        {text}
      </span>
    );
  }

  const units = mode === "words" ? text.split(" ") : text.split("");

  return (
    <span
      ref={trigger === "inView" ? ref : undefined}
      className={cn("inline-block", className)}
    >
      {units.map((unit, index) => (
        <span key={`${unit}-${index}`} className="inline-block overflow-hidden align-top">
          <span
            className="reveal-unit inline-block"
            data-visible={visible || undefined}
            style={
              {
                "--i": index,
                "--stagger": `${stagger}s`,
                "--reveal-delay": `${delay}s`,
              } as CSSProperties
            }
          >
            {unit === " " ? " " : unit}
            {mode === "words" && index < units.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
