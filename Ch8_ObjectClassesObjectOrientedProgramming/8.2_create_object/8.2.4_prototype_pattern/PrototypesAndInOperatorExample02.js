// 确定某个属性是否在原型上
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    console.log(this.name);
};

let person1 = new Person();
let person2 = new Person();

let result = hasPrototypeProperty(person1, "name");
console.log(result); // true 在原型上

person1.name = "Greg";
result = hasPrototypeProperty(person1);
console.log(result); // false 在实例上

result = hasPrototypeProperty(person2, "name");
console.log(result); // true 在原型上

delete person1.name;
result = hasPrototypeProperty(person1, "name");
console.log(result); // true 在原型上