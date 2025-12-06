/*
scope means the accessibility of variables, objects and functions in certain parts of the code during runtime

there are two types of scopes in js

1. Global Scope
2. Local Scope
*/

//global scope

let a = 900
 

//local scope
if (true){
    let a = 200
    console.log (a); //200
}

console.log (a);
//this is why we should use let and const instead of var because var does not have block scope

const subtract = function (num1,num2){
    const result = num1 - num2
    return result
}

console.log (subtract(10,5));

//this is another way of creating a function using function expression

/*
now we will start arrow functions
arrow functions are a compact alternative to traditional function expressions
they are often used for short functions that are used as arguments to higher-order functions like map, filter and reduce
*/
