import {Page,Locator, } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private readonly pageUrl:string = "https://ndosisimplifiedautomation.vercel.app/#";

   // private loginButton:Locator;
   // private emailInput:Locator;
   // private passwordInput:Locator; 


//     get openLoginPage():Locator{
//         return this.page.getByRole('button',{name: 'Login'})
//     }

//     get loginButton():Locator{
//         return this.page.getByRole('button',{name: 'Login'})
//     }

//     get emailInput():Locator{
//         return this.page.getByPlaceholder('Email');
//     }

//    get passwordInput():Locator{
//        return this.page.getByPlaceholder('Password');
//     }

//     async goto(){
//         await this.navigateTo(this.pageUrl);
//     }

//     async clickLoginButton(){
//         await this.clickElement(this.openLoginPage);
//     }



 get openLoginModalButton(): Locator {
    return this.page.getByRole('button', { name: 'Login', exact: true });
  }

  get submitLoginButton(): Locator {
    return this.page
      .locator('form')
      .getByRole('button', { name: 'Login' });
  }

  get emailInput(): Locator {
    return this.page.getByPlaceholder('Email');
  }

  get passwordInput(): Locator {
    return this.page.getByPlaceholder('Password');
  }

  async goto() {
    await this.navigateTo(this.pageUrl);
  }

  async openLogin() {
    await this.clickElement(this.openLoginModalButton);
  }

  
async login(email: string, password: string) {
    await this.enterText(this.emailInput, email);
    await this.enterText(this.passwordInput, password);
    await this.clickElement(this.submitLoginButton);
  }



    // async login(email: string, password: string){
    //     await this.enterText(this.emailInput, email);
    //     await this.enterText(this.passwordInput, password);
    //     await this.clickElement(this.loginButton);
    //     //await this.page.pause();
    // }
}

  