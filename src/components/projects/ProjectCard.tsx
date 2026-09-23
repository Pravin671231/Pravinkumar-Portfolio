"use client";

import { useId, useState, type CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/data/projects";
import { useHydrated } from "@/hooks/useHydrated";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hydrated = useHydrated();
  const descriptionId = useId();
  const description = project.description.trim();
  const isLong = description.length > 120;
  const prefix = description.slice(0, 120);
  const excerpt = (description[120] && /\S/.test(description[180])
    ? prefix.replace(/\s+\S*$/, "")
    : prefix).trimEnd();

  return (
    <div className="group block overflow-hidden rounded-lg border border-border bg-bg-elevated">
      <ProjectPreview project={project} />
        <div className="p-5 md:p-6">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mb-1 text-h2 font-semibold">{project.title}</h3>
          <p className="mb-4 text-base leading-7 text-text md:text-sm md:leading-5 md:text-text-muted">
            <span id={descriptionId}>
              {project.tagline} — {isLong && !expanded ? (
                <>
                  {excerpt}
                  <span className="md:hidden">…</span>
                  <span className="hidden md:inline">{description.slice(excerpt.length)}</span>
                </>
              ) : description}
            </span>{" "}
          {isLong && (
            <button
              type="button"
              disabled={!hydrated}
              aria-expanded={expanded}
              aria-controls={descriptionId}
              onClick={() => setExpanded((value) => !value)}
              className="inline-flex items-center whitespace-nowrap rounded-sm px-1 align-middle text-base font-semibold text-text underline decoration-accent-blue underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue disabled:cursor-wait md:hidden"
            >
              {expanded ? "Read less" : "Read more"}
              <ChevronDown
                aria-hidden="true"
                className={`size-4 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="tag-chip rounded-sm bg-accent-blue/10 px-3 py-1 font-mono text-xs text-text-muted"
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
