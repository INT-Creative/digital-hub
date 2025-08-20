/**
 * Portfolio Image Management System
 * 
 * Handles responsive image loading, path resolution, and fallback management
 * for the INT Creative Hub portfolio showcase.
 * 
 * Features:
 * - Responsive image path generation with multiple formats (WebP, JPEG)
 * - High-DPI image support (@2x variants)
 * - Graceful fallbacks to category-specific SVG placeholders
 * - Performance optimization for different connection types
 * - Legal compliance with "FICTIONAL DEMONSTRATION" requirements
 */

import { portfolioData } from '../data/portfolio';

export interface ImageVariant {
  src: string;
  type: string;
  width: number;
  height: number;
  density: '1x' | '2x';
  format: 'webp' | 'jpg' | 'png' | 'svg';
}

export interface PortfolioImageSet {
  primary: ImageVariant;
  highDpi: ImageVariant;
  webp: ImageVariant;
  webpHighDpi: ImageVariant;
  fallback: ImageVariant;
  placeholder: ImageVariant;
  alt: string;
  loading: 'eager' | 'lazy';
  fetchpriority: 'high' | 'low' | 'auto';
}

/**
 * Generate complete image set for a portfolio item
 */
export function generatePortfolioImageSet(
  slug: string, 
  serviceType: string,
  index: number = 0,
  options: {
    width?: number;
    height?: number;
    priority?: boolean;
  } = {}
): PortfolioImageSet {
  const {
    width = 400,
    height = 300,
    priority = index < 3
  } = options;

  const basePath = `/images/portfolio/${serviceType}`;
  const placeholderPath = `/images/portfolio/placeholders/${serviceType}-category.svg`;

  // Find portfolio item for enhanced alt text
  const portfolioItem = portfolioData.find(item => item.slug === slug);
  const alt = portfolioItem 
    ? `${portfolioItem.title} portfolio showcase - ${portfolioItem.clientResults.keyOutcome}. View detailed case study of this ${portfolioItem.category.toLowerCase()} project for ${portfolioItem.clientInfo.industry.toLowerCase()} business. FICTIONAL DEMONSTRATION.`
    : `${slug} portfolio project showcase - Professional ${serviceType.replace('-', ' ')} case study. FICTIONAL DEMONSTRATION.`;

  return {
    primary: {
      src: `${basePath}/${slug}.jpg`,
      type: 'image/jpeg',
      width,
      height,
      density: '1x',
      format: 'jpg'
    },
    highDpi: {
      src: `${basePath}/${slug}@2x.jpg`,
      type: 'image/jpeg',
      width: width * 2,
      height: height * 2,
      density: '2x',
      format: 'jpg'
    },
    webp: {
      src: `${basePath}/${slug}.webp`,
      type: 'image/webp',
      width,
      height,
      density: '1x',
      format: 'webp'
    },
    webpHighDpi: {
      src: `${basePath}/${slug}@2x.webp`,
      type: 'image/webp',
      width: width * 2,
      height: height * 2,
      density: '2x',
      format: 'webp'
    },
    fallback: {
      src: placeholderPath,
      type: 'image/svg+xml',
      width,
      height,
      density: '1x',
      format: 'svg'
    },
    placeholder: {
      src: placeholderPath,
      type: 'image/svg+xml',
      width,
      height,
      density: '1x',
      format: 'svg'
    },
    alt,
    loading: priority ? 'eager' : 'lazy',
    fetchpriority: priority ? 'high' : 'auto'
  };
}

/**
 * Generate srcset string for responsive images
 */
