import {expect, test} from '@playwright/test'
import data from '../../Data/snm.json'

test('Service new mobile order',async ({page}) => {
    //Launch the ServiceNow application
    await page.goto(' https://dev230198.service-now.com/')
    // Login with valid credentials
    await page.getByRole('textbox',{name:'User name'}).nth(0).fill(data.username)
    await page.getByRole('textbox',{name:'Password'}).nth(0).fill(data.password)
    await page.locator('//button[text()="Log in"]').click()

    //Click All, enter Service Catalog in the filter navigator, and press Enter or click Service Catalog
    await page.locator('[aria-label="All"]').click()
    await page.locator('#filter').fill('Service Catalog')
    await page.getByRole('link',{name:'Service Catalog'}).first().click()

    //Click on Mobiles
   const mobileFrame = page.frameLocator('[name="gsft_main"]')
   await mobileFrame.getByRole('link',{name:'Mobiles'}).nth(0).click()

   //Select Apple iPhone 13 Pro
   const iphoneFrame = page.frameLocator('[id="gsft_main"]')
   await iphoneFrame.locator('//strong[text()="Apple iPhone 13 pro"]').click()

   //Choose Yes option in Lost or Broken iPhone
   const optionsFrame = page.frameLocator('iframe[id="gsft_main"]')
   await optionsFrame.locator('//label[text()="Yes"]').click()

   //Enter phone number as 99 in the Original Phone Number field
   await optionsFrame.locator('//span[text()="What was the original phone number?"]').fill('99')

   //Select Unlimited from the dropdown in Monthly Data Allowance
   await optionsFrame.locator('select.cat_item_option').selectOption('Unlimited')

   //Update Color field to Sierra Blue and Storage field to 512 GB
   await optionsFrame.locator('//label[text()="Sierra Blue"]').click()
   await optionsFrame.locator('//label[text()="512 GB [add $300.00]"]').click()

   //Click on Order Now option
   await optionsFrame.getByRole('button',{name:'Order Now'}).click()

   //Verify the order is placed and copy the request number
   const orderFrame = page.frameLocator('iframe[id="gsft_main"]')

   const verifyOrder =await orderFrame.locator('//span[text()="Thank you, your request has been submitted"]').innerText()
   console.log("Order Placed:",verifyOrder);
   expect(verifyOrder).toBe('Thank you, your request has been submitted')

   const requstNumber=await orderFrame.locator('a[id="requesturl"]').innerText()
   console.log("The request number is:",requstNumber);
   
   //Take a snapshot of the order placed pag
   await page.screenshot({path:'Data/order.png',fullPage:true})


   
    
    

    
})
