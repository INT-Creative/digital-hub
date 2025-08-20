/**
 * Jest Configuration for INT Creative Hub Portfolio Testing Suite
 * Comprehensive test setup supporting Astro components, DOM testing, and performance monitoring
 */

module.exports = {
  // Test environment configuration
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup/jest.setup.js'],
  
  // Module resolution for Astro and TypeScript
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
  },
  
  // File extensions to consider
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'astro'],
  
  // Transform configuration for different file types
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.astro$': '<rootDir>/tests/setup/astro-jest-transformer.js'
  },
  
  // Test file patterns
  testMatch: [
    '<rootDir>/tests/**/*.test.{js,ts}',
    '<rootDir>/tests/**/*.spec.{js,ts}'
  ],
  
  // Coverage configuration
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,ts,astro}',
    'src/data/**/*.{js,ts}',
    'src/utils/**/*.{js,ts}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,ts}',
    '!src/**/*.config.{js,ts}'
  ],
  coverageDirectory: '<rootDir>/tests/coverage',
  coverageReporters: ['html', 'text', 'lcov', 'json'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Test timeout for performance tests
  testTimeout: 30000,
  
  // Reporters for different test types
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './tests/reports',
      filename: 'test-report.html',
      expand: true,
      hideIcon: false,
      pageTitle: 'INT Creative Hub Portfolio Tests',
      logoImgPath: './public/images/logo.svg',
      customInfos: [
        { title: 'Test Suite', value: 'Portfolio Graphics System' },
        { title: 'Framework', value: 'Astro + TailwindCSS' },
        { title: 'Environment', value: process.env.NODE_ENV || 'test' }
      ]
    }]
  ],
  
  // Global test configuration
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: {
        jsx: 'react-jsx'
      }
    }
  },
  
  // Mock configuration for external dependencies
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$': '<rootDir>/tests/__mocks__/fileMock.js'
  },
  
  // Test environment options
  testEnvironmentOptions: {
    url: 'http://localhost:4321'
  }
};