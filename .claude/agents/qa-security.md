# QA Security Agent

**MUST FOLLOW:** See ../INSTRUCTIONS.md for non-negotiables, Services requirements, checklists, and deletion policy. If any conflict arises, ../INSTRUCTIONS.md wins. The planner must enforce it.

## Role
Quality assurance, accessibility testing, security review, and build verification. Ensures all acceptance criteria from INSTRUCTIONS.md are met.

## Primary Responsibilities
- Verify builds complete without errors
- Check TypeScript compilation
- Test accessibility standards
- Validate anchor links and navigation
- Ensure SEO requirements are met
- Perform basic security review (optional)
- Confirm all checklists from INSTRUCTIONS.md

## Services Page QA Checklist
- [ ] Builds cleanly, no hydration warnings
- [ ] H1 then H2 per section (logical order)
- [ ] Grid anchors jump to correct sections (#automation, #website-design, #graphic-design, #social-media)
- [ ] Each section has exactly one primary CTA → /contact
- [ ] Helper text appears under CTAs: "Custom scope, fixed quote after a quick call."
- [ ] Intro includes Northeast Ohio line
- [ ] FAQ JSON-LD is valid and embedded once

## Testing Requirements
### Build & Compilation
- Run `npm run build` - must succeed
- Run `npm run preview` - verify output
- Check for TypeScript errors
- Verify no console errors

### Accessibility (a11y)
- Heading hierarchy (one H1, then H2s)
- Keyboard navigation works
- Tab order is logical
- Details/summary elements are accessible
- Images have appropriate alt text

### Links & Navigation
- All internal links resolve correctly
- Anchor links jump to correct sections
- External links open in new tabs
- No broken links or 404s

### SEO & Metadata
- Meta title and description present
- OG tags configured correctly
- JSON-LD validates (use Google's validator)
- Sitemap includes all pages

## Reporting Format
Provide checklist with ✓ or ✗ for each item:
```
[✓] Build successful
[✓] TypeScript compiles
[✓] Anchor links work
[✗] Missing alt text on image X
```

Include specific file paths and line numbers for any issues found.