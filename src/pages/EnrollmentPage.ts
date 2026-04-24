import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class EnrollmentPage extends BasePage {


  /* ========= PAGE ACTION BUTTONS ========= */

  get openEnrollUserButton(): Locator {
    return this.page.getByRole('button', { name: 'Enroll User' });
  }

  get submitEnrollButton(): Locator {
    return this.page.getByRole('button', { name: 'Enroll User', exact: true });
  }

  /* ========= COURSE SELECTION ========= */

  get courseDropdown(): Locator {
    return this.page.getByLabel('Select Course');
  }

  /* ========= ENROLLMENT TYPE ========= */

  get individualUserOption(): Locator {
    return this.page.getByRole('button', { name: 'Individual User' });
  }

  /* ========= STUDENT SEARCH ========= */

  get studentSearchInput(): Locator {
    return this.page.getByPlaceholder('Search by name or email');
  }

  studentResult(email: string): Locator {
    return this.page.getByText(email, { exact: false });
  }

  /* ========= SUCCESS MESSAGE ========= */

  get successToast(): Locator {
    return this.page.getByText('Enrolled', { exact: false });
  }

  /* ========= WORKFLOWS ========= */

  async openEnrollUserModal() {
    await this.clickElement(this.openEnrollUserButton);
  }

  async selectCourse(courseName: string) {
    await this.courseDropdown.selectOption({ label: courseName });
  }

  async selectIndividualEnrollment() {
    await this.clickElement(this.individualUserOption);
  }

  async searchAndSelectStudent(studentEmail: string) {
    await this.enterText(this.studentSearchInput, studentEmail);
    await this.clickElement(this.studentResult(studentEmail));
  }

  async submitEnrollment() {
    await this.clickElement(this.submitEnrollButton);
    await this.verifyElementVisible(this.successToast);
  }

  async enrollIndividualStudent(courseName: string, studentEmail: string) {
    await this.openEnrollUserModal();
    await this.selectCourse(courseName);
    await this.selectIndividualEnrollment();
    await this.searchAndSelectStudent(studentEmail);
    await this.submitEnrollment();
  }
}

