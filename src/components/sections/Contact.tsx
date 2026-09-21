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
          {/* Email */}
          <MagneticButton>
            <a
              href="mailto:pravinkumar671231@gmail.com"
              className="
                group inline-flex items-center gap-2
                rounded-sm
                bg-text
                px-6 py-3.5
                text-sm font-medium
                text-bg
                transition-all duration-300
                hover:-translate-y-0.5
                hover:opacity-90
                hover:shadow-lg
                hover:shadow-text/10
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
          {/* GitHub */}
          <MagneticButton>
            <a
              href="https://github.com/Pravin671231"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-2
                rounded-sm border border-border
                bg-bg-elevated
                px-6 py-3.5
                text-sm font-medium
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-accent-blue/40
                hover:bg-bg
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

          {/* Resume */}
          <MagneticButton>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-2
                rounded-sm border border-border
                bg-bg-elevated
                px-6 py-3.5
                text-sm font-medium
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-accent-purple/40
                hover:bg-bg
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
