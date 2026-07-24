import {test} from "@playwright/test"

test("Page fixture", async ({page}) => {
    await page.goto("https://www.amazon.in/")

    console.log(await page.title());
    console.log(page.url());
    
    

})