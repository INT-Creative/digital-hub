# INT Creative Hub

**Lead-Gen Websites & Marketing Automation for Local Service Businesses**

INT Creative is a one-person digital consultancy specializing in transformation-focused solutions for small businesses. Based in Cleveland, Ohio, we help local service businesses turn their websites into lead-generating machines through strategic web design, marketing automation, and targeted digital campaigns.

## 🚀 Core Services

Our established service offerings focus on business transformation:

- **Website Development**: Conversion-focused sites that capture leads 24/7 ($2,500-$7,500)
- **Marketing Automation**: Systems that handle follow-up and nurture prospects ($1,500-$4,000)
- **Graphic Design**: Professional brand identity and marketing materials ($1,200-$3,500)
- **Digital Marketing**: Campaigns that turn clicks into customers ($2,000-$5,000)

All projects include 2 revision rounds, 30-day support, and fixed-fee pricing with no surprises.

## 🎯 Niche Discovery Focus Areas

We're actively testing our services with these potential niches:

### Currently Exploring:
- **Local Service Businesses**: HVAC, plumbing, electrical, landscaping
- **Health & Wellness**: Med spas, dental practices, chiropractors, fitness studios
- **Hospitality**: Restaurants, bars, cafes, food trucks
- **Professional Services**: Law firms, accounting, real estate agents
- **E-commerce**: Small online retailers, local product creators

### What We're Learning:
- Which industries benefit most from automation
- Where web design creates the highest ROI
- Which niches need the most help with digital presence
- How to package services for specific industry needs

## 🤝 Why Choose INT Creative

**One-person shop advantages over agencies:**
- Direct access to the strategist AND implementer
- No miscommunication or account managers
- 40-60% cost savings vs. agency overhead
- Personal investment in your success
- Monday/Wednesday/Friday progress updates by 5 PM EST
- Response time that beats most agencies

## 🛠 The INT Approach

Our proven 3-step methodology transforms businesses, not just websites:

1. **INVESTIGATE**: 15-minute strategic discovery call and business audit → One-page brief next business day
2. **NARROW**: Lock scope with sitemap, wireframes, copy outline, integrations → Fixed fee, timeline, one revision included
3. **TRANSFORM**: Design, build, connect automations, QA, and launch → Complete handoff with CMS access, analytics, training, 30-day support

Timeline: Most projects complete in 7-14 days depending on scope and integrations.

## 💻 Technology Stack

Our solutions leverage modern, cost-effective tools:

- **Web Platforms**: Webflow, WordPress, Astro
- **Automation**: Zapier, Make.com, custom APIs
- **Design**: Figma, Adobe Creative Suite, Canva
- **Analytics**: Google Analytics 4, Tag Manager
- **CRM**: HubSpot Free, Airtable
- **AI Integration**: ChatGPT, Claude, DALL-E for content and design

## 📊 Current Experiments & Metrics

We're transparently tracking what works:
- **Outreach Response Rate**: Testing LinkedIn vs. Email vs. Cold Calling
- **Service Demand**: Which services get the most interest
- **Price Sensitivity**: Finding the sweet spot for each niche
- **Time to Value**: How quickly we can show ROI
- **Client Retention**: What keeps businesses coming back

## 📍 Location

**Based in Northeast Ohio** (Cleveland • Akron • Canton area)
- Serving local businesses in-person
- Remote services available nationwide
- Focus on understanding local market dynamics

## 📞 Get In Touch

**Ready to be an early partner?**
- Email: jake@intcreative.co
- LinkedIn: [Connect with us](https://linkedin.com/company/intcreative)
- Schedule a Call: [Coming Soon]

## 🚀 For Developers

This repository contains our agency website built with Astro:

### Tech Stack
- Framework: Astro (Static Site Generation)
- Styling: Tailwind CSS
- TypeScript: Full type safety
- Deployment: Vercel/Netlify ready

### Development Setup
```bash
# Clone the repository
git clone https://github.com/intcreative-hub/intcreative-hub.git
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

## 🎯 Our Business Philosophy

**"Transformation through practical implementation"**

We focus on:
- Measurable results, not vanity metrics
- Building systems that work 24/7 while you sleep
- Direct communication without corporate bureaucracy
- Fixed-fee projects with transparent pricing
- Long-term partnerships based on proven results

## 🎯 Ideal Clients

Perfect fit for our services:
- Local service businesses (HVAC, plumbing, electrical, landscaping)
- Professional services (law, accounting, real estate, consulting)
- Health & wellness (med spas, dental, chiropractic, fitness)
- Small business owners ready to invest in growth ($2,500-$10,000 projects)
- Need lead generation that works around the clock
- Want direct communication with the person doing the work
- Located in Northeast Ohio or working remotely nationwide

## 📈 Current Focus Areas

**Active client work:**
- Lead-generation website optimization
- Marketing automation workflow development  
- Local SEO and Google Business Profile optimization
- Email marketing and CRM integration
- Conversion rate optimization and analytics setup

**Serving Northeast Ohio and remote clients nationwide**

## 💡 Why This Approach?

Instead of claiming to be experts at everything, we're:
- Honestly testing what works
- Building expertise through real implementation
- Creating case studies with actual data
- Developing services based on client needs, not assumptions
- Keeping prices low while we learn together

## 📞 Contact & Support

- **Website**: [intcreative.co](https://intcreative.co) (Coming Soon)
- **Email**: jake@intcreative.co
- **LinkedIn**: [Connect with Jake](https://www.linkedin.com/in/jacobinternicola)
- **GitHub**: You're here!

## 📄 License

This project is proprietary and confidential. All rights reserved by INT Creative LLC.

---

**INT Creative - Building Digital Solutions Through Real-World Testing** 🔬

*Currently accepting early partners for our founding cohort. Limited spots available.*