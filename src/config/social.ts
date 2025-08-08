// Centralized social media configuration
export const SOCIAL_CONFIG = {
  // Company social media handles (update these to match actual accounts)
  handles: {
    twitter: 'intcreative',
    linkedin: 'company/intcreative',
    instagram: 'intcreative',
    facebook: 'intcreative',
    youtube: '@intcreative',
    tiktok: '@intcreative'
  },
  
  // Full URLs for social media profiles
  urls: {
    twitter: 'https://twitter.com/intcreative',
    linkedin: 'https://linkedin.com/company/intcreative',
    instagram: 'https://instagram.com/intcreative',
    facebook: 'https://facebook.com/intcreative',
    youtube: 'https://youtube.com/@intcreative',
    tiktok: 'https://tiktok.com/@intcreative'
  },
  
  // Social sharing configuration
  sharing: {
    hashtagsSuggested: ['startup', 'marketing', 'leadgeneration', 'growth'],
    twitterVia: 'intcreative',
    linkedinCompanyId: 'intcreative' // Used for LinkedIn sharing
  },
  
  // Call-to-action messages
  cta: {
    follow: 'Follow us for daily startup marketing insights and growth tips',
    connect: 'Connect with us on social media',
    share: 'Share this with your network',
    engage: 'Join the conversation'
  }
};

// Social media platform configurations with icons and colors
export const SOCIAL_PLATFORMS = {
  twitter: {
    name: 'Twitter',
    icon: 'twitter',
    color: '#1DA1F2',
    hoverColor: '#1991DB'
  },
  linkedin: {
    name: 'LinkedIn', 
    icon: 'linkedin',
    color: '#0077B5',
    hoverColor: '#005885'
  },
  instagram: {
    name: 'Instagram',
    icon: 'instagram', 
    color: '#E4405F',
    hoverColor: '#D62D20'
  },
  facebook: {
    name: 'Facebook',
    icon: 'facebook',
    color: '#1877F2',
    hoverColor: '#166FE5'
  },
  youtube: {
    name: 'YouTube',
    icon: 'youtube',
    color: '#FF0000',
    hoverColor: '#CC0000'
  },
  tiktok: {
    name: 'TikTok',
    icon: 'tiktok',
    color: '#000000',
    hoverColor: '#333333'
  }
};

// Generate sharing URLs
export const generateSharingURL = (platform: string, url: string, title: string, description?: string) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');
  const hashtags = SOCIAL_CONFIG.sharing.hashtagsSuggested.join(',');
  
  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=${SOCIAL_CONFIG.sharing.twitterVia}&hashtags=${hashtags}`;
    
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    
    case 'reddit':
      return `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`;
    
    case 'pinterest':
      return `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`;
    
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
    
    case 'telegram':
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
    
    case 'email':
      return `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0D%0A%0D%0A${encodedUrl}`;
    
    default:
      return '#';
  }
};

// SEO and Open Graph helpers
export const generateOpenGraphTags = (title: string, description: string, url: string, image?: string, type: string = 'website') => {
  const siteUrl = 'https://intcreative.co'; // Update with actual domain
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/images/og-default.jpg`;
  
  return {
    'og:type': type,
    'og:site_name': 'INT Creative Hub',
    'og:url': fullUrl,
    'og:title': `${title} | INT Creative Hub`,
    'og:description': description,
    'og:image': fullImageUrl,
    'og:image:alt': title,
    'og:image:width': '1200',
    'og:image:height': '630',
    
    // Twitter specific
    'twitter:card': 'summary_large_image',
    'twitter:site': `@${SOCIAL_CONFIG.handles.twitter}`,
    'twitter:creator': `@${SOCIAL_CONFIG.handles.twitter}`,
    'twitter:title': `${title} | INT Creative Hub`,
    'twitter:description': description,
    'twitter:image': fullImageUrl,
    
    // LinkedIn specific  
    'linkedin:owner': SOCIAL_CONFIG.urls.linkedin,
    
    // Article specific (for blog posts)
    ...(type === 'article' && {
      'article:publisher': SOCIAL_CONFIG.urls.facebook,
      'article:author': SOCIAL_CONFIG.urls.linkedin
    })
  };
};