// ===================== Working with Dates =====================

let myDate = new Date();
console.log(myDate.toString()); // Outputs the date as a string
console.log(myDate.toDateString()); // Outputs the date portion only
console.log(myDate.toLocaleString()); // Outputs the date and time in a localized format
console.log(typeof myDate); // Outputs: object

// ===================== Creating Dates =====================
// let myCreatedDate = new Date(2023, 0, 23); // January 23, 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January 23, 2023, 5:03 AM
// let myCreatedDate = new Date("2023-01-14"); // January 14, 2023
let myCreatedDate = new Date("01-14-2023"); // January 14, 2023
console.log(myCreatedDate.toLocaleString()); // Outputs the created date in a localized format

// ===================== Getting Timestamps =====================
let myTimeStamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimeStamp); // Outputs the current timestamp
console.log(myCreatedDate.getTime()); // Outputs the timestamp for myCreatedDate
console.log(Math.floor(Date.now() / 1000)); // Outputs the current timestamp in seconds

// ===================== Getting Date Components =====================
let newDate = new Date();
console.log(newDate); // Outputs the current date object
console.log(newDate.getMonth() + 1); // Outputs the current month (1-12)
console.log(newDate.getDay()); // Outputs the current day of the week (0-6)

console.log(`${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

// ===================== Getting Weekday =====================
newDate.toLocaleString('default', {
    weekday: "long", // Outputs the weekday as a long name
});