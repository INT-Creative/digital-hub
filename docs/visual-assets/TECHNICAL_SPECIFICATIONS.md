# Portfolio Graphics - Technical Specifications

## File Format Standards

### Primary Format: WebP
- **Target Size**: 25-35KB
- **Quality Setting**: 85-90%
- **Compression**: Lossy with optimized encoding
- **Browser Support**: 95%+ modern browsers
- **Fallback**: PNG format for legacy support

### Fallback Format: PNG
- **Target Size**: 45-65KB
- **Compression**: PNG-8 with dithering where appropriate
- **Quality**: Lossless with optimized palette
- **Use Case**: Legacy browser support and critical images

### Placeholder Format: SVG
- **Target Size**: 2-5KB
- **Optimization**: Minified with reduced precision
- **Inline**: Can be embedded directly in HTML
- **Scalability**: Vector format for all resolutions

## Dimension Specifications

### Portfolio Card Images
- **Desktop**: 400px × 300px (4:3 aspect ratio)
- **Tablet**: Responsive scaling to 350px × 262px
- **Mobile**: Responsive scaling to 280px × 210px
- **Retina Support**: 2x images at 800px × 600px (optional)

### Portfolio Detail Pages
- **Hero Image**: 800px × 450px (16:9 aspect ratio)
- **Gallery Images**: 600px × 400px (3:2 aspect ratio)
- **Thumbnail Grid**: 200px × 150px (4:3 aspect ratio)

## Color Profile Standards

### sRGB Color Space
- **Recommended**: All web graphics
- **Gamma**: 2.2 standard
- **White Point**: D65 (6500K)
- **Benefits**: Consistent display across devices

### Brand Color Accuracy
- **Primary Forest**: #0B3D2E
- **Primary Green**: #1B3A2F
- **Sage Green**: #A8BFA3
- **Accent Moss**: #4A7C59
- **Soft Copper**: #C56B47
- **Gold Ochre**: #C29D49
- **Warm Beige**: #F5F0E6
- **Background Light**: #F9F9F7
- **Deep Charcoal**: #1C1C1C

## Compression Guidelines

### WebP Optimization
```bash
# Command line optimization
cwebp -q 88 -m 6 -segments 4 input.png -o output.webp

# Quality settings by content type:
# - Photography: 85-90%
# - Graphics/UI: 88-92%
# - Text-heavy: 90-95%
```

### PNG Optimization
```bash
# Using pngquant for palette optimization
pngquant --quality=85-95 --speed=1 input.png

# Using optipng for compression
optipng -o7 -zm1-9 input.png
```

### SVG Optimization
```bash
# Using SVGO for minification
svgo --multipass --precision=1 input.svg
```

## Performance Targets

### Loading Speed
- **First Contentful Paint**: Images load within 1.5 seconds
- **Largest Contentful Paint**: Hero images load within 2.5 seconds
- **Total Portfolio Page**: All images loaded within 4 seconds

### Bandwidth Considerations
- **3G Connection**: All images should load acceptably
- **Data Savings**: WebP format reduces bandwidth by 25-35%
- **Progressive Loading**: Implement blur-up technique for large images

## Accessibility Requirements

### Alt Text Standards
- **Descriptive**: Clearly describe image content and context
- **Concise**: Maximum 125 characters
- **Context-Aware**: Include relevant business transformation details
- **SEO-Friendly**: Include relevant keywords naturally

### Contrast Ratios
- **Text Overlays**: Minimum 4.5:1 contrast ratio
- **UI Elements**: Minimum 3:1 contrast ratio
- **Focus Indicators**: Minimum 3:1 contrast with background

### Example Alt Text Templates
```html
<!-- Website Development -->
<img alt="Serenity Wellness Studio website showing online booking calendar that increased leads from 0 to 50 per month - fictional demonstration">

<!-- Digital Marketing -->
<img alt="Northeast HVAC Solutions Facebook ads dashboard showing 60% cost-per-lead reduction from $85 to $32 - fictional demonstration">

<!-- Graphic Design -->
<img alt="Thompson Legal Group brand transformation from outdated 1990s design to modern legal identity increasing referrals 300% - fictional demonstration">

<!-- Marketing Automation -->
<img alt="Bright Smile Dental appointment automation system reducing no-shows by 92% and saving 15 hours weekly - fictional demonstration">
```

## Legal Compliance Elements

### Fictional Demonstration Label
- **Text**: "FICTIONAL DEMONSTRATION"
- **Font**: Arial or system font, 10px
- **Color**: #666666 (medium gray) or contrast-appropriate
- **Opacity**: 60-80% for subtle appearance
- **Position**: Bottom-right corner with 8px margin
- **Background**: Semi-transparent overlay if needed for contrast

