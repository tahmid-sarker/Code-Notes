const name = "Tahmid"; // String
const favouriteNumber = 11; // Number

// ===================== Concatenation =====================
// Concatenation (not recommended)
console.log(name + favouriteNumber + " Value"); 

// ===================== String Interpolation =====================
// String Interpolation (recommended practice)
console.log(`Hello my name is ${name} and my favourite number is ${favouriteNumber}`); 
// Outputs: "Hello my name is Tahmid and my favourite number is 11"

// ===================== Creating a String Object =====================
const userName = new String("tahmid-sarker");

// ===================== String Methods =====================
console.log(userName.split('-')); // Outputs: ["tahmid", "sarker"]
console.log(userName[0]); // Outputs: "t"
console.log(userName.__proto__); // Outputs: String prototype object
console.log(userName.length); // Outputs: 13
console.log(userName.toUpperCase()); // Outputs: "TAHMID-SARKER"
console.log(userName.charAt(2)); // Outputs: "h"
console.log(userName.indexOf('t')); // Outputs: 0

// Extracting substrings
const newString = userName.substring(0, 4); // Extracts "tahm"
console.log(newString); // Outputs: "tahm"

const anotherString = userName.slice(-8, 4); // May behave unexpectedly
console.log(anotherString); 
// The start index is -8 (equivalent to index 5) and end index is 4.
// So it may not return as expected because the end index is before the start index.

// ===================== Trimming Whitespace =====================
const newStringOne = "   tahmid    ";
console.log(newStringOne); // Outputs: "   tahmid    "
console.log(newStringOne.trim()); // Outputs: "tahmid"

// ===================== URL Manipulation =====================
const url = "https://tahmid%20sarker.github.io";
console.log(url.replace('%20', '-')); // Outputs: "https://tahmid-sarker.github.io"
console.log(url.includes('Mahi')); // Outputs: false (checks if 'Mahi' is present in the URL)