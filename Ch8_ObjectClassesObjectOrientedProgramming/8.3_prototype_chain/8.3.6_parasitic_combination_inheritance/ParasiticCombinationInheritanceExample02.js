function inheritPrototype(subType, superType) {
    let prototype = Object.create(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 赋值对象
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "bule", "green"];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);

    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
    console.log(this.age);
};

let instance1 = new SubType("Nicholas", 29);
console.log(instance1.name); // Nicholas
instance1.colors.push("black");
console.log(instance1.colors); // [ "red", "bule", "green", "black" ]

let instance2 = new SubType("Greg", 27);
console.log(instance2.name); // Greg
console.log(instance2.colors); // [ "red", "bule", "green" ]