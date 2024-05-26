const person = {
    name: "Tahmid",
    age: 22,
    isStudent: true,
    hobbies: ["reading", "traveling", "coding"]
}

console.log("Tahmid");
console.dir(person);
console.table(person);
console.warn("This is a warning message");
console.error("This is an error message");
console.info("This is an info message");
console.assert(1 === 2, "This is an assertion error message");
console.time("Timer");
console.timeEnd("Timer");
console.group("Group Title");