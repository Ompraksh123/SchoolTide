import { Page, Locator, expect } from "@playwright/test";

export default class Administrator {
  readonly page: Page;
  readonly AdministratorDropdown: Locator;
  readonly AcademicYear: Locator;
  readonly AddButton: Locator;
  readonly SessionStartDate: Locator;
  readonly SessionEndDate: Locator;
  readonly OpenDatepicker: Locator;
  readonly Note: Locator;
  readonly UpdateButton: Locator;
  readonly SearchButton: Locator;
  readonly ManageUser: Locator;
  readonly UserType: Locator;
  readonly UserTypeOption: Locator;
  readonly FindUserButton: Locator;
  readonly ResetUserPasswordButton: Locator;
  readonly UserTypeOptionSelected: Locator;
  readonly UserTypeSelected: Locator;
  readonly ChangePasswordButton: Locator;
  readonly ConfirmPassword: Locator;
  readonly UpdatePasswordButton: Locator;
  readonly UserCredential: Locator;
  readonly UserTypeUserCredential: Locator;
  readonly UserName: Locator;
  readonly FindUserCredential: Locator;
  readonly ActiveLog: Locator;
  readonly UserTypeUserActivity: Locator;
  readonly UserNameUserActivity: Locator;
  readonly FindUserActivity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.AdministratorDropdown = page.locator(
      "//a[contains(., 'Administrator')]",
    );
    this.AcademicYear = page.locator(
      "(//a[@href='http://schooltide.udeshatechnology.com/administrator/year/index.html'])[1]",
    );
    this.AddButton = page.locator("//a[@href='#tab_add_year']");
    this.SessionStartDate = page.locator("//input[@name='session_start']");
    this.SessionEndDate = page.locator("//input[@name='session_end']");
    this.OpenDatepicker = page.locator(".datepicker:visible");
    this.Note = page.locator("//textarea[@name='note']");
    this.UpdateButton = page.locator("(//button[@type='submit'])[2]");
    this.SearchButton = page.locator("//input[@type='search']");
    this.ManageUser = page.locator(
      "(//a[@href='http://schooltide.udeshatechnology.com/administrator/user/index.html'])[1]",
    );
    this.UserType = page.locator("//select[@name='role_id']");
    this.UserTypeOption = page.locator("//select[@name='user_id']");
    this.FindUserButton = page.locator("(//button[@type='submit'])[2]");   

    //Administrator --> Reset User Password

    this.ResetUserPasswordButton = page.locator(
      "(//a[@href='http://schooltide.udeshatechnology.com/administrator/password/index.html'])[1]",
    );

    this.UserTypeOptionSelected = page.locator("//select[@name='role_id']");

    this.UserTypeSelected = page.locator("//select[@name='user_id']");

    this.ChangePasswordButton = page.locator("//input[@name='password']");

    this.ConfirmPassword = page.locator("//input[@name='password']");

    this.UpdatePasswordButton = page.locator("(//button[@type='submit'])[2]");

    //Administrator---> User Credential
    this.UserCredential = page.locator(
      "(//a[@href='http://schooltide.udeshatechnology.com/administrator/usercredential/index.html'])[1]",
    );
    this.UserTypeUserCredential = page.locator("//select[@name='role_id']");

    this.UserName = page.locator("//select[@name='user_id']");

    this.FindUserCredential = page.locator("(//button[@type='submit'])[2]");

    //Administrator---> Activity Log 
    this.ActiveLog =  page.locator("(//a[@href='http://schooltide.udeshatechnology.com/administrator/activitylog/index.html'])[1]");
   
    this.UserTypeUserActivity = page.locator("//select[@name='role_id']");

    this.UserNameUserActivity = page.locator("//select[@name='user_id']");

