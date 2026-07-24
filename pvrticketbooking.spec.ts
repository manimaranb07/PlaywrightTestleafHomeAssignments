import { expect,test } from "@playwright/test";

test('PVR Ticket booking',async ({page}) => {
    //Navigate to https://www.pvrcinemas.com/.
    await page.goto(' https://www.pvrcinemas.com/.')
    //Select the required city
    await page.locator('//span[text()="Chennai"]').click()
    // Click on the Cinema option
    await page.locator('//span[text()="Cinema"]').click()
    // Click on Select Cinema dropdown
    await page.locator('//span[text()="Select Cinema"]').click()
    //Select any available cinema from the list
    await page.locator('//span[text()="PVR Sathyam Royapettah Chennai"]').click()
    // Select any available date
    await page.locator('//span[text()="26 Jul"]').click()
    //Select any available movie from the movie list
    await page.locator('(//span[text()="THE ODYSSEY"])[3]').click()
    //Select any available show time
    await page.locator('//span[text()="04:35 PM"]').click()
    // Click on the Submit button
    await page.getByRole('button',{name:'Submit'}).click()
    //Accept the consent/cookie popup if displayed
    await page.getByRole('button',{name:'Accept'}).click()
    //Accept any additional confirmation popup if displayed
    await page.getByRole('button',{name:'Accept'}).click()

    //Select any available seat from the seating layout
    const availableseat = await page.locator('//span[@id="BU.BUDGET|N:12"]')
    await availableseat.click()

    //Verify the selected seat information is displayed
    const selectedSeat = await page.locator('//span[text()="12"]').first()
    await expect(selectedSeat).toBeVisible();
    await expect(selectedSeat).toHaveText('12')
    const seatNo = await selectedSeat.innerText()
    console.log("The selected seat no:",seatNo);

    // Verify the total ticket amount is displayed
    const totalticketamount = await page.locator('//h6[text() = "78.26"]')
    await expect(totalticketamount).toBeVisible()
    await expect(totalticketamount).toHaveText('78.26')
    const ticketamount = await totalticketamount.innerText()
    console.log("The ticket amount is:",ticketamount);

    //verify the title of the movie
    const selectedmovietitle = await page.locator('//h5[text()="THE ODYSSEY"]')
    await expect(selectedmovietitle).toBeVisible()
    await expect(selectedmovietitle).toHaveText('THE ODYSSEY')
    const movietitle = await selectedmovietitle.innerText()
    console.log("The Selected movie is:",movietitle);
    

    



    


    

})