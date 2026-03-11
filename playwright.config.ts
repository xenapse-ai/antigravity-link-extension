import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test/ui',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Pixel 10 Pro',
      use: {
        ...devices['Pixel 5'], // Using Pixel 5 as a base for dimensions
        viewport: { width: 412, height: 915 },
      },
    }
  ],
  outputDir: 'test-results/',
});
