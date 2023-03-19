let person = {};
Object.defineProperty(person, "name", {
  writable: false,
  value: "Nicholas"
});

console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name);
