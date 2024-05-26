// ===================== Non-Singleton Object =====================
const studentUser = {}; // Non-Singleton object

// Adding properties to the object
studentUser.id = "201-35-2970";
studentUser.name = "Md. Tahmid Sarker Mahi";
studentUser.isLoggedIn = false;
// console.log(studentUser);

// ===================== Object Methods =====================
console.log(Object.keys(studentUser)); // Returns an array of object property names
console.log(Object.values(studentUser)); // Returns an array of object property values
console.log(Object.entries(studentUser)); // Returns an array of [key, value] pairs

// Checking if the object has a property
console.log(studentUser.hasOwnProperty('isLoggedIn')); // Outputs: true

// Mapping over object properties
const studentUser = {
    firstName: "Tahmid",
    lastName: "Sarker",
    age: 25,
    isLoggedIn: false,
    courses: ["JavaScript", "Python", "Java"],
    location: "Dhaka",
    isLoggedIn: false,
    lastActive: "2023-10-01",
};

const arr = Object.entries(studentUser); // Convert object to array of [key, value] pairs
const map = arr.map(([keys, values], index) => { // Destructuring the array into key-value pairs and index
   return `${keys} and ${values} and the index is = ${index}`;
});

console.log(map);

// Note: Map returns an array, while forEach doesn't return anything. So that no need to assign it to a variable.

arr.forEach(([keys, values], index) => { // ForEach loop to iterate over the array of [key, value] pairs
    console.log(keys, values, index); 
});

// ===================== Nested Objects =====================
const regularUser = {
    personal: {
        details: {
            firstName: "Tahmid",
            lastName: "Sarker",
            email: {
                primary: "tahmid@engineer.com",
                secondary: "tahmid@myself.com"
            }
        }
    }
};
// Accessing nested properties
console.log(regularUser.personal.details.firstName); // Outputs: Tahmid (Dot notation)
console.log(regularUser["personal"]["details"]["email"]["primary"]) // Output: tahmid@engineer.com (Bracket notation)
console.log(regularUser.personal["details"]["email"].primary) // Output: tahmid@engineer.com (Mixed notation)
console.log(regularUser.personal.number?.primary); // Outputs: undefined (Optional chaining. Operator ? prevents error if property doesn't exist) 

// ===================== Merging Objects =====================
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// Merging objects using spread operator
const obj4 = {...obj1, ...obj2, ...obj3}; // A better way to merge multiple objects
// console.log(obj4); // Outputs: {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}

// ===================== Array of Objects =====================
const users = [
    {
        id: 1,
        email: "something@email.com"
    },
    {
        id: 2,
        email: "another@email.com"
    },
    {
        id: 3,
        email: "third@email.com"
    },
];

// Accessing an object's property in an array
// console.log(users[1].email); // Outputs: another@email.com

// ===================== Destructuring Objects =====================
const studentInfo = {
    studentName: "Md. Tahmid Sarker Mahi",
    department: "Software Engineering",
    studentID: "201-35-2970",
};

const { studentName, studentID } = studentInfo; // Destructuring object properties
// console.log(studentName); // Outputs: Md. Tahmid Sarker Mahi
const { department: course } = studentInfo; // Destructuring object with renaming
// console.log(course); // Outputs: Software Engineering

// ===================== JSON =====================

// Sample JSON data (from API)
// {
//     "studentName": "Md. Tahmid Sarker Mahi",
//     "department": "Software Engineering",
//     "studentID": "201-35-2970",
// }

// Example of an array of objects in JSON format
// [
//     {},
//     {},
//     {}
// ]