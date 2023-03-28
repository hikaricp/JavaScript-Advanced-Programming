// 通过 __proto__ 可以访问对象原型信息,该属性只在浏览器中有效
console.log(Person.prototype.__proto__);
// onstructor: ƒ Object()
// toString: ƒ toString()

// 正常的原型链都会终止于 Object的原型对象
console.log(Person.prototype.__proto__ === Object.prototype); // true

// typeof Person.prototype.__proto__ => object
// constructor 指回构造函数(Object())
console.log(Person.prototype.__proto__.constructor === Object); // true

// Object 原型的原型为 null
console.log(Person.prototype.__proto__.__proto__ === null); // true