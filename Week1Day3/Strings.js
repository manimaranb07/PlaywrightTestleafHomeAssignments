//String - represents using "", '', ``

//String literals
let companyName="Testleaf"
let firmName="Testleaf"
console.log(companyName===firmName);

//String objects -->compares the reference
let companyname1="TestLeaf";
let Firmname1= "Testleaf"
console.log(companyname1===Firmname1);

//length--->to retrive the length of the string
//index--> index starts from 0
//length starts from 1

let course="Playwright" //index= 9, length= 10
console.log(course);

//escape sequence -     \, \t, \n
let data = 'it\s a regression testcase'
console.log(data);

//concat()"+", `${}`-template literal  --> joining to strings
let v1=50
let v2="Testcases"
console.log("there are", v1 + v2);
console.log((v1.toString()).concat(v2));
console.log(`there are ${v1}${v2}`);

//charAt()-->Returns the character at a specific index
let test="Automation"
console.log(test.charAt(4));

//indexof()--> to retrive the index of the character
let company="Tellianti"
console.log(company.indexOf("i"));// 1st occuring index
console.log(company.indexOf("i", 3));//2nd occuring index
console.log(company.lastIndexOf("t"));

//substring()---> extract the portion of the string
let text="javascript"
console.log(text.substring(0,4,));

//slice() -->extracts part of a string and supports negative index
console.log(text.slice(4,7));//scr
console.log(text.slice(7,4));//empty
console.log(text.slice(-3));
console.log(text.slice(-9,-1));

//split()---> Converts a string into an array
let name="Test Automation"
console.log(name.split(""));









