import {test,expect} from '@playwright/test'

//This a method 
test("verify ndosi automation title",async({page})=>{


   await page.goto("https://ndosisimplifiedautomation.vercel.app/#")

   await expect(page).toHaveTitle("Ndosi Test Automation")

})

test("login to ndosi website",async({page})=>{


   await page.goto("https://ndosisimplifiedautomation.vercel.app/#")

   await page.getByRole('button',{name: 'Login'}).click()
   await page.waitForTimeout(3000)

   await page.getByRole('textbox',{name:'Email'}).fill('admin@gmail.com')
   await page.getByRole('textbox',{name:'Password'}).fill('@12345678')
   await page.waitForTimeout(3000)
   //await page.locator("button:has-text('Login')").click()
   await page.getByRole('button',{name: 'Login'}).click()
   await page.waitForTimeout(3000)
  
})

test("click menu button",async({page})=>{
     page.getByText('Admin', { exact: true })
   await page.waitForTimeout(3000)


 await page.waitForTimeout(3000)

})