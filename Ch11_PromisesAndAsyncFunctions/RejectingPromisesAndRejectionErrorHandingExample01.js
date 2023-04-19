let p1 = new Promise((resolve, reject) => reject(Error('foo')));
let p2 = new Promise((resolve, reject) => { throw Error('foo'); });
let p3 = Promise.resolve().then(() => { throw Error('foo'); });
let p4 = Promise.reject(Error('foo'));

setTimeout(console.log, 0, p1); // Promise {<rejected>: Error: foo
setTimeout(console.log, 0, p2); // Promise {<rejected>: Error: foo
setTimeout(console.log, 0, p3); // Promise {<rejected>: Error: foo
setTimeout(console.log, 0, p4); // Promise {<rejected>: Error: foo

// 也会抛出4个未捕获的错误
// Uncaught (in promise) Error: foo
// Uncaught (in promise) Error: foo
// Uncaught (in promise) Error: foo
// Uncaught (in promise) Error: foo