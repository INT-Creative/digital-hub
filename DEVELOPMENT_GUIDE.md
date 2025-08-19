# Development Guide - INT Creative Hub

**Comprehensive development workflow and patterns for the INT Creative Hub website**

## 🚀 Quick Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git for version control
- Code editor (VS Code recommended)

### Initial Setup
```bash
# Clone repository
git clone https://github.com/intcreative-hub/intcreative-hub.git
cd intcreative-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 🔧 Development Workflow

### Daily Development Commands
```bash
# Development
npm run dev              # Start dev server with hot reload
npm run dev --host       # Start dev server accessible on network (mobile testing)

# Code Quality
npm run check            # TypeScript type checking
npm run lint             # ESLint code quality check
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Prettier code formatting

# Production
npm run build            # Create production build
npm run preview          # Preview production build locally
```

### Git Workflow
```bash
# Feature development
git checkout -b feature/your-feature-name
# Make changes...
git add .
git commit -m "feat: descriptive commit message"
git push origin feature/your-feature-name

# Use conventional commits:
# feat: new feature
# fix: bug fix
# docs: documentation updates
# style: formatting changes
# refactor: code refactoring
# test: adding tests
```

## 📁 Project Architecture

### Component Organization Patterns
```
src/components/
├── common/              # Shared across all pages
│   ├── Navigation.astro    # Global navigation
│   ├── Footer.astro        # Global footer
│   └── Breadcrumbs.astro   # Navigation breadcrumbs
├── navigation/          # Navigation-specific
│   └── ServicesDropdown.astro
├── sections/            # Page-specific sections
│   ├── services/           # Services-related components
│   ├── about/              # About page components
│   └── shared/             # Cross-page sections
└── social/              # Social media components
```

### Layout Hierarchy
```
BaseLayout.astro (Global wrapper)
├── ServicePageLayout.astro (Service-specific)
├── BlogPostLayout.astro (Blog-specific)
└── Custom page layouts as needed
```

### Data Management
```
src/data/
├── services.ts          # Central service definitions
├── mockCompanies.json   # Portfolio data
└── processSteps.ts      # Business methodology

src/types/
├── services.ts          # Service data interfaces
├── portfolio.ts         # Portfolio data interfaces
└── common.ts            # Shared type definitions
```

## 🎯 Development Patterns

### Component Creation Template
```astro
---
// TypeScript interface for props
interface Props {
  title: string;
  description?: string;
  // Define all props with types
}

const { title, description = "Default description" } = Astro.props;

// Import dependencies
import type { ServiceDetail } from '../types/services';
---

<!-- Component HTML with proper structure -->
<section class="component-wrapper">
  <h2 class="heading-class">{title}</h2>
  {description && <p class="description-class">{description}</p>}
</section>

<style>
  /* Component-specific styles if needed */
  .component-wrapper {
    /* Scoped styles */
  }
</style>

<script>
  // Client-side JavaScript if needed
  document.addEventListener('DOMContentLoaded', function() {
    // Component interactions
  });
</script>
```

### Services System Pattern
When working with services:

1. **Data Source**: Always use `src/data/services.ts` as single source of truth
2. **Type Safety**: Import service interfaces from `src/types/services.ts`  
3. **Component Props**: Pass complete service objects, not individual properties
4. **Navigation**: Update `ServicesDropdown.astro` when adding services

### Styling Conventions
```css
/* Color System */
.text-forest-900    /* Dark headers: #1a2e1e */
.text-sage-600      /* Medium accents: #4a7c59 */
.bg-beige-50        /* Light backgrounds: #faf8f5 */

/* Component Naming */
.service-*          /* Service-related styles */
.transformation-*   /* Transformation content */
.cta-*             /* Call-to-action elements */

/* Responsive Design */
.md:              /* Medium screens and up */
.lg:              /* Large screens and up */
/* Mobile-first approach */
```

## 🧭 Common Development Tasks

### Adding a New Service

1. **Update Service Data**
```typescript
// src/data/services.ts
export const servicesData = {
  services: [
    // ... existing services
    {
      title: "New Service",
      slug: "new-service",
      description: "Service description",
      pricing: "$X,XXX - $X,XXX",
      timeline: "XX days",
      features: ["Feature 1", "Feature 2"],
      deliverables: [
        {
          icon: "icon-name",
          text: "Deliverable description",
          details: "Additional details"
        }
      ],
      // ... complete service definition
    }
  ]
};
```

2. **Create Service Page**
```astro
---
// src/pages/services/new-service.astro
import ServicePageLayout from '../../layouts/ServicePageLayout.astro';
import { servicesData } from '../../data/services';

const service = servicesData.services.find(s => s.slug === 'new-service');
if (!service) {
  return Astro.redirect('/services');
}
---

