# CLAUDE.md - INT Creative Hub Project Guide

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with the INT Creative Hub website repository.

## 🚀 Quick Start Commands

### Development Server
```bash
cd /home/intadmin/Desktop/intcreative-hub
npm run dev              # Start development server on http://localhost:4321
npm run build            # Create production build
npm run preview          # Preview production build locally
```

### Code Quality
```bash
npm run check            # Run Astro type checking
npm run lint             # Check code with ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier
```

## 📋 Project Overview

**INT Creative Hub** is a professional agency website built with Astro, showcasing transformation-focused web development and marketing automation services for local businesses in Northeast Ohio.

### Current Status: Pre-Launch with Demonstration Portfolio
- ✅ Complete portfolio system with filtering functionality
- ✅ Legal compliance with clear demonstration project disclaimers
- ✅ Professional navigation with services dropdown
- ✅ Mobile-responsive design with accessibility features
- ✅ Comprehensive structured data implementation

## 🏗️ Architecture Overview

### Core Technology Stack
- **Framework**: Astro (Static Site Generation)
- **Styling**: TailwindCSS with custom color palette
- **Language**: TypeScript for type safety
- **Build Tool**: Vite (via Astro)
- **Deployment**: Vercel/Netlify ready

### Project Structure
```
src/
├── components/          # Reusable Astro components
│   ├── common/          # Navigation, Footer, Breadcrumbs
│   ├── navigation/      # ServicesDropdown
│   ├── sections/        # Page-specific sections
│   │   ├── portfolio/   # Portfolio system components
│   │   └── services/    # Services system components
│   ├── legal/           # Legal compliance components
│   └── social/          # Social media components
├── layouts/             # Page layout templates
│   ├── BaseLayout.astro     # Main wrapper
│   ├── ServicePageLayout.astro  # Service pages
│   └── CaseStudyLayout.astro    # Portfolio case studies
├── pages/               # File-based routing
│   ├── services/        # Individual service pages
│   ├── portfolio/       # Individual case study pages
│   └── *.astro         # Main pages
├── data/                # Content and configuration
│   ├── services.ts      # Services data structure
│   └── portfolio.ts     # Portfolio/case studies data
├── types/               # TypeScript definitions
└── utils/               # Helper functions
```

## 🎯 Portfolio System Architecture (Latest Implementation)

### Navigation System
- **ServicesDropdown.astro**: Hover-based dropdown for desktop, accordion for mobile
- **PortfolioFilter.astro**: Client-side filtering with progressive enhancement
- **Mobile responsiveness**: Touch-friendly interactions with proper animations

### Portfolio Components
- **PortfolioGrid.astro**: Responsive portfolio display with service filtering
- **PortfolioFilter.astro**: Mobile-friendly filtering system
- **CaseStudyLayout.astro**: Individual case study template with legal disclaimers
- **12 individual case study pages**: Complete demonstration projects

### Legal Compliance Features
- **Clear demonstration disclaimers**: Prominent warnings about fictional projects
- **FTC-compliant testimonials**: All fictional testimonials properly labeled
- **Transparent messaging**: Honest about pre-launch business status
- **Professional presentation**: Maintains credibility while being legally compliant

### Portfolio Data Structure
```typescript
interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  serviceType: string;
  description: string;
  clientResults: {
    timeframe: string;
    metric: string;
    keyOutcome: string;
  };
  technologies: string[];
  challenges: string[];
  solutions: string[];
  // ... comprehensive project details
}
```

## 🔧 Development Patterns

### Component Creation
1. **Location**: Place in appropriate subdirectory under `src/components/`
2. **Naming**: Use PascalCase (e.g., `PortfolioGrid.astro`)
3. **Props**: Always use TypeScript interfaces for props
4. **Imports**: Use relative paths, avoid circular dependencies

### Content Strategy
- **Demonstration Focus**: All portfolio content clearly labeled as fictional
- **Methodology Showcase**: Emphasizes process and approach over false results
- **Legal Compliance**: Maintains FTC compliance throughout
- **Value-First**: Lead with methodology, support with capabilities
- **Local Market**: Northeast Ohio focus with remote capability

### Styling Conventions
```css
/* Color Palette */
forest-900: #1a2e1e    /* Dark green for headers */
sage-600: #4a7c59      /* Medium green for CTAs */
beige-50: #faf8f5      /* Light background */

/* Component Structure */
.portfolio-grid: responsive grid with filtering
.demonstration-*: Clear labeling for fictional content
.cta-*: Consistent button styling across components
```

