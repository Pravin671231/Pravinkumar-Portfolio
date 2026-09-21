import { caseStudies } from "@/data/case-studies";

export default function ProofOfWork() {
  return (
    <section id="case-studies" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-400">
            {"//"} case studies — proof of work
          </p>
        </div>

        {/* Case Studies */}
        <div>
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="border-t border-neutral-200 py-12"
            >
              {/* Case Label */}
              <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                CASE {"//"} {study.id}
              </p>

              {/* Title */}
             <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                      {study.title}
                    </h3>
                  </div>

                  {/* Number */}
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs"
                  >
                    {study.number}
                  </span>
                </div>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {study.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="font-mono text-xs text-neutral-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="mt-10 grid gap-10 md:grid-cols-[140px_1fr]">
                {/* Problem */}
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    Problem
                  </p>
                </div>

                <p className="max-w-3xl text-sm leading-7 text-neutral-600">
                  {study.problem}
                </p>
              </div>

              {/* Action */}
              <div className="mt-8 grid gap-10 md:grid-cols-[140px_1fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    Action
                  </p>
                </div>

                <ul className="max-w-3xl space-y-4">
                  {study.action.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-7 text-neutral-600"
                    >
                      <span className="mr-2 text-neutral-400">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div className="mt-10 grid gap-6 md:grid-cols-[140px_1fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Result
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                  {/* Accent */}
                  <div className="absolute left-0 top-0 h-full w-5 bg-neutral-900" />

                  <div className="flex gap-5">
                    <span className="mt-0.5 ms-2 text-sm text-neutral-900">✓</span>

                    <p className="max-w-3xl text-sm font-medium leading-7 text-neutral-800">
                      {study.result}
                    </p>
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
