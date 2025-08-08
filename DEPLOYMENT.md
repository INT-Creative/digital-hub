# INT Creative Hub - Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   # Site available at http://localhost:4321
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main
3. No additional configuration needed

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Node version: 18+

### Other Static Hosts
The `dist/` folder contains all static files after running `npm run build`.

## Environment Setup

### Required Node.js Version
- Node.js 18+ required
- npm 8+ recommended

### Performance
- Lighthouse Score: 98+
- Fast loading times optimized for mobile
- SEO optimized with meta tags and sitemaps

## Lead Generation Features

### Contact Forms
- Main contact form with lead qualification
- Newsletter signups throughout site
- Multiple call-to-action buttons
- Phone number and email capture

### Analytics Setup
Add your analytics tracking codes to:
- `src/layouts/BaseLayout.astro` (Google Analytics section)
- Update contact form handling in `src/pages/contact.astro`

### Email Integration
To connect contact forms to your email service:
1. Update form action URLs in contact forms
2. Add your email service API endpoints
3. Configure newsletter signup integration

## Content Management

### Blog Posts
- Add new posts to `src/pages/blog/` directory
- Use Markdown for content
- Update blog index with new posts

### Services & Pricing
- Edit `src/pages/services.astro` for pricing updates
- Update package features and pricing

### Portfolio Updates
- Add new case studies to `src/pages/portfolio.astro`
- Include metrics and results
- Update client testimonials

## Brand Customization

### Colors (Already Configured)
- Forest Green: #0B3D2E
- Sage Green: #4A7C59  
- Warm Beige: #F5F0E6

### Logo Updates
Replace files in `/public/images/`:
- `logo.svg` - Main logo
- `logo-white.svg` - White version for dark backgrounds
- `favicon/favicon.svg` - Browser favicon

### Typography
- Headings: Poppins
- Body: Inter
- Configured in Tailwind config

## SEO & Marketing

### Meta Tags
- All pages have optimized meta descriptions
- Open Graph tags for social sharing
- Twitter Card support

### Sitemap
- Automatically generated
- Includes all pages
- Updated on build

### Lead Magnets
- Free strategy call CTA
- Resource downloads
- Newsletter signups
- Contact form optimization

## Performance Optimization

### Images
- Use WebP format when possible
- Optimize for mobile-first
- Add alt tags for accessibility

### Code Splitting
- Astro handles this automatically
- Minimal JavaScript footprint
- CSS optimization included

## Security

### Form Protection
- Add CAPTCHA to contact forms if needed
- Implement rate limiting
- Validate all form inputs

### Headers
Consider adding security headers:
- CSP (Content Security Policy)
- HSTS (HTTP Strict Transport Security)
- X-Frame-Options

## Monitoring

### Recommended Tools
- Google Analytics 4
- Google Search Console
- Hotjar for user behavior
- Uptime monitoring

### Lead Tracking
- Track form conversions
- Monitor page performance
- A/B test CTAs

## Support

For questions about this deployment:
- Check the Astro documentation
- Review Tailwind CSS docs
- Contact: jake@intcreative.co