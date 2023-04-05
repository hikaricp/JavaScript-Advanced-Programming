class Person {}

let p1 = new Person();

// p1.constructor(); // TypeError: Class constructor Person cannot be invoked without 'new'

// 使用对类构造函数的引用创建一个实例
let p2 = new p1.constructor(); 