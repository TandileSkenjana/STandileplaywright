import {Page,Locator, expect  } from "@playwright/test";

export class  BasePage {
    protected readonly page:Page;

    constructor(page:Page) {
        this.page=page;
        
    }

    async navigateTo(url:string){
        console.log(`Navigating to URL: ${url}`);
        await this.page.goto(url);
    }

    async clickElement(locator:Locator){
        console.log(`Clicking on element: ${locator}`);
        await locator.click();
    }

    // async fillInput(locator:Locator,text:string){
    //     console.log(`Entering text: "${text}" into element: ${locator}`);
    //     await locator.fill(text);
    // }

    // async enterText(locator:Locator,text:string){
    //     console.log(`Entering text: "${text}" into element: ${locator}`);
    //     await locator.fill(text);
    // }

    
async enterText(locator: Locator, text: string) {
  console.log(`Entering text into element`);

  // Make sure element is ready for interaction
  await locator.waitFor({ state: 'visible' });
  await locator.waitFor({ state: 'attached' });

  // Clear first (important for React controlled inputs)
  await locator.fill('');

  // Fill in one atomic action
  await locator.fill(text);

  // Ensure value was actually set (very important for password fields)
  await expect(locator).toHaveValue(text);
}


    async verifyElementVisible(locator:Locator){
        console.log(`Verifying element is visible: ${locator}`);
        await expect(locator).toBeVisible();
    }
    

    
}
