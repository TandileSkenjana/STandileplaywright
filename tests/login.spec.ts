import { test } from '../src/fixture/customFixture';
import { expect } from '@playwright/test';
import { validUser } from '../src/data/testData';
import { DashboardPage } from '../src/pages/DashboardPage';
//import { closePool, getLoginById } from '../src/data/dbnLogin';


test.describe('Login to Ndosi Website', () => {

    test('should login with valid credentials', async ({ loginPage, page }) => {  
        await loginPage.goto();
        await loginPage.openLogin();
        await loginPage.emailInput.fill(validUser.admin.email);
        await DashboardPage.prototype.verifyDashboardIsDisplayed.call({ page });
       // await homePage.verifyHomePage.waitFor({ state: 'visible' });
    })

    test.describe('Verify login success', () => {
    test('should login with valid credentials', async ({ loginPage,dashboardPage}) => {
        await loginPage.goto();
        await loginPage.openLogin();
        await loginPage.login(validUser.admin.email, validUser.admin.password);
        await DashboardPage.prototype.verifyDashboardIsDisplayed.call({ page: dashboardPage });
        
    })
})

// test.describe('Login with DB credentials', () => {
//     test('should login using credentials from database (id=2)', async ({ loginPage, homePage }) => {
//         // Fetch credentials from MySQL database
//         const creds = await getLoginById(2);
        
//         await loginPage.goto();
//         await loginPage.openLogin();
//         await loginPage.login(creds.email, creds.password);
//         await homePage.verifyHomePage.waitFor({ state: 'visible' });
//     })

//     test.afterAll(async () => {
//         // await closePool();
//     })

    

// })

// })

// function getLoginById(arg0: number) {
//     throw new Error('Function not implemented.');
// }
});
