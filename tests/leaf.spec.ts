import {test} from '@playwright/test'

test('Test Login',async ({page}) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demoCSR2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
})