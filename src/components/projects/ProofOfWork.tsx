"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { useHydrated } from "@/hooks/useHydrated";

export default function ProofOfWork() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const hydrated = useHydrated();
  const instanceId = useId();

  return (
    <section id="case-studies" className="py-8 md:py-24">
      <div className="mx-auto max-w-5xl md:px-6">
        <div className="mb-6 md:mb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-text-muted">
            {"//"} case studies — proof of work
          </p>
        </div>
        <div className="space-y-3 md:space-y-0">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="rounded-md border border-border bg-bg-elevated p-4 md:rounded-none md:border-x-0 md:border-b-0 md:bg-transparent md:px-0 md:py-12"
            >
              <p className="hidden wrap-break-word font-mono text-xs uppercase tracking-wider text-text-muted md:block">
                CASE {"//"} {study.id}
              </p>
              <div className="flex items-start justify-between gap-4">
                <h3 className="min-w-0 flex-1 text-lg font-semibold leading-7 tracking-tight md:mt-3 md:text-3xl">
                  <span className="hidden md:inline">{study.title}</span>
                  <button
                    type="button"
                    disabled={!hydrated}
                    aria-label={study.title}
                    aria-expanded={activeId === study.id}
                    aria-controls={`${instanceId}-${study.id}`}
                    onClick={() => setActiveId((current) => current === study.id ? null : study.id)}
                    className="flex min-h-11 w-full items-center justify-between gap-3 rounded-sm text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue md:hidden"
                  >
                    <span className="min-w-0">
                      <span aria-hidden="true" className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-text-muted">
                        Case {study.number}
                      </span>
                      <span>{study.title}</span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 shrink-0 ${activeId === study.id ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs md:flex">
                  {study.number}
                </span>
              </div>
              <div
                id={`${instanceId}-${study.id}`}
                className={activeId === study.id ? "block" : "hidden md:block"}
              >
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                  {study.technologies.map((technology) => (
                    <span key={technology} className="font-mono text-xs text-text-muted">
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-2 md:mt-10 md:grid-cols-[140px_1fr] md:gap-10">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                    Challenge
                  </p>
                  <p className="max-w-3xl text-base leading-7 text-text md:text-sm md:text-text-muted">
                    {study.Challenge}
                  </p>
                </div>
                <div className="mt-6 grid gap-2 md:mt-8 md:grid-cols-[140px_1fr] md:gap-10">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                    Implementation
                  </p>
                  <ul className="max-w-3xl space-y-4">
                    {study.Implementation.map((item) => (
                      <li key={item} className="text-base leading-7 text-text md:text-sm md:text-text-muted">
                        <span aria-hidden="true" className="mr-2 text-text-muted">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 grid gap-2 md:mt-10 md:grid-cols-[140px_1fr] md:gap-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
                    Outcome
                  </p>
                  <div className="rounded-xl border border-border border-l-4 border-l-accent-blue bg-bg p-4 md:bg-bg-elevated md:p-5">
                    <div className="flex gap-3 md:gap-5">
                      <span aria-hidden="true" className="mt-0.5 text-text">✓</span>
                      <p className="max-w-3xl text-base font-medium leading-7 text-text md:text-sm">
                        {study.Outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
