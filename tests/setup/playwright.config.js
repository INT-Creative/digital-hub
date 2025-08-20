/**
 * Playwright Configuration for INT Creative Hub Portfolio Testing
 * Cross-browser end-to-end testing with performance and accessibility validation
 */

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'tests/reports/playwright-report' }],
    ['json', { outputFile: 'tests/reports/playwright-results.json' }],
    ['junit', { outputFile: 'tests/reports/playwright-junit.xml' }]
  ],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:4321',
    
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    
    /* Record video on failure */
    video: 'retain-on-failure',
    
    /* Global timeout for each test */
    actionTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium-desktop',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
    },

    {
      name: 'firefox-desktop',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 }
      },
    },

    {
      name: 'webkit-desktop',
      use: { 
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 720 }
      },
    },

    /* Test against mobile viewports. */
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    {
      name: 'microsoft-edge',
      use: { 
        ...devices['Desktop Edge'], 
        channel: 'msedge',
        viewport: { width: 1280, height: 720 }
      },
    },
    {
      name: 'google-chrome',
      use: { 
        ...devices['Desktop Chrome'], 
        channel: 'chrome',
        viewport: { width: 1280, height: 720 }
      },
    },

    /* Accessibility testing project */
    {
      name: 'accessibility-audit',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
      testMatch: '**/accessibility/*.test.js'
    },

    /* Performance testing project */
    {
      name: 'performance-audit',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
      testMatch: '**/performance/*.test.js'
    },

    /* Legal compliance testing */
    {
      name: 'legal-compliance',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
      testMatch: '**/legal/*.test.js'
    }
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  /* Global setup and teardown */
  globalSetup: require.resolve('./tests/setup/global-setup.js'),
  globalTeardown: require.resolve('./tests/setup/global-teardown.js'),

  /* Test timeout */
  timeout: 60000,

  /* Expect timeout */
  expect: {
    timeout: 10000,
  },

  /* Output directory for test results */
  outputDir: 'tests/results',

  /* Test ignore patterns */
  testIgnore: [
    '**/node_modules/**',
    '**/build/**',
    '**/dist/**'
  ]
});