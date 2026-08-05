import {expect, test} from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

//Convert the CSV data into JavaScript objects.
let value:any=parse(fs.readFileSync('Data/logindata.csv',"utf-8"),{skip_empty_lines:true,columns:true})
//console.log(value);

//Iterate through each record using a loop.
for(let credentials of value){

test(`Leaftaps Login ${credentials.tcid}`,async ({page}) => {

    //Navigate to https://leaftaps.com/opentaps/control/main.
    await page.goto('https://leaftaps.com/opentaps/control/main')

    //Enter the username and password from the CSV file
    await page.getByRole('textbox',{name:'Username'}).fill(credentials.username)
    await page.getByRole('textbox',{name:'Password'}).fill(credentials.password)
    //Click Login
    await page.getByRole('button',{name:'Login'}).click()
    
    //Verify that the CRM/SFA home page is displayed successfully.
    const homePage=await page.getByRole('link',{name:'CRM/SFA'})
    const homeTitle=await homePage.innerText()
    console.log("The Home Page name is:",homeTitle);

    await expect(page.getByRole('link',{name:'CRM/SFA'})).toContainText('CRM/SFA')
    
    
})
}