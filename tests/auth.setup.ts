import { test as setup, expect } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("https://schooltide.udeshatechnology.com/login.html");

  await page.locator("input[name='username']").fill("ravijha");
  await page.locator("input[name='password']").fill("ravijha");
  await page.locator("input[type='submit'][name='submit']").click();

  await expect(page).toHaveURL(/dashboard/);

  await page.context().storageState({ path: authFile });
});
