import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class StudentCoursesPage extends BasePage {

  enrolledCourse(courseName: string): Locator {
    return this.page.getByText(courseName);
  }

  async verifyCourseIsEnrolled(courseName: string) {
    await this.verifyElementVisible(this.enrolledCourse(courseName));
  }
}