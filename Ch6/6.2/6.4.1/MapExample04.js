// SameValueZero 意想不到的冲突
const m = new Map();

const a = 0 / "", // NaN
    b = 0 / "", // NaN
    pz = +0,
    nz = -0;

console.log(a === b); // false
console.log(pz === nz); // true

m.set(a, "foo");
m.set(pz, "bar");

console.log(m.get(b)); // foo
console.log(m.get(nz)); // bar
