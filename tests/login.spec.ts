import { test, expect } from "@playwright/test";
import userData from "../TestData/userData.json";
import LoginPage from "../PageObject/login.page";

test.use({ storageState: { cookies: [], origins: [] } });

test("Verify Login Functionality", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto("https://schooltide.udeshatechnology.com/login.html");
  await login.fillCredentials(userData.username, userData.password);
  await login.clickLogin();

  await expect(page).toHaveURL(/dashboard/);
  await page.waitForTimeout(3000);
  await expect(login.userMenu).toBeVisible();
});
