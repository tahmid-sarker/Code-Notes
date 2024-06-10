// ===================== Variable Scopes =====================

// Using let to define variable 'a'
let a = 300;

if (true) {
    let a = 10; // Block-scoped variable
    const b = 20; // Block-scoped constant
    // var c = 30; // Uncommenting this line would define 'c' in the function scope
    // console.log("INNER: ", a); // Outputs: INNER: 10
}

// Outside the block
console.log(a); // Outputs: 300
// console.log(b); // Error: b is not defined (block scope)
// console.log(c); // Outputs: undefined (if 'var c' is uncommented)

// ===================== Function Scopes =====================
function one() {
    const firstName = "Tahmid";

    function two() {
        const surName = "Sarker";
        console.log(firstName); // Outputs: Tahmid
    }
    // console.log(surName); // Error: surName is not defined in this scope
    // two(); // Uncommenting this line will call 'two' and log the first name
}
// one(); // Uncommenting this will execute function one

// ===================== Nested Scopes =====================
if (true) {
    const firstName = "Tahmid";
    if (firstName === "Tahmid") {
        const surName = " Sarker";
        // console.log(`${firstName} ${surName}`); // Outputs: Tahmid  Sarker
    }
    // console.log(surName); // Error: surName is not defined in this scope
}
// console.log(firstName); // Error: firstName is not defined in this scope

// ===================== Function Hoisting =====================
console.log(addOne(5)); // This works because function declarations are hoisted

function addOne(num) {
    return num + 1;
}

// addTwo(5); // This will not work because function expression is not hoisted

const addTwo = function(num) { // This is a function expression
    return num + 2;
};

// addTwo(5); // This works because 'addTwo' is defined before calling it