import { FloatingCode } from "@/components/ui/FloatingCode";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const SKILLS = ["React", "Next.js", "TypeScript", "Node.js"];

export function About() {
  return (
    <section
      id="about"
      className="relative px-(--space-container-x) py-(--space-section-y)"
    >
      <FloatingCode />
      <div className="mx-auto max-w-3xl justify-center items-center ">
        {/* <ScrollReveal delay={0}>
          <div className="flex aspect-4/5 items-center justify-center rounded-lg border border-border bg-bg-elevated">
            <span className="text-sm text-text-faint">[ portrait placeholder ]</span>
          </div>
        </ScrollReveal> */}
        <div>
          <ScrollReveal delay={0.1}>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-accent-blue">
              About
            </p>
            <h2 className="mb-4 text-h1 font-semibold">Pravinkumar K</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mb-2 text-text-muted">Full Stack Developer</p>
            <div className="mb-6 space-y-4 leading-relaxed text-text-muted">
              <p>
                I'm a Full Stack Developer focused on building practical,
                reliable, and maintainable web applications. I work across the
                frontend, backend, database, and deployment layers to turn
                requirements into complete working products.
              </p>

              <p>
                I primarily work with React.js, Next.js, TypeScript, Node.js,
                Express.js, and MongoDB. I enjoy solving real-world engineering
                problems such as dynamic filtering, server-side search, secure
                file uploads, API design, and flexible data modeling.
              </p>

              <p>
                I'm focused on writing clean code, building responsive user
                experiences, and creating solutions that are simple to maintain
                and scale.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-border px-3 py-1 font-mono text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
