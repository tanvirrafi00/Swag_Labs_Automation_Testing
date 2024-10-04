import { assert } from "chai";
import LoginPage from "../pageObjects/LoginPage.js";
import dotenv from "dotenv";
import ProductsPage from "../pageObjects/ProductsPage.js";
import AllureReporter from "@wdio/allure-reporter";
import prodcutSortData from "../../test data/productSortData.json" assert { type: "json" };
import sortedProductList from "../../test data/sortProductList.json" assert { type: "json" };
import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";

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

  it("TC_05:Check whether product sort option AZ is working correctly", async () => {
    AllureReporter.addSeverity("critical");

    AllureReporter.addStep("opening login page url");
    await Browser.openUrl(mainConfig.baseUrl);
    AllureReporter.addStep("checking login page is opened");
    assert.isTrue(await LoginPage.isPageOpened(), "Login page is not opened");

    AllureReporter.addStep("set username");
    await LoginPage.setUsername(process.env.USER_NAME);

    AllureReporter.addStep("set password");
    await LoginPage.setPassword(process.env.PASSWORD);

    AllureReporter.addStep("clcik on login button");
    await LoginPage.clickLoginButton();

    AllureReporter.addStep("checking product page is opened");
    assert.isTrue(await ProductsPage.isPageOpened(), "product page is not opened");

    AllureReporter.addStep("select sort value");
    await ProductsPage.selectSortValue(prodcutSortData["a-z"]);

    AllureReporter.addStep("checking product sorted correctly");
    assert.isTrue(await ProductsPage.checkIsSortedCorrectly(sortedProductList["a-z"]), "product not sorted a-z");
  });

  it.only("TC_06:Check whether product sort option ZA is working correctly", async () => {
    AllureReporter.addSeverity("critical");

    AllureReporter.addStep("opening login page url");
    await Browser.openUrl(mainConfig.baseUrl);
    AllureReporter.addStep("checking login page is opened");
    assert.isTrue(await LoginPage.isPageOpened(), "Login page is not opened");

    AllureReporter.addStep("set username");
    await LoginPage.setUsername(process.env.USER_NAME);

    AllureReporter.addStep("set password");
    await LoginPage.setPassword(process.env.PASSWORD);

    AllureReporter.addStep("clcik on login button");
    await LoginPage.clickLoginButton();

    AllureReporter.addStep("checking product page is opened");
    assert.isTrue(await ProductsPage.isPageOpened(), "product page is not opened");

    AllureReporter.addStep("select sort value");
    await ProductsPage.selectSortValue(prodcutSortData["z-a"]);

    AllureReporter.addStep("checking product sorted correctly");
    assert.isTrue(await ProductsPage.checkIsSortedCorrectly(sortedProductList["z-a"]), "product not sorted a-z");
  });
});
