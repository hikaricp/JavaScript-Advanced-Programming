function Person() { }

Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engieer",
    sayName() {
        console.log(this.name);
    }
};

// 使用 Object.defineProperty 定义 constructor 属性,并指定 enumerable
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});

console.log(Person.prototype);