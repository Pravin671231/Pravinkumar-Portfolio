"use client";

import { Briefcase, Laptop, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  id: string;
  roleType: "Work Experience" | "Internship";
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  stack: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "frontend-developer",
    roleType: "Work Experience",
    title: "Frontend Developer",
    company: "Your Company Name", // Replace with company name
    location: "Coimbatore", // Or "Remote"
    period: "3 Months · 2025", // e.g., "Jan 2025 – Mar 2025 (3 Months)"
    summary:
      "Built responsive, production-ready web interfaces and collaborated with backend teams to ship user-facing features.",
    responsibilities: [
      "Developed modular, reusable UI components using React.js, Next.js, and Tailwind CSS.",
      "Integrated RESTful APIs and managed client-side state cleanly across views.",
      "Optimized mobile responsiveness and cross-browser layout consistency.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "fullstack-intern",
    roleType: "Internship",
    title: "Full Stack Developer Intern",
    company: "Internship Company Name", // Replace with internship company
    location: "Coimbatore",
    period: "2025", // Replace with internship dates
    summary:
      "Assisted in end-to-end web application development across frontend components and backend API endpoints.",
    responsibilities: [
      "Built interactive frontend screens and connected backend CRUD endpoints.",
      "Collaborated using Git workflows, pull requests, and structured code reviews.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Git"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="px-(--space-container-x) py-(--space-section-y)"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <ScrollReveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-sky-400">
            Career
          </p>

          <h2 className="mb-10 text-h1 font-semibold text-slate-100">
            Work Experience & Internships
          </h2>
        </ScrollReveal>

        {/* Experience Timeline */}
        <div className="relative space-y-6 pl-7 md:pl-9">
          {/* Glowing Vertical Spine */}
          <div className="absolute bottom-2 left-1.5 top-2 w-px bg-sky-400/20" />

          {EXPERIENCES.map((item, index) => {
            const isWork = item.roleType === "Work Experience";
            const Icon = isWork ? Briefcase : Laptop;

            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <article className="group relative">
                  {/* Timeline Node */}
                  <span
                    className={cn(
                      "absolute -left-[1.85rem] top-6 z-10 h-3.5 w-3.5 rounded-full border-4 border-[#040b12] transition-all duration-300 group-hover:scale-125 md:-left-[2.35rem]",
                      isWork
                        ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]"
                        : "bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.85)]",
                    )}
                  />

                  {/* Frosted Glass Card */}
                  <div
                    className={cn(
                      "rounded-xl border border-sky-400/15 bg-[#07131e]/60 p-6 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#0a1f33]/75 sm:p-7",
                      isWork
                        ? "hover:border-emerald-400/40 hover:shadow-[0_8px_30px_rgba(52,211,153,0.08)]"
                        : "hover:border-indigo-400/40 hover:shadow-[0_8px_30px_rgba(129,140,248,0.08)]",
                    )}
                  >
                    {/* Top Row */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                            isWork
                              ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-400"
                              : "border-indigo-400/25 bg-indigo-400/10 text-indigo-400",
                          )}
                        >
                          <Icon size={20} strokeWidth={1.8} aria-hidden />
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-100">
                            {item.title}
                          </h3>
                          <p className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                            <span>{item.company}</span>
                            <span className="text-slate-600">•</span>
                            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                              <MapPin className="size-3.5 text-sky-400/70" />
                              {item.location}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Role Badge & Period */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={cn(
                            "rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
                            isWork
                              ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                              : "border-indigo-400/20 bg-indigo-400/10 text-indigo-300",
                          )}
                        >
                          {item.roleType}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/15 bg-[#040b12]/70 px-2.5 py-1 font-mono text-xs text-slate-300">
                          <Calendar className="size-3.5 text-sky-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mb-4 text-sm leading-relaxed text-slate-300">
                      {item.summary}
                    </p>

                    {/* Key Contributions */}
                    <ul className="mb-5 space-y-2">
                      {item.responsibilities.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <CheckCircle2
                            className={cn(
                              "mt-0.5 size-4 shrink-0",
                              isWork ? "text-emerald-400" : "text-indigo-400",
                            )}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 border-t border-sky-400/10 pt-4">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-sky-400/15 bg-[#040b12]/70 px-2.5 py-0.5 font-mono text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
