# Project Structure

## Overview
The INT Creative website is organized with a clear separation of concerns, making it easy to maintain and scale.

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
│   │   │   ├── Navigation.astro
│   │   │   └── Footer.astro
│   │   ├── social/          # Social media components
│   │   │   ├── SocialFeed.astro
│   │   │   ├── SocialIcons.astro
│   │   │   ├── SocialProof.astro
│   │   │   └── SocialShare.astro
│   │   └── sections/        # Page section components (future)
│   │
│   ├── config/              # Configuration files
│   │   └── social.ts        # Social media configuration
│   │
│   ├── data/                # Data files and content
│   │   └── mockCompanies.json  # Mock company portfolio data
│   │
│   ├── layouts/             # Page layout templates
│   │   ├── BaseLayout.astro    # Main layout wrapper
│   │   └── BlogPostLayout.astro # Blog post layout
│   │
│   ├── pages/               # Route pages (file-based routing)
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # About page
│   │   ├── services.astro   # Services page
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
│   │   └── portfolio.ts     # Portfolio data types
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
└── vercel.json            # Vercel deployment config
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