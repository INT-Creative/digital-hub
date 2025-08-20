/**
 * Global Teardown for Playwright Tests
 * Runs once after all tests
 */

export default async function globalTeardown() {
  console.log('🧹 Cleaning up test environment...');
  
  // Cleanup test artifacts if needed
  // This could include cleaning up test databases, files, etc.
  
  console.log('✅ Global teardown complete');
}