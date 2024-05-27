// ===================== Function Definitions =====================

function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("I");
    console.log("D");
}
// sayMyName(); // Call the function to execute

// ===================== Function with Parameters and Arguments =====================

// 1. Function definition with parameters
function addTwoNumbers(number1, number2) {
    // Return the sum of two numbers
    return number1 + number2;
    console.log("Tahmid"); // This line will not be executed due to return statement
}
const result = addTwoNumbers(6, 5); // Here, 6 and 5 are arguments passed to the function
console.log("Result: ", result); // Outputs: Result: 11

// 2. Anonymous function assigned to a variable
const result = function (number1, number2) {
    return number1 + number2;
}
console.log(result(6, 5)); 

// 3. Immediately Invoked Function Expression (IIFE)
(function(number1, number2) { 
    console.log(number1 + number2);
})(6, 5);

// ===================== Default Parameters =====================
function loginUserMessage(username = "Sarker") {
    if (!username) {
        console.log("Please enter a username");
        return; // Exit if no username is provided
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Tahmid")); // Outputs: Tahmid just logged in
// console.log(loginUserMessage()); // Outputs: Sarker just logged in

// ===================== Rest Parameters =====================
function calculateCartPrice(val1, val2, ...num1) {
    // Rest parameter 'num1' captures any additional arguments into an array
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000)); // Outputs: [500, 2000]

// ===================== Handling Objects =====================
const user = {
    username: "Tahmid",
    age: 24
};

function handleObject(anyObject) {
    console.log(`Hi, my name is ${anyObject.username} and my age is ${anyObject.age}`);
}

// Using an existing object
// handleObject(user);

// Passing an object directly
handleObject({
    username: "Sarker",
    age: 24
});

// ===================== Working with Arrays =====================
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]; // Return the second element of the array
}

// console.log(returnSecondValue(myNewArray)); // Outputs: 400
console.log(returnSecondValue([200, 400, 500, 1000])); // Outputs: 400