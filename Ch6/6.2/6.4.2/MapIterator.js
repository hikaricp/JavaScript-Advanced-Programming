const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val2"]
]);

console.log(m.entries === m[Symbol.iterator]);

for (let pair of m.entries()) {
    console.log(pair);
}

for (let pair of m[Symbol.iterator]()) {
    console.log(pair);
}

console.log([...m]);

m.forEach((val, key) => console.log(`${key} -> ${val}`));

for (let key of m.keys()) {
    console.log(key);
}

for (let val of m.values()) {
    console.log(val);
}