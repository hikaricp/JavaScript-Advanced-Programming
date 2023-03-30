function Person() { }

let friend = new Person();

Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
        console.log(this.name);
    }
};

// 重写整个原型后,实例对象的指针依然会指向原始原型对象
// friend.sayName(); // 错误

let p = new Person();

// 重新创建实例才会引用新的原型
p.sayName(); // 正确