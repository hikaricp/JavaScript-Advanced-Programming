function Person() { }

Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    friends: ["SHelby", "Court"],
    sayName() {
        console.log(this.name);
    }
};

let person1 = new Person();
let person2 = new Person();

person1.friends.push("Van");

// 实例之间共享了数组
console.log(person1.friends); // [ "SHelby", "Court", "Van" ]
console.log(person2.friends); // [ "SHelby", "Court", "Van" ]
console.log(person1.friends === person2.friends);