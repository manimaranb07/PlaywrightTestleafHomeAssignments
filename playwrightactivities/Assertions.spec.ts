import { expect,test } from "@playwright/test";

test('Playwright Assertions', async ({page}) => {
    await page.goto('https://leafground.com/input.xhtml')

   const disabledTextbox =  page.locator('//input[@placeholder="Disabled"]')
   await expect(disabledTextbox).toBeDisabled()

   page.getByPlaceholder('')









    
})