function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

let person1 = new Person();
let person2 = new Person();

// 遮住原型对象上的属性
person1.name = "Greg";
console.log(person1.name); // Greg => 来自实例
console.log(person2.name); // Nicholas => 来自原型