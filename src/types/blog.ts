/**
 * Blog type definitions for INT Creative Hub
 * Follows existing pattern from services.ts and portfolio.ts
 */

export interface BlogAuthor {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  email?: string;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  color: string; // For badge styling
  icon: string; // SVG path for category icons
}

export interface RelatedService {
  serviceSlug: string;
  serviceName: string;
  relevance: 'high' | 'medium' | 'low';
}

export interface BlogSEO {
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  socialImage?: string;
  canonicalUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  
  // Publishing details
  publishedAt: string;
  updatedAt?: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  
  // Organization
  category: string; // References BlogCategory.slug
  tags: string[];
  readingTime: number; // minutes
  
  // Author (defaulting to Jacob but extensible)
  author: BlogAuthor;
  
  // Transformation focus - aligns with INT Creative positioning
  transformationFocus: {
    businessChallenge: string;
    transformationOutcome: string;
    industryRelevance: string[];
  };
  
  // Service connections
  relatedServices: RelatedService[];
  
  // Social sharing & SEO
  seo: BlogSEO;
  
  // Content structure
  tableOfContents?: TOCItem[];
  callToAction?: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    type: 'service' | 'contact' | 'download' | 'subscribe';
  };
}

export interface TOCItem {
  id: string;
  title: string;
  level: number; // h2=2, h3=3, etc.
  children?: TOCItem[];
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  author?: string;
  featured?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface BlogStats {
  totalPosts: number;
  categoryCounts: Record<string, number>;
  tagCounts: Record<string, number>;
  avgReadingTime: number;
  mostPopularCategory: string;
}

// Main blog data structure
export interface BlogData {
  posts: BlogPost[];
  categories: BlogCategory[];
  authors: BlogAuthor[];
  featuredPosts: BlogPost[];
  stats: BlogStats;
  
  // Blog configuration
  config: {
    postsPerPage: number;
    enableComments: boolean;
    enableNewsletter: boolean;
    socialSharing: boolean;
  };
}

// For blog listing pages
export interface BlogListingProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  category?: string;
  tag?: string;
  searchQuery?: string;
}

// For individual blog posts
export interface BlogPostProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  nextPost?: BlogPost;
  previousPost?: BlogPost;
}