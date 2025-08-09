# INT Creative Hub

**Professional Marketing Agency for Startup Success**

INT Creative Hub is a cutting-edge marketing agency specializing in lead generation and growth strategies for startups and emerging businesses. We combine data-driven marketing tactics with creative storytelling to help startups scale from idea to market leader.

## 🚀 What We Do

- **Lead Generation**: Targeted campaigns that convert prospects into customers
- **Brand Development**: Strategic branding that resonates with your target market  
- **Digital Marketing**: SEO, PPC, social media, and content marketing
- **Growth Strategy**: Scalable marketing systems for rapid business growth
- **Startup Consulting**: Marketing guidance from idea validation to Series A+
- **Technical Implementation**: Website development, automation, and design solutions

## 🛠 Technology Stack

This website is built with modern technologies for optimal performance and SEO:

- **Framework**: [Astro](https://astro.build/) - Static site generator with partial hydration
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **TypeScript**: Full type safety for better development experience
- **Deployment**: Vercel for fast global CDN delivery
- **SEO**: Automatic sitemap generation and Open Graph meta tags
- **Performance**: Optimized builds with inlined stylesheets and HTML compression

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm package manager

### Development Setup
```bash
# Clone the repository
git clone https://github.com/intcreative/intcreative-hub.git
cd intcreative-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the development site.

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run start        # Alias for dev

# Production
npm run build        # Create production build
npm run preview      # Preview production build locally

# Code Quality
npm run check        # Run Astro type checking
npm run lint         # Check code with ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
```

## 📁 Project Structure

```
/
├── public/                 # Static assets (images, fonts, favicon)
│   ├── favicon/           # Favicon files
│   └── images/            # Website images
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Footer.astro      # Website footer
│   │   ├── Navigation.astro  # Top navigation
│   │   ├── SocialProof.astro # Social media proof section
│   │   ├── SocialIcons.astro # Social media icons
│   │   ├── SocialShare.astro # Social sharing buttons
│   │   └── SocialFeed.astro  # Social media feed
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro     # Main page template
│   │   └── BlogPostLayout.astro # Blog post template
│   ├── pages/            # Website pages (auto-routed)
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # About page
│   │   ├── services.astro   # Services page
│   │   ├── portfolio.astro  # Portfolio showcase
│   │   ├── contact.astro    # Contact form & info
│   │   ├── blog.astro      # Blog listing
│   │   ├── privacy.astro   # Privacy policy
│   │   └── terms.astro     # Terms of service
│   ├── config/           # Configuration files
│   │   └── social.ts        # Social media settings
│   ├── styles/           # CSS and styling
│   │   └── global.css       # Global styles
│   └── env.d.ts          # TypeScript environment types
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.mjs   # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel deployment settings
└── WEBSITE_AUDIT.md      # Website audit and recommendations
```

## 🎯 Key Features

### SEO Optimized
- Automatic sitemap generation with weekly updates
- Open Graph meta tags for social sharing
- Semantic HTML structure
- Optimized meta descriptions and titles

### Performance Focused
- Static site generation for lightning-fast loading
- Automatic CSS inlining for critical styles
- HTML compression for smaller file sizes
- Optimized image handling

### Social Media Integration
- Centralized social media configuration
- Automatic sharing URL generation
- Social proof components
- Consistent branding across platforms

### Developer Experience
- TypeScript for type safety
- ESLint and Prettier for code quality
- Hot reload development server
- Component-based architecture

## 📝 Content Management

### Adding New Pages
1. Create a new `.astro` file in `src/pages/`
2. Use existing layouts from `src/layouts/`
3. Follow Astro's file-based routing conventions

### Updating Content
- **Homepage**: Edit `src/pages/index.astro`
- **Services**: Update `src/pages/services.astro`
- **About**: Modify `src/pages/about.astro`
- **Portfolio**: Add projects to `src/pages/portfolio.astro`
- **Contact Info**: Update `src/pages/contact.astro`
- **Social Media**: Configure `src/config/social.ts`

### Adding Images
1. Place images in `public/images/`
2. Reference them as `/images/filename.jpg` in your code
3. Use WebP format for optimal performance

### Social Media Configuration
Update `src/config/social.ts` to modify:
- Social media handles and URLs
- Sharing configurations
- Call-to-action messages
- Open Graph settings

## 🚀 Deployment

### Automatic Deployment (Vercel)
This project is configured for automatic deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Astro framework
3. Every push to `main` branch triggers deployment
4. Preview deployments created for pull requests

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

### Environment Configuration
The site is configured for `https://intcreative.co` - update the following files for your domain:
- `astro.config.mjs` - Update `site` URL
- `src/config/social.ts` - Update Open Graph URLs
- `package.json` - Update homepage and repository URLs

## 📊 SEO & Performance

- **Framework**: Astro for optimal performance
- **SEO**: Comprehensive meta tags and Open Graph
- **Sitemap**: Automatically generated and updated weekly
- **Performance**: Static generation with optimized assets
- **Mobile**: Responsive design with Tailwind CSS
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Prettier for code formatting
- Run linting before committing (`npm run lint`)
- Test builds before deploying (`npm run build`)

## 📞 Contact & Support

- **Website**: [intcreative.co](https://intcreative.co)
- **Email**: jake@intcreative.co
- **LinkedIn**: [jacobinternicola](https://www.linkedin.com/in/jacobinternicola)
- **Twitter**: [@intcreative_co](https://x.com/intcreative_co)

## 📄 License

This project is proprietary and confidential. All rights reserved by INT Creative LLC.

---

**Ready to scale your startup?** [Get in touch](mailto:jake@intcreative.co) to discuss how we can accelerate your growth.