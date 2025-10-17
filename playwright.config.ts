import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  // reporter: [['html'], ['list']],
  reporter: [['list']],
  timeout: 30_000,
  use: {
    baseURL: 'https://localhost:3001',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Mobile Chrome'] },
    },
  ],
  webServer: {
    command: 'bun dev',
    url: 'https://localhost:3001',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
    ignoreHTTPSErrors: true,
  },
})
