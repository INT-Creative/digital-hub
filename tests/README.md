# INT Creative Hub Portfolio Testing Suite

A comprehensive testing framework for the INT Creative Hub portfolio graphics system, covering functionality, performance, accessibility, and legal compliance.

## 📋 Test Coverage

### Unit Tests (`/tests/unit/`)
- **ResponsivePortfolioImage.test.js**: Component rendering, SEO optimization, loading states, legal compliance
- **PortfolioGrid.test.js**: Grid rendering, filtering, interactive features, responsive behavior

### Integration Tests (`/tests/integration/`)
- **portfolio-data-flow.test.js**: Data flow from portfolio.ts through components
- **responsive-behavior.test.js**: Cross-device responsive behavior testing

### Performance Tests (`/tests/performance/`)
- **core-web-vitals.test.js**: LCP, FID, CLS, TTFB, resource loading performance

### Accessibility Tests (`/tests/accessibility/`)
- **wcag-compliance.test.js**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support

### SEO Tests (`/tests/seo/`)
- **structured-data.test.js**: Schema markup, meta tags, Open Graph, search optimization

### Legal Compliance Tests (`/tests/legal/`)
- **ftc-compliance.test.js**: FTC guidelines, fictional content disclosure, privacy protection

### End-to-End Tests (`/tests/e2e/`)
- **portfolio-system.test.js**: Cross-browser functionality, user interactions, performance

### Error Handling Tests (`/tests/error-handling/`)
- **fallback-behavior.test.js**: Network failures, image errors, graceful degradation

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm run test:all
```

### Development Testing
```bash
# Watch mode for unit tests
npm run test:watch

# Run specific test suites
npm run test:unit
npm run test:accessibility
npm run test:performance
```

### End-to-End Testing
```bash
# Run E2E tests
npm run test:e2e

# Debug E2E tests with UI
npm run test:e2e:ui

# Cross-browser testing
npm run test:cross-browser

# Mobile device testing
npm run test:mobile
```

## 📊 Test Commands Reference

### Jest (Unit/Integration Tests)
| Command | Description |
|---------|-------------|
| `npm run test` | Run all Jest tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Generate coverage report |
| `npm run test:unit` | Unit tests only |
| `npm run test:integration` | Integration tests only |
| `npm run test:performance` | Performance tests only |
| `npm run test:accessibility` | Accessibility tests only |
| `npm run test:seo` | SEO tests only |
| `npm run test:legal` | Legal compliance tests only |

### Playwright (E2E Tests)
| Command | Description |
|---------|-------------|
| `npm run test:e2e` | Run all E2E tests |
| `npm run test:e2e:ui` | Run with Playwright UI |
| `npm run test:e2e:headed` | Run in headed mode |
| `npm run test:e2e:debug` | Debug mode |
| `npm run test:cross-browser` | Test Chrome, Firefox, Safari |
| `npm run test:mobile` | Test mobile devices |
| `npm run test:accessibility-e2e` | E2E accessibility tests |
| `npm run test:performance-e2e` | E2E performance tests |
| `npm run test:legal-e2e` | E2E legal compliance tests |

### CI/CD Commands
| Command | Description |
|---------|-------------|
| `npm run test:ci` | Full CI test suite |
| `npm run test:all` | All tests (Jest + Playwright) |

## 🏗️ Test Architecture

### Framework Stack
- **Jest**: Unit and integration testing
- **Playwright**: Cross-browser E2E testing
- **@testing-library/jest-dom**: DOM testing utilities
- **JSDOM**: Browser environment simulation

### Test Structure
```
tests/
├── setup/                    # Test configuration
│   ├── jest.config.js       # Jest configuration
│   ├── jest.setup.js        # Global test setup
│   ├── playwright.config.js # Playwright configuration
│   └── astro-jest-transformer.js # Astro component transformation
├── unit/                    # Component unit tests
├── integration/             # Integration tests
├── performance/             # Performance testing
├── accessibility/           # WCAG compliance tests
├── seo/                     # SEO validation tests
├── legal/                   # Legal compliance tests
├── e2e/                     # End-to-end tests
├── error-handling/          # Error scenarios
├── __mocks__/               # Mock files
├── coverage/                # Coverage reports
├── reports/                 # Test reports
└── results/                 # Test artifacts
```

## 🎯 Test Categories

### 1. Component Testing
Tests individual Astro components in isolation:
- **ResponsivePortfolioImage**: Image loading, responsive sources, SEO attributes, error states
- **PortfolioGrid**: Grid rendering, filtering, interactive elements, responsive behavior

### 2. Integration Testing
Tests component interactions and data flow:
- Data flow from `portfolio.ts` to rendered components
- Responsive behavior across viewport sizes
- Component integration patterns

### 3. Performance Testing
Validates Core Web Vitals and loading performance:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- Image loading optimization
- Network-aware performance

### 4. Accessibility Testing
Ensures WCAG 2.1 AA compliance:
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- ARIA attributes
- Focus management

### 5. SEO Testing
Validates search optimization:
- Structured data (Schema.org)
- Meta tags (Open Graph, Twitter Cards)
- Image alt attributes
- Heading hierarchy
- Internal linking

### 6. Legal Compliance Testing
Ensures FTC compliance and proper disclosure:
- Fictional content disclaimers
- FTC guideline compliance
- Privacy protection measures
- Educational content classification

### 7. Cross-Browser Testing
Tests functionality across browsers and devices:
- Desktop: Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Mobile
- Tablet: iPad, Android tablets
- Responsive behavior validation

### 8. Error Handling Testing
Tests system resilience:
- Image loading failures
- Network connectivity issues
- JavaScript errors
- Graceful degradation

## 📈 Performance Benchmarks

### Core Web Vitals Targets
- **LCP**: ≤ 2.5 seconds (Good)
- **FID**: ≤ 100 milliseconds (Good)
- **CLS**: ≤ 0.1 (Good)

### Loading Performance
- **Above-fold images**: `loading="eager"` with `fetchpriority="high"`
- **Below-fold images**: `loading="lazy"`
- **WebP format support**: With JPEG fallbacks
- **Responsive images**: Optimized per viewport

### Accessibility Benchmarks
- **WCAG 2.1 AA compliance**: 100%
- **Keyboard navigation**: Full support
- **Screen reader compatibility**: Complete
- **Color contrast**: ≥ 4.5:1 (normal text), ≥ 3:1 (large text)

## 🔒 Legal Compliance Requirements

### FTC Compliance
- Clear "FICTIONAL" content disclosure
- Federal Trade Commission guideline adherence
- No misleading earnings claims
- Educational purpose classification

### Privacy Protection
- No actual client data exposure
- Generic industry references only
- Confidentiality maintenance
- Fictional testimonials clearly marked

### Disclaimer Requirements
- Visible legal badges on all portfolio items
- Comprehensive disclaimer sections
- Interactive disclaimer tooltips
- Accessibility-compliant legal notices

## 🛠️ Development Workflow Integration

### Pre-commit Testing
```bash
# Quick validation before commits
npm run test:unit
npm run test:accessibility
```

### Pull Request Testing
```bash
# Comprehensive testing for PRs
npm run test:all
```

### CI/CD Pipeline
```bash
# Full test suite for deployments
npm run test:ci
```

### Local Development
```bash
# Watch mode for active development
npm run test:watch

