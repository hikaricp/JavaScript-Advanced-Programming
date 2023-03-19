const m = new Map();
console.log(m.has("firstName")); // false
console.log(m.get("firstName")); // undefined
console.log(m.size); // 0

m.set("firstName", "Matt").set("lastName", "Frisbie");
console.log(m.has("firstName")); // true
console.log(m.get("firstName")); // Matt
console.log(m.size); // 2

m.delete("firstName"); // 删除一个键值对

console.log(m.has("firstName")); // false
console.log(m.get("lastName")); // Frisbie
console.log(m.size); // 1

m.clear(); // 清除这个实例中所有键值对

console.log(m.has("firstName")); // false
console.log(m.has("lastName")); // false
console.log(m.size); // 0

// set()方法返回映射实例，因此可以使用链式语法
const m2 = new Map().set("key1", "val1");
m2.set("key2", "val2").set("key3", "val3");
console.log(m2.size);