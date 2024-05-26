// ===================== Greater Than =====================
console.log(2 > 1); // Outputs: true

// ===================== Greater Than or Equal To =====================
console.log(2 >= 1); // Outputs: true

// ===================== Less Than =====================
console.log(2 < 1); // Outputs: false

// ===================== Equal To (Loose Equality) =====================
console.log(2 == 1); // Outputs: false

// ===================== Not Equal To (Loose Inequality) =====================
console.log(2 != 1); // Outputs: true

// ===================== Comparison with String =====================
console.log("2" > 1); // Outputs: true (string is converted to number)
console.log("02" > 1); // Outputs: true (string is converted to number)

// ===================== Null Comparisons =====================
console.log(null > 0); // Outputs: false (null is treated as 0 in numeric context)
console.log(null < 0); // Outputs: false (null is treated as 0 in numeric context)
console.log(null == 0); // Outputs: false (null is only equal to undefined)
console.log(null == undefined); // Outputs: true (null is loosely equal to undefined)
console.log(null >= 0); // Outputs: true (null is treated as 0 in numeric context)

// ===================== Undefined Comparisons =====================
console.log(undefined == 0); // Outputs: false (undefined is not equal to anything)
console.log(undefined > 0); // Outputs: false (undefined cannot be compared)
console.log(undefined < 0); // Outputs: false (undefined cannot be compared)

// ===================== Strict Equality Operator =====================
console.log("2" === 2); // Outputs: false (strict comparison does not perform type conversion)