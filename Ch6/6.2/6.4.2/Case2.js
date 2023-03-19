const m1 = new Map([
    ["key1", "val1"]
]);

for (let key of m1.keys()) {
    key = "newKey";
    console.log(key); // newKey
    console.log(m1.get("key1"));
}

const keyObj = { id: 1 };
const m2 = new Map([
    [keyObj, "val1"]
]);

for (let key of m2.keys()) {
    key.id = "newKey";
    console.log(key); // {id: "newKey"}
    console.log(m2.get(keyObj)); // val1
}
console.log(keyObj); // {id: "newKey"}