// Object.getPrototypeOf(person1) 获取参数内部特性的[[Prototype]]
console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
console.log(Object.getPrototypeOf(person2).name); // Nicholas