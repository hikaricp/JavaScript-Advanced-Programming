let p1 = Promise.all([
  Promise.resolve(),
  Promise.resolve()
]);

// 可迭代对象中的元素会通过 Promise.resolve() 转换为期约
let p2 = Promise.all([3, 4]);

// 空的可迭代对象等价于 Promise.resolve()
let p3 = Promise.all([]);

// 无效的语法
let p4 = Promise.all();

// error: Uncaught (in promise) TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))