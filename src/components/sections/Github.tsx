"use client";

import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { fetchGithubStats } from "@/lib/github";

const GITHUB_USER = "Pravin671231";

/**
 * Deterministic seeded PRNG (mulberry32) — never Math.random() here, since
 * this grid must render identically on the server and the client to avoid
 * a hydration mismatch. Fixed seed, computed once at module scope.
 */
function seededGrid(seed: number, count: number): number[] {
  let t = seed;
  const cells: number[] = [];
  for (let i = 0; i < count; i++) {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    cells.push(((r ^ (r >>> 14)) >>> 0) / 4294967296);
  }
  return cells;
}

const GRID_CELLS = seededGrid(42, 140);

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <p className="font-mono text-4xl font-semibold">{String(value).padStart(2, "0")}</p>
      <p className="mt-2 text-sm text-text-muted">{label}</p>
    </div>
  );
}

export function Github() {
  const [stats, setStats] = useState({ repos: 0, followers: 0, totalStars: 0 });

  useEffect(() => {
    fetchGithubStats().then(setStats);
  }, []);

  return (
    <section id="github" className="relative px-(--space-container-x) py-(--space-section-y)">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-accent-blue">GitHub</p>
        <h2 className="mb-12 text-h1 font-semibold">
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer">
            Open Source Activity
          </a>
        </h2>

        <div className="mb-12 grid grid-cols-3 gap-6">
          <Stat value={stats.repos} label="Repositories" />
          <Stat value={stats.followers} label="Followers" />
          <Stat value={stats.totalStars} label="Stars" />
        </div>

        <ScrollReveal className="mx-auto grid max-w-xl grid-cols-20 gap-1">
          {GRID_CELLS.map((intensity, i) => (
            <div
              key={i}
              className="aspect-square rounded-sm bg-accent-blue"
              style={{ opacity: 0.1 + intensity * 0.6 }}
            />
          ))}
        </ScrollReveal>
        <p className="mt-4 font-mono text-xs text-text-faint">
          Mock activity grid — real contribution data requires the authenticated GitHub GraphQL API
          (Phase 2).
        </p>
      </div>
    </section>
  );
}
