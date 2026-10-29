import { Page, Locator, expect } from "@playwright/test";

export default class SettingPage {
  readonly page: Page;
  readonly settingDropdown: Locator;
  readonly schoolSettingTab: Locator;
  readonly fillSchoolCode: Locator;
  readonly schoolnamefield: Locator;
  readonly PhoneNumberField: Locator;
  readonly FillFaxFiled: Locator;
  readonly FillApiKeyField: Locator;
  readonly ChooseAddmission: Locator;
  readonly Submit: Locator;

  //Payment Setting
  readonly paymentsetting: Locator;
  readonly FillPayPalEmail: Locator;
  readonly SelectDemo: Locator;
  readonly ExtraCharge: Locator;
  readonly Update: Locator;

  constructor(page: Page) {
    this.page = page;

    this.settingDropdown = page.getByText("Setting", {
      exact: true,
    });

    this.schoolSettingTab = page.locator(
      "a[href='http://schooltide.udeshatechnology.com/setting/index.html']",
    );

    this.fillSchoolCode = page.locator("input[name='school_code']");

    this.schoolnamefield = page.locator("//input[@name='school_name']");

    this.PhoneNumberField = page.locator("//input[@name='phone']");

    this.FillFaxFiled = page.locator("//input[@name='school_fax']");

    this.FillApiKeyField = page.locator("//input[@name='map_api_key']");

    this.ChooseAddmission = page.locator(
      "//select[@name='enable_online_admission']",
    );

    this.Submit = page.locator("(//button[@type='submit'])[2]");

    this.paymentsetting = page.locator(
      "(//a[normalize-space()='Payment Setting'])[1]",
    );

    this.FillPayPalEmail = page.locator("//input[@name='paypal_email']");

    this.SelectDemo = page.locator("//select[@name='paypal_demo']");

    this.ExtraCharge = page.locator("//input[@name='paypal_extra_charge']");

    this.Update = page.locator("(//button[@id='send'])[1]");
  }

  async clickSettingDropdown() {
    await expect(this.settingDropdown).toBeVisible({
      timeout: 60000,
    });

    await this.settingDropdown.click();
  }

  async clickSchoolSettingTab() {
    await expect(this.schoolSettingTab).toBeVisible({
      timeout: 60000,
    });

    await this.schoolSettingTab.click();
  }

  async verifySchoolSettingPage() {
    await expect(this.page).toHaveURL(/\/setting\/index\.html$/, {
      timeout: 60000,
    });
  }

  async clickOnSchoolCode() {
    await expect(this.fillSchoolCode).toBeVisible({
      timeout: 60000,
    });

    await this.fillSchoolCode.fill("ASD23CRF");
  }

  async clickonSchoolName() {
    await expect(this.schoolnamefield).toBeVisible({
      timeout: 60000,
    });

    await this.schoolnamefield.fill("Green Valley Public School");
  }

  async ClickOnPhoneFiled() {
    await expect(this.PhoneNumberField).toBeVisible({
      timeout: 60000,
    });

    await this.PhoneNumberField.fill("+917645864300");
  }

  async ClickOnFaxFiled() {
    await expect(this.FillFaxFiled).toBeVisible({
      timeout: 60000,
    });

    await this.FillFaxFiled.fill("+1-202-555-0123");
  }

  async ClickOnApiKey() {
    await expect(this.FillApiKeyField).toBeVisible({
      timeout: 60000,
    });

    await this.FillApiKeyField.fill("dummy_api_key_123456789");
  }

  async SelectAddmissionType() {
    await expect(this.ChooseAddmission).toBeVisible({
      timeout: 60000,
    });

    await this.ChooseAddmission.selectOption("No");
  }

  async ClickOnSubmitButton() {
    await expect(this.Submit).toBeVisible({
      timeout: 60000,
    });

    await this.Submit.click();
  }

  //Payment Setting
  async ClickOnPaymentTab() {
    await expect(this.paymentsetting).toBeVisible({
      timeout: 60000,
    });

    await this.paymentsetting.click();
  }

  async ClickOnPayEmailField() {
    await expect(this.FillPayPalEmail).toBeVisible({
      timeout: 60000,
    });

    await this.FillPayPalEmail.fill("paypal.test123@example.org");
  }

  async SelectDemoOption(label: string) {
    await this.SelectDemo.selectOption({ label });
  }

  async FillPayPalExtraCharge(value: string) {
    await this.ExtraCharge.fill(value);
  }

  async ClickOnSubmitButtonPayment() {
    await expect(this.Submit).toBeVisible({
      timeout: 60000,
    });

    await this.Update.click();
  }
}
