import { Page, Locator, expect } from "@playwright/test";

export default class SMsSettingPage {
  readonly page: Page;
  readonly settingDropdown: Locator;
  readonly smsSetting: Locator;
  readonly FillUserName: Locator;
  readonly FillPassword: Locator;
  readonly APIKey: Locator;
  readonly FromNumber: Locator;
  readonly MoNumber: Locator;
  readonly ChooseISActive: Locator;
  readonly Update: Locator;

  //Setting --> SMS Setting ---> Twilio
  readonly TwilioTab: Locator;
  readonly AccountSID: Locator;
  readonly AuthToken: Locator;
  readonly FillFromNumber: Locator;
  readonly ChooseIsActives: Locator;
  readonly UpdateIcon: Locator;

  constructor(page: Page) {
    this.page = page;

    this.settingDropdown = page.getByText("Setting", { exact: true });
    this.smsSetting = page
      .locator("a[href$='/setting/sms/index.html']")
      .first();
    this.FillUserName = page.locator("//input[@name='clickatell_username']");

    this.FillPassword = page.locator("//input[@name='clickatell_password']");

    this.APIKey = page.locator("//input[@name='clickatell_api_key']");

    this.FromNumber = page.locator("//input[@name='clickatell_from_number']");

    this.MoNumber = page.locator("//input[@name='clickatell_mo_no']");

    this.ChooseISActive = page.locator("//select[@name='clickatell_status']");

    this.Update = page.locator("(//button[@type='submit'])[2]");

    this.TwilioTab = page.locator("//a[@href='#tab_twilio_setting']");

    this.AccountSID = page.locator("//input[@name='twilio_account_sid']");

    this.AuthToken = page.locator("//input[@name='twilio_auth_token']");

    this.FillFromNumber = page.locator("//input[@name='twilio_from_number']");

    this.ChooseIsActives = page.locator("//select[@name='twilio_status']");

    this.UpdateIcon = page.locator("(//button[@type='submit'])[3]");
  }

  async clickSettingDropdown() {
    await expect(this.settingDropdown).toBeVisible({ timeout: 60000 });
    await this.settingDropdown.click();
  }

  async clickSmsSettingTab() {
    await expect(this.smsSetting).toBeVisible({ timeout: 60000 });
    await this.smsSetting.click();
  }

  async fillUserName(value: string) {
    await expect(this.FillUserName).toBeVisible({ timeout: 60000 });
    await this.FillUserName.fill(value);
  }

  async fillPassword(value: string){
    await expect(this.FillPassword).toBeVisible({timeout:60000});
    await this.FillPassword.fill(value);
  }

  async fillApiKeyValue(value: string){
    await expect(this.APIKey).toBeVisible({timeout: 60000});
    await this.APIKey.fill(value);
  }

  async fillFromNumber(value: string){
    await expect(this.FromNumber).toBeVisible({timeout: 60000});
    await this.FromNumber.fill(value);
  }

  async fillMONumber(value: string){
     await expect(this.MoNumber).toBeVisible({timeout: 60000});
     await this.MoNumber.fill(value);
  }

  async SelectISActiveDetail(label: string) {
    await this.ChooseISActive.selectOption({ label });
  }

  async ClickOnSubmitButton() {
    await expect(this.Update).toBeVisible({
      timeout: 60000,
    });

    await this.Update.click();
  }

  //Setting --> SMS Setting ---> Twilio
   async ClickOnTwilio() {
    await expect(this.TwilioTab).toBeVisible({
      timeout: 60000,
    });

    await this.TwilioTab.click();
  }

   async ClickOnAccountSID(value: string) {
    await expect(this.AccountSID).toBeVisible({ timeout: 60000 });
    await this.AccountSID.fill(value);
  }

  async ClickAuthToken(value: string){
    await expect(this.AuthToken).toBeVisible({timeout:60000});
    await this.AuthToken.fill(value);
  }

   async ClickFromNumber(value: string){
    await expect(this.FillFromNumber).toBeVisible({timeout:60000});
    await this.FillFromNumber.fill(value);
  }

   async SelectISActiveDetails(label: string) {
    await this.ChooseIsActives.selectOption({ label });
  }

   async ClickOnSubmitIconButton() {
    await expect(this.UpdateIcon).toBeVisible({
      timeout: 60000,
    });

    await this.UpdateIcon.click();
  }
}
