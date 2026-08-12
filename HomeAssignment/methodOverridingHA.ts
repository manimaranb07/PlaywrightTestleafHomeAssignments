class BasePage{
    findElement(){
        console.log("Finding the element");
    }

    clickElement(){
        console.log("Clicking the element");
        
    }

    enterText(){
        console.log("Entering the text");
        
    }

    performCommonTask(){
        console.log("Performing the task");
        
    }

}

class Login extends BasePage{
    performCommonTask(): void {
        console.log("Task Performing completed");
    }
}

let bsc = new BasePage()
let lgin = new Login()

bsc.clickElement()
bsc.enterText()
bsc.findElement()
bsc.performCommonTask()
lgin.performCommonTask()//overriding