//functions in js is a simple way to make a package of your written code
//with functions you can reuse your code without rewriting it again and again

function greetUser(name, greetingText){ //parameters
    console.log ("Hello " + name + " , " + greetingText);
    console.log ("Happy to see you again");
}

let name = "rudra"
let greetingText = "Good Morning"

greetUser(name, greetingText);
//this was one way of taking parameters and passing arguments to a function

function sum (a, b, c){
    const d = a + b + c;
    return d; //returning the value of d
}
let ans = sum(1,1,1)

console.log (ans);

//another way of parameter 

function loginMsg (userbane){
    return `Hello ${userbane} , you have successfully logged in`;
}

let username = "dawwgg123"

console.log(loginMsg(username))

//we can also put multiple values using arrays in parameter

function arrayParam (val1,val2,...arr){
    console.log (val1);
    console.log (val2);
    return arr;
}
console.log(arrayParam(1,2,3,4,5,6,7,8,9));