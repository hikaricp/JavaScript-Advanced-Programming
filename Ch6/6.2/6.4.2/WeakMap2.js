const wm = new WeakMap();
const key1 = { id: 1 }, key2 = { id: 2 };
console.log(wm.has(key1)); // false
console.log(wm.get(key1)); // undefined

wm.set(key1, "Matt").set(key2, "Frisbie");
console.log(wm.has(key1)); // true
console.log(wm.get(key1)); // Matt

wm.delete(key1);
console.log(wm.has(key1));
console.log(wm.get(key1));