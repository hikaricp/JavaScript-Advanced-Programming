class Vehicle { }

// 继承类
class Bus extends Vehicle { }

let b = new Bus();
console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true

function Person() { }

// 继承普通构造函数
class Engineer extends Person { }

let e = new Engineer();
console.log(e instanceof Engineer); // true
console.log(e instanceof Person); // true