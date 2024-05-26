// ===================== Singleton Object =====================
Object.create // Singleton Pattern will be discussed later

// ===================== Object Literals =====================

const mySym = Symbol("key1"); // Creating a unique symbol for a key

const JsUser = {
    name: "Tahmid",
    "full name": "Md. Tahmid Sarker Mahi",
    [mySym]: "mykey1", // Using symbol as a key
    age: 25,
    location: "Dhaka, Bangladesh",
    email: "tahmid@engineer.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    11: "yes" // Using a number as a key (not recommended)
};

console.log(JsUser); // Outputs: JsUser object

// Getting object keys and values
const keys = Object.keys(JsUser); 
console.log(keys); // Outputs: ["name", "full name", Symbol(key1), "age", "location", "email", "isLoggedIn", "lastLoginDays"]

const values = Object.values(JsUser);
// console.log(values); // Outputs: ["Tahmid", "Md. Tahmid Sarker Mahi", "mykey1", 24, "Dhaka, Bangladesh", "

// Accessing object properties
console.log(JsUser.email); // Dot notation
console.log(JsUser["email"]); // Bracket notation
console.log(JsUser["full name"]); // Outputs: Md. Tahmid Sarker Mahi
console.log(JsUser.11); // SyntaxError: Unexpected number (Dot notation doesn't work with numbers)
console.log(JsUser["11"]); // Outputs: yes (Bracket notation works with numbers)
console.log(JsUser[mySym]); // Outputs: mykey1

// Modifying properties
JsUser.email = "tahmid@email.com"; // Update email
Object.seal(JsUser); // Seals the object, preventing new properties from being added but allowing existing properties to be modified
Object.freeze(JsUser); // Freezes the object, preventing further modifications
JsUser.email = "tahmid@workmail.com"; // This will work only if not frozen
console.log(JsUser); // Outputs: Updated JsUser object

// Getting properties using variables
const userName = "name";
const getName = JsUser[userName]; // Accessing property using variable
console.log(getName) ; // Outputs: Tahmid

// Adding methods to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling object methods
console.log(JsUser.greeting()); // Outputs: Hello JS user
console.log(JsUser.greetingTwo()); // Outputs: Hello JS user, Tahmid