import {test,expect} from "@playwright/test"

test('Account Creation', async ({page}) => {
    //launch browser
    await page.goto('https://login.salesforce.com/')
    //Enter username
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    //Enter password
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025')
    //Clicking Login button
    await page.locator('//input[@type="submit"]').click()

    //Clicking on App Launcher
    await page.locator('//div[@class="slds-icon-waffle"]').click()

    //Cliking on View All
    await page.locator('//button[text()="View All"]').click()

    //Searching Accounts
    await page.locator('//input[@placeholder="Search apps or items..."]').fill('Accounts')

    //Clicking Accouts app
    await page.locator('//p[normalize-space(.)="Accounts"]').click()

    //Clicking New
    await page.locator('//div[@title="New"]').click()

    //Entering Account name
    await page.locator('//input[@name="Name"]').fill('Modern Org')

    //Select type
    await page.locator('//button[@aria-label="Type"]').click()
    await page.locator('//span[text()="Customer"]').click()

    //Select Industry
    await page.locator('//button[@aria-label="Industry"]').click()
    await page.locator('//span[text()="Agriculture"]').click()

    //Clicking Save button
    await page.locator('//button[text()="Save"]').click()

    //Verify the Account
    const accountname= await page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]').innerText()
    console.log(accountname);
    expect(accountname).toContain('Modern Org')



})