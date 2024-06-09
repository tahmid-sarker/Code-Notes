// ===================== Array Methods =====================

// Creating arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(1, 2, 3, 4);

// Accessing array elements
// console.log(myArr[1]); // Outputs: 1

// ===================== Adding and Removing Elements =====================

// Push: Adds one or more elements to the end of the array
// myArr.push(6); // Adds 6 to the end
// myArr.push(7); // Adds 7 to the end

// Pop: Removes the last element from the array
// myArr.pop(); // Removes 7

// Unshift: Adds one or more elements to the beginning of the array
// myArr.unshift(9); // Adds 9 to the start

// Shift: Removes the first element from the array
// myArr.shift(); // Removes 9

// ===================== Checking Elements =====================

// Includes: Checks if an element exists in the array
console.log(myArr.includes(9)); // Outputs: false

// IndexOf: Returns the first index of a specified value
console.log(myArr.indexOf(3)); // Outputs: 3

// ===================== Joining and Slicing =====================

// Join: Joins all elements of an array into a string
const newArr = myArr.join(); // Converts array to a string

console.log(myArr); // Original array
console.log(newArr); // Outputs: "0,1,2,3,4,5" (will be a string)

// ===================== Slicing and Splicing =====================

// Slice: Returns a shallow copy of a portion of an array
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // Gets elements from index 1 to 2
console.log(myn1); // Outputs: [1, 2]
console.log("B ", myArr); // Original array remains unchanged

// Splice: Changes the contents of an array by removing or replacing existing elements
const myn2 = myArr.splice(1, 3); // Removes 3 elements from index 1
console.log(myn2); // Outputs: [1, 2, 3]
console.log("C ", myArr); // Original array is changed