    this.FindUserActivity = page.locator("(//button[@type='submit'])[2]");


}

  async ClickAdministratorDropdown() {
    await expect(this.AdministratorDropdown).toBeVisible({ timeout: 60000 });
    await this.AdministratorDropdown.click();
  }

  async ClickAcademicYear() {
    await expect(this.AcademicYear).toBeVisible({ timeout: 60000 });
    await this.AcademicYear.click();
  }

  async ClickAddButton() {
    await expect(this.AddButton).toBeVisible({ timeout: 60000 });
    await this.AddButton.click();
  }

  private async SelectMonthYear(input: Locator, year: number, month: string) {
    await input.click();

    const picker = this.page.locator(".datepicker-months:visible");
    await expect(picker).toBeVisible();

    const title = picker.locator(".datepicker-switch");
    let current = Number((await title.innerText()).trim());
    while (current !== year) {
      await picker.locator(current > year ? ".prev" : ".next").click();
      current = Number((await title.innerText()).trim());
    }

    await picker.locator("span.month", { hasText: month }).click();

    await input.press("Escape");
    await expect(this.OpenDatepicker).toHaveCount(0);
  }

  async FillSessionStartDate(year: number, month: string) {
    await expect(this.SessionStartDate).toBeVisible({ timeout: 60000 });
    await this.SelectMonthYear(this.SessionStartDate, year, month);
  }

  async FillSessionEndDate(year: number, month: string) {
    await expect(this.SessionEndDate).toBeVisible({ timeout: 60000 });
    await this.SelectMonthYear(this.SessionEndDate, year, month);
  }

  async FillNote(value: string) {
    await expect(this.Note).toBeVisible({ timeout: 60000 });
    await this.Note.fill(value);
  }

  async ClickUpdateButton() {
    await expect(this.UpdateButton).toBeVisible({ timeout: 60000 });
    await this.UpdateButton.click();
  }

  //Administrator --> Search Button
  async FillSearch(value: string) {
    await expect(this.SearchButton).toBeVisible({ timeout: 60000 });
    await this.SearchButton.fill(value);
  }

  //Administrator --> Manage User
  async ClickOnManageUser() {
    await expect(this.ManageUser).toBeVisible({ timeout: 60000 });
    await this.ManageUser.click();
  }

  async SelectUserType(value: string) {
    await expect(this.UserType).toBeVisible({ timeout: 60000 });
    await this.UserType.selectOption(value);
  }

  async SelectUserTypeOption(value: string) {
    await expect(this.UserTypeOption).toBeVisible({ timeout: 60000 });
    await this.UserTypeOption.selectOption(value);
  }

  async ClickFindUserButton() {
    await expect(this.FindUserButton).toBeVisible({ timeout: 60000 });
    await this.FindUserButton.click();
  }

  //Administrator --> Reset User Password
  async ClickOnResetUserPassword() {
    await expect(this.ResetUserPasswordButton).toBeVisible({ timeout: 60000 });
    await this.ResetUserPasswordButton.click();
  }

  async SelectUserTypeOptionSelected(value: string) {
    await expect(this.UserTypeOptionSelected).toBeVisible({ timeout: 60000 });
    await this.UserTypeOptionSelected.selectOption(value);
  }

  async SelectUserTypeSelected(value: string) {
    await expect(this.UserTypeSelected).toBeVisible({ timeout: 60000 });
    await this.UserTypeSelected.selectOption(value);
  }

  async ClickChangePasswordButton(value: string) {
    await expect(this.ChangePasswordButton).toBeVisible({ timeout: 60000 });
    await this.ChangePasswordButton.fill(value);
  }

  async ClickConfirmPassword(value: string) {
    await expect(this.ConfirmPassword).toBeVisible({ timeout: 60000 });
    await this.ConfirmPassword.fill(value);
  }

  async ClickUpdatePasswordButton() {
    await expect(this.UpdatePasswordButton).toBeVisible({ timeout: 60000 });
    await this.UpdatePasswordButton.click();
  }

  //Administrator---> User Credential
  async ClickOnUnserCredential() {
    await expect(this.UserCredential).toBeVisible({ timeout: 6000 });
    await this.UserCredential.click();
  }

  async SelectUserTypeUserCredential(value: string) {
    await expect(this.UserTypeUserCredential).toBeVisible({ timeout: 60000 });
    await this.UserTypeUserCredential.selectOption({ label: value });
  }

  async SelectUserName(value: string){
    await expect(this.UserName).toBeVisible({timeout:60000});
    await this.UserName.selectOption({label:value});
  }

  async ClickOnFindUserButton(){
    await expect(this.FindUserCredential).toBeVisible({ timeout: 60000 });
    await this.FindUserCredential.click();
  }

  //Administrator---> Activity Log 
  async ClickOnActivityLog(){
    await expect(this.ActiveLog).toBeVisible({timeout:60000});
    await this.ActiveLog.click();
  }

   async SelectUserTypeActivityLog(value: string) {
    await expect(this.UserTypeUserActivity).toBeVisible({ timeout: 60000 });
    await this.UserTypeUserCredential.selectOption({ label: value });
  }

  async SelectActivityLog(value: string){
    await expect(this.UserNameUserActivity).toBeVisible({timeout:60000});
    await this.UserName.selectOption({label:value});
  }

  async ClickOnFindActivityLog(){
    await expect(this.FindUserCredential).toBeVisible({ timeout: 60000 });
    await this.FindUserActivity.click();
  }
}
