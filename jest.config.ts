/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  preset: 'ts-jest',
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  // The test environment that will be used for testing
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
  ],
  // transformIgnorePatterns: ["/node_modules/(?!your-module-name)/"],
  transform: {
    "^.+\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};

export default config;
