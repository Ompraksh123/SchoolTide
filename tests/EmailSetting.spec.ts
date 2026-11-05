import { test, expect } from "@playwright/test";
import EmailSettings from "../PageObject/EmailSetting.page";

const dashboardUrl = "http://schooltide.udeshatechnology.com/dashboard.html";

test.describe("EmailSetting", { tag: "@Batch4" }, () => {
  test.beforeEach(async ({ page }) => {
    // Session is already saved by auth.setup.ts
    await page.goto(dashboardUrl, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("link", { name: /Ravi Kumar/ })).toBeVisible();
  });

  test("Verify user successfully clicks on the EmailSetting Tab", async ({
    page,
  }) => {
    const emailSetting = new EmailSettings(page);

    await emailSetting.clickSettingDropdown();
    await emailSetting.clickEmailSettingTab();
    await expect(page).toHaveURL(/setting\/email/);
    await page.waitForTimeout(3000);
    await emailSetting.fillEmailSettings("smtp");
    await expect(emailSetting.emailprotocol).toHaveValue("smtp");
    await emailSetting.fillSMTPHost("smtp.gmail.com");
    await expect(emailSetting.SMTPHost).toHaveValue("smtp.gmail.com");
    await emailSetting.fillSMTPPort("587");
    await expect(emailSetting.SMTPPort).toHaveValue("587");
    await emailSetting.fillSMTPUsername("Roshan Kumar");
    await expect(emailSetting.SMTPUsername).toHaveValue("Roshan Kumar");
    await emailSetting.fillSMTPPassword("Roshan@123");
    await expect(emailSetting.SMTPPassowrd).toHaveValue("Roshan@123");
    await emailSetting.fillSMTPSecurity("tls");
    await expect(emailSetting.SMTPSecurity).toHaveValue("tls");
    await emailSetting.fillSMTPTimeout("30");
    await expect(emailSetting.SMTPTimeout).toHaveValue("30");
    await emailSetting.fillEmailType("html");
    await expect(emailSetting.EmailType).toHaveValue("html");
    await emailSetting.fillCharSet("utf-8");
    await expect(emailSetting.CharSet).toHaveValue("utf-8");
    await emailSetting.fillPriority("1");
    await expect(emailSetting.Priority).toHaveValue("1");
    await page.waitForTimeout(3000);
    await emailSetting.fillFromName("Roshan Kumar");
    await expect(emailSetting.FromName).toHaveValue("Roshan Kumar");
    await emailSetting.fillFromEmail("roshankumar@gmail.com");
    await expect(emailSetting.FromEMail).toHaveValue("roshankumar@gmail.com");
    await emailSetting.clickSaveButton();
    await page.waitForTimeout(3000);
  });
});
