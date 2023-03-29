function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

// 列出所有实例属性,无论是否可枚举
let keys = Object.getOwnPropertyNames(Person.prototype);
// constructor 属性就是一个不可枚举属性
console.log(keys); // [ "constructor", "name", "age", "job", "sayName" ]