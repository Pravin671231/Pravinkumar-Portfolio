import { defineConfig, devices } from "@playwright/test";

const PORT = 3000;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [["html", { open: "never" }], ["github"]] : "list",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
      grep: /@desktop/,
    },
    {
      name: "desktop-reduced-motion",
      use: { ...devices["Desktop Chrome"], reducedMotion: "reduce" },
      grep: /@opt-out/,
    },
    ...[
      { name: "mobile-375", viewport: { width: 375, height: 667 } },
      { name: "mobile-390", viewport: { width: 390, height: 844 } },
    ].map(({ name, viewport }) => ({
      name,
      use: {
        ...devices["Pixel 7"],
        viewport,
      },
      grep: /@mobile/,
    })),
    {
      name: "mobile-reduced-motion",
      use: {
        ...devices["Pixel 7"],
        viewport: { width: 375, height: 667 },
        reducedMotion: "reduce",
      },
      grep: /@mobile/,
    },
  ],
  webServer: {
    command: "npm run build && npm run start",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: "pipe",
  },
});
