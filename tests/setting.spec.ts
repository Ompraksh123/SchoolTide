
import { test, expect } from "@playwright/test";
import SettingPage from "../PageObject/setting.page";

test("Verify user successfully clicks on the Setting Tab", async ({ page }) => {
  const setting = new SettingPage(page);

  await page.goto(
    "http://schooltide.udeshatechnology.com/dashboard.html",
    { waitUntil: "domcontentloaded" }
  );

  // Verify saved authentication
  await expect(
    page.getByRole("link", { name: /Ravi Kumar/ })
  ).toBeVisible({ timeout: 60000 });

  // Open Setting menu
  await setting.clickSettingDropdown();

  // Open School Setting
  await setting.clickSchoolSettingTab();

  // Verify School Setting URL
  await setting.verifySchoolSettingPage();

  // Fill School Code
  await setting.clickOnSchoolCode();
  await page.waitForTimeout(3000);

  // Verify entered value
  await expect(setting.fillSchoolCode).toHaveValue("ASD23CRF");
});
