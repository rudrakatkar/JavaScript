
// Create a number variable
const score = 400
// console.log(score);

// Create a Number object using constructor
const balance = new Number(100)
// console.log(balance);

// Convert number to string and check length
// console.log(balance.toString().length);
// Round number to 1 decimal place
// console.log(balance.toFixed(1));

// Decimal number
const otherNumber = 123.8966

// Format number to 4 significant digits
// console.log(otherNumber.toPrecision(4));

// Large number
const hundreds = 1000000
// Format number with Indian locale (comma separation)
// console.log(hundreds.toLocaleString('en-IN'));

// ===== MATH METHODS =====
// View all Math methods and properties
// console.log(Math);
// Get absolute value (remove negative sign)
// console.log(Math.abs(-4));
// Round to nearest integer
// console.log(Math.round(4.6));
// Round up to next integer
// console.log(Math.ceil(4.2));
// Round down to previous integer
// console.log(Math.floor(4.9));
// Find smallest number
// console.log(Math.min(4, 3, 6, 8));
// Find largest number
// console.log(Math.max(4, 3, 6, 8));

// Generate random decimal between 0 and 1
console.log(Math.random());
// Generate random number between 1 and 11
console.log((Math.random()*10) + 1);
// Generate random integer between 1 and 10
console.log(Math.floor(Math.random()*10) + 1);

// Set minimum value for random number
const min = 10
// Set maximum value for random number
const max = 20

// Generate random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
