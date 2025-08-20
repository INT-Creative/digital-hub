# Quick Reference - INT Creative Hub

## ⚡ Essential Commands

### Development
```bash
npm run dev              # Start dev server (http://localhost:4321)
npm run build            # Production build
npm run preview          # Preview production build
npm run check            # TypeScript validation
npm run lint             # Code quality check
npm run lint:fix         # Auto-fix linting issues
```

### Git Workflow
```bash
git status               # Check changes
git add .                # Stage all changes
git commit -m "message"  # Commit with message
git push origin main     # Push to GitHub
```

## 📂 Critical File Locations

### Portfolio System
```
src/data/portfolio.ts                    # Portfolio data (12 projects)
src/components/sections/portfolio/       # Portfolio components
src/pages/portfolio.astro               # Main portfolio page
src/pages/portfolio/[slug].astro        # Individual case studies
src/layouts/CaseStudyLayout.astro       # Case study template
```

### Core Data
```
src/data/services.ts                    # Services information
src/data/portfolio.ts                   # Portfolio/case studies
```

### Key Components
```
src/components/navigation/ServicesDropdown.astro    # Main navigation
src/components/sections/portfolio/PortfolioGrid.astro    # Portfolio display
src/components/sections/portfolio/PortfolioFilter.astro  # Filtering system
src/layouts/BaseLayout.astro                            # Main layout
```

## 🎯 Portfolio System Quick Reference

### URLs
```
/portfolio                           # All 12 demonstration projects
/portfolio?filter=website-development # Website projects (3)
/portfolio?filter=digital-marketing   # Marketing projects (4)  
/portfolio?filter=graphic-design      # Design projects (2)
/portfolio?filter=marketing-automation # Automation projects (3)
```

### Data Helper Functions
```typescript
import { 
  getPortfolioByCategory,    // Filter by service type
  getFeaturedPortfolio,      // Get featured projects
  getPortfolioBySlug,        // Get single project
  getPortfolioStats          // Get counts/statistics
} from '../data/portfolio';
```

### Adding New Portfolio Project
1. Add project data to `src/data/portfolio.ts`
2. Create page at `src/pages/portfolio/[slug].astro`
3. Use `CaseStudyLayout` template
4. Include demonstration disclaimers

## ⚖️ Legal Compliance Checklist

### Required Elements (DO NOT REMOVE)
- [ ] Portfolio page disclaimer banner
- [ ] "Demonstration Project" labels on cards
- [ ] Case study page disclaimers
- [ ] "(Fictional)" labels on testimonials
- [ ] FTC compliance warnings

### Messaging Guidelines
- ✅ "Demonstration projects showcase methodology"
- ✅ "Same process, applied to your specific goals"
- ❌ Never claim real client results
- ❌ Never remove fictional content labels

## 🎨 Brand Colors & Styling

### Color Palette
```css
forest-900: #1a2e1e      /* Headers, primary text */
sage-600: #4a7c59        /* CTAs, interactive elements */
beige-50: #faf8f5        /* Light backgrounds */
amber-600: #f59e0b       /* Warning/disclaimer banners */
```

### Component Classes
```css
.demonstration-*         /* Fictional content labeling */
.portfolio-grid         /* Main portfolio layout */
.filter-*              /* Filtering system styles */
.case-study-*          /* Individual project layouts */
```

## 🔍 Common Issues & Solutions

### Portfolio Filtering Not Working
```bash
# Check serviceType values match filter IDs
grep -r "serviceType" src/data/portfolio.ts

# Verify filter JavaScript loaded
grep -r "data-filter-category" src/components/sections/portfolio/
```

### Build Errors
```bash
# Check TypeScript issues
npm run check

# Check for missing imports
npm run build
```

### Missing Demonstration Labels
```bash
# Search for disclaimer text
grep -r "Demonstration" src/components/
grep -r "Fictional" src/layouts/
```

## 📱 Testing Checklist

### Portfolio System
- [ ] All filter tabs work on desktop
- [ ] Mobile dropdown functions properly  
- [ ] URLs update when filtering
- [ ] Browser back/forward work
- [ ] All 12 case study pages load

### Legal Compliance  
- [ ] Demonstration disclaimers visible
- [ ] Fictional testimonials labeled
- [ ] No false client claims
- [ ] Professional presentation maintained

### Performance
- [ ] Fast loading (<3s)
- [ ] Smooth animations
- [ ] Mobile responsive
- [ ] No console errors

## 🚀 Quick Deploy Checklist

### Before Committing
```bash
npm run check            # TypeScript validation
npm run lint             # Code quality
npm run build            # Production build test
```

### Git Workflow
```bash
git status               # Review changes
git add .                # Stage changes
git commit -m "desc"     # Descriptive commit
git push origin main     # Deploy to GitHub
```

## 📞 Emergency Fixes

### Portfolio Filter Broken
1. Check `serviceType` values in portfolio data
2. Verify `data-filter-category` attributes exist
3. Check JavaScript console for errors

### Legal Compliance Issue
1. Ensure all disclaimers present
2. Check fictional content properly labeled
3. Verify no false client claims

### Build Failure
1. Run `npm run check` for TypeScript errors
2. Check for missing/incorrect imports
3. Verify all required files exist

## 💡 Key Principles

### Content Guidelines
- **Always demonstrate methodology**, never fake results
- **Maintain legal compliance** at all times
- **Position transparency** as competitive advantage
- **Focus on process**, not fabricated outcomes

### Technical Standards
- **Mobile-first** responsive design
- **Progressive enhancement** for JavaScript features
- **TypeScript** for all new code
- **Accessibility** compliance throughout

### Business Positioning
- **Pre-launch status** with demonstration portfolio
- **Honest about business stage** - builds trust
- **Methodology showcase** rather than false claims
- **Northeast Ohio focus** with remote capability