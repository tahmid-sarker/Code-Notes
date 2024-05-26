const score = 400; // Number
console.log(score); // Outputs: 400

// Creating a Number object
const balance = new Number(100); 
console.log(balance); // Outputs: [Number: 100]

// ===================== Getting Properties of the Number Object =====================
console.log(balance.toString().length); // Outputs: 3 (length of "100")
console.log(balance.toFixed(1)); // Outputs: "100.0" (fixed to 1 decimal place)

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // Outputs: "123.9" (formatted to 4 significant digits)

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-BD')); // Outputs: "10,00,000" (formatted according to locale)

// ===================== Math Object =====================
console.log(Math); // Outputs: [Math: …] (Math object and its methods)

// ===================== Absolute Value =====================
console.log(Math.abs(-4)); // Outputs: 4

// ===================== Rounding Numbers =====================
console.log(Math.round(4.6)); // Outputs: 5 (rounds to nearest integer)
console.log(Math.ceil(4.2)); // Outputs: 5 (rounds up)
console.log(Math.floor(4.9)); // Outputs: 4 (rounds down)

// ===================== Finding Minimum and Maximum Values =====================
console.log(Math.min(4, 3, 6, 8)); // Outputs: 3
console.log(Math.max(4, 3, 6, 8)); // Outputs: 8

// ===================== Generating Random Numbers =====================
console.log(Math.random()); // Outputs a random number between 0 and 1
console.log((Math.random() * 10) + 1); // Outputs a random number between 1 and 11
console.log(Math.floor(Math.random() * 10) + 1); // Outputs a random integer between 1 and 10

// ===================== Random Number Within a Specific Range =====================
const min = 10; // Minimum value
const max = 20; // Maximum value
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Outputs a random integer between 10 and 20