import { expect } from "@playwright/test";
import { createAccoutPage } from "./CreateAccountPage";

export class verifyAccount extends createAccoutPage{
    async verifyAccountName(){
    const lastName  =await this.page.locator('//span[text()="Walter White"]').innerText()
    console.log(lastName);

     //non-retry assertion
    expect(lastName).toBe('Walter White')

    console.log("Account Created Successfully using POM");
    
    }
        
}