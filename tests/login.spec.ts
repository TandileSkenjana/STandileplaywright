import { test } from '../src/fixture/customFixture';
import { expect } from '@playwright/test';
import { validUser } from '../src/data/testData';

test.describe('Login to Ndosi Website', () => {

    test('should login with valid credentials', async ({ loginPage }) => {  
        await loginPage.goto();
        await loginPage.clickLoginButton();
        await loginPage.emailInput.fill(validUser.admin.email);
    })

    // test('should not login with invalid credentials', async ({ loginPage }) => {
    //     await loginPage.goto();
    //     await loginPage.clickLoginButton();
    //     await loginPage.emailInput.fill('invalid@example.com');
    // })
})