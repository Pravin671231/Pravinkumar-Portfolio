import {
  GraduationCap,
  Award,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const education = [
  {
    id: "bsc-botany",
    title: "B.Sc. Botany",
    organization: "Bharathiyaar University, Coimbatore",
    period: "2021",
  },
];

const certifications = [
  {
    id: "mern",
    title: "Certified MERN Stack Developer",
    organization: "IDM TechPark, Coimbatore",
    period: "February 2025",
  },
  {
    id: "ai-development",
    title: "AI-Augmented Development: Build, Test & Deploy Apps",
    organization: "LearnzConnect",
    period: "June 2026",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="px-(--space-container-x) py-(--space-section-y)"
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-accent-blue">
            Education
          </p>

          <h2 className="mb-10 text-h1 font-semibold">
            Education & Certifications
          </h2>
        </ScrollReveal>

        {/* Education */}
        <div className="mb-12">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                <GraduationCap size={19} aria-hidden />
              </div>

              <h3 className="text-lg font-semibold">
                Education
              </h3>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1.75 top-2 h-[calc(100%-8px)] w-px bg-border" />

            <div className="space-y-6">
              {education.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={index * 0.1}
                >
                  <article className="group relative pl-8">
                    {/* Dot */}
                    <div
                      className="
                        absolute left-0 top-1.5 z-10
                        h-4 w-4 rounded-full
                        border-4 border-bg
                        bg-accent-blue
                        transition-all duration-300
                        group-hover:scale-125
                      "
                    />

                    {/* Content */}
                    <div
                      className="
                        rounded-lg border border-border
                        bg-bg-elevated p-5
                        transition-all duration-300
                        group-hover:-translate-y-0.5
                        group-hover:border-accent-blue/30
                        group-hover:shadow-md
                        group-hover:shadow-accent-blue/5
                      "
                    >
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-text-faint">
                        {item.period}
                      </p>

                      <h4 className="text-h2 font-semibold">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-text-muted">
                        {item.organization}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-purple/10 text-accent-purple">
                <Award size={19} aria-hidden />
              </div>

              <h3 className="text-lg font-semibold">
                Certifications
              </h3>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1.75 top-2 h-[calc(100%-8px)] w-px bg-border" />

            <div className="space-y-6">
              {certifications.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={index * 0.1}
                >
                  <article className="group relative pl-8">
                    {/* Dot */}
                    <div
                      className="
                        absolute left-0 top-1.5 z-10
                        h-4 w-4 rounded-full
                        border-4 border-bg
                        bg-accent-purple
                        transition-all duration-300
                        group-hover:scale-125
                        group-hover:bg-accent-blue
                      "
                    />

                    {/* Content */}
                    <div
                      className="
                        rounded-lg border border-border
                        bg-bg-elevated p-5
                        transition-all duration-300
                        group-hover:-translate-y-0.5
                        group-hover:border-accent-purple/30
                        group-hover:shadow-md
                        group-hover:shadow-accent-purple/5
                      "
                    >
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-text-faint">
                        {item.period}
                      </p>

                      <h4 className="text-h2 font-semibold">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-text-muted">
                        {item.organization}
                      </p>
                    </div>
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