## 📊 Data Management

### Portfolio Data (src/data/portfolio.ts)
```typescript
interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  serviceType: string;
  description: string;
  clientResults: {
    timeframe: string;
    metric: string;
    keyOutcome: string;
  };
  // ... complete project details
}
```

### Services Data (src/data/services.ts)
- Central source of truth for all service information
- TypeScript interfaces for type safety
- Used across multiple components and pages

## 🧭 Common Development Tasks

### Portfolio System Maintenance
1. **Adding Projects**: Update `src/data/portfolio.ts` and create page in `src/pages/portfolio/`
2. **Filtering**: Uses `serviceType` field for categorization
3. **Legal Compliance**: Always include demonstration disclaimers

### Content Updates
- **Portfolio descriptions**: Update `src/data/portfolio.ts`
- **Service information**: Modify `src/data/services.ts`
- **Legal disclaimers**: Edit in respective layout components

### SEO Enhancements
- **Portfolio pages**: Schema markup in `CaseStudyLayout.astro`
- **Breadcrumbs**: Handled by `Breadcrumbs.astro` component
- **Meta tags**: BaseLayout.astro for global, individual pages for specific

## 🚨 Critical Considerations

### Legal Compliance (MANDATORY)
- **Never remove demonstration disclaimers** without explicit user approval
- **All fictional content must be clearly labeled** as such
- **Maintain FTC compliance** for advertising standards
- **Transparent about pre-launch status** throughout the site

### Content Integrity
- **Demonstration projects showcase real methodology** but fictional results
- **Process steps and deliverables** reflect actual service delivery
- **Pricing transparency** builds trust with target market
- **Professional presentation** while maintaining legal compliance

### Performance
- **Static generation**: Astro builds static HTML for optimal performance
- **Component lazy loading**: Astro handles this automatically
- **Client-side filtering**: Progressive enhancement with server-side fallback

## 🧪 Testing Procedures

### Portfolio Testing
1. **Filtering functionality**: Test all service type filters
2. **Mobile responsiveness**: Verify touch interactions work properly
3. **Legal disclaimers**: Ensure all fictional content is properly labeled
4. **Browser navigation**: Test back/forward buttons with filtering

### Content Verification
1. **Demonstration clarity**: All projects clearly labeled as fictional
2. **Professional presentation**: Maintains credibility while being compliant
3. **Mobile experience**: Touch-friendly interactions throughout

### Performance Checks
```bash
npm run build           # Verify no build errors
npm run preview         # Test production build
npm run check           # TypeScript validation
npm run lint            # Code quality check
```

## 🔍 Troubleshooting Guide

### Portfolio Issues
- **Filtering not working**: Check `serviceType` values in portfolio data
- **Mobile interactions**: Verify touch event handlers in PortfolioFilter
- **Legal compliance**: Ensure all disclaimers are present and visible

### Common Development Issues
- **Build errors**: Usually TypeScript type mismatches
- **Component imports**: Check relative path accuracy
- **Data structure**: Verify TypeScript interfaces match actual data

## 📚 Documentation References

- **Portfolio System**: See `docs/features/portfolio-system.md`
- **Legal Compliance**: See `docs/features/legal-compliance.md`
- **Project Structure**: See `PROJECT_STRUCTURE.md`
- **Services Architecture**: See `SERVICES_ARCHITECTURE.md`

## 🎯 Business Context

### Current Status: Pre-Launch
- **Demonstration Portfolio**: All projects are fictional showcases of methodology
- **Legal Compliance**: Full FTC compliance with clear disclaimers
- **Target Preparation**: Ready for transition to real client work
- **Professional Presentation**: Maintains credibility through transparency

### Target Market
- **Local service businesses** in Northeast Ohio
- **Professional services** needing lead generation
- **Small business owners** ready to invest $2,500-$10,000
- **Remote clients** nationwide seeking transformation

### Key Differentiators
- Transparent methodology demonstration over false claims
- Direct communication with implementer (not account managers)
- Fixed-fee transparency vs. agency hourly billing
- Local market knowledge with remote capability

---

**Quick Reference**: This is a pre-launch agency website with demonstration portfolio. Always maintain legal compliance and clear fictional project labeling when making changes.