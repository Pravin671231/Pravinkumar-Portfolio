"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    body: "Clarify the problem before touching code.",
  },
  {
    n: "02",
    title: "Design",
    body: "Sketch architecture and data flow.",
  },
  {
    n: "03",
    title: "Build",
    body: "Ship in small, testable increments.",
  },
  {
    n: "04",
    title: "Test",
    body: "Verify against real usage, not assumptions.",
  },
  {
    n: "05",
    title: "Deploy",
    body: "Ship with monitoring in place.",
  },
  {
    n: "06",
    title: "Improve",
    body: "Iterate based on real feedback.",
  },
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
  const { ref, inView } = useInView<HTMLLIElement>({
    threshold: 0.3,
  });

  const visible = prefersReducedMotion || inView;

  useEffect(() => {
    if (visible) onVisible();
  }, [visible, onVisible]);

  return (
    <li
      ref={ref}
      className="reveal-slide group relative"
      data-visible={visible || undefined}
    >
      {/* Step Number */}
      <span
        className="
          absolute left-[-2.05rem] top-5 z-10
          flex h-4 w-4 items-center justify-center
          rounded-full border-4 border-bg
          bg-accent-blue
          transition-all duration-300
          group-hover:scale-125
          group-hover:bg-accent-purple
        "
      />

      {/* Step Card */}
      <div
        className="
          rounded-lg border border-border
          bg-bg-elevated p-5
          transition-all duration-300 ease-out
          group-hover:-translate-y-1
          group-hover:border-accent-blue/30
          group-hover:shadow-lg
          group-hover:shadow-accent-blue/5
        "
      >
        <div className="flex items-start gap-4">
          {/* Number */}
          <span
            className="
              shrink-0 font-mono text-xs
              text-accent-blue
              transition-colors duration-300
              group-hover:text-accent-purple
            "
          >
            {step.n}
          </span>

          {/* Content */}
          <div>
            <h3
              className="
                mb-1 font-semibold
                transition-colors duration-300
                group-hover:text-accent-blue
              "
            >
              {step.title}
            </h3>

            <p className="text-sm leading-relaxed text-text-muted">
              {step.body}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function Process() {
  const prefersReducedMotion = useReducedMotion();

  const [revealed, setRevealed] = useState<ReadonlySet<number>>(
    new Set(),
  );

  const fill = prefersReducedMotion
    ? 1
    : revealed.size / STEPS.length;

  return (
    <section
      id="process"
      className="relative px-(--space-container-x) py-(--space-section-y)"
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-accent-blue">
          How I Build
        </p>

        <h2 className="mb-12 text-h1 font-semibold">
          Process
        </h2>

        {/* Timeline */}
        <ol className="relative space-y-5 pl-8">
          {/* Background Line */}
          <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />

          {/* Animated Fill */}
          <div
            className={cn(
              "absolute left-0 top-0 w-px origin-top bg-accent-blue transition-transform duration-700 ease-out",
              prefersReducedMotion && "transition-none",
            )}
            style={{
              transform: `scaleY(${fill})`,
            }}
          />

          {/* Steps */}
          {STEPS.map((step, index) => (
            <ProcessStep
              key={step.n}
              step={step}
              prefersReducedMotion={prefersReducedMotion}
              onVisible={() =>
                setRevealed((prev) =>
                  prev.has(index)
                    ? prev
                    : new Set(prev).add(index),
                )
              }
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