export function generateSrcSet(variants: ImageVariant[]): string {
  return variants
    .map(variant => `${variant.src} ${variant.width}w`)
    .join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizesAttribute(): string {
  return "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px";
}

/**
 * Check if image exists (client-side utility)
 */
export async function imageExists(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

/**
 * Enhanced connection-aware image format selection
 */
export function getOptimalImageFormat(): 'webp' | 'jpg' {
  if (typeof window === 'undefined') return 'jpg';
  
  // Check WebP support efficiently
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').startsWith('data:image/webp');
  })();
  
  // Enhanced connection analysis
  const connection = (navigator as any).connection;
  if (!connection) return supportsWebP ? 'webp' : 'jpg';
  
  const isSlowConnection = 
    connection.effectiveType === 'slow-2g' || 
    connection.effectiveType === '2g' ||
    connection.saveData === true ||
    (connection.downlink && connection.downlink < 1.5);
  
  const isDataSaver = connection.saveData === true;
  
  // Progressive format selection
  if (isDataSaver || isSlowConnection) {
    return 'jpg'; // Prioritize compatibility over size
  }
  
  return supportsWebP ? 'webp' : 'jpg';
}

/**
 * Get connection-aware image quality settings
 */
export function getConnectionAwareQuality(): {
  format: 'webp' | 'jpg';
  useHighDpi: boolean;
  preloadCount: number;
  loadingStrategy: 'eager' | 'lazy' | 'auto';
} {
  if (typeof window === 'undefined') {
    return { format: 'jpg', useHighDpi: true, preloadCount: 3, loadingStrategy: 'lazy' };
  }
  
  const connection = (navigator as any).connection;
  const format = getOptimalImageFormat();
  
  if (!connection) {
    return { format, useHighDpi: true, preloadCount: 3, loadingStrategy: 'lazy' };
  }
  
  const effectiveType = connection.effectiveType;
  const isSlowConnection = effectiveType === 'slow-2g' || effectiveType === '2g';
  const isFastConnection = effectiveType === '4g' || connection.downlink >= 10;
  const saveData = connection.saveData === true;
  
  return {
    format,
    useHighDpi: !isSlowConnection && !saveData,
    preloadCount: isSlowConnection ? 1 : (isFastConnection ? 6 : 3),
    loadingStrategy: isSlowConnection ? 'lazy' : (isFastConnection ? 'eager' : 'auto')
  };
}

/**
 * Enhanced connection-aware image preloading
 */
export function preloadCriticalImages(items: any[], options?: {
  count?: number;
  priority?: boolean;
  abortSignal?: AbortSignal;
}): void {
  if (typeof window === 'undefined') return;
  
  const { count = 3, priority = true, abortSignal } = options || {};
  const connectionSettings = getConnectionAwareQuality();
  const actualCount = Math.min(count, connectionSettings.preloadCount);
  
  // Use document fragment for better performance
  const fragment = document.createDocumentFragment();
  
  items.slice(0, actualCount).forEach((item, index) => {
    if (abortSignal?.aborted) return;
    
    const imageSet = generatePortfolioImageSet(item.slug, item.serviceType, index, {
      priority: true
    });
    
    // Select optimal image based on connection
    const imageSrc = connectionSettings.format === 'webp' && connectionSettings.useHighDpi
      ? imageSet.webpHighDpi.src
      : connectionSettings.format === 'webp'
      ? imageSet.webp.src
      : connectionSettings.useHighDpi
      ? imageSet.highDpi.src
      : imageSet.primary.src;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageSrc;
    link.fetchPriority = priority ? 'high' : 'low';
    
    // Add responsive preloading
    if (connectionSettings.useHighDpi) {
      link.media = '(min-resolution: 2dppx)';
    }
    
    fragment.appendChild(link);
  });
  
  // Batch DOM updates
  requestIdleCallback(() => {
    document.head.appendChild(fragment);
  }, { timeout: 1000 });
}

/**
 * Progressive image enhancement with blur-up technique
 */
