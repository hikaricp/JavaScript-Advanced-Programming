let double = (x) => { return 2 * x };
// 只有一个参数，可以省略参数
let triple = x => { return 2 * 3 };

// 没有参数需要括号
let getRandom = () => { return Math.random(); };

// 多个参数需要括号
let sum = (a, b) => { return a + b };

// 无效的写法
// let multiply = a, b => { return a * b };