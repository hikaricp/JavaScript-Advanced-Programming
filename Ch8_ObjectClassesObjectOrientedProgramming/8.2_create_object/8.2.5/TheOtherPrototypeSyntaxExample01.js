// 将一个对象字面量重写原型
// 注意:这样重写之后,constructor属性将不再指向Person构造函数了,而是指向了Object构造函数
function Person() {}

Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engieer",
    sayName() {
        console.log(this.name);
    }
};

let friend = new Person();

// instanceof 操作符还可以正确返回
console.log(friend instanceof Object); // true
console.log(friend instanceof Person); // true
// constructor 属性指向了 Object 构造函数
console.log(friend.constructor == Person); // false
console.log(friend.constructor == Object); // true