<ServicePageLayout service={service} />
```

3. **Update Navigation**
```astro
// src/components/navigation/ServicesDropdown.astro
const serviceNavItems = [
  // ... existing services
  { 
    name: 'New Service', 
    href: '/services/new-service',
    description: 'Brief service description',
    pricing: '$X,XXX - $X,XXX'
  }
];
```

4. **Test Implementation**
- Verify navigation dropdown includes new service
- Check service page renders correctly
- Test mobile responsiveness
- Validate SEO structured data

### Modifying Existing Components

#### Services Dropdown
```astro
// src/components/navigation/ServicesDropdown.astro

// Desktop dropdown modification
<div class="dropdown-menu">
  <!-- Update service descriptions or styling -->
</div>

// Mobile accordion modification  
<div class="mobile-services-accordion">
  <!-- Update mobile navigation structure -->
</div>
```

#### Service Page Layout
```astro
// src/layouts/ServicePageLayout.astro

// Content sections modification
<!-- Hero Section -->
<!-- Transformation Journey -->
<!-- Process Steps -->
<!-- Deliverables -->
<!-- Related Services -->
<!-- CTA Section -->
```

### Content Updates

#### Service Descriptions
```typescript
// src/data/services.ts
const service = {
  // Update service content here
  description: "New description",
  features: ["Updated features"],
  deliverables: [/* Updated deliverables */]
};
```

#### Navigation Text
```astro
// src/components/navigation/ServicesDropdown.astro
const serviceNavItems = [
  {
    name: 'Updated Service Name',
    description: 'Updated description'
  }
];
```

## 🧪 Testing Procedures

### Manual Testing Checklist

#### Navigation Testing
- [ ] Desktop dropdown hover behavior
- [ ] Mobile accordion touch interactions  
- [ ] All service links navigate correctly
- [ ] Breadcrumb navigation accuracy
- [ ] Cross-device consistency

#### Content Verification
- [ ] All transformation content displays
- [ ] Pricing information accuracy
- [ ] Related services functionality
- [ ] CTA buttons work correctly
- [ ] Mobile layout responsiveness

#### Performance Testing
```bash
# Build verification
npm run build
# Check for errors, warnings

# Production preview
npm run preview
# Test actual performance

# TypeScript checking
npm run check
# Verify no type errors
```

#### SEO Testing
- [ ] Meta tags accuracy
- [ ] Structured data validation (Google Rich Results)
- [ ] Internal linking functionality
- [ ] Page load performance
- [ ] Mobile-friendly test

### Browser Testing
Test across:
- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Android Chrome
- **Tablet**: iPad, Android tablets

### Performance Benchmarks
- **Lighthouse Score**: Aim for 90+ in all categories
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Build Time**: Monitor for increases over 30 seconds
- **Bundle Size**: Watch for significant increases

## 🔍 Debugging Guide

### Common Issues & Solutions

#### Navigation Not Working
```bash
# Check component imports
npm run check

# Verify file paths
ls src/components/navigation/

# Check for JavaScript errors
# Open browser dev tools > Console
```

#### Service Pages 404
```bash
# Verify file naming matches slug
ls src/pages/services/

# Check services.ts data
# Ensure slug matches filename
```

#### Build Errors
```bash
# Detailed build output
npm run build --verbose

# Type checking
npm run check

# Common fixes:
# - Fix TypeScript interface mismatches
# - Verify all imports exist
# - Check for syntax errors
```

#### Mobile Layout Issues
```bash
# Test with network access
npm run dev --host

# Check responsive classes
# Verify Tailwind breakpoints
# Test touch interactions
```

### Debug Commands
```bash
# Development with verbose output
npm run dev -- --verbose

# Build with detailed information  
npm run build -- --verbose

# Type checking with detailed errors
npm run check -- --verbose

# Network testing for mobile
npm run dev --host 0.0.0.0
```

## 📚 Code Quality Standards

### TypeScript Usage
- Always define interfaces for component props
- Use strict type checking
- Avoid `any` types
- Implement proper error handling

### Component Standards
- Single responsibility principle
- Proper prop validation
- Consistent naming conventions
- Documentation for complex logic

### Performance Guidelines
- Optimize images (WebP format)
- Minimize client-side JavaScript
- Use CSS for animations when possible
- Leverage Astro's static generation

### Accessibility Requirements
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## 🚀 Deployment Process

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] Build completes without errors
- [ ] Performance benchmarks met
- [ ] Cross-browser testing complete
- [ ] Mobile responsiveness verified
- [ ] SEO validation passed

### Build Process
```bash
# Clean build
rm -rf dist/
npm run build

# Verify build
npm run preview

# Check output
ls -la dist/
```

### Environment Configuration
```bash
# Production environment variables
ASTRO_SITE_URL=https://intcreative.co
ASTRO_ENV=production

# Development overrides
ASTRO_DEV_TOOLBAR=true
```

---

**Next Steps**: After completing development, refer to `SESSION_CONTEXT.md` for handoff information and `COMPONENT_REFERENCE.md` for detailed component documentation.