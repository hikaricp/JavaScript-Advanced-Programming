function Person() { }

// 在重写原型对象时,可以手动设置 constructor 属性
Person.prototype = {
    // 原生的 constructor 属性是不可以枚举的
    constructor: Person, // 这种方式恢复 constructor 属性创建的 [[Enumberable]] 属性为true,原生的为 false
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

console.log(Person.prototype);