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

// ===================== Nested Objects =====================
const regularUser = {
    email: "something@email.com",
    fullname: {
        userfullname: {
            firstname: "Tahmid",
            lastname: "Sarker"
        }
    }
};
// Accessing nested properties
// console.log(regularUser.fullname.userfullname.firstname); // Outputs: Tahmid

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