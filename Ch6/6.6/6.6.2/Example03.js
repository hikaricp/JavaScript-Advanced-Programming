const s = new Set(["val1", "val2", "val3"]);
s.forEach((val, dupVal) => console.log(`${val} -> ${dupVal}`));

const s1 = new Set(["val1"]);

for (let value of s1.values()) {
    value = "newVal";
    console.log(value); // newVal
    console.log(s1.has("val1"));
}

const valObj = { id: 1 };

const s2 = new Set([valObj]);

for (let value of s2.values()) {
    value.id = "newVal";
    console.log(value); // {id: "newVal"}
    console.log(s2.has(valObj)); // true
}

console.log(valObj); // {id: "newVal"}