// ===================== Constants =====================
const accountId = 12345;
// accountId = 678910; // Uncommenting this will throw an error because 'const' cannot be reassigned
// console.log(accountId); // Use this to log accountId if needed

// ===================== Let Variables =====================
let accountEmail = "example@email.com";
accountEmail = "example@workmail.com"; // Reassigning the value is allowed

// ===================== Var Variables =====================
var accountPassword = "012345";
accountPassword = "678910"; // Reassigning the value is allowed

// ===================== Global Variable (not recommended) =====================
accountCity = "Dhaka, Bangladesh"; // Can be declared without let, var, or const

// ===================== Declaring a Variable Without Initialization =====================
let accountState; // 'undefined' by default

// ===================== Displaying Variables in a Table Format =====================
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// ===================== Best Practices =====================
/*
1. Prefer 'let' and 'const' over 'var' to avoid issues with block scope and functional scope.
2. Semicolons are optional in JavaScript but it's recommended to use them for clarity and to avoid potential issues.
*/