import Image from "next/image";
import type { Project } from "@/data/projects";

// No local hover state needed — `.preview-overlay`/`.preview-label` react to
// `.group:hover` on ProjectCard's wrapping element (see globals.css), since
// this renders nested inside it.
export function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-bg-elevated">
      <Image
        src={project.coverImage}
        alt={`${project.title} preview`}
        fill
        sizes="(min-width: 1024px) 480px, 100vw"
        className="object-fill transition-transform duration-300 group-hover:scale-105"
      />
      <div className="preview-overlay absolute inset-0 flex items-center justify-center bg-bg/70">
          <div className="preview-label flex items-center justify-center gap-3 px-3 font-mono uppercase tracking-[0.08em] text-text">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-sm bg-text px-5 py-2.5 text-sm font-medium text-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue"
            >
              Live Site
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-sm border px-5 py-2.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blue"
            >
              Source
            </a>
          </div>
      </div>
    </div>
  );
}
