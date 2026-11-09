import { GraduationCap, Award, Calendar, Building2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const education = [
  {
    id: "bsc-botany",
    title: "B.Sc. Botany",
    organization: "Bharathiyaar University, Coimbatore",
    period: "2021",
    tag: "Degree",
  },
];

const certifications = [
  {
    id: "mern",
    title: "Certified MERN Stack Developer",
    organization: "IDM TechPark, Coimbatore",
    period: "February 2025",
    tag: "Full Stack",
  },
  {
    id: "ai-development",
    title: "AI-Augmented Development: Build, Test & Deploy Apps",
    organization: "LearnzConnect",
    period: "June 2026",
    tag: "AI & DevOps",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="px-(--space-container-x) py-(--space-section-y)"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-sky-400">
            Credentials
          </p>

          <h2 className="mb-10 text-h1 font-semibold text-slate-100">
            Education & Certifications
          </h2>
        </ScrollReveal>

        {/* Side-by-Side Two-Column Grid */}
        <div className="grid gap-8 md:grid-cols-12">
          {/* Left Column: Education (5 cols) */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.12)]">
                  <GraduationCap size={19} aria-hidden />
                </div>

                <h3 className="text-lg font-semibold text-slate-100">
                  Education
                </h3>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {education.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <article
                    className="
                      group relative overflow-hidden rounded-lg border border-sky-400/15
                      bg-[#07131e]/60 p-6 backdrop-blur-md
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:border-sky-400/40
                      hover:bg-[#0a1f33]/75
                      hover:shadow-[0_8px_30px_rgba(56,189,248,0.08)]
                    "
                  >
                    {/* Top Glowing Hairline */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/0 to-transparent transition-all duration-300 group-hover:via-sky-400/70" />

                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-sky-400">
                        <Calendar className="size-3.5" />
                        {item.period}
                      </span>

                      <span className="rounded border border-sky-400/20 bg-sky-400/10 px-2 py-0.5 font-mono text-[11px] text-sky-300">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-sky-300">
                      {item.title}
                    </h4>

                    <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                      <Building2 className="size-3.5 shrink-0 text-sky-400/60" />
                      <span>{item.organization}</span>
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (7 cols) */}
          <div className="md:col-span-7">
            <ScrollReveal>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.12)]">
                  <Award size={19} aria-hidden />
                </div>

                <h3 className="text-lg font-semibold text-slate-100">
                  Certifications
                </h3>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {certifications.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 0.1}>
                  <article
                    className="
                      group relative overflow-hidden rounded-lg border border-sky-400/15
                      bg-[#07131e]/60 p-6 backdrop-blur-md
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:border-cyan-400/40
                      hover:bg-[#0a1f33]/75
                      hover:shadow-[0_8px_30px_rgba(34,211,238,0.08)]
                    "
                  >
                    {/* Top Glowing Hairline */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent transition-all duration-300 group-hover:via-cyan-400/70" />

                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400">
                        <Calendar className="size-3.5" />
                        {item.period}
                      </span>

                      <span className="rounded border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 font-mono text-[11px] text-cyan-300">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-cyan-300">
                      {item.title}
                    </h4>

                    <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-400">
                      <Building2 className="size-3.5 shrink-0 text-cyan-400/60" />
                      <span>{item.organization}</span>
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
