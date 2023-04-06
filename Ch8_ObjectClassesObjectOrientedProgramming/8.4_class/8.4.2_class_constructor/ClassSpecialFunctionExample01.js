class Person {}

console.log(Person); // class Person {}
console.log(typeof Person); // function

console.log(Person.prototype); // { constructor: ƒ() }
console.log(Person === Person.prototype.constructor); // true