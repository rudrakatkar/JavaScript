// Dates

// Create a Date object for the current date and time
let myDate = new Date()

// Examples (commented out): convert date to different string formats
// console.log(myDate.toString());      // full date and time string
// console.log(myDate.toDateString());  // date only (human friendly)
// console.log(myDate.toLocaleString()); // date/time in local format
// console.log(typeof myDate);          // "object"

// Create Date objects in different ways (examples):
// Note: when using numbers, month is 0-indexed (0 = January)
// let myCreatedDate = new Date(2023, 0, 23)
// With time: hours and minutes
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// Using an ISO-style string
// let myCreatedDate = new Date("2023-01-14")
// Using a common US-style string (month-day-year)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString()); // shows created date in local format

// Get the current timestamp in milliseconds since Jan 1, 1970 (Unix epoch)
let myTimeStamp = Date.now()

// Examples (commented out): working with timestamps
// console.log(myTimeStamp);                    // milliseconds (big number)
// console.log(myCreatedDate.getTime());        // created date as milliseconds
// console.log(Math.floor(Date.now()/1000));   // seconds since epoch (rounded down)

// Another Date object for now
let newDate = new Date()
// Print the full Date object (shows local date and time)
console.log(newDate);

// getMonth() returns 0-11, so add 1 to show the human month number (1-12)
console.log(newDate.getMonth() + 1);

// getDay() returns day of week: 0 = Sunday, 1 = Monday, ... 6 = Saturday
console.log(newDate.getDay());

// If you want the day of the month (1-31), use getDate()
// Example: console.log(newDate.getDate())

// toLocaleString can format parts of a date. For example, to get the weekday name:
// newDate.toLocaleString('default', { weekday: "long" })  // -> "Friday", etc.
// The call above returns a string but is not logged here.
