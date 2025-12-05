const array = [1,2,3,4,5]
//you can also add string and other datatypes in array 
const mixedArray = [1, "rudra", true, null, undefined, 5.6]
console.log (mixedArray[1]); //rudra

const heroes = ["spiderman", "ironman", "thor", "hulk"]
console.log (heroes[0])

console.log("\n");

//Array Methods

/*
array.push() - adds an element at the end of the array
array.pop() - removes an element from the end of the array
array.shift() - removes an element from the start of the array
*/

//slice and splice methods

const numbers = [1,2,3,4,5,6,7,8]
const num1 = numbers.slice(2,5)
console.log(numbers)
console.log (num1)
//here 2 is starting index and 5 is ending index but ending index is not included in the output
//here orignal array is not modified

const num2 = numbers.splice(2,3)
console.log (numbers)
console.log (num2)
//here 2 is starting index and 3 is number of elements to be removed
//here original array is modified

console.log("\n")

//Arrays part 2

const fruits = ["apple", "banana", "grapes"]

const flowers = ["rose", "lily", "jasmine"]

//fruits.push(flowers) //push modifies entier array

fruits.concat(flowers) //here concat doesnt modify og array thatswhy getting output as it is fruits
const fruits_flowers = fruits.concat(flowers) //this will create a new array by combining both arrays
console.log(fruits_flowers)