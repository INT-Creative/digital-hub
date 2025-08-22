# CLAUDE.md - INT Creative Hub Project Guide

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with the INT Creative Hub website repository.

## 🚀 Quick Start Commands

### Development Server
```bash
cd /home/intadmin/Desktop/intcreative-hub
npm run dev              # Start development server (currently on http://localhost:4325)
npm run build            # Create production build
npm run preview          # Preview production build (currently on http://localhost:4326)
```

**Note**: Ports may vary if multiple instances are running. Check console output for actual ports.

### Code Quality
```bash
npm run check            # Run Astro type checking
npm run lint             # Check code with ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier
```

## 📋 Project Overview

**INT Creative Hub** is a professional agency website built with Astro, showcasing transformation-focused web development and marketing automation services for local businesses in Northeast Ohio.

### Current Status: Pre-Launch with Full Content Systems
- ✅ Complete portfolio system with 12 demonstration case studies
- ✅ Blog system with 12+ comprehensive articles
- ✅ Legal compliance with clear demonstration project disclaimers
- ✅ Professional navigation with services and blog dropdowns
- ✅ Mobile-responsive design with accessibility features
- ✅ Comprehensive structured data and SEO implementation
- ⚠️ Code quality issues: 96 ESLint violations need fixing
- ⚠️ Performance optimization needed: 5.2MB bundle size

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
│   ├── blog/           # Blog system components (NEW)
│   ├── common/          # Navigation, Footer, Breadcrumbs, ResponsiveImage
│   ├── navigation/      # ServicesDropdown, BlogDropdown
│   ├── portfolio/       # TransformationStoryboard
│   ├── sections/        # Page-specific sections
│   │   ├── blog/       # Blog grids and filters
│   │   ├── portfolio/   # Portfolio system components
│   │   └── services/    # Services system components
│   ├── legal/           # Legal compliance components
│   └── social/          # Social media components
├── layouts/             # Page layout templates
│   ├── BaseLayout.astro     # Main wrapper
│   ├── ServicePageLayout.astro  # Service pages
│   ├── CaseStudyLayout.astro    # Portfolio case studies
│   ├── BlogLayout.astro      # Blog wrapper (NEW)
│   ├── BlogListingLayout.astro  # Blog listing (NEW)
│   └── BlogPostLayout.astro     # Individual posts (NEW)
├── pages/               # File-based routing
│   ├── blog/           # Blog posts and dynamic routing (NEW)
│   │   ├── [slug].astro
│   │   └── *.astro/*.md
│   ├── services/        # Individual service pages
│   ├── portfolio/       # Individual case study pages
│   └── *.astro         # Main pages
├── data/                # Content and configuration
│   ├── services.ts      # Services data structure
│   ├── portfolio.ts     # Portfolio data (5,676 lines)
│   └── blog.ts         # Blog content (2,230 lines) (NEW)
├── types/               # TypeScript definitions
│   ├── blog.ts         # Blog types (NEW)
│   ├── caseStudy.ts    # Portfolio types (NEW)
│   └── services.ts     # Service types
└── utils/               # Helper functions
    ├── core-web-vitals.ts    # Performance monitoring (NEW)
    ├── portfolio-images.ts   # Image optimization (NEW)
    └── seo-optimization.ts   # SEO utilities (NEW)
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

## 📝 Blog System Architecture (NEW Implementation)

### Blog Components
- **BlogCard.astro**: Individual blog post card display
- **BlogGrid.astro**: Responsive grid layout for blog posts
- **BlogHero.astro**: Hero section for blog pages
- **CategoryFilter.astro**: Category-based filtering system
- **RelatedPosts.astro**: Algorithm for related content
- **AuthorByline.astro**: Author information display
- **BlogDropdown.astro**: Navigation dropdown for blog

### Blog Data Structure (`src/data/blog.ts`)
```typescript
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string; // Full markdown content
  publishedAt: string;
  status: 'draft' | 'published';
  featured: boolean;
  category: string;
  tags: string[];
  readingTime: number;
  author: BlogAuthor;
  transformationFocus: {
    businessChallenge: string;
    transformationOutcome: string;
    industryRelevance: string[];
  };
  relatedServices: RelatedService[];
  seo: BlogSEO;
  callToAction?: BlogCTA;
}
```

### Blog Features
- **12+ Comprehensive Articles**: Full content management
- **Dynamic Routing**: Using `[...slug].astro` for flexible URLs
- **SEO Optimized**: Meta tags, structured data, social sharing
- **Category System**: Business transformation, marketing automation, etc.
- **Reading Time**: Automatic calculation based on content
- **Related Content**: Intelligent content recommendations

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

## ⚡ Performance Considerations

### Current Performance Metrics
- **Bundle Size**: 5.2MB total (needs optimization)
- **CSS Size**: 235KB (target: 75KB)
- **JavaScript**: 18.9KB (acceptable)
- **Largest HTML**: 293KB (portfolio page)

### Known Performance Issues
1. **CSS Bundle**: 235KB needs 68% reduction via PurgeCSS
2. **PortfolioGrid Component**: 840 lines of JavaScript needs optimization
3. **Image Optimization**: Missing WebP/AVIF pipeline
4. **Global CSS**: 2,445 lines with redundant styles

### Optimization Targets
- **LCP**: < 2.5 seconds (currently ~3.5s estimated)
- **FID**: < 100ms (currently acceptable)
- **CLS**: < 0.1 (needs measurement)
- **Bundle Size**: < 3MB total

## 🐛 Code Quality Status

### ESLint Issues (96 Total)
- **77 Errors**: Blocking issues requiring immediate fixes
- **19 Warnings**: Non-blocking improvements
- **Main Issues**:
  - 23 unused variables across components
  - 8 parsing errors in Astro components
  - 12 TypeScript 'any' usage warnings

### Files Needing Attention
1. `/src/components/portfolio/TransformationStoryboard.astro`
2. `/src/data/portfolio.ts` - Unused imports
3. `/src/components/blog/BlogCard.astro` - JSX parsing error
4. `/src/utils/core-web-vitals.ts` - TypeScript 'any' usage

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

## 🔄 Repository Management

### Primary Repository
- **intcreative-hub**: Main production website repository at `/home/intadmin/Desktop/intcreative-hub/`
- **All commits**: Website features, legal compliance, business content, development work
- **Always use**: Unless explicitly directed otherwise by user

### Repository Guidelines
- **Legal/compliance changes**: Always commit to intcreative-hub
- **Website updates**: intcreative-hub (primary production site)
- **Blog posts**: intcreative-hub (integrated blog system)
- **Component development**: intcreative-hub (main component library)
- **Business documentation**: intcreative-hub (centralized business context)
- **Backup repos**: Only update when specifically requested by user
- **Experimental work**: Ask user which repo to use first

### Commit Protocol
- **Default target**: intcreative-hub repository, main branch
- **Always confirm**: For high-impact changes affecting multiple systems
- **Push policy**: Only when explicitly requested by user
- **Commit frequency**: After completing logical units of work
- **Message format**: Follow conventional commits with business context

### Task Completion Protocol
- **Audio notification**: Play system sound using `paplay /usr/share/sounds/freedesktop/stereo/complete.oga`
- **Visual indicator**: Always add "🔔 Ding!" text when finishing a task
- **Format**: Play audio + show bell emoji (🔔) followed by "Ding!" for clear completion signal
- **Placement**: At the end of task completion messages

### Other Repositories (Reference Only)
- **int-creative-astro-copy/**: Backup/archive - do not modify unless requested
- **int-creative-new/**: Legacy - do not modify unless requested  
- **int-creative-website-copy/**: Archive - do not modify unless requested
- **INT-Creative-Website/**: Legacy HTML - do not modify unless requested
- **intcreative/**: Unknown purpose - ask before modifying

---

**Quick Reference**: This is a pre-launch agency website with demonstration portfolio. Always maintain legal compliance and clear fictional project labeling when making changes. Default to intcreative-hub repository for all work unless explicitly directed otherwise.