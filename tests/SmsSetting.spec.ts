import { test, expect } from "@playwright/test";
import SmsSetting from "../PageObject/SmsSetting.page";

const dashboardUrl = "http://schooltide.udeshatechnology.com/dashboard.html";

test.describe("SMSSetting", { tag: "@Batch3" }, () => {
  test.beforeEach(async ({ page }) => {
    // Session is already saved by auth.setup.ts
    await page.goto(dashboardUrl, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("link", { name: /Ravi Kumar/ })).toBeVisible();
  });

  test("Verify user successfully clicks on the SMSSetting Tab", async ({
    page,
  }) => {
    const smsSetting = new SmsSetting(page);

    await smsSetting.clickSettingDropdown();
    await smsSetting.clickSmsSettingTab();
    await expect(page).toHaveURL(/setting\/sms/);
    await page.waitForTimeout(3000);
    await smsSetting.fillUserName("testuser0123");
    await expect(smsSetting.FillUserName).toHaveValue("testuser0123");    
    await smsSetting.fillPassword("Test@123456");
    await expect(smsSetting.FillPassword).toHaveValue("Test@123456");
    await page.waitForTimeout(3000);
    await smsSetting.fillApiKeyValue("sk_test_4eC39HqLyjWDarjtT1zdp7dcdgre");
    await expect(smsSetting.APIKey).toHaveValue("sk_test_4eC39HqLyjWDarjtT1zdp7dcdgre");    
    await smsSetting.fillFromNumber("+15004450006");
    await expect(smsSetting.FromNumber).toHaveValue("+15004450006");
    await page.waitForTimeout(3000);
    await smsSetting.fillMONumber("+919876543219");
    await expect(smsSetting.MoNumber).toHaveValue("+919876543219");    
    await smsSetting.SelectISActiveDetail("No");
    await expect(smsSetting.ChooseISActive.locator("option:checked")).toHaveText(
      "No",
    );
    await smsSetting.ClickOnSubmitButton();
    await page.waitForTimeout(3000);
  });
});
