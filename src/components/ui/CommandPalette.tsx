"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#process", label: "Process" },
  { href: "#github", label: "GitHub" },
  { href: "#journey", label: "Journey" },
  { href: "#certifications", label: "Certifications" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  // Kept mounted for the closing transition, then actually unmounted once it
  // finishes — a plain CSS opacity/scale transition needs the element to
  // still be there while it plays.
  const [rendered, setRendered] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  function close() {
    setOpen(false);
    setQuery("");
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        close();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Adjust state during render (React's own pattern for this — see
  // "You Might Not Need an Effect") rather than in a useEffect: idempotent
  // once `rendered` catches up, so it can't loop.
  if (open && !rendered) {
    setRendered(true);
  }

  if (!rendered) return null;

  const filtered = LINKS.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase()),
  );

  function navigateTo(href: string) {
    router.push(href);
    close();
  }

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-start justify-center bg-bg/80 px-4 pt-[20vh] transition-opacity duration-150",
        open ? "opacity-100" : "opacity-0",
      )}
      style={{ zIndex: "var(--z-command-palette)" }}
      onClick={close}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && !open) setRendered(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "w-full max-w-md rounded-lg border border-border bg-bg-elevated shadow-glow-sm transition-[transform,opacity] duration-150",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search size={16} className="text-text-faint" aria-hidden />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filtered[0]) {
                navigateTo(filtered[0].href);
              }
            }}
            placeholder="Jump to a section…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-text-faint"
          />
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-sm text-text-faint">No matches</li>
          )}
          {filtered.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => navigateTo(link.href)}
                className="block w-full rounded-sm px-3 py-2 text-left text-sm text-text-muted transition-colors hover:bg-bg hover:text-text"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
