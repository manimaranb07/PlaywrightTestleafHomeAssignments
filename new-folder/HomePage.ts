import { welcomPage } from "./WelcomePage";

export class homePage extends welcomPage{

    async clickonAccounts(){
        await this.page.locator('//a[text()="Accounts"]').click()
    }
}