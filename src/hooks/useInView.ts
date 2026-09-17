"use client";

import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
  /** Fraction of the element that must be visible to count as "in view". */
  threshold?: number;
  /** Stop observing after the first time it becomes visible. Default true. */
  once?: boolean;
}

export interface UseInView<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  inView: boolean;
}

/**
 * Plain IntersectionObserver hook backing every scroll-triggered reveal
 * (ScrollReveal, AnimatedText's "inView" trigger, Process's per-step line
 * fill, Github's grid fade-in) — no animation library involved, the actual
 * motion is a CSS transition/keyframe the consumer drives off `inView`.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
): UseInView<T> {
  const { threshold = 0.2, once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
