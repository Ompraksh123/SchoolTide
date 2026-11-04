import { test, expect } from "@playwright/test";
import SmsSetting from "../PageObject/SmsSetting.page";

const dashboardUrl = "http://schooltide.udeshatechnology.com/dashboard.html";

test.describe("SMSSetting", { tag: "@Batch3" }, () => {
  test.beforeEach(async ({ page }) => {
    // Session is already saved by auth.setup.ts
    await page.goto(dashboardUrl, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("link", { name: /Ravi Kumar/ })).toBeVisible();
  });

  test("Verify user successfully clicks on the SMSSetting Tab", async ({
    page,
  }) => {
    const smsSetting = new SmsSetting(page);

    await smsSetting.clickSettingDropdown();
    await smsSetting.clickSmsSettingTab();
    await expect(page).toHaveURL(/setting\/sms/);
    await page.waitForTimeout(3000);
    await smsSetting.fillUserName("testuser0123");
    await expect(smsSetting.FillUserName).toHaveValue("testuser0123");
    await smsSetting.fillPassword("Test@123456");
    await expect(smsSetting.FillPassword).toHaveValue("Test@123456");
    await page.waitForTimeout(3000);
    await smsSetting.fillApiKeyValue("sk_test_4eC39HqLyjWDarjtT1zdp7dcdgre");
    await expect(smsSetting.APIKey).toHaveValue(
      "sk_test_4eC39HqLyjWDarjtT1zdp7dcdgre",
    );
    await smsSetting.fillFromNumber("+15004450006");
    await expect(smsSetting.FromNumber).toHaveValue("+15004450006");
    await page.waitForTimeout(3000);
    await smsSetting.fillMONumber("+919876543219");
    await expect(smsSetting.MoNumber).toHaveValue("+919876543219");
    await smsSetting.SelectISActiveDetail("No");
    await expect(
      smsSetting.ChooseISActive.locator("option:checked"),
    ).toHaveText("No");
    await smsSetting.ClickOnSubmitButton();
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on Twilio in SMS Setting Tab", async ({
    page,
  }) => {
    const smsSetting = new SmsSetting(page);

    await smsSetting.clickSettingDropdown();
    await smsSetting.clickSmsSettingTab();
    await smsSetting.ClickOnTwilio();
    await page.waitForTimeout(3000);
    await smsSetting.ClickOnAccountSID("AC2636380000");
    await expect(smsSetting.AccountSID).toHaveValue("AC2636380000");
    await smsSetting.ClickAuthToken("your_auth_token_here_32_chars_yy");
    await expect(smsSetting.AuthToken).toHaveValue(
      "your_auth_token_here_32_chars_yy",
    );
    await page.waitForTimeout(3000);
    await smsSetting.ClickFromNumber("+1500500098");
    await expect(smsSetting.FillFromNumber).toHaveValue("+1500500098");
    await smsSetting.SelectISActiveDetails("No");
    await expect(
      smsSetting.ChooseIsActives.locator("option:checked"),
    ).toHaveText("No");

    await smsSetting.ClickOnSubmitIconButton();
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on Bulk in SMS Setting Tab", async ({
    page,
  }) => {
    const smsSetting = new SmsSetting(page);

    await smsSetting.clickSettingDropdown();
    await smsSetting.clickSmsSettingTab();
    await smsSetting.ClickOnBulk();
    await page.waitForTimeout(3000);
    await smsSetting.fillUserNameBulk("testuser004");
    await expect(smsSetting.UserNameBulk).toHaveValue("testuser004");
    await page.waitForTimeout(3000);
    await smsSetting.fillUserPasswordBulk("Test@123456");
    await expect(smsSetting.UserPasswordBulk).toHaveValue("Test@123456");
    await page.waitForTimeout(3000);
    await smsSetting.SelectISActiveDetailsBulk("No");
    await expect(smsSetting.IsActiveBulk.locator("option:checked")).toHaveText(
      "No",
    );
    await smsSetting.ClickOnSubmitIconButtonBulk();
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on MSG91 in SMS Setting Tab", async ({
    page,
  }) => {
    const smsSetting = new SmsSetting(page);

    await smsSetting.clickSettingDropdown();
    await smsSetting.clickSmsSettingTab();
    await smsSetting.ClickOnMSG91();
    await page.waitForTimeout(3000);
    await smsSetting.fillAuthKey("123456AbCdEfGhIjKl7890mnOpQrStuv11");
    await expect(smsSetting.AuthKeyMSG).toHaveValue(
      "123456AbCdEfGhIjKl7890mnOpQrStuv11",
    );
    await page.waitForTimeout(3000);
    await smsSetting.fillSenderID("TESTIDRS");
    await expect(smsSetting.SenderId).toHaveValue("TESTIDRS");
    await smsSetting.SelectISActiveMSG("No");
    await expect(smsSetting.IsActiveMSG.locator("option:checked")).toHaveText(
      "No",
    );
    await smsSetting.ClickOnSubmitButtonMSG();
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on Pilvo in SMS Setting Tab", async ({
    page,
  }) => {
    const smsSetting = new SmsSetting(page);
    await smsSetting.clickSettingDropdown();
    await smsSetting.clickSmsSettingTab();
    await smsSetting.ClickOnPlivo();
    await page.waitForTimeout(3000);
    await smsSetting.fillAuthID("MAYRT11232342000");
    await expect(smsSetting.AuthID).toHaveValue("MAYRT11232342000");
    await smsSetting.ClickOnAuthTokens(
      "Zm9vYmFyYmF6cXV4MTIzNDU2Nzg5MGFiY2RlZguty",
    );
    await expect(smsSetting.AuthTokens).toHaveValue(
      "Zm9vYmFyYmF6cXV4MTIzNDU2Nzg5MGFiY2RlZguty",
    );
    await smsSetting.ClickOnFromNumberPilvo("+0076543200");
    await expect(smsSetting.FromNumberPilvo).toHaveValue("+0076543200");
    await page.waitForTimeout(3000);
    await smsSetting.SelectIsActivePilvo("No");
    await expect(smsSetting.IsActivePilvo.locator("option:checked")).toHaveText(
      "No",
    );
    await smsSetting.ClickOnUpdateButtonPilvo();
    await page.waitForTimeout(3000);
  });

   test("Verify user successfully clicks on Text Local in SMS Setting Tab", async ({
    page,
  }) => {
    const smsSetting = new SmsSetting(page);
    await smsSetting.clickSettingDropdown();
    await smsSetting.clickSmsSettingTab();
    await smsSetting.ClickOnTextLocal();
    await page.waitForTimeout(3000);
    await smsSetting.ClickOnUserNameTextLocal("testure@example.com");
    await expect(smsSetting.UserNameTextLocal).toHaveValue("testure@example.com");
    await smsSetting.ClickOnHashKeyTextLocal(
      "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b200",
    );
    await expect(smsSetting.HashKeyTextLocal).toHaveValue(
      "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b200",
    );
    await page.waitForTimeout(3000);
    await smsSetting.ClickOnSenderIdTextLocal("TESTIDRS");
    await expect(smsSetting.SenderIdTextLocal).toHaveValue("TESTIDRS");
    await page.waitForTimeout(3000);
    await smsSetting.SelectIsActiveTextLocal("No");
    await expect(smsSetting.IsActiveTextLocal.locator("option:checked")).toHaveText(
      "No",
    );
    await smsSetting.ClickOnUpdateButtonTextLocal();
    await page.waitForTimeout(3000);
  });  
  
  test("Verify user successfully clicks on More dropdown", async ({
    page,
  }) => {
    const smsSetting = new SmsSetting(page);
    await smsSetting.clickSettingDropdown();
    await smsSetting.clickSmsSettingTab();
    await smsSetting.ClickOnMoreDropdownIndicator();    
    await smsSetting.ClickOnBulkPk();    
    await smsSetting.ClickOnBulkPkUserName("testuserbulkpk");
    await expect(smsSetting.BulkPkUserName).toHaveValue("testuserbulkpk");    
    await smsSetting.ClickOnBulkPkUserPassword("Test@123456");
    await expect(smsSetting.BulkPkUserPassword).toHaveValue("Test@123456");    
    await smsSetting.ClickSenderIdBulkPk("TESTIDRS");
    await expect(smsSetting.SenderIdBulkPk).toHaveValue("TESTIDRS");
    await page.waitForTimeout(3000);
    await smsSetting.SelectIsActiveBulkPk("No");
    await expect(smsSetting.IsActiveBulkPk.locator("option:checked")).toHaveText(
      "No",
    );
    await page.waitForTimeout(3000);
    await smsSetting.ClickOnUpdateButtonBulkPk();
    await page.waitForTimeout(3000);

  });
});
