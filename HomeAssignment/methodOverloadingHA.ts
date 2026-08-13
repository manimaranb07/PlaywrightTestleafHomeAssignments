import { escape } from "node:querystring";

class APIClient{
    sendRequest(endpoint:string):void
    sendRequest(endpoint:string,requestBody:string,requestStatus:boolean):void

    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean){

        if(endpoint){
            console.log("Endpoint value:",endpoint);
            
        }else if(requestBody){
            console.log("Request body value:",requestBody);
            
        }else{
            console.log("Request status:",requestStatus);
            
        }
    }
}

let sendR = new APIClient()
sendR.sendRequest("launch browser")
sendR.sendRequest("lanuch browser","Login",true)
