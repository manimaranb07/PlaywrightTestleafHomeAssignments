/* loadurl()
entercredentials
clickingonLoginButton() */
import {chromium,Page} from '@playwright/test'

export class LoginPage{
    page:Page
    constructor(temppage:Page){
        this.page=temppage
    }

    async LaunchUrl(url:string){
        await this.page.goto(url)

    }

    async enterCredentials(username:string,password:string){
        await this.page.locator('#username').fill(username)
        await this.page.locator('#password').fill(password)

    }

    async clickonLoginButton(){
        await this.page.locator('.decorativeSubmit').click()

    }

    async closeBrowser(){
        await this.page.close()

    }
}
//browser instance 
// async function doLogin() {
    

// const browser = await chromium.launch({headless:false})
// const context=await browser.newContext()
// const page = await context.newPage()

// let lp = new LoginPage(page)
// await lp.LaunchUrl("https://leaftaps.com/opentaps/control/main")
// await lp.enterCredentials("demoCSR2","crmsfa")
// await lp.clickonLoginButton()
// await lp.closeBrowser()

// }
