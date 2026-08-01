import {test} from '@playwright/test'

test('Browser window handle',async ({page,context}) => {
await page.goto('https://www.leafground.com/window.xhtml')

const parentWindow=context.waitForEvent('page')

await page.locator('//span[text()="Open"]').click()

const childWindow=await parentWindow

await page.waitForTimeout(2000)

await childWindow.getByRole('textbox',{name:'E-mail Address'}).fill('testemail123@gmail.com')

await childWindow.close();

await page.bringToFront()
await page.locator('//span[text()="Open Multiple"]').click()

const newWindows = context.pages()
console.log("The new windows count is:",newWindows.length);



   





   
    

   
    
})