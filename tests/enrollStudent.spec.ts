import { test, expect } from '../src/fixture/customFixture';
import { validUser, courseData } from '../src/data/testData';

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
    await loginPage.openLogin();
    await loginPage.login(validUser.admin.email, validUser.admin.password);

    await dashboardPage.verifyDashboardIsDisplayed();

    //  Navigate to Admin Panel → Enrollments
    await adminPage.goToAdminPanel();
    await adminPage.openEnrollments();

    // Enroll student
    await enrollmentPage.enrollIndividualStudent(
      // "Test 12345",
      //"laeza Kotz"
       courseData.courseName,
       validUser.student.email
    );

    //  Logout
    await page.getByRole('button', { name: '← Back to Website' }).click();
     await adminPage.goToAdminPanel();
   await page.locator('span').filter({ hasText: 'Logout' }).first().click();
    await page.getByRole('button', { name: /logout/i }).click();

    // await loginPage.openLoginModalButton.waitFor();
    // await expect(enrollmentPage.successToast).toBeVisible();


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

