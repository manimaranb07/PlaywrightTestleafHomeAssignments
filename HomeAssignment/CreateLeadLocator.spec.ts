import {test} from '@playwright/test'

test ('Create Lead with Playwright Locator', async ({page}) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name:'Username'}).fill('Demosalesmanager')
    await page.getByLabel('Password',{exact:true}).nth(0).fill('crmsfa')
    await page.getByRole('button',{name:'Login'}).click()

    await page.getByRole("link", {name:'CRM/SFA'}).click()
    
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByText('Create Lead',{exact:true}).nth(0).click()
    await page.locator('#createLeadForm_companyName').fill('Tech ID')
    await page.locator('#createLeadForm_firstName').fill('Manimaran')
    await page.locator('#createLeadForm_lastName').fill('B')
    await page.locator('#createLeadForm_personalTitle').fill('Mr')
    await page.locator('#createLeadForm_generalProfTitle').fill('QA')
    await page.locator('#createLeadForm_annualRevenue').fill('300000')
    await page.locator('#createLeadForm_departmentName').fill('IT')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9788973459')

    await page.getByRole('button',{name:'Create Lead'}).click()
})