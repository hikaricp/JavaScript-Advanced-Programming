const s = new Set();

console.log(s.has("Matt")); // false
console.log(s.size); // 0

s.add("Matt").add("Frisbie");

console.log(s.has("Matt")); // true
console.log(s.size); // 2

s.delete("Matt");

console.log(s.has("Matt")); // false
console.log(s.has("Frisbie")); // true
console.log(s.size); // 1

s.clear();

console.log(s.has("Matt")); // false
console.log(s.has("Frisbie")); // false
console.log(s.size); // 0