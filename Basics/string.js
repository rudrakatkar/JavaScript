// Declare variables to store string and numeric values
const name = "hitesh"
const repoCount = 50

// String concatenation using the + operator (commented out)
// console.log(name + repoCount + " Value");

// Template literals (backticks) for string interpolation - modern approach
// Allows embedding variables directly in strings using ${variable}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Create a String object using the String constructor (wrapper object)
// Unlike regular strings, this creates an object with methods accessible
const gameName = new String('hitesh-hc-com')

// Access individual characters by index (commented out)
// console.log(gameName[0]);
// Access prototype properties (commented out)
// console.log(gameName.__proto__);

// String property and methods (commented out examples)
// console.log(gameName.length);      // Returns the length of the string
// console.log(gameName.toUpperCase()); // Converts string to uppercase

// charAt(index) - returns character at the specified index position
console.log(gameName.charAt(2));
// indexOf(searchValue) - returns the index of first occurrence of a character
// Returns -1 if the character is not found
console.log(gameName.indexOf('t'));

// substring(startIndex, endIndex) - extracts characters between start and end indices
// End index is exclusive (not included)
const newString = gameName.substring(0, 4)
console.log(newString);

// slice(startIndex, endIndex) - similar to substring but supports negative indices
// Negative values count from the end of the string
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// String with leading and trailing whitespace
const newStringOne = "   hitesh    "
console.log(newStringOne);

// trim() - removes whitespace from both ends of a string
console.log(newStringOne.trim());

// Example URL with encoded space (%20)
const url = "https://hitesh.com/hitesh%20choudhary"

// replace(searchValue, replaceValue) - replaces first occurrence of a substring
// In this case, replacing %20 (encoded space) with a hyphen
console.log(url.replace('%20', '-'))

// includes(searchString) - checks if string contains the specified substring
// Returns true or false
console.log(url.includes('sundar'));

// split(separator) - splits string into an array based on the separator
// In this case, splits by hyphen delimiter
console.log(gameName.split('-'));