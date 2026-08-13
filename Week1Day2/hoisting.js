//var --> hoisting takes place and returns you undefined
console.log(x);
var x=20;
/* Internally
var x
console.log(x);
x=20;
*/


//let
console.log(y); //ReferenceError: Cannot access 'y' before initialization
let y=25;
/*Internally
let y
console.log(y);
y=25;
*/