# Performance monitoring during development
npm run test:performance
```

## 📊 Test Reporting

### Coverage Reports
- **Location**: `tests/coverage/`
- **Format**: HTML, LCOV, JSON
- **Threshold**: 80% minimum coverage

### Test Reports
- **Jest HTML Reports**: `tests/reports/test-report.html`
- **Playwright Reports**: `tests/reports/playwright-report/`
- **Performance Metrics**: Captured in test artifacts

### CI Integration
- Test results exported in JUnit format
- Coverage data available for CI/CD analysis
- Performance regression detection

## 🔧 Configuration

### Jest Configuration (`tests/setup/jest.config.js`)
- JSDOM environment for browser simulation
- Astro component transformation
- Coverage thresholds and reporting
- Module mapping for TypeScript/Astro

### Playwright Configuration (`tests/setup/playwright.config.js`)
- Multi-browser project setup
- Mobile device configurations
- Test timeout and retry settings
- Report generation options

## 📝 Writing Tests

### Component Test Example
```javascript
test('renders portfolio image with correct attributes', () => {
  const props = {
    slug: 'test-project',
    serviceType: 'website-development',
    title: 'Test Project',
    category: 'Website Development',
    clientResult: 'Improved results',
    industry: 'Healthcare',
    index: 0
  };

  const html = mockComponent.generateHTML(props);
  container.innerHTML = html;

  const img = container.querySelector('[data-portfolio-image]');
  expect(img.getAttribute('data-slug')).toBe('test-project');
  expect(img.alt).toContain('Test Project');
});
```

### E2E Test Example
```javascript
test('portfolio grid displays correctly', async ({ page }) => {
  await page.goto('/portfolio');
  
  const portfolioItems = page.locator('[data-portfolio-item]');
  await expect(portfolioItems.first()).toBeVisible();
  
  const count = await portfolioItems.count();
  expect(count).toBeGreaterThan(0);
});
```

## 🚨 Troubleshooting

### Common Issues
- **Test timeouts**: Increase timeout in configuration
- **Image loading errors**: Check mock setup in test environment
- **Responsive test failures**: Verify viewport simulation
- **Accessibility failures**: Check ARIA attributes and focus management

### Debug Commands
```bash
# Debug specific test files
npm run test -- --testNamePattern="ResponsivePortfolioImage"

# Debug E2E tests with browser
npm run test:e2e:debug

# Generate verbose coverage
npm run test:coverage -- --verbose
```

## 🎯 Continuous Improvement

### Performance Monitoring
- Regular Core Web Vitals assessment
- Image optimization validation
- Network condition testing

### Accessibility Audits
- Periodic WCAG compliance review
- Screen reader testing updates
- Keyboard navigation verification

### Legal Compliance Review
- FTC guideline updates monitoring
- Disclaimer effectiveness assessment
- Privacy protection validation

---

**Next Steps**: Run `npm install` to install all testing dependencies, then execute `npm run test:all` to verify the complete test suite functionality.