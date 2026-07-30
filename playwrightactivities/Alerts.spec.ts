import {test } from "@playwright/test";

test('Alert Learning',async ({page}) => {
    await page.goto('https://www.leafground.com/alert.xhtml')
    page.on('dialog',async(alert)=>{
    let alertType=alert.type()
    console.log(alertType);

    let alertMessage=alert.message()
    console.log(alertMessage);

    if(alertType==="confirm"){
    await alert.accept()
    }else {
    await alert.accept()
   }
    
    
})
await page.locator('(//span[text()="Show"])[1]').click()
await page.locator('(//span[text()="Show"])[2]').click()
await page.locator('(//span[text()="Show"])[5]').click()


})