import {Page,Locator, expect  } from "@playwright/test";

export class  BasePage {
    protected readonly page:Page;

    constructor(page:Page) {
        this.page=page;
        
    }

    async navigateTo(url:string){
        console
        await this.page.goto(url);
    }

    async clickElement(locator:Locator){
        console.log(`Clicking on element: ${locator}`);
        await locator.click();
    }

    async fillInput(locator:Locator,text:string){
        console.log(`Entering text: "${text}" into element: ${locator}`);
        await locator.fill(text);
    }

    async enterText(locator:Locator,text:string){
        console.log(`Entering text: "${text}" into element: ${locator}`);
        await locator.type(text);
    }

    async verifyElementVisible(locator:Locator){
        console.log(`Verifying element is visible: ${locator}`);
        await expect(locator).toBeVisible();
    }
    

    
}
