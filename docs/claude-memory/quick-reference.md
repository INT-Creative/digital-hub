# Quick Reference - Claude Memory

## Development Environment
- **Development Server**: `http://localhost:4325/` (may vary)
- **Preview Server**: `http://localhost:4326/` (may vary)
- **Working Directory**: `/home/intadmin/Desktop/intcreative-hub`

## Critical Commands
```bash
npm run dev              # Start development (check port output)
npm run lint:fix         # Fix ESLint violations (96 total)
npm run build            # Production build
npm run check            # TypeScript validation
```

## Current Project Health: 7.2/10
- **Architecture**: 9/10 ✅ Excellent TypeScript & components
- **Performance**: 6/10 ⚠️ 5.2MB bundle needs optimization
- **Code Quality**: 6.5/10 ⚠️ 96 ESLint violations need fixing

## Critical Files with Issues
1. `/src/components/portfolio/TransformationStoryboard.astro` - Unused variables
2. `/src/data/portfolio.ts` - Unused imports
3. `/src/components/blog/BlogCard.astro` - JSX parsing error
4. `/src/utils/core-web-vitals.ts` - TypeScript 'any' usage

## Major Systems Implemented
- ✅ Blog System (12+ articles, 2,230 lines)
- ✅ Portfolio System (12 case studies, 5,676 lines)
- ✅ Performance Monitoring (Core Web Vitals)
- ✅ Image Optimization Utilities
- ✅ Testing Framework (Jest + Playwright)

## Performance Targets
- **Bundle Size**: 5.2MB → 2.8MB (46% reduction needed)
- **CSS Size**: 235KB → 75KB (68% reduction needed)
- **LCP**: ~3.5s → <2.5s

## Next Actions (Priority Order)
1. Fix 96 ESLint violations (`npm run lint:fix`)
2. Implement CSS purging (68% size reduction)
3. Optimize PortfolioGrid component (840 → 200 lines)
4. Add image optimization pipeline

---
**Last Updated**: December 20, 2024