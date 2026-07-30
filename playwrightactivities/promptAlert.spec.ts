import {test} from "@playwright/test"

test('prompt alert handle',async ({page}) => {
    await page.goto('https://www.leafground.com/alert.xhtml')

    page.on('dialog',async(alert)=>{
    let alertType = alert.type()
    console.log(alertType);

    let alertMessage = alert.message()
    console.log(alertMessage);

    if(alertType==="prompt"){
        await alert.accept("Plawright")
    }else{
        await alert.dismiss()
    }
    
})


await page.locator('(//span[text()="Show"])[5]').click()
await page.waitForTimeout(2000)
})