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
  frontend: "text-accent-blue bg-accent-blue/10",
  backend: "text-accent-purple bg-accent-purple/10",
  database: "text-accent-green bg-accent-green/10",
  tools: "text-accent-orange bg-accent-orange/10",
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
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-accent-blue">
            Stack
          </p>

          <h2 className="mb-10 text-h1 font-semibold">
            What I build with
          </h2>
        </ScrollReveal>

        {/* Groups */}
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = ICONS[skill.id];
            const color = COLORS[skill.id];

            return (
              <ScrollReveal
                key={skill.id}
                delay={index * 0.05}
              >
                <div
                  className="
                    group h-full rounded-lg border border-border
                    bg-bg-elevated p-6
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:border-accent-blue/30
                    hover:shadow-lg
                    hover:shadow-accent-blue/5
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
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          aria-hidden
                        />
                      </div>
                    )}

                    <h3
                      className="
                        font-medium
                        transition-colors duration-300
                        group-hover:text-text
                      "
                    >
                      {skill.name}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map(
                      (technology: string) => (
                        <span
                          key={technology}
                          className="
                            rounded-md border border-border
                            bg-bg px-2.5 py-1.5
                            font-mono text-xs text-text-muted
                            transition-all duration-200
                            group-hover:border-border-hover
                            hover:-translate-y-0.5
                            hover:bg-bg-elevated
                            hover:text-text
                          "
                        >
                          {technology}
                        </span>
                      ),
                    )}
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
