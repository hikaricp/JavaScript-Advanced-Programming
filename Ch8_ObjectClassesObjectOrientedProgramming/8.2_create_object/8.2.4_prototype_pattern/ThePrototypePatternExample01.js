function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};

let person1 = new Person();
console.log(person1.name); // Nicholas

let person2 = new Person();
console.log(person2.name); // Nicholas

console.log(person1.sayName == person2.sayName);