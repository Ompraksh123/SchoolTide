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

  //Setting --> SMS Setting ---> Bulk
  readonly Bulk: Locator;
  readonly UserNameBulk: Locator;
  readonly UserPasswordBulk: Locator;
  readonly IsActiveBulk: Locator;
  readonly UpdateButtonBulk: Locator;

  //Setting --> SMS Setting ---> MSG91
  readonly MSG91: Locator;
  readonly AuthKeyMSG: Locator;
  readonly SenderId: Locator;
  readonly IsActiveMSG: Locator;
  readonly UpdateMSG: Locator;

  //Setting --> SMS Setting ---> Pilvo
  readonly Pilvo: Locator;
  readonly AuthID: Locator;
  readonly AuthTokens: Locator;
  readonly FromNumberPilvo: Locator;
  readonly IsActivePilvo: Locator;
  readonly UpdateButtonPilvo: Locator;

  //Setting --> SMS Setting ---> Text Local
  readonly TextLocal: Locator;
  readonly UserNameTextLocal: Locator;
  readonly HashKeyTextLocal: Locator;
  readonly SenderIdTextLocal: Locator;
  readonly IsActiveTextLocal: Locator;
  readonly UpdateButtonTextLocal: Locator;

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> Bulk Pk
  readonly MoreDropdownIndicator: Locator;
  readonly BulkPk: Locator;
  readonly BulkPkUserName: Locator;
  readonly BulkPkUserPassword: Locator;
  readonly SenderIdBulkPk: Locator;
  readonly IsActiveBulkPk: Locator;
  readonly UpdateButtonBulkPk: Locator;

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> SMS Cluster
  readonly SMSCluster: Locator;
  readonly AuthKeySMSCluster: Locator;
  readonly RouterIdSMSCluster: Locator;
  readonly SenderIdSMSCluster: Locator;
  readonly IsActiveSMSCluster: Locator;
  readonly UpdateButtonSMSCluster: Locator;

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> Alpha.Net
  readonly AlphaNet: Locator;
  readonly UserNameAlphaNet: Locator;
  readonly HashKeyAlphaNet: Locator;
  readonly SMSTypeAlphaNet: Locator;
  readonly IsActiveAlphaNet: Locator;
  readonly UpdateButtonAlphaNet: Locator;

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> BD Bulk
  readonly BDBulk: Locator;
  readonly HashKeyBDBulk: Locator;
  readonly SMSTypeBDBulk: Locator;
  readonly IsActiveBDBulk: Locator;
  readonly UpdateButtonBDBulk: Locator;

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> Mim SMS
  readonly MimSMS: Locator;
  readonly APIKeyMimSMS: Locator;
  readonly SenderIdMimSMS: Locator;
  readonly SMSTypeMimSMS: Locator;
  readonly IsActiveMimSMS: Locator;
  readonly UpdateButtonMimSMS: Locator;

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

    this.Bulk = page.locator("//a[@href='#tab_bulk_setting']");

    this.UserNameBulk = page.locator("//input[@name='bulk_username']");

    this.UserPasswordBulk = page.locator("//input[@name='bulk_password']");

    this.IsActiveBulk = page.locator("//select[@name='bulk_status']");

    this.UpdateButtonBulk = page.locator("(//button[@id='send'])[3]");

    this.MSG91 = page.locator("//a[@href='#tab_msg91_setting']");

    this.AuthKeyMSG = page.locator("//input[@name='msg91_auth_key']");

    this.SenderId = page.locator("//input[@name='msg91_sender_id']");

    this.IsActiveMSG = page.locator("//select[@name='msg91_status']");

    this.UpdateMSG = page.locator("(//button[@id='send'])[4]");

    this.Pilvo = page.locator("//a[@href='#tab_plivo_setting']");

    this.AuthID = page.locator("//input[@name='plivo_auth_id']");

    this.AuthTokens = page.locator("//input[@name='plivo_auth_token']");

    this.FromNumberPilvo = page.locator("//input[@name='plivo_from_number']");

    this.IsActivePilvo = page.locator("//select[@name='plivo_status']");

    this.UpdateButtonPilvo = page.locator("(//button[@id='send'])[5]");

    this.TextLocal = page.locator("//a[@href='#tab_textlocal_setting']");

    this.UserNameTextLocal = page.locator(
      "//input[@name='textlocal_username']",
    );

    this.HashKeyTextLocal = page.locator("//input[@name='textlocal_hash_key']");

    this.SenderIdTextLocal = page.locator(
      "//input[@name='textlocal_sender_id']",
    );

    this.IsActiveTextLocal = page.locator("//select[@name='textlocal_status']");

    this.UpdateButtonTextLocal = page.locator("(//button[@id='send'])[6]");

    this.MoreDropdownIndicator = page.locator("//a[normalize-space()='More']");

    this.BulkPk = page.locator("//a[@href='#tab_bulkpk_setting']");

    this.BulkPkUserName = page.locator("//input[@name='bulk_pk_username']");

    this.BulkPkUserPassword = page.locator("//input[@name='bulk_pk_password']");

    this.SenderIdBulkPk = page.locator("//input[@name='bulk_pk_sender_id']");

    this.IsActiveBulkPk = page.locator("//select[@name='bulk_pk_status']");

    this.UpdateButtonBulkPk = page.locator("(//button[@type='submit'])[10]");

    this.SMSCluster = page.locator("//a[@href='#tab_cluster_setting']");

    this.AuthKeySMSCluster = page.locator("//input[@name='cluster_auth_key']");

    this.RouterIdSMSCluster = page.locator("//input[@name='cluster_router']");

    this.SenderIdSMSCluster = page.locator(
      "//input[@name='cluster_sender_id']",
    );

    this.IsActiveSMSCluster = page.locator("//select[@name='cluster_status']");

    this.UpdateButtonSMSCluster = page.locator(
      "(//button[@type='submit'])[11]",
    );

    this.AlphaNet = page.locator("//a[@href='#tab_alpha_setting']");

    this.UserNameAlphaNet = page.locator("//input[@name='alpha_username']");

    this.HashKeyAlphaNet = page.locator("//input[@name='alpha_hash']");

    this.SMSTypeAlphaNet = page.locator("//select[@name='alpha_type']");

    this.IsActiveAlphaNet = page.locator("//select[@name='alpha_status']");

    this.UpdateButtonAlphaNet = page.locator("(//button[@type='submit'])[12]");

    this.BDBulk = page.locator("//a[@href='#tab_bdbulk_setting']");

    this.HashKeyBDBulk = page.locator("//input[@name='bdbulk_hash']");

    this.SMSTypeBDBulk = page.locator("//select[@name='bdbulk_type']");

    this.IsActiveBDBulk = page.locator("//select[@name='bdbulk_status']");

    this.UpdateButtonBDBulk = page.locator("(//button[@type='submit'])[13]");

    this.MimSMS = page.locator("//a[@href='#tab_mimsms_setting']");

    this.APIKeyMimSMS = page.locator("//input[@name='mim_api_key']");

    this.SenderIdMimSMS = page.locator("//input[@name='mim_sender_id']");

    this.SMSTypeMimSMS = page.locator("//select[@name='mim_type']");

    this.IsActiveMimSMS = page.locator("//select[@name='mim_status']");

    this.UpdateButtonMimSMS = page.locator("(//button[@type='submit'])[14]");
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

  async fillPassword(value: string) {
    await expect(this.FillPassword).toBeVisible({ timeout: 60000 });
    await this.FillPassword.fill(value);
  }

  async fillApiKeyValue(value: string) {
    await expect(this.APIKey).toBeVisible({ timeout: 60000 });
    await this.APIKey.fill(value);
  }

  async fillFromNumber(value: string) {
    await expect(this.FromNumber).toBeVisible({ timeout: 60000 });
    await this.FromNumber.fill(value);
  }

  async fillMONumber(value: string) {
    await expect(this.MoNumber).toBeVisible({ timeout: 60000 });
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

  async ClickAuthToken(value: string) {
    await expect(this.AuthToken).toBeVisible({ timeout: 60000 });
    await this.AuthToken.fill(value);
  }

  async ClickFromNumber(value: string) {
    await expect(this.FillFromNumber).toBeVisible({ timeout: 60000 });
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

  //Setting --> SMS Setting ---> Bulk

  async ClickOnBulk() {
    await expect(this.Bulk).toBeVisible({
      timeout: 60000,
    });

    await this.Bulk.click();
  }

  async fillUserNameBulk(value: string) {
    await expect(this.UserNameBulk).toBeVisible({ timeout: 60000 });
    await this.UserNameBulk.fill(value);
  }

  async fillUserPasswordBulk(value: string) {
    await expect(this.UserPasswordBulk).toBeVisible({ timeout: 60000 });
    await this.UserPasswordBulk.fill(value);
  }

  async SelectISActiveDetailsBulk(label: string) {
    await this.IsActiveBulk.selectOption({ label });
  }

  async ClickOnSubmitIconButtonBulk() {
    await expect(this.UpdateButtonBulk).toBeVisible({
      timeout: 60000,
    });

    await this.UpdateButtonBulk.click();
  }

  //Setting --> SMS Setting ---> MSG91

  async ClickOnMSG91() {
    await expect(this.MSG91).toBeVisible({
      timeout: 60000,
    });

    await this.MSG91.click();
  }

  async fillAuthKey(value: string) {
    await expect(this.AuthKeyMSG).toBeVisible({ timeout: 60000 });
    await this.AuthKeyMSG.fill(value);
  }

  async fillSenderID(value: string) {
    await expect(this.SenderId).toBeVisible({ timeout: 60000 });
    await this.SenderId.fill(value);
  }

  async SelectISActiveMSG(label: string) {
    await this.IsActiveMSG.selectOption({ label });
  }

  async ClickOnSubmitButtonMSG() {
    await expect(this.UpdateMSG).toBeVisible({
      timeout: 60000,
    });

    await this.UpdateMSG.click();
  }

  //Setting --> SMS Setting ---> Plivo
  async ClickOnPlivo() {
    await expect(this.Pilvo).toBeVisible({
      timeout: 60000,
    });

    await this.Pilvo.click();
  }

  async fillAuthID(value: string) {
    await expect(this.AuthID).toBeVisible({ timeout: 60000 });
    await this.AuthID.fill(value);
  }

  async ClickOnAuthTokens(value: string) {
    await expect(this.AuthTokens).toBeVisible({ timeout: 6000 });
    await this.AuthTokens.fill(value);
  }

  async ClickOnFromNumberPilvo(value: string) {
    await expect(this.FromNumberPilvo).toBeVisible({ timeout: 6000 });
    await this.FromNumberPilvo.fill(value);
  }

  async SelectIsActivePilvo(label: string) {
    await this.IsActivePilvo.selectOption({ label });
  }

  async ClickOnUpdateButtonPilvo() {
    await expect(this.UpdateButtonPilvo).toBeVisible({ timeout: 6000 });
    await this.UpdateButtonPilvo.click();
  }

  //Setting --> SMS Setting ---> Text Local
  async ClickOnTextLocal() {
    await expect(this.TextLocal).toBeVisible({
      timeout: 60000,
    });

    await this.TextLocal.click();
  }

  async ClickOnUserNameTextLocal(value: string) {
    await expect(this.UserNameTextLocal).toBeVisible({ timeout: 6000 });
    await this.UserNameTextLocal.fill(value);
  }

  async ClickOnHashKeyTextLocal(value: string) {
    await expect(this.HashKeyTextLocal).toBeVisible({ timeout: 6000 });
    await this.HashKeyTextLocal.fill(value);
  }

  async ClickOnSenderIdTextLocal(value: string) {
    await expect(this.SenderIdTextLocal).toBeVisible({ timeout: 6000 });
    await this.SenderIdTextLocal.fill(value);
  }

  async SelectIsActiveTextLocal(label: string) {
    await this.IsActiveTextLocal.selectOption({ label });
  }

  async ClickOnUpdateButtonTextLocal() {
    await expect(this.UpdateButtonTextLocal).toBeVisible({ timeout: 6000 });
    await this.UpdateButtonTextLocal.click();
  }

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> Bulk Pk

  async ClickOnMoreDropdownIndicator() {
    await expect(this.MoreDropdownIndicator).toBeVisible({ timeout: 6000 });
    await this.MoreDropdownIndicator.click();
  }

  async ClickOnBulkPk() {
    await expect(this.BulkPk).toBeVisible({ timeout: 6000 });
    await this.BulkPk.click();
  }
  async ClickOnBulkPkUserName(value: string) {
    await expect(this.BulkPkUserName).toBeVisible({ timeout: 6000 });
    await expect(this.BulkPkUserName).toBeVisible({ timeout: 6000 });
    await this.BulkPkUserName.fill(value);
  }

  async ClickOnBulkPkUserPassword(value: string) {
    await expect(this.BulkPkUserPassword).toBeVisible({ timeout: 6000 });
    await this.BulkPkUserPassword.fill(value);
  }

  async ClickSenderIdBulkPk(value: string) {
    await expect(this.SenderIdBulkPk).toBeVisible({ timeout: 6000 });
    await this.SenderIdBulkPk.fill(value);
  }

  async SelectIsActiveBulkPk(label: string) {
    await this.IsActiveBulkPk.selectOption({ label });
  }

  async ClickOnUpdateButtonBulkPk() {
    await expect(this.UpdateButtonBulkPk).toBeVisible({ timeout: 6000 });
    await this.UpdateButtonBulkPk.click();
  }

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> SMS Cluster
  async ClickOnSMSCluster() {
    await expect(this.SMSCluster).toBeVisible({ timeout: 6000 });
    await this.SMSCluster.click();
  }

  async ClickOnAuthKeySMSCluster(value: string) {
    await expect(this.AuthKeySMSCluster).toBeVisible({ timeout: 6000 });
    await this.AuthKeySMSCluster.fill(value);
  }

  async ClickOnRouterIdSMSCluster(value: string) {
    await expect(this.RouterIdSMSCluster).toBeVisible({ timeout: 6000 });
    await this.RouterIdSMSCluster.fill(value);
  }

  async clickOnSenderIdSMSCluster(value: string) {
    await expect(this.SenderIdSMSCluster).toBeVisible({ timeout: 6000 });
    await this.SenderIdSMSCluster.fill(value);
  }

  async SelectIsActiveSMSCluster(label: string) {
    await this.IsActiveSMSCluster.selectOption({ label });
  }

  async ClickOnUpdateButtonSMSCluster() {
    await expect(this.UpdateButtonSMSCluster).toBeVisible({ timeout: 6000 });
    await this.UpdateButtonSMSCluster.click();
  }

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> Alpha.Net
  async ClickOnAlphaNet() {
    await expect(this.AlphaNet).toBeVisible({ timeout: 6000 });
    await this.AlphaNet.click();
  }

  async ClickOnUserNameAlphaNet(value: string) {
    await expect(this.UserNameAlphaNet).toBeVisible({ timeout: 6000 });
    await this.UserNameAlphaNet.fill(value);
  }

  async ClickOnHashKeyAlphaNet(value: string) {
    await expect(this.HashKeyAlphaNet).toBeVisible({ timeout: 6000 });
    await this.HashKeyAlphaNet.fill(value);
  }

  async SelectSMSTypeAlphaNet(label: string) {
    await this.SMSTypeAlphaNet.selectOption({ label });
  }

  async SelectIsActiveAlphaNet(label: string) {
    await this.IsActiveAlphaNet.selectOption({ label });
  }

  async ClickOnUpdateButtonAlphaNet() {
    await expect(this.UpdateButtonAlphaNet).toBeVisible({ timeout: 6000 });
    await this.UpdateButtonAlphaNet.click();
  }

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> BD Bulk

  async ClickOnBDBulk() {
    await expect(this.BDBulk).toBeVisible({ timeout: 6000 });
    await this.BDBulk.click();
  }

  async ClickOnHashKeyBDBulk(value: string) {
    await expect(this.HashKeyBDBulk).toBeVisible({ timeout: 6000 });
    await this.HashKeyBDBulk.fill(value);
  }

  async SelectSMSTypeBDBulk(label: string) {
    await this.SMSTypeBDBulk.selectOption({ label });
  }

  async SelectIsActiveBDBulk(label: string) {
    await this.IsActiveBDBulk.selectOption({ label });
  }

  async ClickOnUpdateButtonBDBulk() {
    await expect(this.UpdateButtonBDBulk).toBeVisible({ timeout: 6000 });
    await this.UpdateButtonBDBulk.click();
  }

  //Setting --> SMS Setting ---> More ---> Dropdown Indicator --> Mim SMS
  async ClickOnMimSMS() {
    await expect(this.MimSMS).toBeVisible({ timeout: 6000 });
    await this.MimSMS.click();
  }

  async ClickOnAPIKeyMimSMS(value: string) {
    await expect(this.APIKeyMimSMS).toBeVisible({ timeout: 6000 });
    await this.APIKeyMimSMS.fill(value);
  }

  async ClickOnSenderIdMimSMS(value: string) {
    await expect(this.SenderIdMimSMS).toBeVisible({ timeout: 6000 });
    await this.SenderIdMimSMS.fill(value);
  }

  async SelectSMSTypeMimSMS(label: string) {
    await this.SMSTypeMimSMS.selectOption({ label });
  }

  async SelectIsActiveMimSMS(label: string) {
    await this.IsActiveMimSMS.selectOption({ label });
  }

  async ClickOnUpdateButtonMimSMS() {
    await expect(this.UpdateButtonMimSMS).toBeVisible({ timeout: 6000 });
    await this.UpdateButtonMimSMS.click();
  }
}
