/**
 * Jest Setup Configuration
 * Global test utilities and mocks for portfolio testing
 */

import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Global polyfills for JSDOM
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock IntersectionObserver for lazy loading tests
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback, options = {}) {
    this.callback = callback;
    this.options = options;
    this.elements = new Set();
  }

  observe(element) {
    this.elements.add(element);
    // Simulate immediate intersection for testing
    setTimeout(() => {
      this.callback([{
        target: element,
        isIntersecting: true,
        intersectionRatio: 1,
        boundingClientRect: element.getBoundingClientRect(),
        rootBounds: null,
        time: Date.now()
      }]);
    }, 0);
  }

  unobserve(element) {
    this.elements.delete(element);
  }

  disconnect() {
    this.elements.clear();
  }
};

// Mock ResizeObserver for responsive behavior tests
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
    this.elements = new Set();
  }

  observe(element) {
    this.elements.add(element);
    // Simulate resize event
    setTimeout(() => {
      this.callback([{
        target: element,
        contentRect: {
          width: 400,
          height: 300,
          top: 0,
          left: 0,
          bottom: 300,
          right: 400
        }
      }]);
    }, 0);
  }

  unobserve(element) {
    this.elements.delete(element);
  }

  disconnect() {
    this.elements.clear();
  }
};

// Mock performance APIs for Core Web Vitals testing
global.PerformanceObserver = class PerformanceObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(options) {
    // Mock performance entries
    setTimeout(() => {
      this.callback({
        getEntries: () => [
          {
            name: 'largest-contentful-paint',
            entryType: 'largest-contentful-paint',
            startTime: 1500,
            renderTime: 1500,
            loadTime: 1500,
            size: 12000,
            id: '',
            url: '/images/portfolio/test-image.jpg'
          },
          {
            name: 'first-input',
            entryType: 'first-input',
            startTime: 500,
            processingStart: 510,
            processingEnd: 520,
            duration: 20,
            cancelable: true
          },
          {
            name: 'layout-shift',
            entryType: 'layout-shift',
            startTime: 800,
            value: 0.05,
            hadRecentInput: false,
            lastInputTime: 0,
            sources: []
          }
        ]
      });
    }, 100);
  }

  disconnect() {}
};

// Mock navigator.connection for network-aware loading tests
Object.defineProperty(navigator, 'connection', {
  writable: true,
  value: {
    effectiveType: '4g',
    downlink: 10,
    rtt: 50,
    saveData: false
  }
});

// Mock matchMedia for responsive and accessibility tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: query.includes('prefers-reduced-motion: reduce') ? false : true,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock fetch for API testing
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(''),
    blob: () => Promise.resolve(new Blob()),
  })
);

// Mock Image constructor for image loading tests
class MockImage {
  constructor() {
    this.onload = null;
    this.onerror = null;
    this.src = '';
    this.alt = '';
    this.width = 0;
    this.height = 0;
  }

  set src(value) {
    this._src = value;
    // Simulate successful image load after a short delay
    setTimeout(() => {
      this.width = 400;
      this.height = 300;
      if (this.onload) this.onload();
    }, 10);
  }

  get src() {
    return this._src;
  }
}

global.Image = MockImage;

// Mock requestIdleCallback for performance optimization tests
global.requestIdleCallback = global.requestIdleCallback || ((cb) => {
  const start = Date.now();
  return setTimeout(() => {
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
});

global.cancelIdleCallback = global.cancelIdleCallback || clearTimeout;

// Mock requestAnimationFrame
global.requestAnimationFrame = global.requestAnimationFrame || ((cb) => setTimeout(cb, 16));
global.cancelAnimationFrame = global.cancelAnimationFrame || clearTimeout;

// Console error/warning suppression for known test environment issues
const originalError = console.error;
const originalWarn = console.warn;

console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Warning: ReactDOM.render is deprecated') ||
     args[0].includes('act()') ||
     args[0].includes('not wrapped in act'))
  ) {
    return;
  }
  originalError.call(console, ...args);
};

console.warn = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('componentWillReceiveProps has been renamed')
  ) {
    return;
  }
  originalWarn.call(console, ...args);
};

// Global test utilities
export const testUtils = {
  // Simulate network conditions
  setNetworkCondition(condition) {
    Object.defineProperty(navigator, 'connection', {
      writable: true,
      value: {
        effectiveType: condition,
        downlink: condition === '3g' ? 1.5 : condition === '4g' ? 10 : 0.5,
        rtt: condition === '3g' ? 300 : condition === '4g' ? 50 : 800,
        saveData: condition === 'slow-2g'
      }
    });
  },

  // Simulate viewport resize
  setViewportSize(width, height) {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
    Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: height });
    window.dispatchEvent(new Event('resize'));
  },

  // Simulate user preferences
  setUserPreferences(preferences) {
    const { reducedMotion, highContrast, darkMode } = preferences;
    
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: (query.includes('prefers-reduced-motion: reduce') && reducedMotion) ||
               (query.includes('prefers-contrast: high') && highContrast) ||
               (query.includes('prefers-color-scheme: dark') && darkMode),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  },

  // Create mock portfolio data for testing
  createMockPortfolioItem(overrides = {}) {
    return {
      id: 'test-portfolio-item',
      slug: 'test-portfolio-item',
      title: 'Test Portfolio Project',
      category: 'Website Development',
      serviceType: 'website-development',
      tagline: 'Test transformation',
      description: 'A test portfolio item for unit testing',
      clientResults: {
        timeframe: '30 days',
        metric: '200% increase in leads',
        keyOutcome: 'Successful test implementation'
      },
      technologies: ['Test Tech 1', 'Test Tech 2'],
      clientInfo: {
        name: 'Test Client',
        industry: 'Test Industry',
        size: '1-5 employees',
        location: 'Test City, Ohio'
      },
      projectScope: {
        duration: '7 days',
        budget: '$3,500',
        teamSize: '1 developer'
      },
      ...overrides
    };
  },

  // Wait for async operations
  waitForAsync(ms = 100) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  // Simulate image load events
  triggerImageLoad(img, success = true) {
    setTimeout(() => {
      if (success) {
        img.dispatchEvent(new Event('load'));
      } else {
        img.dispatchEvent(new Event('error'));
      }
    }, 10);
  }
};

// Make test utilities available globally
global.testUtils = testUtils;

// Cleanup after each test
afterEach(() => {
  jest.clearAllMocks();
  fetch.mockClear();
  
  // Reset document body
  document.body.innerHTML = '';
  
  // Reset viewport size
  testUtils.setViewportSize(1024, 768);
  
  // Reset network conditions
  testUtils.setNetworkCondition('4g');
  
  // Reset user preferences
  testUtils.setUserPreferences({
    reducedMotion: false,
    highContrast: false,
    darkMode: false
  });
});