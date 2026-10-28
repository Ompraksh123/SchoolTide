
import { Page, Locator, expect } from "@playwright/test";

export default class SettingPage {
  readonly page: Page;
  readonly settingDropdown: Locator;
  readonly schoolSettingTab: Locator;
  readonly fillSchoolCode: Locator;

  constructor(page: Page) {
    this.page = page;

    this.settingDropdown = page.getByText("Setting", {
      exact: true,
    });

    this.schoolSettingTab = page.locator(
      "a[href='http://schooltide.udeshatechnology.com/setting/index.html']"
    );

    this.fillSchoolCode = page.locator(
      "input[name='school_code']"
    );
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
    await expect(this.page).toHaveURL(
      /\/setting\/index\.html$/,
      { timeout: 60000 }
    );
  }

  async clickOnSchoolCode() {
    await expect(this.fillSchoolCode).toBeVisible({
      timeout: 60000,
    });

    await this.fillSchoolCode.fill("ASD23CRF");
  }
}
