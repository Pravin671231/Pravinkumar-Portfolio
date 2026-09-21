"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const STEPS = [
  { n: "01", title: "Understand", body: "Clarify the problem before touching code." },
  { n: "02", title: "Design", body: "Sketch architecture and data flow." },
  { n: "03", title: "Build", body: "Ship in small, testable increments." },
  { n: "04", title: "Test", body: "Verify against real usage, not assumptions." },
  { n: "05", title: "Deploy", body: "Ship with monitoring in place." },
  { n: "06", title: "Improve", body: "Iterate based on real feedback." },
];

function ProcessStep({
  step,
  prefersReducedMotion,
  onVisible,
}: {
  step: (typeof STEPS)[number];
  prefersReducedMotion: boolean;
  onVisible: () => void;
}) {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.3 });
  // Reduced-motion users see every step already revealed — no waiting on scroll.
  const visible = prefersReducedMotion || inView;

  useEffect(() => {
    if (visible) onVisible();
  }, [visible, onVisible]);

  return (
    <li ref={ref} className="reveal-slide relative" data-visible={visible || undefined}>
      <span className="absolute -left-7.25 top-1 h-2.5 w-2.5 rounded-full bg-accent-blue" />
      <p className="mb-1 font-mono text-xs text-text-faint">{step.n}</p>
      <h3 className="mb-1 font-semibold">{step.title}</h3>
      <p className="text-sm text-text-muted">{step.body}</p>
    </li>
  );
}

export function Process() {
  const prefersReducedMotion = useReducedMotion();
  // A continuous scroll-scrubbed fill isn't expressible with IntersectionObserver
  // (binary in/out, not a scroll fraction) — this is a per-step reveal instead:
  // the line fills to (steps revealed / total steps) as each step comes into view.
  const [revealed, setRevealed] = useState<ReadonlySet<number>>(new Set());

  const fill = prefersReducedMotion ? 1 : revealed.size / STEPS.length;

  return (
    <section id="process" className="relative px-(--space-container-x) py-(--space-section-y)">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-accent-blue">
          How I Build
        </p>
        <h2 className="mb-12 text-h1 font-semibold">Process</h2>

        <ol className="relative space-y-10 pl-8">
          <div
            className={cn(
              "absolute bottom-0 left-0 top-0 w-px origin-top bg-accent-blue transition-transform duration-700 ease-out",
              prefersReducedMotion && "transition-none",
            )}
            style={{ transform: `scaleY(${fill})` }}
          />
          {STEPS.map((step, i) => (
            <ProcessStep
              key={step.n}
              step={step}
              prefersReducedMotion={prefersReducedMotion}
              onVisible={() =>
                setRevealed((prev) => (prev.has(i) ? prev : new Set(prev).add(i)))
              }
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
