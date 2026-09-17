import { test, expect } from "@playwright/test";

/**
 * GlowBackground's mouse-parallax — a plain mousemove listener writes a
 * clamped offset to a CSS custom property, eased by a CSS transition (no
 * animation library). See src/components/ui/GlowBackground.tsx.
 *
 * Projects filter these by tag (see playwright.config.ts): the `desktop`
 * project runs `@desktop`, the reduced-motion project runs `@opt-out`.
 */

test.describe("GlowBackground parallax — desktop @desktop", () => {
  test("blob reacts to pointer movement", async ({ page }) => {
    await page.goto("/");

    const blob = page.getByTestId("glow-blob").first();
    await expect(blob).toBeAttached();

    const viewport = page.viewportSize() ?? { width: 1280, height: 720 };

    await page.mouse.move(40, 40, { steps: 10 });
    await page.waitForTimeout(400); // let the transition settle
    const before = await blob.evaluate((el) => getComputedStyle(el).transform);

    await page.mouse.move(viewport.width - 40, viewport.height - 40, { steps: 24 });
    await expect
      .poll(() => blob.evaluate((el) => getComputedStyle(el).transform), { timeout: 2000 })
      .not.toBe(before);
  });
});

test.describe("GlowBackground parallax — reduced-motion opt-out @opt-out", () => {
  test("blob stays put regardless of pointer movement", async ({ page }) => {
    await page.goto("/");

    const blob = page.getByTestId("glow-blob").first();
    await expect(blob).toBeAttached();

    const before = await blob.evaluate((el) => getComputedStyle(el).transform);
    await page.mouse.move(40, 40, { steps: 10 });
    await page.mouse.move(900, 600, { steps: 24 });
    await page.waitForTimeout(300);

    await expect(blob.evaluate((el) => getComputedStyle(el).transform)).resolves.toBe(before);
  });
});
