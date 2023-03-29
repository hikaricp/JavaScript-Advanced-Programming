function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

let keys = Object.keys(Person.prototype);
// 可枚举的属性名
console.log(keys); // [ "name", "age", "job", "sayName" ]
let p1 = new Person();
p1.name = "Rob";
p1.age = 31;
let p1Keys = Object.keys(p1);
console.log(p1Keys); // [ "name", "age" ]
