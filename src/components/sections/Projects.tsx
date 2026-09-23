"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import ProofOfWork from "@/components/projects/ProofOfWork";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-(--space-container-x) py-(--space-section-y)"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-text-muted">
          Selected Work
        </p>
        <h2 className="mb-6 text-h1 font-semibold md:mb-12">Projects</h2>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <div key={project.slug}>
              <ScrollReveal delay={Math.min(i * 0.1, 0.3)}>
                <ProjectCard project={project} index={i} />
              </ScrollReveal>
              {project.proofofwork && <ProofOfWork />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
