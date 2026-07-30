import {expect, test} from '@playwright/test'

test('Alert and Frame',async ({page}) => {
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    
    page.once('dialog',async(alert)=>{
        const alertType = alert.type()
        console.log("Alert Type:",alertType);

        const alertMessage =  alert.message()
        console.log("Alert Message is:",alertMessage);

        await alert.accept()
        
        
    })
    const frameref =  page.frameLocator('//iframe[@id="iframeResult"]')
    await frameref.locator('//button[text()="Try it"]').click()

    const resulttext =  await frameref.locator('//p[text()="You pressed OK!"]').innerText()
    console.log("The result text:",resulttext);

    await expect(frameref.locator('//p[text()="You pressed OK!"]')).toHaveText('You pressed OK!')

   
    
    



    
    
})