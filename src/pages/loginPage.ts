import {Page,Locator, } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private readonly pageUrl:string = "https://ndosisimplifiedautomation.vercel.app/#";

 get openLoginModalButton(): Locator {
    return this.page.locator('button.user-pill');
  }

  get submitLoginButton(): Locator {
    return this.page.locator('#login-submit');
  }

  get emailInput(): Locator {
    return this.page.getByPlaceholder('Email');
  }

  get passwordInput(): Locator {
    return this.page.locator('#login-password');
  }

  async goto() {
    await this.navigateTo(this.pageUrl);
  }

  async openLogin() {
   // await this.clickElement(this.openLoginModalButton);
    await this.openLoginModalButton.waitFor({ state: 'visible' });
    await this.clickElement(this.openLoginModalButton);
    await this.emailInput.waitFor({ state: 'visible' });

  }

 async login(email: string, password: string) {
  await this.enterText(this.emailInput, email);
  await this.enterText(this.passwordInput, password);

  await this.clickElement(this.submitLoginButton);

  // Wait for something that proves login succeeded
  await this.page.waitForSelector('text=Welcome back', { timeout: 10000 });
}


  }



    // async login(email: string, password: string){
    //     await this.enterText(this.emailInput, email);
    //     await this.enterText(this.passwordInput, password);
    //     await this.clickElement(this.loginButton);
    //     //await this.page.pause();
    // }
  