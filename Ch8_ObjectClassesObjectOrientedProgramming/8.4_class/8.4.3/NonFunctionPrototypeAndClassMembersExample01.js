class Person {
    sayName() {
        console.log(`${Person.greeting} ${this.name}`);
    }
}

// 在类上定义数据成员
Person.greeting = 'My name is ';

// 在原型上定义数据成员
Person.prototype.name = 'Jack';

let p = new Person();
p.sayName(); // My name is Jake