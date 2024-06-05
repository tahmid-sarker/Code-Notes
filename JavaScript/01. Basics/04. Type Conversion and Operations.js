let score = "Tahmid"; // String

// ===================== Checking Variable Types =====================
// console.log(typeof score); // Outputs: string
// console.log(typeof(score)); // Outputs: string

// ===================== Converting String to Number =====================
let valueInNumber = Number(score); // Converts to NaN since "Tahmid" is not a number
// console.log(typeof valueInNumber); // Outputs: number
// console.log(valueInNumber); // Outputs: NaN

// Examples of Number conversion:
// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1
// false => 0

let isLoggedIn = "Tahmid"; // Non-empty string
let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts to true
// console.log(booleanIsLoggedIn); // Outputs: true

// ===================== Boolean Conversion Examples =====================
// 1 => true
// 0 => false
// "" => false (empty string)
// "Tahmid" => true (non-empty string)

let someNumber = 33;
let stringNumber = String(someNumber); // Converts number to string
// console.log(stringNumber); // Outputs: "33"
// console.log(typeof stringNumber); // Outputs: string

// ===================== Operations =====================

let value = 3;
let negValue = -value; // Negation of value
// console.log(negValue); // Outputs: -3

// ===================== Basic Arithmetic Operations =====================
// console.log(2 + 2); // Addition
// console.log(2 - 2); // Subtraction
// console.log(2 * 2); // Multiplication
// console.log(2 ** 3); // Exponentiation (2^3 = 8)
// console.log(2 / 3); // Division
// console.log(2 % 3); // Modulus (remainder)

// ===================== String Concatenation =====================
let str1 = "Hello,";
let str2 = " Tahmid";
let str3 = str1 + str2; // Concatenates strings
// console.log(str3); // Outputs: "Hello, Tahmid"

// ===================== Implicit Type Conversion During Operations =====================
// console.log("1" + 2); // Outputs: "12" (string concatenation)
// console.log(1 + "2"); // Outputs: "12" (string concatenation)
// console.log("1" + 2 + 2); // Outputs: "122" (string concatenation)
// console.log(1 + 2 + "2"); // Outputs: "32" (1 + 2 = 3, then concatenation)
// console.log((3 + 4) * 5 % 3); // Outputs: 1 (BODMAS rule followed)
// console.log(+true); // Outputs: 1 (unary plus operator)
// console.log(+""); // Outputs: 0 (empty string to number)

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All variables are assigned the same value
// console.log(num1, num2, num3); // Outputs: 4 4 4

// ===================== Incrementing a Variable =====================
let gameCounter = 100;
++gameCounter; // Pre-increment: increases gameCounter by 1
console.log(gameCounter); // Outputs: 101

// ===================== Link for Further Study =====================
// Link to study: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion