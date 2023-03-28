// 检查这两个实例的私有特性[[Prototype]]是否指向调用它的对象
// 实例的[[Prototype]]链接指向Person.prototype
console.log(Person.prototype.isPrototypeOf(person1)); // true
console.log(Person.prototype.isPrototypeOf(person2)); // true