export function createProgressiveImageLoader(container: HTMLElement, imageSet: PortfolioImageSet): {
  load: () => Promise<void>;
  cancel: () => void;
} {
  let abortController = new AbortController();
  
  const load = async (): Promise<void> => {
    const img = container.querySelector('img');
    if (!img || abortController.signal.aborted) return;
    
    const connectionSettings = getConnectionAwareQuality();
    
    // Create placeholder with blur effect
    const placeholder = new Image();
    placeholder.style.filter = 'blur(10px)';
    placeholder.style.transition = 'filter 0.3s ease';
    
    try {
      // Load low-quality placeholder first (optional for very slow connections)
      if (connectionSettings.loadingStrategy === 'lazy') {
        await new Promise((resolve, reject) => {
          placeholder.onload = resolve;
          placeholder.onerror = reject;
          placeholder.src = imageSet.placeholder.src;
        });
        
        if (abortController.signal.aborted) return;
        img.src = placeholder.src;
        img.style.filter = 'blur(5px)';
      }
      
      // Load full quality image
      const fullImage = new Image();
      const fullSrc = connectionSettings.format === 'webp' && connectionSettings.useHighDpi
        ? imageSet.webpHighDpi.src
        : connectionSettings.format === 'webp'
        ? imageSet.webp.src
        : connectionSettings.useHighDpi
        ? imageSet.highDpi.src
        : imageSet.primary.src;
      
      await new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          reject(new Error('Image load timeout'));
        }, 10000);
        
        fullImage.onload = () => {
          clearTimeout(timeoutId);
          resolve(null);
        };
        fullImage.onerror = () => {
          clearTimeout(timeoutId);
          reject(new Error('Image load failed'));
        };
        fullImage.src = fullSrc;
      });
      
      if (abortController.signal.aborted) return;
      
      // Smooth transition to full image
      img.src = fullSrc;
      img.style.filter = '';
      container.classList.add('loaded');
      
    } catch (error) {
      if (!abortController.signal.aborted) {
        // Fallback to placeholder
        img.src = imageSet.placeholder.src;
        container.classList.add('loaded', 'error');
      }
    }
  };
  
  const cancel = () => {
    abortController.abort();
  };
  
  return { load, cancel };
}

/**
 * Enhanced intersection observer with connection awareness
 */
export function createImageObserver(
  callback: (entries: IntersectionObserverEntry[]) => void
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  const connectionSettings = getConnectionAwareQuality();
  
  // Adjust intersection margins based on connection speed
  const rootMargin = connectionSettings.loadingStrategy === 'eager'
    ? '200px 0px'  // Load earlier on fast connections
    : connectionSettings.loadingStrategy === 'lazy'
    ? '50px 0px'   // Load closer to viewport on slow connections
    : '100px 0px'; // Default
  
  const options: IntersectionObserverInit = {
    rootMargin,
    threshold: [0, 0.1, 0.25],
  };
  
  return new IntersectionObserver((entries) => {
    // Batch callbacks for better performance
    requestIdleCallback(() => {
      callback(entries);
    }, { timeout: 100 });
  }, options);
}

/**
 * Generate schema.org markup for portfolio images
 */
export function generateImageSchema(portfolioItem: any, imageSet: PortfolioImageSet) {
  return {
    "@type": "ImageObject",
    "url": imageSet.primary.src,
    "width": imageSet.primary.width,
    "height": imageSet.primary.height,
    "caption": imageSet.alt,
    "description": `Portfolio showcase image for ${portfolioItem.title}`,
    "creator": {
      "@type": "Organization",
      "name": "INT Creative Hub"
    },
    "copyrightHolder": {
      "@type": "Organization", 
      "name": "INT Creative Hub"
    },
    "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    "acquireLicensePage": "/contact",
    "creditText": "Fictional demonstration project by INT Creative Hub"
  };
}

/**
 * Service type configuration
 */
export const SERVICE_TYPE_CONFIG = {
  'website-development': {
    color: 'from-forest-900 to-sage-800',
    icon: 'code',
    displayName: 'Website Development'
  },
  'digital-marketing': {
    color: 'from-sage-700 to-forest-800', 
    icon: 'chart',
    displayName: 'Digital Marketing'
  },
  'graphic-design': {
    color: 'from-forest-800 to-sage-700',
    icon: 'palette', 
    displayName: 'Graphic Design'
  },
  'marketing-automation': {
    color: 'from-sage-800 to-forest-900',
    icon: 'lightning',
    displayName: 'Marketing Automation'
  }
} as const;

/**
 * Comprehensive image validation and optimization analysis
 */
