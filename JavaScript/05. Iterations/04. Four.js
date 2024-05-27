// For in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('BD', "Bangladesh")
// map.set('USB', "United States of Bengal")
// map.set('SA', "Saudi Arabia")
// map.set('BD', "Bangladesh")

// for (const key in map) {
//     console.log(key);
// }