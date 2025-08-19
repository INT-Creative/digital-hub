# Project Structure

## Overview
The INT Creative website is organized with a clear separation of concerns, making it easy to maintain and scale. This structure supports the transformation-focused consultant positioning with enhanced UI components and systematic content organization.

**Last Updated**: January 2025 (Post Services Transformation v2.0.0)  
**Framework**: Astro + TailwindCSS + TypeScript  
**Design System**: Service-specific color theming with professional navigation system

## Directory Structure

```
intcreative-dev/
├── src/
│   ├── assets/              # Static assets
│   │   ├── images/          # Image files (logos, graphics)
│   │   └── icons/           # Icon files (favicons, SVGs)
│   │
│   ├── components/          # Reusable Astro components
│   │   ├── common/          # Common UI components
│   │   │   ├── Navigation.astro           # Main navigation with services dropdown
│   │   │   ├── Footer.astro
│   │   │   └── Breadcrumbs.astro          # Navigation breadcrumbs (NEW)
│   │   ├── navigation/      # Navigation-specific components (NEW)
│   │   │   └── ServicesDropdown.astro     # Professional services dropdown (NEW)
│   │   ├── social/          # Social media components
│   │   │   ├── SocialFeed.astro
│   │   │   ├── SocialIcons.astro
│   │   │   ├── SocialProof.astro
│   │   │   └── SocialShare.astro
│   │   └── sections/        # Enhanced page section components
│   │       ├── services/    # Service-related components
│   │       │   ├── ServiceCard.astro         # Enhanced with animations
│   │       │   ├── ServicesGrid.astro        # Service display grid
│   │       │   ├── ServicesOverviewGrid.astro # Landing page overview grid (NEW)
│   │       │   ├── RelatedServices.astro     # Service cross-linking (NEW)
│   │       │   ├── DetailSection.astro      # Service detail components
│   │       │   └── FAQSection.astro         # Services FAQ section
│   │       ├── about/       # About page specific components
│   │       │   ├── ProcessStep.astro       # INT Approach step cards
│   │       │   ├── ServiceCards.astro      # 4-service grid with theming
│   │       │   └── FAQSection.astro        # About-specific FAQs
│   │       └── shared/      # Cross-page components
│   │           ├── CTASection.astro        # Strategic CTA blocks
│   │           └── PricingCard.astro       # Pricing transparency cards
│   │
│   ├── config/              # Configuration files
│   │   └── social.ts        # Social media configuration
│   │
│   ├── data/                # Data files and content
│   │   ├── services.ts          # Service definitions with transformation content
│   │   ├── mockCompanies.json   # Mock company portfolio data
│   │   └── processSteps.ts      # INT Approach methodology data
│   │
│   ├── layouts/             # Page layout templates
│   │   ├── BaseLayout.astro       # Main layout wrapper
│   │   ├── BlogPostLayout.astro   # Blog post layout
│   │   └── ServicePageLayout.astro # Individual service page template (NEW)
│   │
│   ├── pages/               # Route pages (file-based routing)
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # About page
│   │   ├── services.astro   # Services landing page (ENHANCED)
│   │   ├── services/        # Individual service pages (NEW)
│   │   │   ├── website-development.astro
│   │   │   ├── digital-marketing.astro
│   │   │   ├── graphic-design.astro
│   │   │   └── marketing-automation.astro
│   │   ├── portfolio.astro  # Portfolio page
│   │   ├── blog.astro       # Blog listing page
│   │   ├── contact.astro    # Contact page
│   │   ├── privacy.astro    # Privacy policy
│   │   └── terms.astro      # Terms of service
│   │
│   ├── styles/              # Global styles
│   │   └── global.css       # Global CSS styles
│   │
│   ├── types/               # TypeScript type definitions
│   │   ├── portfolio.ts         # Portfolio data types
│   │   ├── services.ts          # Service and process type definitions
│   │   └── common.ts            # Shared interface definitions
│   │
│   ├── utils/               # Utility functions
│   │   └── dataLoader.ts    # Data loading utilities
│   │
│   └── env.d.ts            # Environment type definitions
│
├── public/                  # Public static files
│   ├── favicon/            # Favicon files
│   └── images/             # Public images
│
├── Configuration Files
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # TailwindCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies
├── vercel.json            # Vercel deployment config
├──
├── Documentation Files
├── README.md              # Main project documentation
├── PROJECT_STRUCTURE.md   # This file - project organization
├── WEBSITE_AUDIT.md      # Website audit and recommendations
├── ABOUT_PAGE_ENHANCEMENTS.md  # About page transformation documentation
├── INT_APPROACH_METHODOLOGY.md # INT Approach process framework
├── transformation-content-strategy.md # Content strategy for transformations
├── customer-journey-maps.md    # User psychology and decision-making research
├── WHIMSY_ENHANCEMENTS.md # UI animation and delight documentation
├── LOGO_DESIGN_SPECIFICATIONS.md # Brand identity guidelines
└── HERO-GRAPHICS-IMPLEMENTATION.md # Homepage visual elements
```

## Key Architectural Decisions

### 1. Component Organization
Components are organized by function:
- **common/**: Shared UI components used across multiple pages
- **social/**: Social media specific components
- **sections/**: Page-specific section components (to be added)

### 2. Data Management
- Mock company data stored in JSON format in `src/data/`
- TypeScript interfaces in `src/types/` for type safety
- Utility functions in `src/utils/` for data access

### 3. Asset Management
- Development assets in `src/assets/` for processing
- Public assets in `public/` for direct serving
- SVG logos and icons for scalability

### 4. Page Structure
- File-based routing through `src/pages/`
- Shared layouts in `src/layouts/`
- Component composition for reusability

## Import Path Convention

```typescript
// Importing from components
import Navigation from '@/components/common/Navigation.astro';
import SocialIcons from '@/components/social/SocialIcons.astro';

// Importing from data
import { getWebsiteDevelopmentPortfolio } from '@/utils/dataLoader';

// Importing types
import type { MockCompany } from '@/types/portfolio';
```

## Adding New Content

### Adding Mock Companies
1. Edit `src/data/mockCompanies.json`
2. Follow the existing structure
3. Use the utility functions in `src/utils/dataLoader.ts`

### Adding New Pages
1. Create new `.astro` file in `src/pages/`
2. Import and use `BaseLayout` for consistency
3. Follow existing page patterns

### Adding New Components
1. Create in appropriate subdirectory under `src/components/`
2. Use TypeScript for props when applicable
3. Follow Astro component best practices

## Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Best Practices

1. **Component Naming**: Use PascalCase for component files
2. **Data Files**: Use camelCase for JSON files
3. **Types**: Define interfaces for all data structures
4. **Imports**: Use absolute imports where possible
5. **Assets**: Optimize images before adding to project
6. **Code Style**: Follow existing formatting patterns

## Mock Company Data Structure

Each mock company in the portfolio includes:
- Company details (name, industry, size)
- Project information (type, duration)
- Challenge and solution descriptions
- Feature list
- Measurable results
- Technologies used
- Client testimonial
- Visual assets (mockups)
- Brand colors

This structure ensures consistency across all portfolio items and makes it easy to showcase website development expertise.