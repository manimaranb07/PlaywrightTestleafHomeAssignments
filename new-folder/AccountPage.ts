import { homePage } from "./HomePage";

export class accountPage extends homePage{
    async clickonCreateAccount(){
        await this.page.locator('//a[text()="Create Account"]').click()
    }
}