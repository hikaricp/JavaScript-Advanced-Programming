let person = {};
Object.defineProperty(person, "name", {
  configurable: false,
  value: "Nicholas"
});

Object.defineProperty(person, "name", {
  configurable: true,
  value: "Nicholas"
});

console.log(person.name);
