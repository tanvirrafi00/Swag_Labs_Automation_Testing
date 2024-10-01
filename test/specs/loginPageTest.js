import { assert, use } from "chai";
import validLogin from "../../test data/validLogin.json" assert { type: "json" };
import invalidLogin from "../../test data/invalidLogin.json" assert { type: "json" };
import LoginPage from "../pageObjects/LoginPage.js";
import ProductsPage from "../pageObjects/ProductsPage.js";
import Browser from "../../framework/browser/Browser.js";
import AllureReporter from "@wdio/allure-reporter";
describe("Check the Login Functionality", () => {
  before(async () => {
    await Browser.clearCookies();
  });

  it("TC_01:Check the login functionality with accepted usernames and passwords", async () => {
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
    }
  });

  it("TC_02:Check the login functionality with valid usernames and invalid passwords", async () => {
    AllureReporter.addSeverity("Critical");

    AllureReporter.addStep("checking login page is opened");
    assert.isTrue(await LoginPage.isPageOpened());

    for (let { username, password, message } of invalidLogin) {
      AllureReporter.addStep("set username");
      await LoginPage.setUsername(username);

      AllureReporter.addStep("set password");
      await LoginPage.setPassword(password);

      AllureReporter.addStep("click login button");
      await LoginPage.clickLoginButton();

      AllureReporter.addStep("checking error message");
      assert.strictEqual(await LoginPage.getErrorMessage(), message);
    }
  });
});
