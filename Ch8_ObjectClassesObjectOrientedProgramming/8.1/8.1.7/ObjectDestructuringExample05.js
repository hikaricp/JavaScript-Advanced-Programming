// 调用 ToObject()方法

let { length } = 'foobar';
console.log(length); // 6

let { constructor: c } = 4;
console.log(c === Number);

// null 和 undefined 不能解构
// let { _ } = null; // TypeError

// let { _ } = undefined; // TypeError
