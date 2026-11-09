"use client";

import { useId, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Eye,
  Monitor,
  MousePointerClick,
  Smartphone,
  Tablet,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { useHydrated } from "@/hooks/useHydrated";
import { ProjectPreview } from "./ProjectPreview";

type ViewportMode = "desktop" | "tablet" | "mobile";

const VIEWPORTS: Record<
  ViewportMode,
  {
    label: string;
    icon: typeof Monitor;
    frameClass: string;
    iframeClass: string;
  }
> = {
  desktop: {
    label: "Desktop",
    icon: Monitor,
    frameClass: "w-full h-full",
    iframeClass: "w-[200%] h-[200%] scale-50",
  },
  tablet: {
    label: "Tablet",
    icon: Tablet,
    frameClass: "w-[72%] h-full mx-auto border-x border-sky-400/20 shadow-lg",
    iframeClass: "w-[142.85%] h-[142.85%] scale-[0.7]",
  },
  mobile: {
    label: "Mobile",
    icon: Smartphone,
    frameClass: "w-[44%] h-full mx-auto border-x border-sky-400/25 shadow-lg",
    iframeClass: "w-[125%] h-[125%] scale-[0.8]",
  },
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [viewport, setViewport] = useState<ViewportMode>("desktop");

  const hydrated = useHydrated();
  const descriptionId = useId();
  const description = project.description.trim();
  const isLong = description.length > 120;
  const prefix = description.slice(0, 120);
  const excerpt = (description[120] && /\S/.test(description[120])
    ? prefix.replace(/\s+\S*$/, "")
    : prefix).trimEnd();

  const activeViewport = VIEWPORTS[viewport];

  return (
    <div
      className="
        group block overflow-hidden rounded-lg border border-sky-400/15
        bg-[#07131e]/60 backdrop-blur-md
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-sky-400/40
        hover:bg-[#0a1f33]/75
        hover:shadow-[0_8px_30px_rgba(56,189,248,0.08)]
      "
    >
      {/* Top-Level Responsive Control Bar */}
      {project.liveUrl && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-400/15 bg-[#040b12]/95 px-4 py-2.5">
          {/* Viewport Toggle Pills */}
          <div
            role="group"
            aria-label="Preview viewport size"
            className="flex items-center gap-1 rounded-lg border border-sky-400/20 bg-[#07131e] p-1"
          >
            {(Object.keys(VIEWPORTS) as ViewportMode[]).map((mode) => {
              const Icon = VIEWPORTS[mode].icon;
              const isActive = viewport === mode;

              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setViewport(mode)}
                  aria-pressed={isActive}
                  className={`
                    inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5
                    font-mono text-xs font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-sky-400 text-[#040b12] shadow-[0_0_12px_rgba(56,189,248,0.45)]"
                        : "text-slate-300 hover:bg-sky-400/10 hover:text-sky-200"
                    }
                  `}
                >
                  <Icon className="size-3.5" />
                  <span>{VIEWPORTS[mode].label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Quick Actions: Interact & External Link */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setInteractive((prev) => !prev)}
              className={`
                inline-flex cursor-pointer items-center gap-1.5 rounded-md border px-2.5 py-1.5
                font-mono text-xs transition-all duration-200
                ${
                  interactive
                    ? "border-cyan-400 bg-cyan-400/20 text-cyan-200"
                    : "border-sky-400/20 bg-[#07131e] text-slate-300 hover:border-sky-400/50 hover:text-sky-300"
                }
              `}
            >
              {interactive ? (
                <>
                  <Eye className="size-3.5" />
                  <span>Lock</span>
                </>
              ) : (
                <>
                  <MousePointerClick className="size-3.5" />
                  <span>Interact</span>
                </>
              )}
            </button>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} in new tab`}
              className="inline-flex items-center justify-center rounded-md border border-sky-400/20 bg-[#07131e] p-1.5 text-slate-300 transition-colors hover:border-sky-400/50 hover:text-sky-300"
            >
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      )}

      {/* Live Website Iframe Preview or Fallback */}
      {project.liveUrl ? (
        <div className="relative aspect-video w-full overflow-hidden border-b border-sky-400/15 bg-[#02060a]">
          <div
            className={`relative overflow-hidden bg-[#040b12] transition-all duration-300 ease-out ${activeViewport.frameClass}`}
          >
            <iframe
              src={project.liveUrl}
              title={`${project.title} ${activeViewport.label} preview`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              className={`origin-top-left border-0 bg-[#040b12] transition-all duration-300 ${
                activeViewport.iframeClass
              } ${interactive ? "pointer-events-auto" : "pointer-events-none"}`}
            />
          </div>
        </div>
      ) : (
        <ProjectPreview project={project} />
      )}

      {/* Card Body */}
      <div className="p-5 md:p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-sky-400/80">
            Project {String(index + 1).padStart(2, "0")}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-sky-400 transition-colors hover:text-sky-300"
            >
              Live Demo
              <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </div>

        <h3 className="mb-1 text-h2 font-semibold text-slate-100 transition-colors duration-300 group-hover:text-sky-300">
          {project.title}
        </h3>

        <p className="mb-4 text-base leading-7 text-slate-300 md:text-sm md:leading-5 md:text-slate-400">
          <span id={descriptionId}>
            {project.tagline} —{" "}
            {isLong && !expanded ? (
              <>
                {excerpt}
                <span className="md:hidden">…</span>
                <span className="hidden md:inline">{description.slice(excerpt.length)}</span>
              </>
            ) : (
              description
            )}
          </span>{" "}
          {isLong && (
            <button
              type="button"
              disabled={!hydrated}
              aria-expanded={expanded}
              aria-controls={descriptionId}
              onClick={() => setExpanded((value) => !value)}
              className="inline-flex items-center whitespace-nowrap rounded-sm px-1 align-middle text-base font-semibold text-sky-300 underline decoration-sky-400 underline-offset-4 hover:text-sky-200 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 disabled:cursor-wait md:hidden"
            >
              {expanded ? "Read less" : "Read more"}
              <ChevronDown
                aria-hidden="true"
                className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className="
                tag-chip rounded-sm border border-sky-400/15
                bg-[#040b12]/70 px-3 py-1
                font-mono text-xs text-slate-300
                transition-colors duration-200
                group-hover:border-sky-400/25
                hover:border-sky-400/50
                hover:bg-sky-400/10
                hover:text-sky-200
              "
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
