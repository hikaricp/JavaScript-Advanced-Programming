// 实例化时,不传参数,构造函数后的括号可以不加
function Person() {
    this.name = 'Jack';
    this.sayName = function() {
        console.log(this.name);
    };
}

let person1 = new Person();
let person2 = new Person; // 括号可以不加

person1.sayName(); // Jack
person2.sayName(); // Jack

console.log(person1 instanceof Object);
console.log(person1 instanceof Person);
console.log(person2 instanceof Object);
console.log(person2 instanceof Person);