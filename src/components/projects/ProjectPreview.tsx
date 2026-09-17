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
        className="object-cover"
      />
      <div className="preview-overlay absolute inset-0 flex items-center justify-center bg-bg/70">
        <span className="preview-label font-mono text-xs uppercase tracking-[0.08em] text-text">
          View case study →
        </span>
      </div>
    </div>
  );
}
