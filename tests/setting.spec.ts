import { test, expect } from "@playwright/test";
import SettingPage from "../PageObject/setting.page";

const dashboardUrl = "http://schooltide.udeshatechnology.com/dashboard.html";

test.describe("Setting", { tag: "@Batch2" }, () => {
  test.beforeEach(async ({ page }) => {
    // Session is already saved by auth.setup.ts
    await page.goto(dashboardUrl, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("link", { name: /Ravi Kumar/ })).toBeVisible();
  });

  test("Verify user successfully clicks on the Setting Tab", async ({
    page,
  }) => {
    const setting = new SettingPage(page);

    await setting.clickSettingDropdown();
    await setting.clickSchoolSettingTab();
    await setting.verifySchoolSettingPage();

    await setting.clickOnSchoolCode();
    await expect(setting.fillSchoolCode).toHaveValue("ASD23CRF");

    await setting.clickonSchoolName();
    await expect(setting.schoolnamefield).toHaveValue(
      "Green Valley Public School",
    );

    await setting.ClickOnPhoneFiled();
    await expect(setting.PhoneNumberField).toHaveValue("+917645864300");

    await setting.ClickOnFaxFiled();
    await expect(setting.FillFaxFiled).toHaveValue("+1-202-555-0123");

    await setting.ClickOnApiKey();
    await expect(setting.FillApiKeyField).toHaveValue(
      "dummy_api_key_123456789",
    );

    await setting.SelectAddmissionType();
    await expect(setting.ChooseAddmission.locator("option:checked")).toHaveText(
      "No",
    );

    await setting.ClickOnSubmitButton();
  });

  test("Verify user successfully clicks on Payment Setting", async ({
    page,
  }) => {
    const setting = new SettingPage(page);

    await setting.clickSettingDropdown();
    await setting.ClickOnPaymentTab();

    await setting.ClickOnPayEmailField();
    await expect(setting.FillPayPalEmail).toHaveValue(
      "paypal.test123@example.org",
    );

    await setting.SelectDemoOption("Yes");
    await expect(setting.SelectDemo.locator("option:checked")).toHaveText(
      "Yes",
    );

    await setting.FillPayPalExtraCharge("25");
    await expect(setting.ExtraCharge).toHaveValue("25");

    await setting.ClickOnSubmitButtonPayment();
  });
});
