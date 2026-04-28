import { test, expect } from '../src/fixture/customFixture';
import { validUser, courseData } from '../src/data/testData';
import { DashboardPage } from '../src/pages/DashboardPage';

test.describe('Admin enrolls student, student verifies enrollment', () => {

  test('Enroll student to course and validate as student', async ({
    loginPage,
    dashboardPage,
    adminPage,
    enrollmentPage,
    studentCoursesPage,
    page
  }) => {

    // Login as Admin
    await loginPage.goto();
    await page.waitForTimeout(3000)
    await loginPage.openLogin();
    await page.waitForTimeout(3000)
    await loginPage.login(validUser.admin.email, validUser.admin.password);
    await DashboardPage.prototype.verifyDashboardIsDisplayed.call({ page });

    //  Navigate to Admin Panel → Enrollments
    await adminPage.goToAdminPanel();
    await adminPage.openEnrollments();

    // Enroll student
    await enrollmentPage.enrollIndividualStudent(
      courseData.courseName,
      validUser.student.email
    );

    //  Logout
    await page.getByRole('button', { name: 'Logout' }).click();

    //  Login as Student
    await loginPage.goto();
    await loginPage.openLogin();
    await loginPage.login(
      validUser.student.email,
      validUser.student.password
    );

    //  Validate enrollment
    await studentCoursesPage.verifyCourseIsEnrolled(
      courseData.courseName
    );
  });
});

