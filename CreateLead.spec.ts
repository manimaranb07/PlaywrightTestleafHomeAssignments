import {test} from '@playwright/test'

test ('Create Lead', async ({page}) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('[type="submit"]').click()
    
    await page.locator('[src="/opentaps_images/integratingweb/crm.png"]').click()
    await page.locator('[href="/crmsfa/control/leadsMain"]').click()
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()

    await page.locator('[id="createLeadForm_companyName"]').fill('TestLeaf')
    await page.locator('[id="createLeadForm_firstName"]').fill('Manimaran')
    await page.locator('[id="createLeadForm_lastName"]').fill('B')
    await page.locator('#createLeadForm_personalTitle').fill('Mr.')
    await page.locator('#createLeadForm_generalProfTitle').fill('Testing')
    await page.locator('#createLeadForm_annualRevenue').fill('250000')
    await page.locator('#createLeadForm_departmentName').fill('IT')

    const sourceDropdown = page.locator('#createLeadForm_dataSourceId>option')
    const sourceValues = await sourceDropdown.count()
    console.log("The source vlaue count:", sourceValues);
    

    for(let index=0; index<sourceValues; index++ ){
        console.log(await sourceDropdown.nth(index).innerText());
        
    }
    


    await page.locator('#createLeadForm_primaryPhoneNumber').fill('8888838398')

    await page.locator('[class="smallSubmit"]').click()
})
