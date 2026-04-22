import {Page,Locator, } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    private readonly pageUrl:string = "https://ndosisimplifiedautomation.vercel.app/#";

   // private loginButton:Locator;
   // private emailInput:Locator;
   // private passwordInput:Locator; 


    get openLoginPage():Locator{
        return this.page.getByRole('button',{name: 'Login'})
    }

    get emailInput():Locator{
        return this.page.getByPlaceholder('Email');
    }

   get passwordInput():Locator{
       return this.page.getByRole('textbox',{name:'Password'})
    }

    async goto(){
        await this.navigateTo(this.pageUrl);
    }

    async clickLoginButton(){
        await this.clickElement(this.openLoginPage);
    }

}