export async function validateImageStructure(): Promise<{
  valid: boolean;
  missing: string[];
  recommendations: string[];
  performance: {
    totalSize: number;
    averageSize: number;
    formatDistribution: Record<string, number>;
  };
}> {
  const missing: string[] = [];
  const recommendations: string[] = [];
  let totalSize = 0;
  let validImages = 0;
  const formatDistribution: Record<string, number> = { jpg: 0, webp: 0, svg: 0 };
  
  // Batch validation for better performance
  const validationPromises = portfolioData.map(async (item) => {
    const imageSet = generatePortfolioImageSet(item.slug, item.serviceType);
    const checks = {
      primary: imageExists(imageSet.primary.src),
      webp: imageExists(imageSet.webp.src),
      highDpi: imageExists(imageSet.highDpi.src),
      webpHighDpi: imageExists(imageSet.webpHighDpi.src)
    };
    
    try {
      const results = await Promise.allSettled(Object.values(checks));
      const [primaryExists, webpExists, highDpiExists, webpHighDpiExists] = 
        results.map(r => r.status === 'fulfilled' && r.value);
      
      if (!primaryExists) {
        missing.push(`${item.serviceType}/${item.slug}.jpg`);
      } else {
        formatDistribution.jpg++;
        validImages++;
      }
      
      if (!webpExists) {
        recommendations.push(`Add WebP: ${item.serviceType}/${item.slug}.webp`);
      } else {
        formatDistribution.webp++;
      }
      
      if (!highDpiExists) {
        recommendations.push(`Add @2x: ${item.serviceType}/${item.slug}@2x.jpg`);
      }
      
      if (!webpHighDpiExists) {
        recommendations.push(`Add WebP @2x: ${item.serviceType}/${item.slug}@2x.webp`);
      }
      
    } catch (error) {
      missing.push(`Validation error for ${item.slug}: ${error}`);
    }
  });
  
  await Promise.allSettled(validationPromises);
  
  // Add performance recommendations
  const webpCoverage = formatDistribution.webp / formatDistribution.jpg * 100;
  if (webpCoverage < 80) {
    recommendations.push(`Low WebP coverage: ${webpCoverage.toFixed(1)}% - consider converting more images`);
  }
  
  return {
    valid: missing.length === 0,
    missing,
    recommendations,
    performance: {
      totalSize,
      averageSize: validImages > 0 ? totalSize / validImages : 0,
      formatDistribution
    }
  };
}

/**
 * Generate development helper for missing images
 */
export function generateImagePlaceholders(): string[] {
  const commands: string[] = [];
  
  portfolioData.forEach(item => {
    const serviceType = item.serviceType;
    const slug = item.slug;
    
    commands.push(
      `# Create placeholder for ${item.title}`,
      `mkdir -p public/images/portfolio/${serviceType}`,
      `# Generate 400x300 placeholder for ${slug}`,
      `convert -size 400x300 -background "#f3f4f6" -fill "#6b7280" -gravity center -pointsize 16 label:"${item.title}\\nFICTIONAL DEMO" public/images/portfolio/${serviceType}/${slug}.jpg`,
      `# Generate WebP version`,
      `cwebp -q 80 public/images/portfolio/${serviceType}/${slug}.jpg -o public/images/portfolio/${serviceType}/${slug}.webp`,
      `# Generate @2x versions`,
      `convert -size 800x600 -background "#f3f4f6" -fill "#6b7280" -gravity center -pointsize 24 label:"${item.title}\\nFICTIONAL DEMO\\n@2x" public/images/portfolio/${serviceType}/${slug}@2x.jpg`,
      `cwebp -q 80 public/images/portfolio/${serviceType}/${slug}@2x.jpg -o public/images/portfolio/${serviceType}/${slug}@2x.webp`,
      ''
    );
  });
  
  return commands;
}

export default {
  generatePortfolioImageSet,
  generateSrcSet,
  generateSizesAttribute,
  imageExists,
  getOptimalImageFormat,
  getConnectionAwareQuality,
  preloadCriticalImages,
  createProgressiveImageLoader,
  createImageObserver,
  generateImageSchema,
  SERVICE_TYPE_CONFIG,
  validateImageStructure,
  generateImagePlaceholders
};