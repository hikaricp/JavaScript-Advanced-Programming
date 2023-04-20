let p1 = Promise.race([
  Promise.resolve(),
  Promise.resolve()
]);

// 可迭代对象中的元素会通过 Promise.resolve() 转换为期约
let p2 = Promise.race([3, 4]);

// 空的可迭代对象等价于 new Promise(() => {})
let p3 = Promise.race([]);

// 无效的语法
let p4 = Promise.race();

// error: Uncaught (in promise) TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))