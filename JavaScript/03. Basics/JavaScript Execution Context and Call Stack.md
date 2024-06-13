# JavaScript Execution Context and Call Stack

In JavaScript, the execution context defines the environment in which code is evaluated and executed. There are three main types of execution contexts:

1. **Global Execution Context**
2. **Functional (or Function) Execution Context**
3. **Eval Execution Context**

Each execution context goes through two distinct phases: the **Creation Phase** and the **Execution Phase**.

In addition to the execution context, JavaScript uses a **Call Stack** to manage function calls. The **Call Stack** follows the **LIFO (Last In, First Out)** principle.

## 1. Global Execution Context

The global execution context is created when JavaScript starts execution. It is the default context in which all code is executed initially, before entering any functions.

### Key Features:
- **Scope**: It creates a global scope, where all variables and functions that are not inside any function are declared. These variables are attached to the global object (`window` in browsers).
- **this keyword**: In the global execution context, the value of `this` refers to the global object (e.g., `window` in browsers or `global` in Node.js).
- **Single instance**: There is only one global execution context in any JavaScript program, which persists throughout the lifetime of the program.

## 2. Functional Execution Context

Each time a function is invoked, a new execution context is created for that function.

### Key Features:
- **Local scope**: Variables declared within the function are local to that execution context and cannot be accessed from outside.
- **this keyword**: The value of `this` inside a function depends on how the function is invoked.
- **Multiple instances**: A new function execution context is created each time a function is called, and each function call has its own execution context.

## 3. Eval Execution Context

The `eval()` function allows for the execution of JavaScript code represented as a string. When `eval()` is called, a new execution context is created.

### Key Features:
- **Dynamic code execution**: It can execute code in the current scope or create new variables dynamically.
- **Risky**: Using `eval()` is generally discouraged due to security and performance concerns.

---

## Execution Phases

Every execution context, whether global or functional, goes through two distinct phases:

### 1. **Creation Phase** (Memory Allocation Phase)

During the creation phase, JavaScript's engine prepares the context for execution by performing the following steps:

- **Variable Hoisting**: All variable and function declarations are hoisted (moved) to the top of their respective scopes. Only the declarations are hoisted, not the initializations.
- **Creation of the `this` value**: The `this` value is assigned depending on the context (e.g., in the global context, `this` refers to the global object).
- **Lexical Environment Creation**: A lexical environment is created to store variables and function references. It forms the basis for scope and closure behavior.

#### Example:
```javascript
console.log(a); // undefined (due to hoisting)
var a = 10;
console.log(b); // Throws an error: b is not defined

function greet() {
  console.log('Hello!');
}
greet(); // "Hello!"
```

**Explanation**:
- During the creation phase, `var a` is hoisted to the top but not initialized, so `console.log(a)` outputs `undefined`.
- The function `greet()` is fully hoisted (both its declaration and definition), so it can be called before its actual position in the code.
- `b` is not declared, so trying to log `b` throws a `ReferenceError`.

### 2. **Execution Phase** (Code Execution Phase)

Once the creation phase is complete, the execution phase begins:

- **Code execution**: The JavaScript engine runs through the code line by line, assigning values to the variables and executing function calls.
- **Reference resolution**: Variable values are now fetched from memory, and functions are invoked.

#### Example:
```javascript
var x = 5;
function multiply(y) {
  return x * y;
}

console.log(multiply(2)); // Output: 10
x = 10;
console.log(multiply(2)); // Output: 20
```

**Explanation**:
- During the execution phase, the value of `x` is initially set to `5`, so `multiply(2)` returns `10` (`5 * 2`).
- After `x` is reassigned to `10`, `multiply(2)` returns `20` (`10 * 2`).

---

## Call Stack and LIFO (Last In, First Out)

JavaScript manages function calls using the **Call Stack**, a data structure that follows the **LIFO (Last In, First Out)** principle. This means that the most recently called function is the first one to be executed, and once finished, it is removed from the stack.

### Example of LIFO in Action:
```javascript
function first() {
  console.log('First function called');
  second();
}

function second() {
  console.log('Second function called');
  third();
}

function third() {
  console.log('Third function called');
}

first();
```

### Call Stack Flow:

1. **Global Execution Context** is created, and the `first()` function is called:
   - `first()` is added to the call stack.
2. Inside `first()`, the `second()` function is called:
   - `second()` is added to the call stack (on top of `first()`).
3. Inside `second()`, the `third()` function is called:
   - `third()` is added to the call stack (on top of `second()`).
4. `third()` completes execution and is removed from the call stack.
5. `second()` completes execution and is removed from the call stack.
6. `first()` completes execution and is removed from the call stack.

**LIFO Execution**:
- `third()` is the last function added to the call stack, but it is the first to complete execution and be removed.
- Functions are executed in the reverse order of their appearance in the call stack.

### Visualization of the Call Stack:

1. **Start**:
   - `first()` is called:  
   `[ first ]`

2. **Inside `first()`**:
   - `second()` is called:  
   `[ first, second ]`

3. **Inside `second()`**:
   - `third()` is called:  
   `[ first, second, third ]`

4. **Execution finishes** (LIFO):
   - `third()` completes and is removed:  
   `[ first, second ]`
   - `second()` completes and is removed:  
   `[ first ]`
   - `first()` completes and is removed:  
   `[ ]`

This LIFO behavior ensures that JavaScript functions complete in the correct order, even when nested within other functions.