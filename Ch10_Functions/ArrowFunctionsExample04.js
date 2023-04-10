let double = (x) => { return x * 2 };
let triple = (x) => x * 3;

// 可以赋值
let value = {};
let setName = (x) => x.name = 'Matt';
setName(value);
console.log(value.name);

// 无效的写法
// let multiply = (x) => return a * b;