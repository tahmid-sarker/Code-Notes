// ===================== Object with Methods =====================
const user = {
    username: "tahmid-sarker",
    balance: 100,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website. Your current balance is $${this.balance}`);
        console.log(this); // 'this' refers to the user object
    }
};

user.welcomeMessage(); // Call the welcomeMessage method
user.username = "tahmid.sarker.mahi"; // Update the username
user.welcomeMessage(); // Call again to see the updated username

// ===================== The 'this' Keyword =====================
console.log(this); // In the browser, 'this' refers to the window object. In Node.js, 'this' refers to module.exports.

function check() {
    let username = "Tahmid";
    console.log(this.username); // 'this' does not refer to the user object here; it's undefined in non-method functions.
}

check(); // Call the check function

const checkFunction = function() {
    let username = "Tahmid";
    console.log(this.username); // Still undefined, as 'this' refers to the global object in non-strict mode.
};

checkFunction(); // Call the function

const arrowCheck = () => {
    let username = "Tahmid";
    console.log(this); // In arrow functions, 'this' refers to the lexical scope where the function was defined.
};

arrowCheck(); // Call the arrow function

// ===================== Arrow Functions =====================
// 1. Empty parentheses for no parameters
const noParameter = () => {
    console.log("No parameter function called.");
};

noParameter(); // Outputs: No parameter function called.

// 2. Single parameter without parentheses
const singleParameter = name => {
    console.log(`Hello, ${name}`);
};

singleParameter("Tahmid"); // Outputs: Hello, Tahmid

// 3. Multiple parameters with parentheses
const multipleParameters = (name, age) => {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

multipleParameters("Tahmid", 25); // Outputs: Hello, Tahmid. You are 25 years old.

const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit return: using curly braces requires the return keyword.
};
console.log(addTwo(3, 4)); // Outputs: 7

const addTwoImplicit = (num1, num2) => num1 + num2; // Implicit return: single line without curly braces.
console.log(addTwoImplicit(3, 4)); // Outputs: 7

const addTwoWithParentheses = (num1, num2) => (num1 + num2); // Parentheses require explicit return.
console.log(addTwoWithParentheses(3, 4)); // Outputs: 7

const addObject = (num1, num2) => ({ username: "Tahmid" }); // Returning an object.
console.log(addObject(3, 4)); // Outputs: { username: "Tahmid" }

// ===================== Array Iteration =====================
// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach(function() {}); // Traditional function syntax
// myArray.forEach(() => {}); // Arrow function syntax
// myArray.forEach(() => ()); // Arrow function with implicit return