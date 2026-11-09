"use client";

import {
  ArrowUpRight,
  FileText,
  Globe,
  Mail,
} from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-(--space-container-x) py-[clamp(6rem,14vw,10rem)]"
    >
      <GlowBackground />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Label */}
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.08em] text-accent-blue">
          Let&apos;s connect
        </p>

        {/* Heading */}
        <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-tight">
          <AnimatedText
            text="OPEN"
            mode="chars"
            trigger="inView"
            className="block"
          />

          <AnimatedText
            text="TO"
            mode="chars"
            trigger="inView"
            delay={0.2}
            className="block"
          />

          <AnimatedText
            text="OPPORTUNITIES."
            mode="chars"
            trigger="inView"
            delay={0.4}
            className="block text-accent-blue"
          />
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-text-muted sm:text-base">
          I&apos;m open to full-time opportunities and exciting projects.
          Feel free to explore my work, view my resume, or get in touch.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {/* Email - Primary Luminous Cyan */}
          <MagneticButton>
            <a
              href="mailto:pravinkumar671231@gmail.com"
              className="
                group inline-flex items-center gap-2
                rounded-sm
                bg-sky-400
                px-6 py-3.5
                text-sm font-medium
                text-[#040b12]
                shadow-[0_0_20px_rgba(56,189,248,0.35)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-sky-300
                hover:shadow-[0_0_28px_rgba(125,211,252,0.55)]
              "
            >
              <Mail size={17} strokeWidth={1.8} />

              pravinkumar671231@gmail.com

              <ArrowUpRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </MagneticButton>

          {/* GitHub - Frosted Dark Navy */}
          <MagneticButton>
            <a
              href="https://github.com/Pravin671231"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-2
                rounded-sm border border-sky-400/20
                bg-[#07131e]/70
                px-6 py-3.5
                text-sm font-medium
                text-slate-100
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-sky-400/50
                hover:bg-[#0a1f33]/85
                hover:text-sky-300
              "
            >
              <Globe size={17} strokeWidth={1.8} />

              GitHub

              <ArrowUpRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </MagneticButton>

          {/* Resume - Frosted Dark Navy with Cyan Accent */}
          <MagneticButton>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-2
                rounded-sm border border-sky-400/20
                bg-[#07131e]/70
                px-6 py-3.5
                text-sm font-medium
                text-slate-100
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-cyan-400/50
                hover:bg-[#0a1f33]/85
                hover:text-cyan-300
              "
            >
              <FileText size={17} strokeWidth={1.8} />

              Resume

              <ArrowUpRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
