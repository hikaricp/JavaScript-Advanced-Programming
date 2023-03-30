function Person() { }

let friend = new Person();

// 该方法是在 friend 实例之后创建的,但是这个实例依然可以访问这个方法,体现了原型的动态性
Person.prototype.sayHi = function() {
    console.log("hi");
};

friend.sayHi(); // "hi"