// ===================== Primitive Data Types =====================
// 7 types: String, Number, BigInt, Boolean, Undefined, Null, Symbol

const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol('123'); // Symbol (unique identifier)
const anotherId = Symbol('123'); // Another unique symbol

// Comparison of Symbols
console.log(id === anotherId); // Outputs: false (different symbols)
console.log(typeof anotherId); // Outputs: symbol

// BigInt example
// const bigNumber = 3456543576654356754n; // BigInt (note the 'n' at the end)

// ===================== Reference Data Types (Non-primitive) =====================
// 1. Array
// 2. Object
// 3. Function

const myFunction = function() {
    console.log("As-Salaam-Alaikum, Everyone");
};
// myFunction(); // Calling the function

const prophet = ["Muhammad", "Ibrahim", "Musa", "Isa"]; // Array
console.log(prophet[0]); // Outputs: "Muhammad"

let myObj = {
    name: "Tahmid",
    age: 25,
};
console.log(myObj.name); // Outputs: "Tahmid"

// Demonstrating reference types
let anotherObj = myObj; // Reference type (call by reference)
anotherObj.name = "Sarker"; // Changing value through another reference

console.log(anotherObj.name); // Outputs: "Sarker"
console.log(myObj.name); // Outputs: "Sarker" (original object is affected)

/*
Primitive Types:
1. Stored in the stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in the heap; accessed via references (stored in the stack).
2. Changing the value through another reference affects the original.
*/

// Additional Reading: https://262.ecma-international.org/5.1/#sec-11.4.3