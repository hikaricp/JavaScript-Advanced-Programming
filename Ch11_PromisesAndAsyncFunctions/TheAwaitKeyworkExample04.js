async function foo() {
  console.log(await 'foo');
}
foo(); // foo

async function bar() {
  console.log(await ['bar']);
}
bar(); // ['bar']

async function baz() {
  const thenable = {
    then(callback) { callback('baz'); }
  };
  console.log(await thenable);
}
baz(); // 'baz'

async function qux() {
  console.log(await Promise.resolve('qux'));
}
qux(); // qux