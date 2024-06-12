// ===================== Singleton Object =====================
// Object.create // Singleton Pattern will be discussed later

// ===================== Object Literals =====================

const mySym = Symbol("key1"); // Creating a unique symbol for a key

const JsUser = {
    name: "Tahmid",
    "full name": "Md. Tahmid Sarker Mahi",
    [mySym]: "mykey1", // Using symbol as a key
    age: 24,
    location: "Dhaka, Bangladesh",
    email: "tahmid@engineer.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Accessing object properties
// console.log(JsUser.email); // Outputs: tahmid@engineer.com
// console.log(JsUser["email"]); // Outputs: tahmid@engineer.com
// console.log(JsUser["full name"]); // Outputs: Md. Tahmid Sarker Mahi
// console.log(JsUser[mySym]); // Outputs: mykey1

// Modifying properties
JsUser.email = "tahmid@email.com"; // Update email
// Object.freeze(JsUser); // Freezes the object, preventing further modifications
JsUser.email = "tahmid@workmail.com"; // This will work only if not frozen
// console.log(JsUser); // Outputs: Updated JsUser object

// Adding methods to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling object methods
// console.log(JsUser.greeting()); // Outputs: Hello JS user
// console.log(JsUser.greetingTwo()); // Outputs: Hello JS user, Tahmid