import { test } from '../src/fixture/customFixture';
import { expect } from '@playwright/test';
import { validUser } from '../src/data/testData';
import { closePool, getLoginById } from '../src/data/dbnLogin';

test.describe('Login to Ndosi Website', () => {

    test('should login with valid credentials', async ({ loginPage, page }) => {  
        await loginPage.goto();
        await loginPage.clickLoginButton();

        await page.waitForTimeout(3000)

        await loginPage.emailInput.fill(validUser.admin.email);
        await page.waitForTimeout(3000)

    
    })

    test.describe('Verify login success', () => {
    test('should login with valid credentials', async ({ loginPage,homePage}) => {
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.login(validUser.admin.email, validUser.admin.password);
        await homePage.verifyHomePage.waitFor({ state: 'visible' });
        
    })
})

test.describe('Login with DB credentials', () => {
    test('should login using credentials from database (id=2)', async ({ loginPage, homePage }) => {
        // Fetch credentials from MySQL database
        const creds = await getLoginById(2);
        
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.login(creds.username, creds.password);
        await homePage.verifyHomePage.waitFor({ state: 'visible' });
    })

    test.afterAll(async () => {
        await closePool();
    })

    

})

})