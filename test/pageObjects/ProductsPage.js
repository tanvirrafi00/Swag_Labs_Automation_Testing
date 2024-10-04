import { Button, Dropdown, ElementsList, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class ProductsPage extends BasePage {
  constructor() {
    super(new Label(`//span[@class="title"]`, "Product page label"), "Product page");
    this.menuButton = new Button(`//button[@id="react-burger-menu-btn"]`, "Menu button");
    this.leftSidebar = new Label(`//div[@class="bm-menu"]`, "Left sidebar");
    this.logoutLink = new Label(`//a[@id="logout_sidebar_link"]`, "Logout Link");
    this.sortProduct = new Dropdown(`//select[@class="product_sort_container"]`, "sort products");
    this.allProductsName = new ElementsList(Label, `//div[@class="inventory_item_name "]`, "All products");
  }

  async clickMenuButton() {
    await this.menuButton.click();
  }
  async clickLogoutLink() {
    await this.logoutLink.state().waitForDisplayed();
    await this.logoutLink.click();
  }

  async isSortProductDisplayed() {
    return await this.sortProduct.state().isDisplayed();
  }

  async selectSortValue(value) {
    await this.sortProduct.selectOptionByValue(value);
  }

  async checkIsSortedCorrectly(sortProductList) {
    const allProducts = await this.allProductsName.getListOfElements();

    for (let i in allProducts) {
      const productName = await allProducts[i].getText();

      console.log(sortProductList[i]);
      if (productName != sortProductList[i]) return false;
    }
    return true;
  }
}

export default new ProductsPage();
