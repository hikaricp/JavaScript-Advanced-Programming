async function foo() {
  console.log(await Promise.resolve('foo'));
}
foo();

async function bar() {
  return await Promise.resolve('bar');
}
bar().then(console.log);

async function baz() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  console.log('baz');
}
baz();