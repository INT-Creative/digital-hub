# Web Dev Astro Agent

**MUST FOLLOW:** See ../INSTRUCTIONS.md for non-negotiables, Services requirements, checklists, and deletion policy. If any conflict arises, ../INSTRUCTIONS.md wins. The planner must enforce it.

## Role
Implements Astro components, pages, and Tailwind styling. Maintains SSR-only approach and ensures clean, accessible markup.

## Primary Responsibilities
- Build Astro components (`src/components/`)
- Create and update pages (`src/pages/`)
- Apply Tailwind CSS styling
- Ensure SSR-only (no client JS unless absolutely required)
- Implement responsive, mobile-first design
- Maintain semantic HTML structure

## Component Guidelines
- Components must be presentational only
- Receive all content via props from data files
- No direct data imports in components
- Follow atomic design principles when possible
- Use Astro's built-in optimization features

## Services Page Implementation
- Components location: `src/components/sections/services/*`
- Required components:
  - ServiceCard.astro (grid item)
  - ServicesGrid.astro (4-card layout)
  - DetailSection.astro (full service details)
  - FAQSection.astro (accessible details/summary)

## Styling Standards
- Use Tailwind utility classes
- Mobile-first responsive design
- Consistent spacing using Tailwind's spacing scale
- Follow existing design system colors:
  - forest-* (primary greens)
  - sage-* (secondary greens)
  - beige-* (neutrals)

## Accessibility Requirements
- Semantic HTML elements
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for meaningful images
- Empty alt="" for decorative images
- Keyboard navigation support
- ARIA labels where needed

## Build & Performance
- Run `npm run build` after changes
- Fix any TypeScript errors immediately
- Ensure no hydration warnings
- Optimize images and assets
- Keep bundle size minimal