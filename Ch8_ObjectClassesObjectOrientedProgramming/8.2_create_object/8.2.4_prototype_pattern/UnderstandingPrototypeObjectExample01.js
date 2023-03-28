// 理解原型
// 该代码要在浏览器中运行
function Person() {}

console.log(typeof Person.prototype); // object
console.log(Person.prototype); // 在浏览器中查看该原型对象

//  {
//      constructor: ƒ Person(),
//      __proto__ : Object
//  }

// Person.prototype 这个原型对象的 constructor 属性指回构造函数,所以为 true
console.log(Person.prototype.constructor == Person); // true

