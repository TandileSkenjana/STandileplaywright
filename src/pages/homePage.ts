import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    get verifyHomePage():Locator{
        return this.page.getByRole('heading',{name:'Welcome to Ndosis Simplified Automation'})
    }   
    async verifyHomePageIsDisplayed(){
        await this.verifyElementVisible(this.verifyHomePage);
    }
}