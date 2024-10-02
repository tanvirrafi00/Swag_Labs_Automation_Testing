import { assert } from "chai";
import LoginPage from "../pageObjects/LoginPage.js";
import dotenv from "dotenv";
import ProductsPage from "../pageObjects/ProductsPage.js";
import AllureReporter from "@wdio/allure-reporter";

dotenv.config();
describe("Product page functionality", () => {
  it("TC_04:Check whether product sort option is displayed", async () => {
    AllureReporter.addSeverity("Critical");

    AllureReporter.addStep("chcek login page is opened");
    assert.isTrue(await LoginPage.isPageOpened());

    AllureReporter.addStep("set user name");
    await LoginPage.setUsername(process.env.USER_NAME);

    AllureReporter.addStep("set password");
    await LoginPage.setPassword(process.env.PASSWORD);

    AllureReporter.addStep("clicking on login button");
    await LoginPage.clickLoginButton();

    AllureReporter.addStep("checking product sort option is displaying");
    assert.isTrue(await ProductsPage.isSortProductDisplayed());
  });
});
