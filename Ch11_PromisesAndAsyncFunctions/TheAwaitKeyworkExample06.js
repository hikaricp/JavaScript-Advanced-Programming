async function foo() {
  console.log(1);
  await Promise.reject(3);
  console.log(4); // 这行代码不会执行
}

foo().catch(console.log);
console.log(2);

// 1
// 2
// 3