# Component Reference Guide

**Detailed documentation for all components in the INT Creative Hub website**

## 🏗️ Services System Components

### ServicesDropdown.astro
**Location**: `src/components/navigation/ServicesDropdown.astro`  
**Purpose**: Professional navigation dropdown with service descriptions and pricing

#### Props Interface
```typescript
interface Props {
  currentPath?: string;  // Current page path for active state
}
```

#### Features
- **Desktop Experience**: Hover-based dropdown with detailed service cards
- **Mobile Experience**: Touch-friendly accordion with smooth animations
- **Service Information**: Names, descriptions, and pricing for each service
- **Navigation**: Links to both individual service pages and main services page

#### Usage
```astro
<ServicesDropdown currentPath={currentPath} />
```

#### Key Styles
- `.services-dropdown`: Main dropdown container with hover states
- `.mobile-services-accordion`: Mobile accordion with JavaScript interactions
- Responsive breakpoints at `md:` for desktop/mobile switching

#### Dependencies
- `src/data/services.ts` for service data
- Custom CSS animations for dropdown and accordion behavior

---

### ServicePageLayout.astro
**Location**: `src/layouts/ServicePageLayout.astro`  
**Purpose**: Reusable layout template for individual service pages

#### Props Interface
```typescript
interface Props {
  service: ServiceDetail;  // Complete service data object
}
```

#### Features
- **Content Preservation**: Maintains all transformation-focused messaging
- **SEO Optimization**: Service schema and breadcrumb structured data
- **Component Integration**: Breadcrumbs and related services components
- **Responsive Design**: Mobile-first layout with proper typography

#### Structure
```astro
<BaseLayout>
  <!-- JSON-LD structured data -->
  <Breadcrumbs />
  <!-- Hero section -->
  <!-- Transformation journey -->
  <!-- Process steps -->
  <!-- Deliverables -->
  <RelatedServices />
  <!-- CTA section -->
</BaseLayout>
```

#### Generated Schema
- **Service Schema**: Complete service information for search engines
- **Breadcrumb Schema**: Navigation structure for SEO
- **Organization Schema**: Company information and contact details

---

### ServicesOverviewGrid.astro
**Location**: `src/components/sections/services/ServicesOverviewGrid.astro`  
**Purpose**: 4-column responsive grid for services landing page

#### Features
- **Transformation Messaging**: "Choose Your Transformation Path" theme
- **Service Cards**: Individual cards with pricing, features, and CTAs
- **Animation System**: Staggered entrance animations and hover effects
- **Direct Linking**: Each card links to individual service page

#### Structure
```astro
<section class="py-20 bg-white">
  <!-- Header with transformation messaging -->
  <!-- 4-column responsive grid -->
  <!-- Promise section with company guarantee -->
</section>
```

#### Animation Features
- **Staggered Entry**: Cards animate in with `animation-delay` based on index
- **Hover Effects**: Transform scale, shadow changes, icon rotation
- **Micro-interactions**: Button shine effects and particle animations
- **Performance**: CSS-only animations for 60fps performance

---

### Breadcrumbs.astro
**Location**: `src/components/common/Breadcrumbs.astro`  
**Purpose**: Navigation breadcrumb component with accessibility

#### Props Interface
```typescript
interface BreadcrumbItem {
  label: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}
```

#### Features
- **Accessibility**: Proper ARIA navigation labels and semantic structure
- **SEO**: Breadcrumb structured data for search engines
- **Visual Design**: Consistent styling with arrow separators
- **Responsive**: Adapts to different screen sizes

#### Usage
```astro
<Breadcrumbs items={[
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Website Development", href: "/services/website-development" }
]} />
```

---

### RelatedServices.astro  
**Location**: `src/components/sections/services/RelatedServices.astro`  
**Purpose**: Cross-linking component showing 3 related services

#### Props Interface
```typescript
interface Props {
  currentServiceSlug: string;  // Slug of current service to exclude
}
```

#### Features
- **Smart Filtering**: Automatically excludes current service from display
- **Service Information**: Shows titles, descriptions, and pricing
- **Navigation**: Direct links to other service pages
- **Responsive Layout**: 3-column grid that stacks on mobile

#### Logic
```typescript
const relatedServices = servicesData.services
  .filter(s => s.slug !== currentServiceSlug)
  .slice(0, 3);
```

#### Usage
```astro
<RelatedServices currentServiceSlug="website-development" />
```

---

## 🧭 Navigation Components

### Navigation.astro (Modified)
**Location**: `src/components/common/Navigation.astro`  
**Purpose**: Main site navigation with integrated services dropdown

#### Recent Changes
- **Removed**: "Services" from flat navigation array
- **Added**: ServicesDropdown component integration
- **Maintained**: All existing navigation functionality and mobile menu

#### Structure
```astro
<header class="bg-white shadow-sm sticky top-0 z-50">
  <!-- Logo section -->
  <!-- Desktop navigation with ServicesDropdown -->
  <!-- Mobile menu with accordion -->
  <!-- CTA button -->
</header>
```