### Implementation Methods
```css
/* CSS Overlay Method */
.portfolio-image {
  position: relative;
}

.portfolio-image::after {
  content: "FICTIONAL DEMONSTRATION";
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-family: Arial, sans-serif;
  font-size: 10px;
  color: #666666;
  opacity: 0.7;
  background: rgba(255, 255, 255, 0.8);
  padding: 2px 4px;
  border-radius: 2px;
}
```

## Responsive Image Implementation

### HTML Picture Element
```html
<picture>
  <source type="image/webp" 
          srcset="/images/portfolio/wellness-studio-400w.webp 400w,
                  /images/portfolio/wellness-studio-800w.webp 800w"
          sizes="(max-width: 768px) 280px, 400px">
  <img src="/images/portfolio/wellness-studio-400w.png"
       srcset="/images/portfolio/wellness-studio-400w.png 400w,
               /images/portfolio/wellness-studio-800w.png 800w"
       sizes="(max-width: 768px) 280px, 400px"
       alt="Serenity Wellness Studio website transformation - fictional demonstration"
       loading="lazy"
       width="400" 
       height="300">
</picture>
```

### Lazy Loading Configuration
```html
<!-- Native lazy loading -->
<img loading="lazy" 
     src="/images/portfolio/placeholder.webp"
     data-src="/images/portfolio/actual-image.webp"
     alt="Portfolio item description">

<!-- Intersection Observer fallback -->
<script>
if ('IntersectionObserver' in window) {
  // Implement lazy loading for browsers without native support
}
</script>
```

## File Organization Structure

### Directory Hierarchy
```
/public/images/portfolio/
├── website-development/
│   ├── wellness-studio/
│   │   ├── hero-400x300.webp
│   │   ├── hero-400x300.png
│   │   ├── hero-800x600.webp (retina)
│   │   └── placeholder.svg
│   ├── restaurant-delivery/
│   ├── auto-repair-booking/
│   └── fitness-studio-website/
├── digital-marketing/
│   ├── hvac-lead-generation/
│   ├── plumbing-emergency-ads/
│   ├── business-consulting-linkedin/
│   └── fitness-studio-social/
├── graphic-design/
│   ├── law-firm-rebrand/
│   └── accounting-firm-rebrand/
├── marketing-automation/
│   ├── dental-appointment-system/
│   ├── landscaping-seasonal/
│   └── veterinary-communication/
└── placeholders/
    ├── website-development.svg
    ├── digital-marketing.svg
    ├── graphic-design.svg
    └── marketing-automation.svg
```

### Naming Conventions
```
# Primary images
portfolio-[project-slug]-hero-400x300.webp
portfolio-[project-slug]-hero-400x300.png

# Retina images
portfolio-[project-slug]-hero-800x600.webp
portfolio-[project-slug]-hero-800x600.png

# Placeholders
portfolio-[project-slug]-placeholder.svg

# Category placeholders
portfolio-category-[service-type].svg
```

## Quality Assurance Checklist

### Pre-Production Validation
- [ ] Color accuracy verified against brand palette
- [ ] Aspect ratio maintained (4:3 for portfolio cards)
- [ ] Legal compliance text included and readable
- [ ] Alt text written and under 125 characters
- [ ] File size within target range

### Post-Production Testing
- [ ] WebP format displays correctly in Chrome/Firefox
- [ ] PNG fallback works in Safari/Edge
- [ ] Images load properly on mobile devices
- [ ] Lazy loading functions correctly
- [ ] Accessibility tools confirm contrast ratios

### Performance Validation
- [ ] PageSpeed Insights shows improved scores
- [ ] WebP images load 25%+ faster than PNG equivalents
- [ ] Total page weight remains under 2MB
- [ ] Images contribute less than 60% of page weight

## Optimization Workflow

### 1. Image Creation
1. Create images at 800x600px for highest quality
2. Apply brand colors and legal compliance elements
3. Export as high-quality PNG (95%+ quality)

### 2. Format Conversion
1. Convert to WebP at 88% quality
2. Create PNG fallback at 90% quality
3. Generate 400x300px versions for standard display
4. Create SVG placeholder with key visual elements

### 3. Quality Control
1. Verify file sizes meet targets
2. Test display across browsers and devices
3. Validate accessibility compliance
4. Confirm legal compliance elements visible

### 4. Implementation
1. Upload to appropriate directory structure
2. Update portfolio data with image paths
3. Implement lazy loading and responsive markup
4. Test performance impact on portfolio pages

This technical specification ensures all portfolio graphics meet professional standards while maintaining optimal performance and legal compliance.