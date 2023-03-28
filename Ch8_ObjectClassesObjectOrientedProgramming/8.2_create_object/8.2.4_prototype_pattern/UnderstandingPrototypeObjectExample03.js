// 构造函数,原型对象,实例是三个完全不同的对象

let person1 = new Person(), person2 = new Person();

console.log(Person.prototype !== Person); // true
console.log(person1 !== Person); // true
console.log(Person.prototype !== person1); // true

// 实例与构造函数没有直接关系,与原型对象有直接关系
console.log(person1.__proto__ === Person.prototype); // true
console.log(person1.__proto__.constructor === Person); // true

// 使用 instanceof 检查实例的原型链中是否包含指定构造函数的原型
console.log(person1 instanceof Person); // true
console.log(person1 instanceof Object); // true
console.log(Person.prototype instanceof Object); // true
