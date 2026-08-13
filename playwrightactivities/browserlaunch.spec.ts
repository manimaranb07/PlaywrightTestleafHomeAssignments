/* browser-> Launches browser
context->creates an isolated browser session.
page->opens a new tab within that session.  */

import {chromium, test} from "@playwright/test"

test('browser launch', async()=>{
    const browser = await chromium.launch({channel:'chrome',headless:false})
    const context=await browser.newContext()      //context
    const page=await context.newPage()            //page
    
    page.goto("https://www.amazon.in/");


})