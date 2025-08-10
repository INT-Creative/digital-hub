# Visual Assets Documentation

## Overview

The Visual Asset Creator agent generates comprehensive visual specifications, prompts, and briefs for INT Creative's design needs. This system provides detailed image generation prompts optimized for DALL-E, Midjourney, and Stable Diffusion, along with placeholder SVGs for immediate use.

## Quick Start

### Requesting Visual Assets

To request visual assets, use one of these commands in Claude Code:

```
"Generate logo concepts for [client name]"
"Create social media templates for [campaign]"
"Design product mockup for [service]"
"Produce hero image prompt for [page]"
```

The Visual Asset Creator will:
1. Analyze your requirements
2. Generate optimized prompts for your chosen platform
3. Create placeholder SVGs if needed
4. Document specifications in this directory

## Directory Structure

```
/docs/visual-assets/
├── prompts/           # AI generation prompts by category
├── specifications/    # Technical specs and brand standards
├── templates/         # Reusable templates and briefs
└── examples/          # Sample outputs and references

/public/images/
├── icons/            # Service and UI icons (24x24 SVGs)
├── placeholders/     # Temporary placeholder images
└── finals/           # Production-ready assets
```

## Available Resources

### 1. Specifications

- **dimensions.json** - Platform-specific size requirements
- **colors.json** - INT Creative brand color profiles  
- **brand-standards.json** - Complete brand guidelines

### 2. Prompt Library

Located in `/prompts/service-prompts.md`:
- Service-specific icon prompts
- Hero image prompts for each service
- Product mockup scenarios
- Email header designs

### 3. Placeholder Icons

Available at `/public/images/icons/`:
- `automation.svg` - Workflow & automation icon
- `web.svg` - Website design icon
- `design.svg` - Graphic design icon
- `social.svg` - Social media icon

## Platform-Specific Guidelines

### DALL-E 3
- **Strengths**: Detailed scene generation, text rendering
- **Format**: Natural language, 150+ words optimal
- **Tips**: 
  - Use "I NEED" for critical elements
  - Specify exact hex colors (#0B3D2E)
  - Include lighting and atmosphere details

### Midjourney
- **Strengths**: Artistic styles, photorealism
- **Format**: Concise prompts with parameters
- **Parameters**:
  - `--ar 16:9` for aspect ratio
  - `--q 2` for higher quality
  - `--style raw` for photorealistic
  - `--v 6` for latest model

### Stable Diffusion
- **Strengths**: Consistent style, negative prompts
- **Format**: Weighted syntax with negatives
- **Tips**:
  - Use `(element:1.3)` for emphasis
  - Include negative prompts
  - Add "masterpiece, best quality"

## Brand Colors Quick Reference

| Color | Hex | Name | Usage |
|-------|-----|------|-------|
| Primary | #0B3D2E | Forest Green | Headers, CTAs |
| Secondary | #A8BFA3 | Sage Green | Backgrounds |
| Accent 1 | #C56B47 | Soft Copper | Highlights |
| Accent 2 | #C29D49 | Gold Ochre | Premium elements |
| Neutral | #F5F0E6 | Warm Beige | Light backgrounds |
| Text | #1C1C1C | Deep Charcoal | Body text |

## Workflow Examples

### Example 1: Creating a Service Hero Image

```bash
# Request
"Create hero image for automation service page"

# Agent generates:
1. DALL-E prompt with office setting and dashboard
2. Midjourney alternative with parameters
3. Dimensions: 1920x1080 for desktop, 768x1024 for mobile
4. Placeholder while awaiting generation
```

### Example 2: Logo Design Sprint

```bash
# Request  
"Generate logo concepts for Cleveland restaurant"

# Agent provides:
1. 5 concept prompts with variations
2. Color specifications
3. Typography recommendations
4. Usage guidelines
5. Placeholder SVG
```

### Example 3: Social Media Package

```bash
# Request
"Design Instagram templates for monthly content"

# Agent delivers:
1. Post templates (1080x1080)
2. Story templates (1080x1920)
3. Color-coded categories
4. Prompt for each template type
5. Canva fallback instructions
```

## Budget Optimization

### Zero Budget (Current Phase)
- **Bing Image Creator** - Free DALL-E access
- **Canva AI** - Free tier features
- **SVG Placeholders** - Programmatic generation
- **Design Briefs** - For client's designers

### Growth Phase ($50-200/month)
- **Midjourney Basic** - $10/month
- **DALL-E API** - $50-100/month  
- **Canva Pro** - $15/month
- **Stock Photos** - $30/month

### Scale Phase ($200+/month)
- **Midjourney Pro** - $30/month
- **Adobe Creative** - $55/month
- **Premium Stock** - $100/month
- **Multiple AI tools** - Variable

## Quality Checklist

Before finalizing any visual asset:

- [ ] Matches INT Creative brand colors
- [ ] Correct dimensions for platform
- [ ] Meets accessibility standards (AA contrast)
- [ ] Includes Northeast Ohio elements where appropriate
- [ ] Scalable across required sizes
- [ ] Has proper file format (SVG for logos, WebP for photos)
- [ ] Includes alt text description
- [ ] Tested on target platform

## Emergency Fallbacks

If AI generation is unavailable:

1. **Use placeholder SVGs** from `/public/images/icons/`
2. **Search stock photos** with these parameters:
   - Keywords: "professional, modern, forest green, office"
   - Sites: Unsplash, Pexels, Pixabay
3. **Create in Canva** using brand colors template
4. **Generate detailed brief** for freelance designer

## Common Issues & Solutions

### Issue: Generated image has wrong colors
**Solution**: Include exact hex codes in prompt (#0B3D2E not "green")

### Issue: Image too generic/stock-looking
**Solution**: Add local details ("Northeast Ohio office", "Cleveland skyline")

### Issue: Text not rendering correctly
**Solution**: Use DALL-E 3 for text, or add text in post-processing

### Issue: Wrong aspect ratio
**Solution**: Specify dimensions explicitly (1920x1080, 16:9)

## Support & Updates

For assistance or to suggest improvements:
1. Check this README first
2. Review prompt library in `/prompts/`
3. Consult brand standards in `/specifications/`
4. Request help from visual-asset-creator agent

## Version History

- **v1.0** (Current) - Initial implementation with 4 service icons, prompt library, and specifications
- Future: Integration with external APIs, automated generation pipeline

---

*Last Updated: [Current Date]*
*Maintained by: Visual Asset Creator Agent*