import {test} from '@playwright/test'

test('frame handling',async ({page}) => {
    await page.goto('https://www.leafground.com/frame.xhtml')

    const allFrame= page.frames()
    console.log(allFrame.length);
    
    
})