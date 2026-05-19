import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class dashboardPage extends BasePage {

  
constructor(page: Page) {
    super(page);
  }

   
    
get welcomeHeading(): Locator {
    return this.page.getByRole('heading', {
       name: /Welcome back/i });
  }

  async verifyDashboardIsDisplayed() {
    await this.verifyElementVisible(this.welcomeHeading);

  }
}
 