//Arrays ---> Collections of hetrogeneous datatpyes

let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits);//["Apple", "Mango", "Orange"];
console.log(fruits[2]); //Orange

fruits[3]="Jackfruit";
console.log(fruits);//[ 'Apple', 'Mango', 'Orange', 'Jackfruit']

//length
console.log(fruits.length);//4


//push() --> adds 1 or more element at the end of the array
console.log(fruits.push("Banana","Graphs"));
console.log(fruits);//[ 'Apple', 'Mango', 'Orange', 'Jackfruit', 'Banana', 'Graphs']

//pop() ---> remove only 1 element at the end of the array
console.log(fruits.pop());//Graphs removed
console.log(fruits);//[ 'Apple', 'Mango', 'Orange', 'Jackfruit', 'Banana' ]

//unshift() ---> adds 1 or more element at the start of array
console.log(fruits.unshift("Pomog"));
console.log(fruits);

//shift() ---> removes 1 element at the start of the array
console.log(fruits.shift());
console.log(fruits);

//slice() ---> extracts the portion of the array, it will not alter the original array
console.log(fruits.slice(1,4));
console.log(fruits);

//splice() ---> add and remove elements in between the array and it will modify the original array
console.log(fruits.splice(2,5));
console.log(fruits);










