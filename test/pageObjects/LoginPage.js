import BasePage from "../../framework/page/BasePage.js";
import { Input, Label } from "../../framework/elements/index.js";
class LoginPage extends BasePage {
  constructor() {
    super(new Label(`//div[@class="login_credentials_wrap"]`), "Login Page");

    this.usernameField = new Input(`//input[@id="user-name"]`, "username field");
    this.passwordField = new Input(`//input[@id="password"]`, "password field");
    this.loginButton = new Input(`//input[@id="login-button"]`, "Login Button");
  }
  async setUsername(username) {
    await this.usernameField.typeText(username);
  }

  async setPassword(password) {
    await this.passwordField.typeSecret(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}

export default new LoginPage();
