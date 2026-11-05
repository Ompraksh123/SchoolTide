import { test, expect } from "@playwright/test";
import Administrator from "../PageObject/Administrator.page";
const dashboardUrl = "http://schooltide.udeshatechnology.com/dashboard.html";

test.describe("Administrator", { tag: "@Batch5" }, () => {
  test.beforeEach(async ({ page }) => {
    // Session is already saved by auth.setup.ts
    await page.goto(dashboardUrl, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("link", { name: /Ravi Kumar/ })).toBeVisible();
  });

  test("Verify user successfully clicks on the Administrator Tab", async ({
    page,
  }) => {
    const administrator = new Administrator(page);

    await administrator.ClickAdministratorDropdown();
    await administrator.ClickAcademicYear();
    await expect(page).toHaveURL(/administrator\/year/);
    await page.waitForTimeout(3000);
    await administrator.ClickAddButton();
    await page.waitForTimeout(3000);
    await administrator.FillSessionStartDate(2026, "Jan");
    await expect(administrator.SessionStartDate).toHaveValue("January 2026");

    await administrator.FillSessionEndDate(2026, "Dec");
    await expect(administrator.SessionEndDate).toHaveValue("December 2026");
    await administrator.FillNote("This is a test note.");
    await expect(administrator.Note).toHaveValue("This is a test note.");
    await page.waitForTimeout(3000);
    await administrator.ClickUpdateButton();
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on the Administrator Tab and searches", async ({
    page,
  }) => {
    const administrator = new Administrator(page);

    await administrator.ClickAdministratorDropdown();
    await administrator.ClickAcademicYear();
    await expect(page).toHaveURL(/administrator\/year/);
    await page.waitForTimeout(3000);
    await administrator.FillSearch("May 2025 - March 2026");
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on the Manage User in the Administrator tab", async ({
    page,
  }) => {
    const administrator = new Administrator(page);

    await administrator.ClickAdministratorDropdown();
    await administrator.ClickOnManageUser();
    await page.waitForTimeout(3000);
    await administrator.SelectUserType("Teacher");
    await expect(administrator.UserType.locator("option:checked")).toHaveText(
      "Teacher",
    );
    await page.waitForTimeout(3000);
    await administrator.SelectUserTypeOption("Om Prakash(1)");
    await expect(
      administrator.UserTypeOption.locator("option:checked"),
    ).toHaveText("Om Prakash(1)");
    await administrator.ClickFindUserButton();
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on the Reset User Password link in the Administrator tab", async ({
    page,
  }) => {
    const administrator = new Administrator(page);

    await administrator.ClickAdministratorDropdown();
    await administrator.ClickOnResetUserPassword();
    await page.waitForTimeout(3000);
    await administrator.SelectUserTypeOptionSelected("Guardian");
    await expect(
      administrator.UserTypeOptionSelected.locator("option:checked"),
    ).toHaveText("Guardian");
    await administrator.SelectUserTypeSelected("Raju raj(3)");
    await expect(
      administrator.UserTypeSelected.locator("option:checked"),
    ).toHaveText("Raju raj(3)");
    await administrator.ClickChangePasswordButton("123456890");
    await expect(administrator.ConfirmPassword).toHaveValue("123456890");
    await page.waitForTimeout(3000);
    await administrator.ClickConfirmPassword("123456890");
    await expect(administrator.ConfirmPassword).toHaveValue("123456890");
    await administrator.ClickUpdatePasswordButton();
    await page.waitForTimeout(3000);
  });

  test("Verify user successfully clicks on the User Credential in the Administrator tab", async ({
    page,
  }) => {
    const administrator = new Administrator(page);

    await administrator.ClickAdministratorDropdown();
    await administrator.ClickOnUnserCredential();
    await page.waitForTimeout(3000);
    await administrator.SelectUserTypeUserCredential("Guardian");
    await expect(
      administrator.UserTypeUserCredential.locator("option:checked"),
    ).toHaveText("Guardian");
    await page.waitForTimeout(3000);
    await administrator.SelectUserName("Raju raj(3)");
    await expect(
      administrator.UserName.locator("option:checked"),
    ).toHaveText("Raju raj(3)");
     await administrator.ClickOnFindUserButton();
    await page.waitForTimeout(3000);
  });


  test("Verify user successfully clicks on the Activity Log in the Administrator tab", async ({
    page,
  }) => {
    const administrator = new Administrator(page);

    await administrator.ClickAdministratorDropdown();
    await administrator.ClickOnActivityLog();
    await page.waitForTimeout(3000);
    await administrator.SelectUserTypeActivityLog("Guardian");
    await expect(
      administrator.UserTypeUserActivity.locator("option:checked"),
    ).toHaveText("Guardian");
    await page.waitForTimeout(3000);
    await administrator.SelectActivityLog("Raju raj(3)");
    await expect(
      administrator.UserNameUserActivity.locator("option:checked"),
    ).toHaveText("Raju raj(3)");
     await administrator.ClickOnFindActivityLog();
    await page.waitForTimeout(3000);
  });          
});
