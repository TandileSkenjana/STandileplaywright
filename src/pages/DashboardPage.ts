import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage {
   
    
get welcomeHeading(): Locator {
    return this.page.getByRole('heading', {
      name: /Welcome back, Desiree! 👋/ });
  }

  async verifyDashboardIsDisplayed() {
    await this.verifyElementVisible(this.welcomeHeading);

  }
}
 