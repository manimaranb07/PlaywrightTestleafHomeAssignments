import { LoginPage } from "./LoginPage";

export class welcomPage extends LoginPage{

    async clickonCRMSFA(){
        await this.page.getByRole('link',{name:'CRM/SFA'}).click()
    }

    async ClickonLogout(){
        await this.page.getByRole('button',{name:'Logout'}).click()
    }
}