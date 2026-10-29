
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

  // Verify entered value
  await expect(setting.fillSchoolCode).toHaveValue("ASD23CRF");

  //Fill School Name
  await setting.clickonSchoolName(); 

  //Verify entered school name
  await expect(setting.schoolnamefield).toHaveValue("Green Valley Public School");

  //Fill Phone Number
  await setting.ClickOnPhoneFiled();  

  //Verify entered phone number
  await expect(setting.PhoneNumberField).toHaveValue('+917645864300');

  //Fill Fax Filed
  await setting.ClickOnFaxFiled();  

  //Verify Entered Fax Filed 
  await expect(setting.FillFaxFiled).toHaveValue('+1-202-555-0123');

  //Fill API Key Filed
  await setting.ClickOnApiKey();
  await page.waitForTimeout(3000);

  //Verify Entered Fax Filed 
  await expect(setting.FillApiKeyField).toHaveValue('dummy_api_key_123456789');

  //Fill Sect Addmission type 
  await setting.SelectAddmissionType();
  await page.waitForTimeout(3000);

  // Verify selected dropdown value
  await expect(
  setting.ChooseAddmission.locator("option:checked")
  ).toHaveText("No");
  

  //Fill Sect Addmission type 
  await setting.ClickOnSubmitButton();
  await page.waitForTimeout(3000);  

});
