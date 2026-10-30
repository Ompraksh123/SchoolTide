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

  // Setting ---> Payment Setting --> PayUMoney
  readonly PayUmoney: Locator;
  readonly FillPayuMoneyKey: Locator;
  readonly FillkeySalt: Locator;
  readonly IsDemo: Locator;
  readonly FillExtraCharge: Locator;
  readonly IsActive: Locator;
  readonly UpdateButton: Locator;

  // Setting ---> Payment Setting -->PayTm
  readonly payTm: Locator;
  readonly MerchantKey: Locator;
  readonly MerchantMid: Locator;
  readonly Website: Locator;
  readonly IndustryType: Locator;
  readonly IsSelectDemo: Locator;
  readonly EditExtraCharge: Locator;
  readonly isActiveOption: Locator;
  readonly UpdateButtonTm: Locator;

  // Setting ---> Payment Setting -->Pay Stack
  readonly PayStack: Locator;
  readonly SecretKey: Locator;
  readonly PublicKey: Locator;
  readonly SelectDeoOption: Locator;
  readonly EnterExtraCharge: Locator;
  readonly ChooseIsActive: Locator;
  readonly PressSubmitButton: Locator;

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

    this.PayUmoney = page.locator("//a[@href='#tab_pumoney_setting']");

    this.FillPayuMoneyKey = page.locator("//input[@name='payumoney_key']");

    this.FillkeySalt = page.locator("//input[@name='payumoney_salt']");

    this.IsDemo = page.locator("//select[@name='payumoney_demo']");

    this.FillExtraCharge = page.locator("//input[@name='payu_extra_charge']");

    this.IsActive = page.locator("//select[@name='payumoney_status']");

    this.UpdateButton = page.locator("(//button[@type='submit'])[1]");

    this.payTm = page.locator("//a[@href='#tab_paytm_setting']");

    this.MerchantKey = page.locator("//input[@name='paytm_merchant_key']");

    this.MerchantMid = page.locator("//input[@name='paytm_merchant_mid']");

    this.Website = page.locator("//input[@name='paytm_merchant_website']");

    this.IndustryType = page.locator("//input[@name='paytm_industry_type']");

    this.IsSelectDemo = page.locator("//select[@name='paytm_demo']");

    this.EditExtraCharge = page.locator("//input[@name='paytm_extra_charge']");

    this.isActiveOption = page.locator("//select[@name='paytm_status']");

    this.UpdateButtonTm = page.locator("(//button[@id='send'])[5]");

    this.PayStack = page.locator("//a[@href='#tab_paystack_setting']");

    this.SecretKey = page.locator("//input[@name='stack_secret_key']");

    this.PublicKey = page.locator("//input[@name='stack_public_key']");

    this.SelectDeoOption = page.locator("//select[@name='stack_demo']");

    this.EnterExtraCharge = page.locator("//input[@name='stack_extra_charge']");

    this.ChooseIsActive = page.locator("//select[@name='stack_status']");

    this.PressSubmitButton = page.locator("(//button[@id='send'])[6]");
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

  // Setting ---> Payment Setting --> PayUMoney
  async ClickOnPayUMoney() {
    await expect(this.PayUmoney).toBeVisible({
      timeout: 60000,
    });

    await this.PayUmoney.click();
  }

  async ClickOnPayUMoneyKey() {
    await expect(this.FillPayuMoneyKey).toBeVisible({
      timeout: 60000,
    });
    await this.FillPayuMoneyKey.fill("gtKFFxRX");
  }

  async SelectIsDemoOption(label: string) {
    await this.IsDemo.selectOption({ label });
  }

  async ClickOnExtraCharge(value: string) {
    await this.FillExtraCharge.fill(value);
  }

  async SelectIsActive(label: string) {
    await this.IsActive.selectOption({ label });
  }

  async ClickOnSubmitButtonPayUMoney() {
    await expect(this.UpdateButton).toBeVisible({
      timeout: 60000,
    });

    await this.UpdateButton.click();
  }

  // Setting ---> Payment Setting --> PayTm
  async ClickOnPayTm() {
    await expect(this.payTm).toBeVisible({
      timeout: 60000,
    });

    await this.payTm.click();
  }

  async FillMerchantKey() {
    await expect(this.MerchantKey).toBeVisible({
      timeout: 60000,
    });

    await this.MerchantKey.fill("kbzk1DSbJiV_O3p567");
  }

  async FillMerchantMID() {
    await expect(this.MerchantMid).toBeVisible({
      timeout: 60000,
    });
    await this.MerchantMid.fill("DIY12386817555501617666000");
  }

  async FillWebsiteDetail() {
    await expect(this.Website).toBeVisible({
      timeout: 60000,
    });

    await this.Website.fill("WEBSTAGINGFor");
  }

  async FillRetailType() {
    await expect(this.IndustryType).toBeVisible({
      timeout: 60000,
    });

    await this.IndustryType.fill("Healthcare");
  }

  async SelectIsDemo(label: string) {
    await this.IsSelectDemo.selectOption({ label });
  }

  async FillExtraCharges() {
    await expect(this.EditExtraCharge).toBeVisible({
      timeout: 60000,
    });

    await this.EditExtraCharge.fill("40.00");
  }

  async SelectISActive(label: string) {
    await this.isActiveOption.selectOption({ label });
  }
  async ClickOnSubmitButtonPayTm() {
    await expect(this.UpdateButtonTm).toBeVisible({
      timeout: 60000,
    });

    await this.UpdateButtonTm.click();
  }

  // Setting ---> Payment Setting --> PayTm

  async ClickOnPayStack(){
    await expect(this.PayStack).toBeVisible({
      timeout: 60000,
    });

    await this.PayStack.click();
  }

  async FillSecretKey(){
    await expect(this.SecretKey).toBeVisible({
        timeout:60000,
    })

     await this.SecretKey.fill("sk_test_1234567890abcdef");
  }

  async FillPublicKey(){
    await expect(this.PublicKey).toBeVisible({
        timeout:60000,
    })

    await this.PublicKey.fill("pk_test_1234567890abcdef");
  }

  async SelectISDemo(label: string) {
    await this.SelectDeoOption.selectOption({ label });
  }

  async EnterExtraChargeAmmount(){
    await expect(this.EnterExtraCharge).toBeVisible({
        timeout:60000,
    })

    await this.EnterExtraCharge.fill("65.00");
  }
  
     async SelectISActiveDetail(label: string) {
    await this.ChooseIsActive.selectOption({ label });
  }

    async ClickOnSubmitButtonPayStack() {
    await expect(this.PressSubmitButton).toBeVisible({
      timeout: 60000,
    });

    await this.PressSubmitButton.click();
  }
}
