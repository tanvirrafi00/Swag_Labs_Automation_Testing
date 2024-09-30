import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class ProductsPage extends BasePage {
  constructor() {
    super(new Label(`//span[@class="title"]`, "Product page label"), "Product page");
    this.menuButton = new Button(`//button[@id="react-burger-menu-btn"]`, "Menu button");
    this.leftSidebar = new Label(`//div[@class="bm-menu"]`, "Left sidebar");
    this.logoutLink = new Label(`//a[@id="logout_sidebar_link"]`, "Logout Link");
  }

  async clickMenuButton() {
    await this.menuButton.click();
  }
  async clickLogoutLink() {
    await this.logoutLink.state().waitForDisplayed();
    await this.logoutLink.click();
  }
}

export default new ProductsPage();
