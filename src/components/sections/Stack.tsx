import {
  Code2,
  Database,
  Server,
  Container,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skills } from "@/data/skills";

const ICONS: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Container,
};

const COLORS: Record<string, string> = {
  frontend: "text-sky-400 bg-sky-400/10 border border-sky-400/20",
  backend: "text-indigo-400 bg-indigo-400/10 border border-indigo-400/20",
  database: "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20",
  tools: "text-blue-400 bg-blue-400/10 border border-blue-400/20",
};

export function Stack() {
  return (
    <section
      id="stack"
      className="px-(--space-container-x) py-(--space-section-y)"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-sky-400">
            Stack
          </p>

          <h2 className="mb-10 text-h1 font-semibold text-slate-100">
            What I build with
          </h2>
        </ScrollReveal>

        {/* Groups */}
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = ICONS[skill.id];
            const color = COLORS[skill.id];

            return (
              <ScrollReveal key={skill.id} delay={index * 0.05}>
                <div
                  className="
                    group h-full rounded-lg border border-sky-400/15
                    bg-[#07131e]/60 p-6 backdrop-blur-md
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:border-sky-400/40
                    hover:bg-[#0a1f33]/75
                    hover:shadow-[0_8px_30px_rgba(56,189,248,0.08)]
                  "
                >
                  {/* Card Header */}
                  <div className="mb-6 flex items-center gap-3">
                    {Icon && (
                      <div
                        className={`
                          flex h-10 w-10 items-center justify-center
                          rounded-lg
                          ${color}
                          transition-transform duration-300 ease-out
                          group-hover:scale-110
                        `}
                      >
                        <Icon size={20} strokeWidth={1.8} aria-hidden />
                      </div>
                    )}

                    <h3
                      className="
                        font-medium text-slate-100
                        transition-colors duration-300
                        group-hover:text-sky-300
                      "
                    >
                      {skill.name}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((technology: string) => (
                      <span
                        key={technology}
                        className="
                          rounded-md border border-sky-400/15
                          bg-[#040b12]/70 px-2.5 py-1.5
                          font-mono text-xs text-slate-300
                          transition-all duration-200
                          group-hover:border-sky-400/25
                          hover:-translate-y-0.5
                          hover:border-sky-400/50
                          hover:bg-sky-400/10
                          hover:text-sky-200
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
