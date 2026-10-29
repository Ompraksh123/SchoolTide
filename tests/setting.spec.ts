import { test, expect } from "@playwright/test";
import SettingPage from "../PageObject/setting.page";

test("Verify user successfully clicks on the Setting Tab", async ({ page }) => {
  const setting = new SettingPage(page);

  await page.goto("http://schooltide.udeshatechnology.com/dashboard.html", {
    waitUntil: "domcontentloaded",
  });

  // Verify saved authentication
  await expect(page.getByRole("link", { name: /Ravi Kumar/ })).toBeVisible({
    timeout: 60000,
  });

  // Open Setting menu
  await setting.clickSettingDropdown();

  // Open School Setting
  await setting.clickSchoolSettingTab();

  // Verify School Setting URL
  await setting.verifySchoolSettingPage();

  // Fill School Code
  await setting.clickOnSchoolCode();

  // Verify entered value
  await expect(setting.fillSchoolCode).toHaveValue("ASD23CRF");

  //Fill School Name
  await setting.clickonSchoolName();

  //Verify entered school name
  await expect(setting.schoolnamefield).toHaveValue(
    "Green Valley Public School",
  );

  //Fill Phone Number
  await setting.ClickOnPhoneFiled();

  //Verify entered phone number
  await expect(setting.PhoneNumberField).toHaveValue("+917645864300");

  //Fill Fax Filed
  await setting.ClickOnFaxFiled();

  //Verify Entered Fax Filed
  await expect(setting.FillFaxFiled).toHaveValue("+1-202-555-0123");

  //Fill API Key Filed
  await setting.ClickOnApiKey();
  await page.waitForTimeout(3000);

  //Verify Entered Fax Filed
  await expect(setting.FillApiKeyField).toHaveValue("dummy_api_key_123456789");

  //Fill Sect Addmission type
  await setting.SelectAddmissionType();
  await page.waitForTimeout(3000);

  // Verify selected dropdown value
  await expect(setting.ChooseAddmission.locator("option:checked")).toHaveText(
    "No",
  );

  //Click On Submit button
  await setting.ClickOnSubmitButton();
  await page.waitForTimeout(3000);
});

// Test 2: Verify Payment Setting
test.only("Verify user successfully clicks on Payment Setting", async ({
  page,
}) => {
  const setting = new SettingPage(page);

  // Open Dashboard using saved authentication
  await page.goto("http://schooltide.udeshatechnology.com/dashboard.html", {
    waitUntil: "domcontentloaded",
  });

  // Open Setting menu
  await setting.clickSettingDropdown();

  // Verify Payment Setting Tab
  await setting.ClickOnPaymentTab();
  await page.waitForTimeout(3000);

  //Fill Email Field
  await setting.ClickOnPayEmailField();

  //Verify entered school name
  await expect(setting.FillPayPalEmail).toHaveValue(
    "paypal.test123@example.org",
  );

  // Verify selected dropdown value
  await setting.SelectDemoOption("Yes");
  await expect(setting.SelectDemo.locator("option:checked")).toHaveText("Yes");

  // Enter a new value
  await setting.FillPayPalExtraCharge("25");
  await expect(setting.ExtraCharge).toHaveValue("25");
  await page.waitForTimeout(3000);

  //Click On submit button
  await setting.ClickOnSubmitButtonPayment();
  await page.waitForTimeout(3000);
});
