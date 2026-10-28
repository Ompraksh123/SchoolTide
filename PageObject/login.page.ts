import { Page, Locator, expect } from "@playwright/test";

export default class LoginPage {
  readonly page: Page;
  readonly usernameLocator: Locator;
  readonly passwordLocator: Locator;
  readonly submitLocator: Locator;
  readonly successMessage: Locator;
  readonly userMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameLocator = page.locator("input[name='username']");
    this.passwordLocator = page.locator("input[name='password']");
    this.submitLocator = page.locator("input[type='submit'][name='submit']");
    this.successMessage = page.getByText("You have successfully logged In");
    this.userMenu = page.getByRole("link", { name: /Ravi Kumar/ });
  }

  async goto(url: string) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

  async fillCredentials(user: string, pass: string) {
    await this.usernameLocator.fill(user);
    await this.passwordLocator.fill(pass);
  }

  async clickLogin() {
    await expect(this.submitLocator).toBeEnabled();
    await this.submitLocator.click();
  }
}
