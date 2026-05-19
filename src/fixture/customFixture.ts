import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import { dashboardPage } from '../pages/dashboardPage';

import { AdminPage } from '../pages/AdminPage';
import { EnrollmentPage } from '../pages/EnrollmentPage';
import { StudentCoursesPage } from '../pages/StudentCoursesPage';


type CustomFixtures = { 
    loginPage:LoginPage
    dashboardPage: dashboardPage
    //homePage:HomePage
    adminPage: AdminPage
    enrollmentPage: EnrollmentPage
    studentCoursesPage: StudentCoursesPage
}

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) => {
        const dashboardPageInstance = new dashboardPage(page);
        await use(dashboardPageInstance);
    },

    adminPage: async ({ page }, use) => {
        const adminPage = new AdminPage(page);
        await use(adminPage);
    },

    enrollmentPage: async ({ page }, use) => {
        const enrollmentPage = new EnrollmentPage(page);
        await use(enrollmentPage);
    },

    studentCoursesPage: async ({ page }, use) => {
        const studentCoursesPage = new StudentCoursesPage(page);
        await use(studentCoursesPage);
    }   
});

export {expect} from '@playwright/test';

