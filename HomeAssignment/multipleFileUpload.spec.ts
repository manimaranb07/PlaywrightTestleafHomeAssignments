import {expect, test} from '@playwright/test'
import path from 'path'

test('Multiple file upload',async ({page}) => {
    //Navigate to file page
    await page.goto('https://www.leafground.com/file.xhtml')
    
    //Click on
    const advanceUpload=await page.locator('(//input[@type="file"])[2]')

    await advanceUpload.setInputFiles([path.join('Data/QA-Testing-1024x533.jpg'),path.join('Data/qa.jpg')])

    await page.locator('//span[text()="Upload"]').click()

    const verifyfileUpload = await page.locator('//span[text()="Successful"]').innerText()
    console.log("The file1 uploaded is:",verifyfileUpload);

    await expect(page.locator('//span[text()="Successful"]')).toContainText('Successful')

   

    
    
  

    
    

  
})