// The localStorage API allows you to store data in the browser.
// The data is stored as key-value pairs.
// The data is stored in the browser's memory and is not sent to the server.
// The data is stored as strings, so you need to convert objects to strings before storing them.
// The data is persistent, meaning it will remain even after the browser is closed and reopened.
// The data is limited to 5MB per domain.
// The data is accessible only to the domain that created it.

// ===================== Set Items =====================
// Setting items in localStorage

localStorage.setItem("name", "Tahmid"); // Setting a string value
localStorage.setItem("age", 25); // Setting a number value
localStorage.setItem("isLoggedIn", true); // Setting a boolean value

localStorage.setItem("numbers", ["A", 1, "B", 2]); // Setting an array value (will be converted to string)
console.log(localStorage.getItem("numbers")); // Outputs: [object, Object] // Getting the array value (as a string)

localStorage.setItem("user", ({ name: "Tahmid", age: 25, isLoggedIn: true })); // Setting an object value (will be converted to string)
console.log(localStorage.getItem("user")); // Outputs: [object, Object] // Getting the object value (as a string)

// The above "numbers" and "user" values will not be stored correctly in localStorage because they are not converted to strings.
// To store arrays and objects correctly, you need to use JSON.stringify() to convert them to strings before storing them.
// The following lines demonstrate the correct way to store arrays and objects in localStorage.

localStorage.setItem("numbers", JSON.stringify(["A", 1, "B", 2])); // Setting an array value (correctly converted to string)
localStorage.setItem("user", JSON.stringify({ name: "Tahmid", age: 25, isLoggedIn: true })); // Setting an object value (correctly converted to string)

// ===================== Get Items =====================
// Getting items from localStorage

const name = localStorage.getItem("name"); // Getting a string value
console.log(name); // Outputs: Tahmid

const array = localStorage.getItem("numbers"); // Getting an array value (as a string)
console.log(array); // Outputs: ["A",1,"B",2]
console.log(JSON.parse(array)); // Outputs: [ 'A', 1, 'B', 2 ] // Parsing the string back to an array
console.log(typeof array); // Outputs: string // Checking the type of the retrieved value
console.log(typeof JSON.parse(array)); // Outputs: object // Checking the type of the parsed value
console.log(Array.isArray(JSON.parse(array))); // Outputs: true // Checking if the parsed value is an array
console.log(JSON.parse(array)[0]); // Outputs: A // Accessing the first element of the parsed array

const object = localStorage.getItem("user"); // Getting an object value (as a string)
console.log(object); // Outputs: {"name":"Tahmid","age":25,"isLoggedIn":true}
console.log(JSON.parse(object)); // Outputs: { name: 'Tahmid', age: 25, isLoggedIn: true } // Parsing the string back to an object


// Multiple values can be stored in localStorage using the same key, but only the last value will be retrieved when using getItem().

// Get cart from localStorage (parse it) OR start with empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Example product 1
let name1 = "Apple";
let quantity1 = 3;

// Example product 2
let name2 = "Banana";
let quantity2 = 5;

// Push first product
cart.push({ name: name1, quantity: quantity1 });

// Push second product
cart.push({ name: name2, quantity: quantity2 });

// Save updated cart back to localStorage (as string)
localStorage.setItem("cart", JSON.stringify(cart));

console.log(cart); // Outputs: [ { name: 'Apple', quantity: 3 }, { name: 'Banana', quantity: 5 } ] // Checking the cart array