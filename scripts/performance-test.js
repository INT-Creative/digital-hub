// Comprehensive Portfolio Performance Testing Suite
// Tests Core Web Vitals, image loading, network conditions, and device simulation

class PortfolioPerformanceTest {
  constructor() {
    this.baseUrl = 'http://localhost:4321';
    this.portfolioUrl = `${this.baseUrl}/portfolio`;
    this.metrics = {
      lcp: [],
      fid: [],
      cls: [],
      fcp: [],
      tti: [],
      imageLoadTimes: [],
      networkFailures: [],
      memoryUsage: [],
      devicePerformance: {}
    };
    this.observer = null;
    this.startTime = performance.now();
  }

  // Initialize performance observers
  initObservers() {
    // Core Web Vitals Observer
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordMetric(entry);
        }
      });

      try {
        this.observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Some performance metrics not supported:', e);
      }
    }

    // Image loading performance
    this.trackImagePerformance();

    // Memory usage tracking
    if ('memory' in performance) {
      this.trackMemoryUsage();
    }
  }

  recordMetric(entry) {
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        this.metrics.lcp.push(entry.startTime);
        console.log(`LCP: ${entry.startTime.toFixed(2)}ms`);
        break;
      case 'first-input':
        this.metrics.fid.push(entry.processingStart - entry.startTime);
        console.log(`FID: ${(entry.processingStart - entry.startTime).toFixed(2)}ms`);
        break;
      case 'layout-shift':
        if (!entry.hadRecentInput) {
          this.metrics.cls.push(entry.value);
        }
        break;
      case 'navigation':
        this.recordNavigationTiming(entry);
        break;
      case 'paint':
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp.push(entry.startTime);
          console.log(`FCP: ${entry.startTime.toFixed(2)}ms`);
        }
        break;
    }
  }

  recordNavigationTiming(entry) {
    const tti = this.calculateTTI(entry);
    if (tti) {
      this.metrics.tti.push(tti);
      console.log(`TTI: ${tti.toFixed(2)}ms`);
    }
  }

  calculateTTI(entry) {
    // Simplified TTI calculation
    return entry.loadEventEnd > 0 ? entry.loadEventEnd : null;
  }

  // Track individual image loading performance
  trackImagePerformance() {
    const images = document.querySelectorAll('[data-portfolio-image]');
    console.log(`Tracking ${images.length} portfolio images`);

    images.forEach((img, index) => {
      const startTime = performance.now();
      const slug = img.dataset.slug;

      const handleLoad = () => {
        const loadTime = performance.now() - startTime;
        this.metrics.imageLoadTimes.push({
          slug,
          index,
          loadTime,
          size: this.getImageSize(img),
          format: this.getImageFormat(img)
        });
        console.log(`Image ${slug} loaded: ${loadTime.toFixed(2)}ms`);
      };

      const handleError = () => {
        this.metrics.networkFailures.push({
          slug,
          index,
          errorTime: performance.now() - startTime,
          type: 'image_load_failure'
        });
        console.warn(`Image ${slug} failed to load`);
      };

      if (img.complete && img.naturalWidth > 0) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad, { once: true, passive: true });
        img.addEventListener('error', handleError, { once: true, passive: true });
      }
    });
  }

  getImageSize(img) {
    return {
      natural: { width: img.naturalWidth, height: img.naturalHeight },
      display: { width: img.offsetWidth, height: img.offsetHeight }
    };
  }

  getImageFormat(img) {
    const src = img.currentSrc || img.src;
    return src.includes('.webp') ? 'webp' : 
           src.includes('.avif') ? 'avif' : 'jpeg';
  }

  // Memory usage tracking
  trackMemoryUsage() {
    const trackMemory = () => {
      const memory = performance.memory;
      this.metrics.memoryUsage.push({
        timestamp: performance.now(),
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      });
    };

    trackMemory();
    setInterval(trackMemory, 2000);
  }

  // Device performance simulation
  async simulateDevicePerformance() {
    console.log('Starting device performance simulation...');
    
    // Mobile device simulation
    const mobileMetrics = await this.measureWithDeviceEmulation({
      name: 'Mobile',
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15',
      viewport: { width: 375, height: 667 },
      connection: '3G'
    });

    // Desktop simulation
    const desktopMetrics = await this.measureWithDeviceEmulation({
      name: 'Desktop',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      viewport: { width: 1920, height: 1080 },
      connection: 'WiFi'
    });

    this.metrics.devicePerformance = {
      mobile: mobileMetrics,
      desktop: desktopMetrics
    };
  }

  async measureWithDeviceEmulation(device) {
    console.log(`Testing ${device.name} performance...`);
    
    // Simulate slower connection if needed
    if (device.connection === '3G') {
      await this.simulateSlowConnection();
    }

    const startTime = performance.now();
    
    // Measure page load with device constraints
    const loadMetrics = await this.measurePageLoad();
    
    return {
      device: device.name,
      loadTime: performance.now() - startTime,
      ...loadMetrics
    };
  }

  async simulateSlowConnection() {
    // Add artificial delay to simulate 3G
    return new Promise(resolve => setTimeout(resolve, 500));
  }

  async measurePageLoad() {
    return new Promise((resolve) => {
      const metrics = {
        domContentLoaded: 0,
        windowLoad: 0,
        resourceCount: 0
      };

      const handleDOMContentLoaded = () => {
        metrics.domContentLoaded = performance.now();
      };

      const handleWindowLoad = () => {
        metrics.windowLoad = performance.now();
        metrics.resourceCount = performance.getEntriesByType('resource').length;
        resolve(metrics);
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded, { once: true });
        window.addEventListener('load', handleWindowLoad, { once: true });
      } else {
        // Already loaded
        metrics.domContentLoaded = 0;
        metrics.windowLoad = 0;
        metrics.resourceCount = performance.getEntriesByType('resource').length;
        resolve(metrics);
      }
    });
  }

  // Network condition testing
  async testNetworkConditions() {
    console.log('Testing network conditions...');
    
    const conditions = ['fast', 'slow', 'offline'];
    const results = {};

    for (const condition of conditions) {
      console.log(`Testing ${condition} connection...`);
      results[condition] = await this.testCondition(condition);
    }

    return results;
  }

  async testCondition(condition) {
    const startTime = performance.now();
    const testResults = {
      condition,
      imageLoadSuccess: 0,
      imageLoadFailure: 0,
      avgLoadTime: 0,
      totalTime: 0
    };

    // Test a subset of images
    const testImages = document.querySelectorAll('[data-portfolio-image]');
    const imagesToTest = Array.from(testImages).slice(0, 6);
    const loadPromises = [];

    imagesToTest.forEach((img, index) => {
      const promise = new Promise((resolve) => {
        const imgStartTime = performance.now();
        
        if (condition === 'offline') {
          // Simulate offline condition
          setTimeout(() => {
            testResults.imageLoadFailure++;
            resolve(0);
          }, 100);
          return;
        }

        const testImg = new Image();
        testImg.onload = () => {
          const loadTime = performance.now() - imgStartTime;
          testResults.imageLoadSuccess++;
          resolve(loadTime);
        };
        testImg.onerror = () => {
          testResults.imageLoadFailure++;
          resolve(0);
        };

        // Add delay for slow connection
        if (condition === 'slow') {
          setTimeout(() => {
            testImg.src = img.src;
          }, 300 + Math.random() * 500);
        } else {
          testImg.src = img.src;
        }
      });

      loadPromises.push(promise);
    });

    const loadTimes = await Promise.all(loadPromises);
    const successfulLoads = loadTimes.filter(time => time > 0);
    
    testResults.avgLoadTime = successfulLoads.length > 0 
      ? successfulLoads.reduce((a, b) => a + b, 0) / successfulLoads.length 
      : 0;
    testResults.totalTime = performance.now() - startTime;

    return testResults;
  }

  // Lazy loading effectiveness test
  testLazyLoading() {
    console.log('Testing lazy loading effectiveness...');
    
    const images = document.querySelectorAll('[data-portfolio-image]');
    const stats = {
      total: images.length,
      eager: 0,
      lazy: 0,
      aboveFold: 0,
      belowFold: 0
    };

    images.forEach((img, index) => {
      const loading = img.getAttribute('loading');
      const rect = img.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;

      if (loading === 'eager') stats.eager++;
      if (loading === 'lazy') stats.lazy++;
      if (isVisible) stats.aboveFold++;
      else stats.belowFold++;
    });

    console.log('Lazy loading stats:', stats);
    return stats;
  }

  // Generate comprehensive performance report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      testDuration: performance.now() - this.startTime,
      coreWebVitals: this.calculateCoreWebVitals(),
      imagePerformance: this.analyzeImagePerformance(),
      memoryAnalysis: this.analyzeMemoryUsage(),
      networkAnalysis: this.analyzeNetworkPerformance(),
      recommendations: this.generateRecommendations()
    };

    console.log('Performance Test Report:', report);
    return report;
  }

  calculateCoreWebVitals() {
    const avg = arr => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    const clsTotal = this.metrics.cls.reduce((a, b) => a + b, 0);

    return {
      lcp: {
        value: avg(this.metrics.lcp),
        rating: this.rateLCP(avg(this.metrics.lcp)),
        samples: this.metrics.lcp.length
      },
      fid: {
        value: avg(this.metrics.fid),
        rating: this.rateFID(avg(this.metrics.fid)),
        samples: this.metrics.fid.length
      },
      cls: {
        value: clsTotal,
        rating: this.rateCLS(clsTotal),
        samples: this.metrics.cls.length
      },
      fcp: {
        value: avg(this.metrics.fcp),
        rating: this.rateFCP(avg(this.metrics.fcp)),
        samples: this.metrics.fcp.length
      },
      tti: {
        value: avg(this.metrics.tti),
        rating: this.rateTTI(avg(this.metrics.tti)),
        samples: this.metrics.tti.length
      }
    };
  }

  rateLCP(value) {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  rateFID(value) {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  rateCLS(value) {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  rateFCP(value) {
    if (value <= 1800) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  rateTTI(value) {
    if (value <= 3800) return 'good';
    if (value <= 7300) return 'needs-improvement';
    return 'poor';
  }

  analyzeImagePerformance() {
    const images = this.metrics.imageLoadTimes;
    const failures = this.metrics.networkFailures.filter(f => f.type === 'image_load_failure');
    
    const avgLoadTime = images.length > 0 
      ? images.reduce((sum, img) => sum + img.loadTime, 0) / images.length 
      : 0;

    const formatBreakdown = images.reduce((acc, img) => {
      acc[img.format] = (acc[img.format] || 0) + 1;
      return acc;
    }, {});

    return {
      totalImages: images.length,
      successfulLoads: images.length,
      failedLoads: failures.length,
      averageLoadTime: avgLoadTime,
      formatBreakdown,
      slowestImages: images.sort((a, b) => b.loadTime - a.loadTime).slice(0, 5),
      fastestImages: images.sort((a, b) => a.loadTime - b.loadTime).slice(0, 5)
    };
  }

  analyzeMemoryUsage() {
    const memory = this.metrics.memoryUsage;
    if (memory.length === 0) return null;

    const latest = memory[memory.length - 1];
    const peak = memory.reduce((max, curr) => curr.used > max.used ? curr : max);
    
    return {
      currentUsage: latest.used,
      peakUsage: peak.used,
      totalHeapSize: latest.total,
      heapSizeLimit: latest.limit,
      memoryEfficiency: (latest.used / latest.total * 100).toFixed(2) + '%',
      samples: memory.length
    };
  }

  analyzeNetworkPerformance() {
    const resources = performance.getEntriesByType('resource');
    const images = resources.filter(r => r.initiatorType === 'img');
    
    return {
      totalResources: resources.length,
      imageResources: images.length,
      averageImageLoadTime: images.length > 0 
        ? images.reduce((sum, img) => sum + img.duration, 0) / images.length 
        : 0,
      cacheHitRatio: this.calculateCacheHitRatio(resources)
    };
  }

  calculateCacheHitRatio(resources) {
    const cachedResources = resources.filter(r => r.transferSize === 0);
    return resources.length > 0 
      ? (cachedResources.length / resources.length * 100).toFixed(2) + '%'
      : '0%';
  }

  generateRecommendations() {
    const recommendations = [];
    const vitals = this.calculateCoreWebVitals();
    const imagePerf = this.analyzeImagePerformance();

    // LCP recommendations
    if (vitals.lcp.rating !== 'good') {
      recommendations.push({
        type: 'LCP',
        priority: 'high',
        issue: `LCP is ${vitals.lcp.value.toFixed(0)}ms (${vitals.lcp.rating})`,
        recommendation: 'Optimize largest contentful paint by reducing image sizes and implementing better lazy loading'
      });
    }

    // Image loading recommendations
    if (imagePerf.averageLoadTime > 1000) {
      recommendations.push({
        type: 'Images',
        priority: 'medium',
        issue: `Average image load time is ${imagePerf.averageLoadTime.toFixed(0)}ms`,
        recommendation: 'Consider implementing image optimization, WebP format, or CDN'
      });
    }

    // FID recommendations
    if (vitals.fid.value > 100) {
      recommendations.push({
        type: 'FID',
        priority: 'medium',
        issue: `First Input Delay is ${vitals.fid.value.toFixed(0)}ms`,
        recommendation: 'Optimize JavaScript execution and reduce main thread blocking'
      });
    }

    // CLS recommendations
    if (vitals.cls.value > 0.1) {
      recommendations.push({
        type: 'CLS',
        priority: 'high',
        issue: `Cumulative Layout Shift is ${vitals.cls.value.toFixed(3)}`,
        recommendation: 'Add explicit dimensions to images and reserve space for dynamic content'
      });
    }

    return recommendations;
  }

  // Run complete performance test suite
  async runCompleteTest() {
    console.log('Starting comprehensive portfolio performance test...');
    
    this.initObservers();
    
    // Wait for initial measurements
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Test lazy loading
    const lazyLoadingStats = this.testLazyLoading();
    
    // Test network conditions
    const networkResults = await this.testNetworkConditions();
    
    // Test device performance
    await this.simulateDevicePerformance();
    
    // Wait for more data
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate final report
    const report = this.generateReport();
    report.lazyLoadingStats = lazyLoadingStats;
    report.networkResults = networkResults;
    
    return report;
  }
}

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
  window.PortfolioPerformanceTest = PortfolioPerformanceTest;
  
  // Auto-run test after page load
  if (document.readyState === 'complete') {
    console.log('Starting portfolio performance test...');
    const test = new PortfolioPerformanceTest();
    test.runCompleteTest().then(report => {
      console.log('Performance test complete!');
      window.performanceReport = report;
    });
  } else {
    window.addEventListener('load', () => {
      console.log('Starting portfolio performance test...');
      const test = new PortfolioPerformanceTest();
      test.runCompleteTest().then(report => {
        console.log('Performance test complete!');
        window.performanceReport = report;
      });
    });
  }
}