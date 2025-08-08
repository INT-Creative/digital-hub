# Social Media Integration Guide

This guide explains how to manage and update social media integration across the INT Creative website.

## Quick Start

All social media configuration is centralized in `/src/config/social.ts`. To update social media handles across the entire site, simply edit this file.

### Updating Social Media Handles

Edit `/src/config/social.ts`:

```javascript
export const SOCIAL_CONFIG = {
  handles: {
    twitter: 'your_twitter_handle',      // Update this
    linkedin: 'company/your_company',    // Update this
    instagram: 'your_instagram_handle',  // Update this
    facebook: 'your_facebook_page',      // Update this
    youtube: '@your_youtube_handle',     // Update this
    tiktok: '@your_tiktok_handle'        // Update this
  },
  // URLs are automatically generated from handles
};
```

## Components Overview

### 1. SocialIcons.astro
Displays social media icons with links. Used in:
- Header navigation
- Footer
- About page team profiles
- Contact page

**Usage:**
```astro
<SocialIcons 
  size="md"                              // sm, md, lg
  style="default"                        // default, minimal, colored
  platforms={['linkedin', 'twitter']}   // which platforms to show
  showLabels={true}                      // show platform names
/>
```

### 2. SocialShare.astro  
Social sharing buttons for blog posts and content. Features:
- Floating share buttons (desktop)
- Inline share buttons
- Popup sharing windows
- Analytics tracking

**Usage:**
```astro
<SocialShare 
  url="/blog/my-post"
  title="My Blog Post Title"
  description="Post description"
  style="floating"                       // floating, inline, minimal
  platforms={['twitter', 'linkedin']}
/>
```

### 3. SocialProof.astro
Displays testimonials, follower counts, and social mentions. Features:
- Client testimonials from social media
- Follower statistics
- Social media mentions
- Verification badges

**Usage:**
```astro
<SocialProof 
  type="combined"                        // testimonials, followers, mentions, combined
  layout="grid"                          // grid, carousel, inline
  showCounts={true}
/>
```

### 4. SocialFeed.astro
Shows recent social media posts (uses mock data - needs API integration for production).

**Usage:**
```astro
<SocialFeed 
  platform="twitter"                     // twitter, linkedin, instagram
  count={3}
  showProfile={true}
/>
```

## Where Social Media is Integrated

### Header Navigation
- Professional social icons (LinkedIn, Twitter) in desktop nav
- Mobile menu includes social icons and call-to-action

### Footer
- Comprehensive social media section with all platforms
- Follower counts and engagement stats
- Social media call-to-action boxes
- Newsletter signup with social follow options

### Homepage
- Hero section social media call-to-action
- Enhanced social proof section with follower stats  
- Social sharing buttons in results section
- Footer integration with community building focus

### Blog Pages
- Floating social share buttons (desktop)
- Inline sharing after blog posts
- Social proof testimonials
- Author bio with social links
- Newsletter signup with social follow options

### Blog Post Layout
- Comprehensive sharing options
- Author social media profiles
- Social proof sections
- Newsletter integration with social follow

### About Page  
- Team member social media profiles
- Live social media feeds (Twitter & LinkedIn)
- Community building section
- Social follower statistics

### Contact Page
- Enhanced social media section with stats
- Social follow checkboxes in contact form
- Social proof testimonials
- Call-to-action for social following

## Analytics & Tracking

Social media interactions are tracked with Google Analytics events:
- `social_follow` - when users click social media links
- `share` - when users share content
- `social_feed_click` - when users click social feed links
- `newsletter_signup` - includes social source tracking

## Production Setup Requirements

### 1. Update Social Handles
Edit `/src/config/social.ts` with your actual social media handles.

### 2. Add Real Social Media APIs  
For live social feeds, integrate with:
- Twitter API v2
- LinkedIn Company Pages API  
- Instagram Basic Display API
- Facebook Graph API

### 3. Replace Mock Data
Update social proof data in:
- `/src/components/SocialProof.astro` - testimonials and stats
- `/src/components/SocialFeed.astro` - social media posts

### 4. Configure Analytics
Add your Google Analytics tracking ID and ensure social events are properly tracked.

### 5. Test Social Sharing
- Verify Open Graph tags are working
- Test social sharing on all platforms
- Check social media preview cards

## Best Practices

### Content Strategy
1. **LinkedIn**: Professional insights, case studies, industry thoughts
2. **Twitter**: Quick tips, behind-the-scenes, engagement with community  
3. **Instagram**: Visual content, company culture, client success stories
4. **Facebook**: Community building, event promotion, longer-form content

### Engagement Guidelines
- Respond to social media mentions within 4 hours
- Share client success stories (with permission)
- Post daily tips and insights
- Engage with startup community hashtags
- Cross-promote content across platforms

### Brand Consistency
- Use consistent brand voice across platforms
- Maintain visual brand guidelines
- Include branded hashtags: #startup #marketing #leadgeneration #growth
- Link back to website content regularly

## Troubleshooting

### Social Icons Not Showing
- Check `/src/config/social.ts` for correct handles
- Verify platform is included in component platforms array
- Check for typos in platform names

### Sharing Buttons Not Working
- Verify URLs are properly encoded
- Check Open Graph tags are present
- Test social media preview cards with platform debuggers

### Analytics Not Tracking
- Verify Google Analytics is properly configured
- Check that gtag events are firing
- Test in browser developer tools

## Future Enhancements

### Planned Features
1. **Social Media Calendar Integration** - Schedule posts from the website
2. **Live Social Metrics** - Real-time follower counts and engagement
3. **Social Media Chat Integration** - Direct messaging from website
4. **User-Generated Content** - Display client social media posts
5. **Social Login** - Allow login with social media accounts

### API Integration Roadmap
1. Set up social media developer accounts
2. Configure OAuth for secure API access
3. Build backend endpoints for social data
4. Implement caching for API responses
5. Add error handling and fallbacks

## Support

For questions about social media integration, contact the development team or refer to the individual component documentation in the `/src/components/` directory.

Remember: Social media is most effective when it's part of a consistent content strategy. Focus on providing value to your audience rather than just promoting your services.