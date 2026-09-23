import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group block overflow-hidden rounded-lg border border-border bg-bg-elevated">
      <ProjectPreview project={project} />
        <div className="p-6">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-text-faint">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mb-1 text-h2 font-semibold">{project.title}</h3>
          <p className="mb-4 text-sm text-text-muted">
            {project.tagline} — {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="tag-chip rounded-sm bg-accent-blue/10 px-3 py-1 font-mono text-xs text-accent-blue"
                style={{ "--i": i } as CSSProperties}
              >
                {tag}
              </span>
            ))}
          </div>
          
        </div>
    </div>
  );
}
