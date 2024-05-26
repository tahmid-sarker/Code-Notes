// ===================== Array Methods =====================

// Creating arrays
const arr = [0, 1, 2, 3, 4, 5];
const arr = new Array(1, 2, 3, 4);

// Accessing array elements
console.log(arr[1]); // Outputs: 1

// ===================== Adding and Removing Elements =====================

// Push: Adds one or more elements to the end of the array
arr.push(6); // Adds 6 to the end
arr.push(7); // Adds 7 to the end

// Pop: Removes the last element from the array
arr.pop(); // Removes 7

// Unshift: Adds one or more elements to the beginning of the array
arr.unshift(9); // Adds 9 to the start

// Shift: Removes the first element from the array
arr.shift(); // Removes 9

// ===================== Checking Elements =====================

// Includes: Checks if an element exists in the array
console.log(arr.includes(9)); // Outputs: false

// IndexOf: Returns the first index of a specified value
console.log(arr.indexOf(3)); // Outputs: 3

// ===================== Joining and Slicing =====================

// Join: Joins all elements of an array into a string
const newArr = arr.join(); // Converts array to a string

console.log(arr); // Original array
console.log(newArr); // Outputs: "0,1,2,3,4,5" (will be a string)

// ===================== Slicing and Splicing =====================

// Slice: Returns a shallow copy of a portion of an array
console.log("A ", arr);
const myn1 = arr.slice(1, 3); // Gets elements from index 1 to 2
console.log(myn1); // Outputs: [1, 2]
console.log("B ", arr); // Original array remains unchanged

// Splice: Changes the contents of an array by removing or replacing existing elements
const myn2 = arr.splice(1, 3); // Removes 3 elements from index 1
console.log(myn2); // Outputs: [1, 2, 3]
console.log("C ", arr); // Original array is changed

// ===================== Iterating Over Arrays =====================

// Map: Creates a new array with the results of calling a provided function on every element in the array.
const arr = [1, 2, 3, 4, 5];
const mapping = mapping.map((element, index) => {
    console.log(index); // Outputs the index of each element in the array
    console.log(element); // Outputs the element itself
    return element * 2; // Multiplies each element by 2
});

console.log(mapping); // Outputs: [2, 4, 6, 8, 10]

const mapping = mapping.map((x) => x * 2); // Another way to multiply each element by 2
console.log(mapping); // Outputs: [2, 4, 6, 8, 10]

// Note: Map directly not work in Objects. You should use keys/values/entries to convert it to an array first then use map on it.

// ForEach: Executes a provided function once for each array element
const arr = [1, 2, 3, 4, 5];
arr.forEach((element, index) => {
    console.log(index); // Outputs the index of each element in the array
    console.log(element); // Outputs the element itself
}); // No return value

// Filter: Creates a new array with all elements that pass the test implemented by the provided function
const arr = [1, 2, 3, 4, 5];
const filtering = filtering.filter((element) => element > 2); // Filters elements greater than 2
console.log(filtering); // Outputs: [3, 4, 5]

// Find: Returns the value of the first element in the array that satisfies the provided testing function
const arr = [1, 2, 3, 4, 5];
const found = found.find((element) => element > 2); // Finds the first element greater than 2
console.log(found); // Outputs: 3


// FindIndex: Returns the index of the first element in the array that satisfies the provided testing function
const arr = [1, 2, 3, 4, 5];
const foundIndex = foundIndex.findIndex((element) => element > 2); // Finds the index of the first element greater than 2
console.log(foundIndex); // Outputs: 2 (index of element 3)

// Reduce: Executes a reducer function on each element of the array, resulting in a single output value
const arr = [1, 2, 3, 4, 5];
const reduced = reduced.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements. 0 is the initial value of the accumulator
console.log(reduced); // Outputs: 15 (sum of all elements)