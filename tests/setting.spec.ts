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

  test("Verify user successfully clicks on PayUMoney Tab in  Setting", async ({
    page,
  }) => {
    const setting = new SettingPage(page);

    await setting.clickSettingDropdown();
    await setting.ClickOnPaymentTab();
    await setting.ClickOnPayUMoney();
    await page.waitForTimeout(3000);
    await setting.ClickOnPayUMoneyKey();
    await expect(setting.FillPayuMoneyKey).toHaveValue("gtKFFxRX");
    await page.waitForTimeout(3000);
    await setting.SelectIsDemoOption("Yes");
    await expect(setting.IsDemo.locator("option:checked")).toHaveText("Yes");
    await setting.ClickOnExtraCharge("75");
    await expect(setting.FillExtraCharge).toHaveValue("75");
    await page.waitForTimeout(3000);
    await setting.SelectIsActive("No");
    await expect(setting.IsActive.locator("option:checked")).toHaveText("No");
    await setting.ClickOnSubmitButtonPayUMoney();
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on PayTm Tab in  Setting", async ({
    page,
  }) => {
    const setting = new SettingPage(page);

    await setting.clickSettingDropdown();
    await setting.ClickOnPaymentTab();
    await setting.ClickOnPayTm();
    await page.waitForTimeout(3000);
    await setting.FillMerchantKey();
    await expect(setting.MerchantKey).toHaveValue("kbzk1DSbJiV_O3p567");
    await setting.FillMerchantMID();
    await expect(setting.MerchantMid).toHaveValue("DIY12386817555501617666000");
    await setting.FillWebsiteDetail();
    await expect(setting.Website).toHaveValue("WEBSTAGINGFor");
    await page.waitForTimeout(3000);
    await setting.FillRetailType();
    await expect(setting.IndustryType).toHaveValue("Healthcare");
    await setting.SelectIsDemo("No");
    await expect(setting.IsSelectDemo.locator("option:checked")).toHaveText(
      "No",
    );
    await setting.FillExtraCharges();
    await expect(setting.EditExtraCharge).toHaveValue("40.00");
    await page.waitForTimeout(3000);
    await setting.SelectISActive("No");
    await expect(setting.isActiveOption.locator("option:checked")).toHaveText(
      "No",
    );
    await setting.ClickOnSubmitButtonPayTm();
  });

  test("Verify user successfully clicks on Pay Stck Tab in  Setting", async ({
    page,
  }) => {
    const setting = new SettingPage(page);

    await setting.clickSettingDropdown();
    await setting.ClickOnPaymentTab();
    await setting.ClickOnPayStack();
    await page.waitForTimeout(3000);
    await setting.FillSecretKey();
    await expect(setting.SecretKey).toHaveValue("sk_test_1234567890abcdef");
    await setting.FillPublicKey();
    await expect(setting.PublicKey).toHaveValue("pk_test_1234567890abcdef");   
    await setting.SelectISDemo("No");
    await expect(setting.SelectDeoOption.locator("option:checked")).toHaveText(
      "No",
    );
    await setting.EnterExtraChargeAmmount();
    await expect(setting.EnterExtraCharge).toHaveValue("65.00");
    await page.waitForTimeout(3000);
    await setting.SelectISActiveDetail("No");
    await expect(setting.ChooseIsActive.locator("option:checked")).toHaveText(
      "No",
    );
    await setting.ClickOnSubmitButtonPayStack(); 

  });
});
