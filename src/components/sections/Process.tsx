"use client";

import { useState } from "react";
import {
  Compass,
  Layers,
  Code2,
  FlaskConical,
  Rocket,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    summary: "Clarify the problem before touching code.",
    detail:
      "Break down user requirements, define edge cases, and establish clear acceptance criteria so every feature solves a real bottleneck.",
    outputs: ["User Stories", "Edge-Case Mapping", "Scope Definition"],
    icon: Compass,
  },
  {
    n: "02",
    title: "Design",
    summary: "Sketch architecture and data flow.",
    detail:
      "Structure MongoDB schemas, plan RESTful API contracts, and map frontend state management before writing boilerplate.",
    outputs: ["Database Schema", "API Contracts", "Component Tree"],
    icon: Layers,
  },
  {
    n: "03",
    title: "Build",
    summary: "Ship in small, testable increments.",
    detail:
      "Develop modular React and Next.js interfaces paired with clean, type-safe Node.js endpoints in focused, reviewable commits.",
    outputs: ["Type-Safe UI", "REST Endpoints", "Modular Commits"],
    icon: Code2,
  },
  {
    n: "04",
    title: "Test",
    summary: "Verify against real usage, not assumptions.",
    detail:
      "Validate API payloads, run unit and integration checks with Vitest, and verify responsive behavior across mobile and desktop screens.",
    outputs: ["Vitest Suites", "API Validation", "Cross-Device QA"],
    icon: FlaskConical,
  },
  {
    n: "05",
    title: "Deploy",
    summary: "Ship with monitoring in place.",
    detail:
      "Containerize services with Docker, automate builds via GitHub Actions CI/CD, and deploy with environment checks and error logging.",
    outputs: ["Docker Containers", "CI/CD Pipelines", "Live Health Checks"],
    icon: Rocket,
  },
  {
    n: "06",
    title: "Improve",
    summary: "Iterate based on real feedback.",
    detail:
      "Monitor query latency, refine UI responsiveness, and ship continuous enhancements driven by real user interactions.",
    outputs: ["Performance Tuning", "UX Refinements", "Iterative Releases"],
    icon: RefreshCw,
  },
];

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = STEPS[activeIndex];
  const CurrentIcon = current.icon;
  const progressPercent = (activeIndex / (STEPS.length - 1)) * 100;

  return (
    <section
      id="process"
      className="relative px-(--space-container-x) py-(--space-section-y)"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-sky-400">
            How I Build
          </p>

          <h2 className="mb-10 text-h1 font-semibold text-slate-100">
            Process
          </h2>
        </ScrollReveal>

        {/* Interactive Node Pipeline */}
        <ScrollReveal delay={0.1}>
          <div className="relative mb-6">
            {/* Desktop Connecting Track */}
            <div
              aria-hidden="true"
              className="absolute left-8 right-8 top-6 hidden h-px bg-sky-400/15 md:block"
            >
              <div
                className="h-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Step Nodes */}
            <div
              role="tablist"
              aria-label="Development workflow steps"
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
            >
              {STEPS.map((step, index) => {
                const isActive = index === activeIndex;
                const isCompleted = index < activeIndex;

                return (
                  <button
                    key={step.n}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "group relative flex cursor-pointer flex-col items-center rounded-lg border p-3 text-center transition-all duration-300 backdrop-blur-md",
                      isActive
                        ? "border-sky-400/60 bg-[#0a1f33]/85 shadow-[0_0_24px_rgba(56,189,248,0.15)]"
                        : "border-sky-400/15 bg-[#07131e]/55 hover:border-sky-400/35 hover:bg-[#0a1f33]/65",
                    )}
                  >
                    {/* Glowing Node Circle */}
                    <span
                      className={cn(
                        "mb-2 flex h-6 w-6 items-center justify-center rounded-full border font-mono text-[11px] transition-all duration-300",
                        isActive
                          ? "border-sky-300 bg-sky-400 font-semibold text-[#040b12] shadow-[0_0_14px_rgba(56,189,248,0.9)]"
                          : isCompleted
                            ? "border-sky-400/60 bg-sky-400/20 text-sky-300"
                            : "border-sky-400/20 bg-[#040b12] text-slate-400 group-hover:border-sky-400/40 group-hover:text-sky-300",
                      )}
                    >
                      {step.n}
                    </span>

                    <span
                      className={cn(
                        "text-xs font-medium transition-colors",
                        isActive
                          ? "text-sky-300"
                          : "text-slate-300 group-hover:text-slate-100",
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detail Panel */}
          <div
            role="tabpanel"
            className="rounded-xl border border-sky-400/20 bg-[#07131e]/70 p-6 backdrop-blur-md transition-all duration-300 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              {/* Left: Icon + Title + Engineering Detail */}
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/25 bg-sky-400/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                    <CurrentIcon size={20} strokeWidth={1.8} aria-hidden />
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-sky-400">
                      Phase {current.n} / 06
                    </p>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {current.title} —{" "}
                      <span className="font-normal text-slate-300">
                        {current.summary}
                      </span>
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {current.detail}
                </p>

                {/* Deliverable Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {current.outputs.map((output) => (
                    <span
                      key={output}
                      className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/20 bg-[#040b12]/75 px-3 py-1 font-mono text-xs text-sky-200"
                    >
                      <CheckCircle2 className="size-3.5 text-sky-400" />
                      {output}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Next Phase Quick Step Button */}
              <div className="flex shrink-0 items-center self-end md:self-center">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % STEPS.length)
                  }
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-sky-400/25 bg-[#040b12]/80 px-4 py-2.5 font-mono text-xs text-sky-300 transition-all duration-200 hover:border-sky-400/60 hover:bg-sky-400/15 hover:text-sky-200"
                >
                  <span>
                    {activeIndex === STEPS.length - 1
                      ? "Restart Cycle"
                      : `Next: ${STEPS[activeIndex + 1].title}`}
                  </span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
