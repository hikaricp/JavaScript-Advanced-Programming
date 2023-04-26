async function foo() {
  console.log(1);
  return Promise.resolve(3);
}

// 给返回的期约添加一个返回处理程序
foo().then(console.log);

console.log(2);