// ===================== Immediately Invoked Function Expressions (IIFE) =====================

// Named IIFE
(function check() {
    console.log(`DB CONNECTED`); // Executes immediately and logs the message
})(); 
// Definition and execution in one statement.
// IIFEs help avoid polluting the global scope by creating a new scope.

// It's good practice to use a semi-colon before an IIFE to prevent potential issues with automatic semicolon insertion.
 
// Anonymous IIFE
((name) => {
    console.log(`DB CONNECTED TO ${name}`); // Takes 'name' as a parameter and logs the message
})('Tahmid'); // Executes immediately with 'Tahmid' as the argument