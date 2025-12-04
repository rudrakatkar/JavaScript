"use strict"; //this means treat the code as strict mode, which helps catch common errors and unsafe actions

/*
NOTE : 

In js we dont need to define the datatype always, we just need to assign a varible and it will 
automatically define the datatype of the variable because js is a dynamically typed language.
*/

let a = 19; // a is a number i.e integer datatype
let b = 0.6 // b is a number i.e float datatype
let c = "rudra"; // c is a string datatype
let d = true; // d is a boolean datatype
let e = null; // e is a null datatype
let f = undefined;// f is an undefined datatype it means the variable is declared but not assigned any value

// we can also use typeof operator to check the datatype of a variable
console.log(typeof a); // number
console.log(typeof b); // number
console.log(typeof c); // string
console.log(typeof d); // boolean
console.log(typeof e); // object (null is considered an object in JavaScript)   
console.log(typeof f); // undefined

console.log (typeof null); // object (null is considered an object in JavaScript)
console.log (typeof undefined); // undefined
console.log (typeof NaN); // number (NaN stands for Not-a-Number, but its type is number)

