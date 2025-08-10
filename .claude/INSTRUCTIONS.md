# INT Creative — Project Instructions (Single Source of Truth)

These instructions govern all work by Claude Code and all subagents in this repo.

## Non-negotiables
- ALWAYS start with the **planner** agent to break down tasks and assign to subagents.
- Keep changes **idempotent**, small, and easy to diff.
- Prefer **SSR**; do not add client JS unless strictly required.
- Keep **copy/content in typed data** (e.g., `src/data/services.ts`); keep components presentational.
- Follow **semantic HTML**, accessible headings, and alt text rules.

## Services Page Requirements
- H1 + short intro; include: **"Based in Northeast Ohio (Cleveland • Akron • Canton), working locally and remotely."**
- Services grid of 4 cards using data from `src/data/services.ts`.
- Four detail sections with anchors: `#automation`, `#website-design`, `#graphic-design`, `#social-media`.
- One strong CTA to **/contact** with helper text under the button:
  **"Custom scope, fixed quote after a quick call."**
- Light FAQ block and valid **FAQPage JSON-LD** (2–4 Q/As).
- Keep Web platform default = **Webflow**; Automation default = **Zapier**; CRM default = **HubSpot Free**.

## File & Folder Conventions
- Types: `src/types/services.ts`
- Data: `src/data/services.ts` (grid + details + globalFaqs)
- Components (SSR): `src/components/sections/services/*`
- Page: `src/pages/services.astro`
- Decorative icons: `public/images/icons/{automation,web,design,social}.svg` (24×24)

## Acceptance Checklists
**Services Page**
- [ ] Builds cleanly, no hydration warnings
- [ ] H1 then H2 per section (logical order)
- [ ] Grid anchors jump to correct sections
- [ ] Each section has exactly one primary CTA → `/contact`
- [ ] Helper text appears under CTAs (see above)
- [ ] Intro includes Northeast Ohio line
- [ ] FAQ JSON-LD is valid and embedded once

**Data & Types**
- [ ] TypeScript compiles; no `any`
- [ ] Slugs match anchors
- [ ] Copy kept in `src/data/services.ts`

## Agent Roles (Merged Business & Technical System)

### Core Technical Agents
- **planner**: orchestrates tasks; assigns to subagents; enforces this document.
- **site-architect**: IA/SEO/copy. Owns `src/data/services.ts` content + JSON-LD suggestions.
- **web-dev-astro**: implements Astro/Tailwind sections/pages; no client JS unless needed.
- **qa-security**: a11y checks, anchors, build, basic link checks; optional security review.

### Core Business Agents
- **client-acquisition-specialist**: Generates qualified leads through LinkedIn outreach, free audits, and value-first engagement. Interfaces with technical agents for audit generation.
- **content-authority-builder**: Creates SEO-optimized content, social media posts, and thought leadership pieces. Coordinates with site-architect for blog implementation.
- **service-delivery-specialist**: Executes all client work using Mirror Loop Methodology™. Manages website builds, automation, design, and marketing services.
- **sales-proposal-specialist**: Converts leads to clients with ROI-focused proposals. Creates packages, handles objections, and manages follow-up sequences.

### Specialized Support Agents
- **visual-asset-creator**: generates image prompts, specifications, and visual briefs. Creates placeholder SVGs. Owns `/docs/visual-assets/` and `/public/images/placeholders/`.
- **automation-builder** (optional): creates automation SOPs/diagrams under `/docs/automation`.
- **social-strategist** (optional): creates sample calendars under `/docs/social`.

### Agent Coordination
- Business agents handle client-facing activities and strategy
- Technical agents implement website features and code
- All agents follow INSTRUCTIONS.md as single source of truth
- Agents collaborate through clearly defined handoff points

## Change Control
- Before large edits, print a plan (files + acceptance criteria).
- After edits, run `npm run build` and report issues/fixes.
- Use conventional commit messages:
  - feat(services): …
  - chore(assets): …
  - docs: …

## Deletion Policy for .md Cleanup
- SAFE TO DELETE (or move to `/docs/archive/`) if:
  - Duplicates content now in `.claude/INSTRUCTIONS.md`, or
  - Mentions "deprecated", "old", "draft", or
  - Describes tasks already completed in this repo
- NEVER DELETE:
  - `/README.md`, `/LICENSE*`, `/CHANGELOG*`, `/CODE_OF_CONDUCT*`, SECURITY policies
- Prefer **git delete** with a clear commit message. If unsure, move to `/docs/archive/` and note why.

## Local SEO
- Mention "Northeast Ohio (Cleveland • Akron • Canton)" once on Services, once in footer or FAQ.

— End of instructions —