import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AdminPage extends BasePage {

  get adminPanelLink(): Locator {
    return this.page.getByRole('link', { name: 'Admin Panel' });
  }

  get enrollmentsLink(): Locator {
    return this.page.getByRole('link', { name: 'Enrollments' });
  }

  async goToAdminPanel() {
    await this.clickElement(this.adminPanelLink);
  }

  async openEnrollments() {
    await this.clickElement(this.enrollmentsLink);
  }
}
