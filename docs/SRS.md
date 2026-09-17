# Software Requirements Specification — Pravin K Portfolio

## 1. Purpose & Scope

This document specifies the requirements for an animation-forward personal developer portfolio website, inspired by UpCurvv-style scroll storytelling (staggered text reveals, magnetic buttons, animated counters) but with original visual identity and content.

The build is scoped as an **MVP**: eight priority animation systems are implemented end-to-end with full fidelity; every remaining section from the original 32-part animation concept is still present and functional, using a single simple scroll-reveal treatment, and explicitly deferred to Phase 2 for its bespoke motion design. This document covers both scopes and marks each item accordingly.

Content (project case studies, bio copy, certifications, testimonials) is placeholder data at MVP time, clearly marked for later replacement with real content.

## 2. Tech Stack

| Concern | Technology | Verified stable version (Aug 2026) |
|---|---|---|
| Framework | Next.js (App Router), TypeScript | Next.js 16.3.x, TypeScript ^5 (resolves 5.9.x — confirmed by an actual `create-next-app@latest` run; its template hasn't moved to TS 6/7 yet despite both existing on npm) |
| Styling | Tailwind CSS, plain CSS for gradients/glows/hover micro-interactions | Tailwind CSS 4.3.x — CSS-first config (`@theme` in `globals.css`), not a JS config file |
| Animation | Plain CSS transitions/`@keyframes` (in `globals.css`) + a minimal `IntersectionObserver` hook (`src/hooks/useInView.ts`) for scroll-triggered reveals | No animation library — Motion, GSAP + ScrollTrigger, and Lenis were all removed (see "Animation approach" below). `GlowBackground`'s mouse-tracked parallax writes a CSS custom property from a plain `mousemove` listener; CSS transitions do the easing |
| Smooth scrolling | Native scroll + CSS `scroll-behavior: smooth` | No library (previously Lenis) |
| Icons | Lucide React | latest |

Runtime: Node.js Active LTS (24.x) for local dev and CI. Package versions above drift — re-verify before install rather than trusting this table indefinitely.

### Animation approach (post-simplification)

The original MVP build used Motion, GSAP + ScrollTrigger, and Lenis. All three were dropped in favor of plain CSS — an aesthetic simplification, not a rewrite of scope: every effect below still exists except two explicitly dropped (noted in their FR). The technique per animation shape:

- **Mouse-tracked** (`GlowBackground` parallax): a plain `mousemove` listener writes an already-computed offset to a CSS custom property (`element.style.setProperty(...)`); the element's `transform` reads it back via `var(--x, 0px)` under a plain `transition`. The `0px` fallback is what SSR and the pre-interaction client render both use, so there's no hydration-mismatch risk.
- **Scroll-triggered reveal** (`ScrollReveal`, `AnimatedText`'s `inView` trigger, Process's per-step line fill): `useInView` (`IntersectionObserver`) toggles a `data-visible` attribute or inline style that a CSS transition/`@keyframes` animation reacts to.
- **Stagger**: an inline CSS custom property per item (`style={{ "--i": index }}`), consumed as `animation-delay: calc(var(--i) * Nms)`.
- **Hover** (`ProjectCard`/`ProjectPreview`): plain `group-hover:`-style CSS, scoped to `@media (hover: hover) and (pointer: fine)` so touch taps don't trigger a sticky hover state.

## 3. Site Structure

```
/                      Home — all sections composed on one page
/projects/[slug]       Project case-study detail page
/api/github            Server route: live GitHub stats for Pravin671231
```

## 4. Functional Requirements — MVP Priority Systems (full fidelity)

### FR-1 Hero
- Displays a staggered word-reveal headline ("Hi, I'm Pravin.") on page load (mount-triggered, not scroll-triggered).
- Subtitle line fades in after the headline stagger completes.
- Renders `GlowBackground`: CSS grid pattern + blurred radial gradient blobs, with a small mouse-parallax offset (±15–20px, CSS-eased) on desktop.
- Displays an animated scroll-indicator (chevron) with an infinite bob loop.
- Under `prefers-reduced-motion: reduce`: headline appears via plain opacity fade (no stagger/mask), parallax locked to zero, scroll indicator static.

### FR-2 About
- Section content (heading, body copy, portrait) enters via `ScrollReveal` (fade + slide-up), staggered per element via incremented delay, firing once when ~30% of the section is in view.

### FR-3 Project Cards
- Each project renders as a large preview image with title and tag row.
- On hover (desktop): dark overlay fades in with a "VIEW CASE STUDY" label sliding up, and tags stagger in.
- Links to `/projects/[slug]`.

### FR-4 Project Layout *(removed: horizontal pinned scroll)*
- **Removed** as part of the CSS animation simplification — GSAP/ScrollTrigger's pinned horizontal scroll is gone. At every viewport width, projects render as a plain vertical stack using `ScrollReveal`, which is what all narrower/touch/reduced-motion viewports already rendered. No pinning, no "stuck" horizontal-scroll risk to manage.

### FR-5 "How I Build" Process Timeline
- A continuous scroll-scrubbed fill isn't expressible with `IntersectionObserver` (binary in/out, not a scroll fraction), so this is now a **per-step reveal**: each step fades/slides in via `useInView` as it enters the viewport, and the vertical line's fill (`scaleY`) is sized to `steps revealed / total steps`, transitioning smoothly as each step is crossed — not a continuous 1:1 scroll-position scrub.
- Under reduced motion: every step (and the line) renders fully revealed immediately, no waiting on scroll.

### FR-6 GitHub Section
- Server route `GET /api/github` fetches live public data for GitHub user `Pravin671231` (profile + repo list) and returns `{ repos, followers, totalStars }`, with a 1-hour cache and a safe zeroed fallback on fetch failure.
- An optional `GITHUB_TOKEN` environment variable, if set, is sent as a bearer token to raise the GitHub API rate limit.
- Displayed stats render directly once fetched — **removed:** the count-up-from-0 animation (part of the CSS animation simplification; dropped rather than reimplemented).
- Displays a contribution-calendar-style grid. **Known limitation:** the public unauthenticated GitHub REST API does not expose real contribution-calendar data (that requires the authenticated GraphQL API); MVP uses seeded/mock cell data, clearly commented as such. The grid fades in once via `ScrollReveal` (no per-cell stagger, also dropped in the same simplification). Wiring in real data is a Phase 2 item.

### FR-7 Contact
- Large multi-line headline ("LET'S / BUILD / IT.") reveals character-by-character, triggered when scrolled into view.
- Primary CTA is wrapped in the magnetic-button behavior (see FR-8).
- Reuses `GlowBackground` for visual continuity with the Hero section.

### FR-8 Magnetic Buttons *(removed: custom cursor)*
- **Removed:** the custom cursor (small dot tracking the pointer, with `view`/`code`/`talk` contextual labels over project cards/GitHub links/the contact CTA) and `CursorContext`, along with the magnetic pull effect (button displacing toward the cursor). Both were part of the CSS animation simplification — dropped rather than reimplemented; the site now uses the native browser cursor everywhere.
- `MagneticButton` is now a plain CSS `:hover` scale, applied to the same primary CTAs (Contact CTA; optionally Hero CTA), scoped to `@media (hover: hover) and (pointer: fine)`.

## 5. Functional Requirements — Phase 2 Stub Sections (present, simple scope in MVP)

All of the following exist as real, functional sections wired into the page, using only the generic `ScrollReveal` fade/slide entrance (or, for Navbar, a simple scroll-position threshold check) — not GSAP, not bespoke choreography. Each has a noted Phase 2 target for its full treatment.

| Section | MVP scope | Phase 2 target |
|---|---|---|
| Navbar | Static/simple fade on load; background blur toggles past a scroll threshold | Entrance stagger for nav items; smooth shrink-on-scroll animation |
| Footer | Static content, simple hover states | — (no Phase 2 planned) |
| About card | Plain static card | Mouse-tilt (`rotateX`/`rotateY`, ±3°) |
| Stack | Responsive grid of skill nodes, each `ScrollReveal` | SVG connection-line diagram between related nodes, CSS `stroke-dashoffset` draw-in (no GSAP — see §2 "Animation approach") |
| Journey | Simple vertical list of experience entries | Unify visually with Process's animated line treatment |
| Certifications | Card grid, `ScrollReveal` per card | Hover lift + border glow + icon rotation |
| Testimonials | Static row/grid of quote cards | Auto-advancing/draggable carousel |
| Command Palette | `Ctrl+K` opens a plain modal with a filterable static nav list; Enter navigates | Fuzzy search, animated open/close, keyboard highlight navigation |
| Page transitions | None (default Next.js navigation) | CSS view-transition (no Motion — see §2 "Animation approach") |
| Floating decorative code glyphs | A few CSS-keyframe-animated glyphs near Hero/About | — (decorative, low priority) |
| Project case-study page | Static detail layout (image, title, description, tags, links) using `ScrollReveal` | Progressive section-by-section reveal (Problem → Architecture → Features → Stack → Result) |

## 6. Non-Functional Requirements

- **NFR-1 Responsive:** Full functional parity across mobile (~375px), tablet (~768px), and desktop (~1440px) viewport widths; desktop-only effects (`GlowBackground`'s parallax) degrade gracefully rather than breaking layout on smaller/touch viewports.
- **NFR-2 Reduced motion:** Every animation system respects `prefers-reduced-motion: reduce` with a documented static/instant fallback (see FR sections above) — auto-playing/scroll-triggered CSS animations are gated off via `@media (prefers-reduced-motion: reduce)` or a `useReducedMotion()` check, matching per-effect.
- **NFR-3 Performance:** No continuous full-screen particle/3D backgrounds; background motion limited to 2–3 slow-moving gradient blobs at low opacity (0.03–0.08). `next/image` used with explicit sizing to avoid layout shift (CLS).
- **NFR-4 Build correctness:** `next build` completes with zero TypeScript and zero ESLint errors; all client-side-only files (mousemove listeners, `useInView`, etc.) are correctly marked as Client Components. Enforced automatically by CI (`.github/workflows/ci.yml`, set up in M0) on every push/PR to `main`, not just checked manually before merge.
- **NFR-5 Content integrity:** No fabricated external links (project repo/live URLs use `#` placeholders where no real link exists); placeholder testimonials read as obviously placeholder rather than fabricated realistic endorsements.

## 7. Data Requirements

Typed data modules under `src/data/`:

- `Project` — slug, title, tagline, description, tags, coverImage, liveUrl, repoUrl, featured, optional caseStudy breakdown.
- `StackNode` — id, name, category, icon, optional `connectsTo` (reserved for Phase 2 diagram).
- `ExperienceEntry` — id, role, organization, start/end, summary, highlights.
- `Certification` — id, title, issuer, date, credentialUrl.
- `Testimonial` — id, quote, author, role, avatar.

## 8. Out of Scope (MVP)

- Real GitHub contribution-calendar data (requires authenticated GraphQL integration).
- Bespoke motion for any Phase 2 stub section listed in §5.
- Page-transition animation between routes.
- CMS/backend for editing content — content is static, file-based.
