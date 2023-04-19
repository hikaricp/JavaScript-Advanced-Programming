// console.log('begin synchronous execution');
// try {
//   throw Error('foo');
// } catch (e) {
//   console.log('caught error', e);
// }
// console.log('continue syncharonous execution');

// begin synchronous execution
// caught error Error: foo
// continue syncharonous execution

new Promise((resolve, reject) => {
  console.log('begin asynchronous execution');
  reject(Error('bar'))
}).catch((e) => {
  console.log('caught error', e);
}).then(() => {
  console.log('continue asynchronous execution');
});

// begin asynchronous execution
// caught error Error: bar
// continue asynchronous execution