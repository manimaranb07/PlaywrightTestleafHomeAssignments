import {test} from '@playwright/test'
import { verifyAccount } from './Pages/VerifyAccount'

test('Create Account using POM',async ({page}) => {
    
    let verify=new verifyAccount(page)
    await verify.LaunchUrl("https://leaftaps.com/opentaps/control/main")
    await verify.enterCredentials("democsr2","crmsfa")
    await verify.clickonLoginButton()
    await verify.clickonCRMSFA()
    await verify.clickonAccounts()
    await verify.clickonCreateAccount()
    await verify.enterAccountDetails()
    await verify.clickonCreateAccountbutton()
    await verify.verifyAccountName()
    
})  