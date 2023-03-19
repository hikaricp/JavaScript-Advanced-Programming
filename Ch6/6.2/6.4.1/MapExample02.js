const m = new Map();

const functionKey = function () { };
const objectKey = new Object();
const symbolKey = Symbol();

m.set(functionKey, "functionValue");
m.set(objectKey, "objectValue");
m.set(symbolKey, "symbolValue");

console.log(m.get(functionKey)); // functionValue
console.log(m.get(objectKey)); // objectValue
console.log(m.get(symbolKey)); // symbolValue

// SameValueZero
console.log(m.get(function () { })); // undefined