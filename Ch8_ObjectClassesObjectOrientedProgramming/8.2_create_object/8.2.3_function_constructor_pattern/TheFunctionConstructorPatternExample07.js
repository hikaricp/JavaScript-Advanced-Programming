// 构造函数的问题
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = new Function("console.log(this.name)"); // 逻辑等价
}

// 该方法不是同一个 Function 实例
console.log(person1.sayName == person2.sayName); // false