/**
 * Core Web Vitals Optimization for Portfolio System
 * 
 * Implements comprehensive performance monitoring and optimization
 * for Largest Contentful Paint (LCP), First Input Delay (FID),
 * and Cumulative Layout Shift (CLS).
 */

// Global gtag declaration for Google Analytics
declare global {
  function gtag(...args: any[]): void;
}

export interface WebVitalsMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export interface PerformanceConfig {
  enableReporting: boolean;
  sampleRate: number;
  debug: boolean;
  endpoint?: string;
}

class CoreWebVitals {
  private metrics: WebVitalsMetrics = {};
  private config: PerformanceConfig;
  private observer?: PerformanceObserver;
  private resizeObserver?: ResizeObserver;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableReporting: true,
      sampleRate: 0.1, // 10% sampling
      debug: false,
      ...config
    };
  }

  /**
   * Initialize Core Web Vitals monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;

    this.measureLCP();
    this.measureFID();
    this.measureCLS();
    this.measureFCP();
    this.measureTTFB();
    this.setupLayoutShiftPrevention();
    this.optimizeCriticalRendering();
  }

  /**
   * Measure Largest Contentful Paint (LCP)
   * Target: < 2.5 seconds
   */
  private measureLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        if (lastEntry) {
          this.metrics.lcp = lastEntry.startTime;
          
          if (this.config.debug) {
            console.log('LCP:', lastEntry.startTime, 'ms');
          }
          
          // Optimize if LCP is poor
          if (lastEntry.startTime > 2500) {
            this.optimizeLCP();
          }
        }
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (error) {
      if (this.config.debug) {
        console.warn('LCP measurement not supported');
      }
    }
  }

  /**
   * Measure First Input Delay (FID)
   * Target: < 100 milliseconds
   */
  private measureFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          
          if (this.config.debug) {
            console.log('FID:', entry.processingStart - entry.startTime, 'ms');
          }
          
          // Optimize if FID is poor
          if (entry.processingStart - entry.startTime > 100) {
            this.optimizeFID();
          }
        });
      });

      observer.observe({ type: 'first-input', buffered: true });
    } catch (error) {
      if (this.config.debug) {
        console.warn('FID measurement not supported');
      }
    }
  }

  /**
   * Measure Cumulative Layout Shift (CLS)
   * Target: < 0.1
   */
  private measureCLS(): void {
    let clsValue = 0;
    
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
            
            if (this.config.debug) {
              console.log('CLS:', clsValue);
            }
            
            // Optimize if CLS is poor
            if (clsValue > 0.1) {
              this.optimizeCLS();
            }
          }
        });
      });

      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (error) {
      if (this.config.debug) {
        console.warn('CLS measurement not supported');
      }
    }
  }

  /**
   * Measure First Contentful Paint (FCP)
   */
  private measureFCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.fcp = entry.startTime;
          
          if (this.config.debug) {
            console.log('FCP:', entry.startTime, 'ms');
          }
        });
      });

      observer.observe({ type: 'paint', buffered: true });
    } catch (error) {
      if (this.config.debug) {
        console.warn('FCP measurement not supported');
      }
    }
  }

  /**
   * Measure Time to First Byte (TTFB)
   */
  private measureTTFB(): void {
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
        
        if (this.config.debug) {
          console.log('TTFB:', this.metrics.ttfb, 'ms');
        }
      }
    } catch (error) {
      if (this.config.debug) {
        console.warn('TTFB measurement failed');
      }
    }
  }

  /**
   * Optimize LCP by preloading critical resources
   */
  private optimizeLCP(): void {
    // Preload critical CSS
    this.preloadCriticalCSS();
    
    // Optimize images in viewport
    this.optimizeViewportImages();
    
    // Remove render-blocking resources
    this.optimizeRenderBlocking();
  }

  /**
   * Optimize FID by reducing main thread blocking
   */
  private optimizeFID(): void {
    // Break up long tasks
    this.scheduleNonCriticalWork();
    
    // Preload critical scripts
    this.preloadCriticalScripts();
    
    // Use requestIdleCallback for non-critical work
    this.deferNonCriticalTasks();
  }

  /**
   * Optimize CLS by preventing layout shifts
   */
  private optimizeCLS(): void {
    // Reserve space for images
    this.reserveImageSpace();
    
    // Prevent font layout shifts
    this.optimizeFontLoading();
    
    // Stabilize dynamic content
    this.stabilizeDynamicContent();
  }

  /**
   * Setup layout shift prevention
   */
  private setupLayoutShiftPrevention(): void {
    // Reserve space for portfolio images
    const portfolioImages = document.querySelectorAll('.portfolio-image-container img');
    portfolioImages.forEach((img: any) => {
      if (!img.width || !img.height) {
        // Set explicit dimensions to prevent layout shift
        const aspectRatio = 4 / 3; // Default aspect ratio
        const containerWidth = img.closest('.portfolio-image-container')?.offsetWidth || 400;
        
        img.style.width = containerWidth + 'px';
        img.style.height = Math.round(containerWidth / aspectRatio) + 'px';
        img.style.objectFit = 'cover';
      }
    });
  }

  /**
   * Optimize critical rendering path
   */
  private optimizeCriticalRendering(): void {
    // Inline critical CSS for above-the-fold content
    this.inlineCriticalStyles();
    
    // Preconnect to critical domains
    this.preconnectCriticalDomains();
    
    // Optimize resource hints
    this.optimizeResourceHints();
  }

  private preloadCriticalCSS(): void {
    const criticalCSS = [
      '/_astro/base.css',
      '/_astro/components.css'
    ];

    criticalCSS.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }

  private optimizeViewportImages(): void {
    const viewportImages = document.querySelectorAll('.portfolio-image-container img');
    viewportImages.forEach((img: any, index) => {
      if (index < 3) { // First 3 images
        img.loading = 'eager';
        img.fetchPriority = 'high';
        
        // Preload the image
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
      }
    });
  }

  private optimizeRenderBlocking(): void {
    // Move non-critical scripts to end of body
    const scripts = document.querySelectorAll('script[src]:not([async]):not([defer])');
    scripts.forEach((script: any) => {
      if (!script.src.includes('critical')) {
        script.defer = true;
      }
    });
  }

  private scheduleNonCriticalWork(): void {
    // Use scheduler API if available
    if ('scheduler' in window && (window as any).scheduler.postTask) {
      (window as any).scheduler.postTask(() => {
        // Non-critical portfolio animations
        this.initNonCriticalAnimations();
      }, { priority: 'background' });
    } else if (requestIdleCallback) {
      requestIdleCallback(() => {
        this.initNonCriticalAnimations();
      }, { timeout: 5000 });
    }
  }

  private preloadCriticalScripts(): void {
    const criticalScripts = [
      '/_astro/portfolio.js',
      '/_astro/intersection-observer.js'
    ];

    criticalScripts.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  private deferNonCriticalTasks(): void {
    const nonCriticalTasks = [
      () => this.initAnalytics(),
      () => this.initSocialSharing(),
      () => this.initAdvancedAnimations()
    ];

    nonCriticalTasks.forEach(task => {
      if (requestIdleCallback) {
        requestIdleCallback(task, { timeout: 3000 });
      } else {
        setTimeout(task, 1000);
      }
    });
  }

  private reserveImageSpace(): void {
    const images = document.querySelectorAll('img[data-portfolio-image]');
    images.forEach((img: any) => {
      if (!img.style.aspectRatio && img.width && img.height) {
        img.style.aspectRatio = `${img.width} / ${img.height}`;
      }
    });
  }

  private optimizeFontLoading(): void {
    // Preload critical fonts
    const fonts = [
      { family: 'Inter', weight: '400' },
      { family: 'Inter', weight: '600' }
    ];

    fonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      link.href = `/fonts/${font.family}-${font.weight}.woff2`;
      document.head.appendChild(link);
    });
  }

  private stabilizeDynamicContent(): void {
    // Add min-height to dynamic content areas
    const dynamicAreas = document.querySelectorAll('[data-portfolio-item]');
    dynamicAreas.forEach((area: any) => {
      if (!area.style.minHeight) {
        area.style.minHeight = '400px';
      }
    });
  }

  private inlineCriticalStyles(): void {
    // Critical portfolio styles
    const criticalCSS = `
      .portfolio-image-container {
        aspect-ratio: 4/3;
        background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
      }
      [data-portfolio-item] {
        min-height: 400px;
        contain: layout style;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }

  private preconnectCriticalDomains(): void {
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  private optimizeResourceHints(): void {
    // DNS prefetch for external resources
    const prefetchDomains = [
      'https://cdn.jsdelivr.net',
      'https://unpkg.com'
    ];

    prefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }

  private initNonCriticalAnimations(): void {
    // Initialize non-critical portfolio animations
    const animations = document.querySelectorAll('.portfolio-card-entrance');
    animations.forEach((element: any, index) => {
      element.style.animationDelay = `${index * 150}ms`;
      element.classList.add('animate-in');
    });
  }

  private initAnalytics(): void {
    // Initialize performance analytics
    this.reportMetrics();
  }

  private initSocialSharing(): void {
    // Initialize social sharing features
  }

  private initAdvancedAnimations(): void {
    // Initialize advanced hover animations
  }

  /**
   * Report performance metrics
   */
  private reportMetrics(): void {
    if (!this.config.enableReporting) return;
    if (Math.random() > this.config.sampleRate) return; // Sampling

    // Wait for all metrics to be collected
    setTimeout(() => {
      const report = {
        ...this.metrics,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType
      };

      if (this.config.debug) {
        console.table(report);
      }

      // Send to analytics endpoint
      if (this.config.endpoint) {
        fetch(this.config.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(report)
        }).catch(error => {
          if (this.config.debug) {
            console.warn('Failed to report metrics:', error);
          }
        });
      }

      // Send to Google Analytics if available
      if (typeof gtag !== 'undefined') {
        Object.entries(this.metrics).forEach(([metric, value]) => {
          if (value !== undefined) {
            gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: metric.toUpperCase(),
              value: Math.round(value),
              non_interaction: true
            });
          }
        });
      }
    }, 5000);
  }

  /**
   * Get current metrics
   */
  getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  /**
   * Reset metrics
   */
  resetMetrics(): void {
    this.metrics = {};
  }
}

// Export singleton instance
export const coreWebVitals = new CoreWebVitals({
  enableReporting: true,
  sampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1,
  debug: process.env.NODE_ENV === 'development'
});

// Auto-initialize
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      coreWebVitals.init();
    });
  } else {
    coreWebVitals.init();
  }
}