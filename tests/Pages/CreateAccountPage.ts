import { accountPage } from "./AccountPage";

export class createAccoutPage extends accountPage{
    async enterAccountDetails(){
        await this.page.locator('//input[@id="accountName"]').fill('ManiAcc')
        await this.page.locator('//input[@id="groupNameLocal"]').fill('Walter White')
    }

    async clickonCreateAccountbutton(){
        await this.page.locator('[value="Create Account"]').click()
    }
}