import { expect,test } from "@playwright/test";

test('Decathlon Search',async ({page}) => {
    //Navigate to https://www.decathlon.in/
    await page.goto(' https://www.decathlon.in/')

    //Verify the user is navigated to the Decathlon home page
    const homepage = await page.getByRole('link',{name:'Decathlon Home'})
    await expect(homepage).toBeVisible()

    //Click on the Search icon on the home page
    const searchfield = page.locator('//input[@type="search"]')
    await searchfield.click()
    //Verify the search input field is enabled
    await expect(searchfield).toBeEnabled()

    //Enter the product name as "shoes" in the search field
    await searchfield.fill('Shoes')
    //Press Enter to search the product
    await page.locator('//span[text()="Shoes"]').first().click()
    //Capture and print the page title in the console
    console.log(await page.title());
    //Verify the page title is displayed as "Search | shoes"
   const pageTitle =  await page.locator('//div[text()="Shoes"]')
   await expect(pageTitle).toBeVisible()
   await expect(pageTitle).toHaveText('Shoes')
   const currentpagetitle = await pageTitle.innerText()
   console.log("The Current page title is:",currentpagetitle);
   
   //Click on the "Men" gender filter
   await page.getByRole('button',{name:'Gender'}).first().click()
   await page.waitForTimeout(3000)
   await page.locator('//span[text() = "Men"]').nth(1).click()

   //Click on the "Running" category filter
   await page.locator('//span[text()="Sport"]').click()
   await page.waitForTimeout(3000)
   await page.locator('//span[text()="Running"]').click()

   //Click on the shoe size filter "UK 10.5"
   await page.locator('//span[text()="Size"]').click()
   await page.waitForTimeout(3000)
   await page.locator('//span[text()="Uk 10.5 - eu 45"]').click()

   //Click on the Sort option
   await page.locator('//span[text()="Most relevant"]').click()
   await page.waitForTimeout(3000)
   await page.getByText('Price (low → high) ',{exact:true}).first().click()

  //Click on the first product from the displayed product list
  await page.locator('//div[text()="₹2,499"]').click()
  //Select the shoe size "UK 10.5 - EU 45" on the product detail page
  await page.locator('//span[text()="UK 10.5 - EU 45"]').click()

  //Click on the "Add to Cart" button
  await page.getByRole('button',{name:'Add to cart'}).click()
  const tostageMessage = page.getByText('Product(s) added to cart',{exact:true})
  await expect(tostageMessage).toBeVisible();
  await expect(tostageMessage).toHaveText('Product(s) added to cart')
  const addedtoCard = await tostageMessage.innerText()
  console.log("Product Added:",addedtoCard);
  
   //Click on the Cart options
   await page.locator('//span[text()="Go to cart"]').click()
   //Fetch the total cart value
    const totalValue=page.locator('//p[text()="₹2,499"]')
    await expect(totalValue).toBeVisible()
    await expect(totalValue).toHaveText('₹2,499')

    //Print the total cart amount in the console
    const selectedshoevalue = await totalValue.innerText()
    console.log("The Selected shoe value is:",selectedshoevalue);
    
})