async function foo() {
  console.log(1);
  await (() => { throw 3; })();
}

foo().catch(console.log);
console.log(2);

// 1
// 2
// 3