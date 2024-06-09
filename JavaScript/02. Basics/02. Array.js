// ===================== Array Concatenation =====================

const prophets = ["Muhammad", "Ibrahim", "Musa"];
const companions = ["Abu Bakr", "Umar", "Uthman", "Ali"];

// Using push (not recommended for concatenating arrays)
// prophets.push(companions); // Adds companions as a single element

// console.log(prophets); // Outputs: ["Muhammad", "Ibrahim", "Musa", ["Abu Bakr", "Umar", "Uthman", "Ali"]]
// console.log(prophets[3][1]); // Outputs: "Umar"

// Using concat method to combine arrays
const importantFigures = prophets.concat(companions);
// console.log(importantFigures); // Outputs combined array

// Using spread operator to concatenate arrays (recommended way)
const islamicFigures = [...prophets, ...companions]; 
// console.log(islamicFigures); // Outputs: combined array

// ===================== Flattening Arrays =====================

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArray = anotherArray.flat(Infinity); // Flattens the array to any depth
// console.log(realAnotherArray); // Outputs: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// ===================== Array Utilities =====================

console.log(Array.isArray("Tahmid")); // Outputs: false (it's a string)
console.log(Array.from("Tahmid")); // Converts a string into an array: ["T", "a", "h", "m", "i", "d"]
console.log(Array.from({ name: "Tahmid" })); // Outputs: [undefined] (non-iterable object)

// Using Array.of to create an array from multiple values
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // Outputs: [100, 200, 300]

// ===================== Array Destructuring =====================

const vehicles = ['mustang', 'f-150', 'expedition'];

// Destructuring array to extract values
const [car, truck, suv] = vehicles; 
// console.log(car, truck, suv); // Outputs: 'mustang', 'f-150', 'expedition'

// Using rest operator to capture remaining elements
const [first, ...restOfTheVehicles] = vehicles;
// console.log(first, restOfTheVehicles); // Outputs: 'mustang', ['f-150', 'expedition']

// Skipping elements while destructuring
const [firstVehicle, , thirdVehicle] = vehicles;
// console.log(firstVehicle, thirdVehicle); // Outputs: 'mustang', 'expedition'