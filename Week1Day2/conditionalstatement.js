function launchBrowser(browserName) {

    if (browserName == "chrome") {

        console.log("Chrome has launched successfully");
        
        
    } else {
        console.log("Chrome isn't launched yet");
        
    }
    
} 

function runTests(testType) {

    switch (testType) {
        case "Smoke":
            console.log("Smoke Suite is Running");
            break;
        case "Sanity":
            console.log("Sanity Suite is Running");
            break;
        case "Regression":
            console.log("Regression Suite is Running");
            break;                
        default:
            console.log("No Suite is triggered yet");
            break;
    }
    
}

launchBrowser("chrome")
runTests("Regression")

launchBrowser("dummy")
runTests("dummy")