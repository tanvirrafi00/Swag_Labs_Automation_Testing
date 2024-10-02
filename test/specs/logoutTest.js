import { assert, use } from "chai";
import validLogin from "../../test data/validLogin.json" assert { type: "json" };
import invalidLogin from "../../test data/invalidLogin.json" assert { type: "json" };
import LoginPage from "../pageObjects/LoginPage.js";
import ProductsPage from "../pageObjects/ProductsPage.js";
import Browser from "../../framework/browser/Browser.js";
import AllureReporter from "@wdio/allure-reporter";
describe("Logout from the Swag labs", () => {
  before(async () => {
    await Browser.clearCookies();
  });

  it("TC_03:Check the Logout from the Swag labs", async () => {
    AllureReporter.addSeverity("Critical");

    AllureReporter.addStep("checking login page is opened");
    assert.isTrue(await LoginPage.isPageOpened());
    for (let { username, password } of validLogin) {
      AllureReporter.addStep("set username");
      await LoginPage.setUsername(username);
      AllureReporter.addStep("set password");
      await LoginPage.setPassword(password);
      AllureReporter.addStep("click login button");
      await LoginPage.clickLoginButton();
      AllureReporter.addStep("checking product is opened");
      assert.isTrue(await ProductsPage.isPageOpened(), "Product page is not opened");
      AllureReporter.addStep("clicking on menu button");
      await ProductsPage.clickMenuButton();
      AllureReporter.addStep("clicking on logout link");
      await ProductsPage.clickLogoutLink();

      AllureReporter.addStep("checking login page is opened");
      assert.isTrue(await LoginPage.isPageOpened());
    }
  });
});
