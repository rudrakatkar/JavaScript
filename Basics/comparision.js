console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
console.log("\n");

console.log("2" > 1); //here we are able to compare string with number because js internally converts string to number for comparison
console.log("02" > 1); //in typescript we cant compare string with number directly
console.log("\n");


console.log(null > 0); // here also null is converted to 0 for comparison
console.log(null == 0); //here we get answer false because null is only equal to undefined but in upper case it is converted to 0 for comparison
console.log(null >= 0); // here null is converted to 0 for comparison
console.log("\n"); 

/*
Note : 
threfore we can say that for relational operators like < , > , <= , >= null is converted to 0
but for equality operator == null is only equal to undefined and not equal to any other value
*/


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log("\n");

/*
NOTE : 
undefined is not equal to anything except null, and it is not converted to any value for comparison
here in js undefined isconsidered NaN (Not a Number) for comparison and any comparison with NaN results in false
*/

console.log("2" === 2);//here comparision with string and number gives false because === checks for both value and datatype it means that this works as strict check