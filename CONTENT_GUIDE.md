# Content Management Guide for INT Creative Hub

This guide helps non-technical team members update and manage website content safely.

## Quick Start for Content Updates

### 1. Understanding the File Structure
```
src/pages/          # Website pages
├── index.astro     # Homepage
├── services/       # Service pages
├── portfolio/      # Portfolio/case studies
├── about/          # About page
└── contact/        # Contact page
```

### 2. Safe Content Editing Process

1. **Never edit directly on main branch**
2. **Always create a branch for changes**
3. **Test locally before publishing**
4. **Use the preview deployment to review**

## Common Content Tasks

### Adding a New Blog Post

1. Create file: `src/pages/blog/post-title.astro`
2. Use this template:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Your Blog Post Title"
  description="Brief description of the blog post for SEO"
>
  <main class="max-w-4xl mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-8">Your Blog Post Title</h1>
    <div class="prose prose-lg max-w-none">
      <p>Your content goes here...</p>
    </div>
  </main>
</BaseLayout>
```

### Adding a New Service Page

1. Create file: `src/pages/services/service-name.astro`
2. Follow this structure:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Service Name"
  description="What this service helps startups achieve"
>
  <main>
    <!-- Hero Section -->
    <section class="py-20 bg-primary-600 text-white">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Service Name</h1>
        <p class="text-xl">Service description and benefits</p>
      </div>
    </section>
    
    <!-- Content sections go here -->
  </main>
</BaseLayout>
```

### Updating Homepage Content

Edit `src/pages/index.astro` to change:
- Hero headline and description
- Service previews
- Call-to-action buttons
- Contact information

### Adding Portfolio Projects

1. Create file: `src/pages/portfolio/client-name.astro`
2. Add client logo to `public/images/portfolio/`
3. Use this template:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Client Name - Case Study"
  description="How we helped [Client Name] achieve [specific result]"
>
  <main class="max-w-6xl mx-auto px-4 py-20">
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">Client Name Case Study</h1>
      <p class="text-xl text-gray-600">Problem solved and results achieved</p>
    </div>
    
    <!-- Project details -->
    <div class="grid lg:grid-cols-2 gap-12">
      <div>
        <h2 class="text-2xl font-bold mb-4">The Challenge</h2>
        <p>Describe the client's problem...</p>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-4">Our Solution</h2>
        <p>Describe what you did...</p>
      </div>
    </div>
  </main>
</BaseLayout>
```

## Content Writing Guidelines

### Writing Style
- **Clear and Professional**: Avoid jargon, write for busy startup founders
- **Benefit-Focused**: Emphasize outcomes and results, not just features
- **Action-Oriented**: Include clear calls-to-action
- **Consistent Tone**: Professional but approachable

### SEO Best Practices
- **Page Titles**: Include target keywords, keep under 60 characters
- **Meta Descriptions**: Compelling summaries under 160 characters
- **Headings**: Use proper hierarchy (H1 → H2 → H3)
- **Alt Text**: Describe images clearly for accessibility

### Image Guidelines
- **Location**: Store images in `public/images/`
- **Naming**: Use descriptive filenames (client-logo-airbnb.png)
- **Sizes**: Optimize before uploading (use WebP format when possible)
- **Alt Text**: Always include descriptive alt text

## Making Changes Safely

### Step-by-Step Process

1. **Create a new branch**:
   ```bash
   git checkout -b content/update-homepage
   ```

2. **Make your changes** to the appropriate files

3. **Test locally**:
   ```bash
   npm run dev
   # Visit http://localhost:3000 to preview
   ```

4. **Check for errors**:
   ```bash
   npm run build
   ```

5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Update homepage hero section"
   ```

6. **Push to GitHub**:
   ```bash
   git push origin content/update-homepage
   ```

7. **Create Pull Request** on GitHub

8. **Review preview deployment** (automatic)

9. **Merge when satisfied**

## Emergency Rollback

If something breaks after deployment:

1. Go to GitHub repository
2. Find the last working commit
3. Create new branch from that commit
4. Create pull request to revert changes

## Common Troubleshooting

### Build Errors
- Check for typos in file names
- Ensure all images exist in `public/images/`
- Verify proper Astro component syntax

### Styling Issues
- Use existing Tailwind classes
- Check responsive design on mobile
- Maintain consistent spacing and colors

### Content Not Updating
- Clear browser cache
- Check if changes were committed
- Verify correct file path

## Content Calendar Recommendations

### Monthly Tasks
- Review and update service descriptions
- Add new case studies/portfolio items  
- Update team bios and photos
- Check all contact information

### Quarterly Tasks
- Review SEO performance and update meta descriptions
- Update pricing and service offerings
- Refresh homepage hero messaging
- Audit and optimize images

### Yearly Tasks
- Complete content audit
- Update brand guidelines
- Refresh design elements
- Review and update legal pages

## Getting Help

### Before Asking for Help
1. Check this guide
2. Look at existing pages for examples
3. Test your changes locally
4. Check the browser console for errors

### When to Ask for Technical Help
- Build errors you can't resolve
- Complex layout changes
- Adding new interactive features
- Performance issues

### Contact Information
- **Technical Issues**: Create GitHub issue
- **Content Questions**: Review this guide first
- **Urgent Problems**: jake@intcreative.co

Remember: It's better to ask questions than break the site! When in doubt, create a pull request and ask for review.