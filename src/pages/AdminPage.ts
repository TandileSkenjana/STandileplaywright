import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AdminPage extends BasePage {

  get userMenuButton(): Locator {
    return this.page.locator('button.user-pill');
  }

  get userMenuDropdown(): Locator {
  return this.page.locator('.nav-dropdown.open');
}

  get adminPanelLink(): Locator {
  return this.userMenuDropdown.locator('span:has-text("Admin Panel")');
}

  get adminDashboardHeading(): Locator {
  return this.page.getByText('Admin Dashboard');
}

  get enrollmentsLink(): Locator {
    return this.page.locator('aside, nav').getByText('Enrollments');
  }

  async goToAdminPanel() {
    await this.clickElement(this.userMenuButton);
     await this.userMenuDropdown.waitFor({ state: 'visible' });

 // await this.adminPanelLink.waitFor({ state: 'visible' });
    await this.clickElement(this.adminPanelLink);

    await this.adminDashboardHeading.waitFor({ state: 'visible' });

}

  async openEnrollments() {
    await this.enrollmentsLink.waitFor({ state: 'visible' });
    await this.clickElement(this.enrollmentsLink);
  }
}