import { test, expect } from '../src/fixture/customFixture';
import { validUser, courseData } from '../src/data/testData';

test.describe('Admin enrolls student, student verifies enrollment', () => {

  test('Enroll student to course and validate as student', async ({
    loginPage,
    homePage,
    adminPage,
    enrollmentPage,
    studentCoursesPage,
    page
  }) => {

    // Login as Admin
    await loginPage.goto();
    await loginPage.openLogin();
    await loginPage.login(validUser.admin.email, validUser.admin.password);
    await homePage.verifyHomePageIsDisplayed();

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

