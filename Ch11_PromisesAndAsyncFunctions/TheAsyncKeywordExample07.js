async function foo() {
  console.log(1);
  Promise.reject(3);
}

foo().catch(console.log);
console.log(2);

// 1
// 2
// error: Uncaught (in promise) 3