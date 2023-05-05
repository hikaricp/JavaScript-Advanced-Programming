// 异步函数中不包含 await 关键字，其执行跟普通函数没有区别
async function foo() {
  console.log(2);
}

console.log(1);
foo();
console.log(3);

// 1
// 2
// 3