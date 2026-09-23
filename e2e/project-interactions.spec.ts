import { test, expect, type Locator } from "@playwright/test";
import { projects } from "../src/data/projects";
import { caseStudies } from "../src/data/case-studies";

async function panelFor(button: Locator) {
  const id = await button.getAttribute("aria-controls");
  return button.page().locator(`[id="${id}"]`);
}

test.describe("Project interactions @desktop @opt-out @mobile", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    if (!isMobile) await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/#projects");
  });

  test("descriptions expand independently on mobile and stay full on desktop", async ({ page, isMobile }) => {
    const cards = page.locator("#projects .group");
    for (const [index, project] of projects.entries()) {
      const card = cards.nth(index);
      const button = card.getByRole("button", { name: "Read more", exact: true });
      if (!isMobile) {
        await expect(button).toHaveCount(0);
        expect(await card.locator("span[id]").innerText()).toContain(project.description.trim());
        continue;
      }
      if (project.description.trim().length <= 180) {
        await expect(button).toHaveCount(0);
        continue;
      }
      const paragraph = await panelFor(button);
      const collapsed = await paragraph.innerText();
      expect(collapsed).toContain(project.tagline);
      expect(collapsed!.split(" — ")[1].length).toBeLessThanOrEqual(181);
      expect(collapsed).toMatch(/…$/);
      await button.click();
      const collapse = card.getByRole("button", { name: "Read less", exact: true });
      await expect(collapse).toHaveAttribute("aria-expanded", "true");
      await expect(paragraph).toContainText(project.description.trim());
      await expect(cards.filter({ hasNot: page.getByRole("heading", { name: project.title, exact: true }) })
        .getByRole("button", { name: "Read less", exact: true })).toHaveCount(0);
      await collapse.focus();
      await page.keyboard.press("Enter");
      await expect(button).toHaveAttribute("aria-expanded", "false");
      await expect.poll(() => paragraph.innerText()).toBe(collapsed);
      const viewport = page.viewportSize()!;
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(button).toHaveCount(0);
      expect(await paragraph.innerText()).toContain(project.description.trim());
      await page.setViewportSize(viewport);
      await expect(button).toBeVisible();
      await expect.poll(() => paragraph.innerText()).toBe(collapsed);
    }
  });

  test("preview links are centered, touch sized, and available by hover or focus", async ({ page, isMobile }) => {
    const card = page.locator("#projects .group").first();
    const overlay = card.locator(".preview-overlay");
    const row = card.locator(".preview-label");
    const live = card.getByRole("link", { name: "Live Site" });
    await overlay.scrollIntoViewIfNeeded();
    if (!isMobile) {
      await page.mouse.move(0, 0);
      await expect(overlay).toHaveCSS("opacity", "0");
      await card.hover();
      await expect(overlay).toHaveCSS("opacity", "1");
      await page.mouse.move(0, 0);
      await expect(overlay).toHaveCSS("opacity", "0");
      await live.focus();
    }
    await expect(overlay).toHaveCSS("opacity", "1");
    await expect(row).toHaveCSS("opacity", "1");
    const outer = (await overlay.boundingBox())!;
    const inner = (await row.boundingBox())!;
    expect(Math.abs(inner.x + inner.width / 2 - outer.x - outer.width / 2)).toBeLessThan(2);
    expect(Math.abs(inner.y + inner.height / 2 - outer.y - outer.height / 2)).toBeLessThan(2);
    for (const [name, href] of [["Live Site", projects[0].liveUrl], ["Source", projects[0].repoUrl]]) {
      const link = card.getByRole("link", { name, exact: true });
      await expect(link).toHaveAttribute("href", href);
      await expect(link).toHaveAttribute("target", "_blank");
      const box = (await link.boundingBox())!;
      expect(box.height).toBeGreaterThanOrEqual(44);
      expect(box.x).toBeGreaterThanOrEqual(outer.x);
      expect(box.x + box.width).toBeLessThanOrEqual(outer.x + outer.width);
    }
  });

  test("case studies use a single-open mobile accordion and expand on larger screens", async ({ page, isMobile }) => {
    const section = page.locator("#case-studies");
    const buttons = section.getByRole("button");
    const panels = section.locator("article > div[id]");
    if (isMobile) {
      await expect(buttons).toHaveCount(caseStudies.length);
      for (const panel of await panels.all()) await expect(panel).toBeHidden();
      const first = buttons.nth(0);
      const second = buttons.nth(1);
      await first.click();
      await expect(first).toHaveAttribute("aria-expanded", "true");
      await expect(await panelFor(first)).toBeVisible();
      await second.click();
      await expect(first).toHaveAttribute("aria-expanded", "false");
      await expect(await panelFor(first)).toBeHidden();
      await expect(await panelFor(second)).toBeVisible();
      await second.focus();
      await page.keyboard.press("Space");
      await expect(await panelFor(second)).toBeHidden();
      await page.keyboard.press("Enter");
      await expect(await panelFor(second)).toBeVisible();
      const viewport = page.viewportSize()!;
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(buttons).toHaveCount(0);
      for (const panel of await panels.all()) await expect(panel).toBeVisible();
      await page.setViewportSize(viewport);
      await expect(first).toHaveAttribute("aria-expanded", "false");
      await expect(second).toHaveAttribute("aria-expanded", "true");
      await expect(await panelFor(first)).toBeHidden();
      await expect(await panelFor(second)).toBeVisible();
    } else {
      await expect(buttons).toHaveCount(0);
      for (const panel of await panels.all()) await expect(panel).toBeVisible();
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(buttons).toHaveCount(0);
      for (const panel of await panels.all()) await expect(panel).toBeVisible();
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
});