#### Integration Pattern
```astro
<div class="flex items-baseline space-x-4">
  {navItems.map((item) => (
    <!-- Regular navigation items -->
  ))}
  <!-- Services Dropdown -->
  <ServicesDropdown currentPath={currentPath} />
</div>
```

---

## 📄 Page Templates

### Individual Service Pages
**Location**: `src/pages/services/[service-slug].astro`  
**Pattern**: Consistent structure across all service pages

#### Template Structure
```astro
---
import ServicePageLayout from '../../layouts/ServicePageLayout.astro';
import { servicesData } from '../../data/services';

const service = servicesData.services.find(s => s.slug === 'service-slug');
if (!service) {
  return Astro.redirect('/services');
}
---

<ServicePageLayout service={service} />
```

#### Current Service Pages
1. **website-development.astro** - Website Development service
2. **digital-marketing.astro** - Digital Marketing service  
3. **graphic-design.astro** - Graphic Design service
4. **marketing-automation.astro** - Marketing Automation service

#### Error Handling
- **Service Not Found**: Automatic redirect to `/services`
- **Data Validation**: TypeScript ensures service data completeness
- **SEO Fallbacks**: Default meta tags if service data incomplete

---

## 🎨 Legacy Components (Still Active)

### ServicesGrid.astro
**Location**: `src/components/sections/services/ServicesGrid.astro`  
**Status**: Replaced by ServicesOverviewGrid on landing page, but still available
**Purpose**: Original 2x2 grid layout for services

### DetailSection.astro
**Location**: `src/components/sections/services/DetailSection.astro`  
**Status**: Content preserved in ServicePageLayout, available for other uses
**Purpose**: Detailed service information with transformation journey

### ServiceCard.astro
**Location**: `src/components/sections/services/ServiceCard.astro`  
**Status**: Still used in other contexts, enhanced animations
**Purpose**: Individual service card with before/after transformation format

---

## 🔧 Data Integration Patterns

### Service Data Consumption
All service components follow this pattern:

```typescript
// Import service data
import { servicesData } from '../data/services';

// Access specific service
const service = servicesData.services.find(s => s.slug === 'target-slug');

// Use complete service object as prop
<ServiceComponent service={service} />
```

### Type Safety Implementation
```typescript
// Component props always use interfaces
interface Props {
  service: ServiceDetail;  // From src/types/services.ts
}

// Data validation at build time
const { service } = Astro.props;
if (!service) {
  throw new Error('Service data required');
}
```

### Content Flow Architecture
```
src/data/services.ts (Source of Truth)
    ↓
Components import and consume
    ↓
TypeScript validates structure
    ↓
Generated HTML includes SEO data
```

---

## 🎯 Animation System

### Hover Effects Pattern
```css
/* Standard hover transform */
hover:scale-105 hover:shadow-xl

/* Duration for smooth transitions */
transition-all duration-300

/* For interactive elements */
transform hover:-translate-y-2
```

### Staggered Animations
```astro
{services.map((service, index) => (
  <div style={`animation-delay: ${index * 200}ms`}>
    <!-- Service content -->
  </div>
))}
```

### Performance Considerations
- **CSS-only animations** for 60fps performance
- **Hardware acceleration** with `transform` and `opacity`
- **Minimal JavaScript** for interaction states
- **Efficient selectors** to avoid layout thrashing

---

## 🧪 Testing Guidelines

### Component Testing Checklist
- [ ] **Props validation**: All required props provided
- [ ] **Responsive behavior**: Works across screen sizes  
- [ ] **Interaction states**: Hover, focus, active states
- [ ] **Accessibility**: Keyboard navigation and screen readers
- [ ] **Performance**: No animation jank or layout shifts

### Integration Testing
- [ ] **Data flow**: Service data reaches components correctly
- [ ] **Navigation**: All links function properly
- [ ] **SEO**: Structured data validates in Google tools
- [ ] **Cross-browser**: Consistent behavior across browsers

### Performance Testing
```bash
# Build verification
npm run build

# Production preview
npm run preview

# Lighthouse audit
# Check Core Web Vitals in browser dev tools
```

---

## 🔄 Maintenance Patterns

### Adding New Components
1. **Create in appropriate directory** under `src/components/`
2. **Define TypeScript interface** for props
3. **Follow naming conventions** (PascalCase)
4. **Add to this reference guide**

### Updating Existing Components
1. **Maintain backward compatibility** when possible
2. **Update TypeScript interfaces** if props change
3. **Test across all usage contexts**
4. **Update documentation** in this file

### Removing Components
1. **Check for dependencies** across the codebase
2. **Update imports** in consuming components
3. **Remove from documentation**
4. **Consider deprecation period** for breaking changes

---

**Reference**: This component system prioritizes content preservation, mobile responsiveness, and SEO optimization while maintaining the transformation-focused positioning that differentiates INT Creative in the local market.