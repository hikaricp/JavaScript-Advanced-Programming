// throw Error('foo');
// console.log('bar');

Promise.reject(Error('foo'));
console.log('bar');
// bar

// error: Uncaught (in promise) Error: foo