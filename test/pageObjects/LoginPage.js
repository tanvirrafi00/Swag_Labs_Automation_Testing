import BasePage from "../../framework/page/BasePage.js";
import { Input, Label } from "../../framework/elements/index.js";
class LoginPage extends BasePage {
  constructor() {
    super(new Label(`//div[@class="login_credentials_wrap"]`), "Login Page");

    this.usernameField = new Input(`//input[@id="user-name"]`, "username field");
    this.passwordField = new Input(`//input[@id="password"]`, "password field");
    this.loginButton = new Input(`//input[@id="login-button"]`, "Login Button");
    this.errorMessage = new Label(`//h3[@data-test="error"]`, "error message label");
  }
  async setUsername(username) {
    await this.usernameField.typeTextWithClear(username);
  }

  async setPassword(password) {
    await this.passwordField.typeSecretWithClear(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.getText();
  }
}

export default new LoginPage();
