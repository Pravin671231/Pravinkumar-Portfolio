import { test, expect, type Locator, type Page } from "@playwright/test";
import { projects } from "../src/data/projects";
import { caseStudies } from "../src/data/case-studies";

async function scrollToContent(page: Page, target: Locator) {
  // Move through the page as a reader would, allowing intersection observers
  // to run between scrolls instead of jumping straight to the final element.
  for (let step = 0; step < 100; step++) {
    const box = await target.boundingBox();
    if (!box) throw new Error("Project content has no layout box");
    const height = page.viewportSize()!.height;
    if (box.y >= 0 && box.y + box.height <= height) return;
    await page.evaluate((distance) => window.scrollBy(0, distance),
      box.y < 0 ? box.y - 100 : height / 2);
    await page.waitForTimeout(50);
  }
  throw new Error("Project content could not be reached by scrolling");
}

async function expectPainted(target: Locator) {
  await expect(target).toBeInViewport();
  // Playwright's toBeVisible allows opacity: 0, including on ancestors.
  await expect.poll(() => target.evaluate((element) => {
    let opacity = 1;
    for (let node: Element | null = element; node; node = node.parentElement) {
      const style = getComputedStyle(node);
      if (style.visibility !== "visible" || style.display === "none") return 0;
      opacity *= Number(style.opacity);
    }
    return opacity;
  })).toBeGreaterThan(0.99);
}

test.describe("Project visibility @desktop @opt-out @mobile", () => {
  for (const entry of ["/", "/#projects"]) {
    test(`project cards and case studies are readable from ${entry}`, async ({ page, isMobile }) => {
      if (!isMobile) await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(entry);
      const section = page.locator("#projects");
      await expect(section).toBeAttached();

      const titles = [projects[0].title, ...caseStudies.map((study) => study.title), projects[1].title];
      for (const title of titles) {
        const heading = section.getByRole("heading", { name: title, exact: true });
        await scrollToContent(page, heading);
        await expectPainted(heading);
      }

      await expect(section.locator("#case-studies article")).toHaveCount(4);
      await expect.poll(() => page.evaluate(() =>
        document.documentElement.scrollWidth <= window.innerWidth
      )).toBe(true);
    });
  }
});
