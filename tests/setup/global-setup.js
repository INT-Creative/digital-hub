/**
 * Global Setup for Playwright Tests
 * Runs once before all tests
 */

import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';

export default async function globalSetup() {
  console.log('🧪 Starting INT Creative Hub Portfolio Test Suite...');
  
  // Ensure test directories exist
  const testDirs = [
    'tests/reports',
    'tests/results',
    'tests/coverage'
  ];
  
  testDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  // Create a browser instance for pre-test setup if needed
  const browser = await chromium.launch();
  
  // You could pre-warm the development server or prepare test data here
  
  await browser.close();
  
  console.log('✅ Global setup complete');
}