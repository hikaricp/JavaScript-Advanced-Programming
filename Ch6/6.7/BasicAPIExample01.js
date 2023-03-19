const ws = new WeakSet();

const val1 = { id: 1 }, val2 = { id: 2 }, val3 = { id: 3 };

const ws1 = new WeakSet([val1, val2, val3]);

console.log(ws1.has(val1)); // true
console.log(ws1.has(val2)); // true
console.log(ws1.has(val3)); // true

// const ws2 = new WeakSet([val1, "BADVAL", val3]); // TypeError

const stringVal = new String("val1");
const ws3 = new WeakSet([stringVal]);
console.log(ws3.has(stringVal));