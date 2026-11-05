import { Page, Locator, expect } from "@playwright/test";

export default class EmailSettings {
  readonly page: Page;
  readonly settingDropdown: Locator;
  readonly EmailSetting: Locator;
  readonly emailprotocol: Locator;
  readonly SMTPHost: Locator;
  readonly SMTPPort: Locator;
  readonly SMTPUsername: Locator;
  readonly SMTPPassowrd: Locator;
  readonly SMTPSecurity: Locator;
  readonly SMTPTimeout: Locator;
  readonly EmailType: Locator;
  readonly CharSet: Locator;
  readonly Priority: Locator;
  readonly FromName: Locator;
  readonly FromEMail: Locator;
  readonly SaveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.settingDropdown = page.getByText("Setting", { exact: true });
    this.EmailSetting = page.locator(
      "(//a[@href='http://schooltide.udeshatechnology.com/setting/emailsetting/index.html'])[1]",
    );
    this.emailprotocol = page.locator("//select[@name='mail_protocol']");
    this.SMTPHost = page.locator("//input[@name='smtp_host']");
    this.SMTPPort = page.locator("//input[@name='smtp_port']");
    this.SMTPUsername = page.locator("//input[@name='smtp_user']");
    this.SMTPPassowrd = page.locator("//input[@name='smtp_pass']");
    this.SMTPSecurity = page.locator("//select[@name='smtp_crypto']");
    this.SMTPTimeout = page.locator("//input[@name='smtp_timeout']");
    this.EmailType = page.locator("//select[@name='mail_type']");
    this.CharSet = page.locator("//select[@name='char_set']");
    this.Priority = page.locator("//select[@name='priority']");
    this.FromName = page.locator("//input[@name='from_name']");
    this.FromEMail = page.locator("//input[@name='from_address']");
    this.SaveButton = page.locator("(//button[@type='submit'])[2]");
  }

  async clickSettingDropdown() {
    await expect(this.settingDropdown).toBeVisible({ timeout: 60000 });
    await this.settingDropdown.click();
  }

  async clickEmailSettingTab() {
    await expect(this.EmailSetting).toBeVisible({ timeout: 60000 });
    await this.EmailSetting.click();
  }

  async fillEmailSettings(value: string) {
    await expect(this.emailprotocol).toBeVisible({ timeout: 60000 });
    await this.emailprotocol.selectOption(value);
  }

  async fillSMTPHost(value: string) {
    await expect(this.SMTPHost).toBeVisible({ timeout: 60000 });
    await this.SMTPHost.fill(value);
  }

  async fillSMTPPort(value: string) {
    await expect(this.SMTPPort).toBeVisible({ timeout: 60000 });
    await this.SMTPPort.fill(value);
  }

  async fillSMTPUsername(value: string) {
    await expect(this.SMTPUsername).toBeVisible({ timeout: 60000 });
    await this.SMTPUsername.fill(value);
  }

  async fillSMTPPassword(value: string) {
    await expect(this.SMTPPassowrd).toBeVisible({ timeout: 60000 });
    await this.SMTPPassowrd.fill(value);
  }

  async fillSMTPSecurity(value: string) {
    await expect(this.SMTPSecurity).toBeVisible({ timeout: 60000 });
    await this.SMTPSecurity.selectOption(value);
  }

  async fillSMTPTimeout(value: string) {
    await expect(this.SMTPTimeout).toBeVisible({ timeout: 60000 });
    await this.SMTPTimeout.fill(value);
  }

  async fillEmailType(value: string) {
    await expect(this.EmailType).toBeVisible({ timeout: 60000 });
    await this.EmailType.selectOption(value);
  }

  async fillCharSet(value: string) {
    await expect(this.CharSet).toBeVisible({ timeout: 60000 });
    await this.CharSet.selectOption(value);
  }

  async fillPriority(value: string) {
    await expect(this.Priority).toBeVisible({ timeout: 60000 });
    await this.Priority.selectOption(value);
  }

  async fillFromName(value: string) {
    await expect(this.FromName).toBeVisible({ timeout: 60000 });
    await this.FromName.fill(value);
  }

  async fillFromEmail(value: string) {
    await expect(this.FromEMail).toBeVisible({ timeout: 60000 });
    await this.FromEMail.fill(value);
  }

  async clickSaveButton() {
    await expect(this.SaveButton).toBeVisible({ timeout: 60000 });
    await this.SaveButton.click();
  }
}
