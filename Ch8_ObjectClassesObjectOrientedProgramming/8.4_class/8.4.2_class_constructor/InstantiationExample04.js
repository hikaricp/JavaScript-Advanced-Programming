function Person() { }

class Animal { }

// 把 window 作为 this 来构建实例
let p = Person();

// 类构造函数不使用 new 会报错
let a = Animal();