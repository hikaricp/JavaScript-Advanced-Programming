let p1 = Promise.reject('foo');

// 调用 then() 时不传处理程序则原样向后传
let p2 = p1.then();
//Uncaught (in promise) foo

setTimeout(console.log, 0, p2); // Promise {<rejected>: 'foo'}

let p3 = p1.then(null, () => undefined);
let p4 = p1.then(null, () => { });
let p5 = p1.then(null, () => Promise.resolve());

setTimeout(console.log, 0, p3); // Promise {<fulfilled>: undefined}
setTimeout(console.log, 0, p4); // Promise {<fulfilled>: undefined}
setTimeout(console.log, 0, p5); // Promise {<fulfilled>: undefined}

let p6 = p1.then(null, () => 'bar');
let p7 = p1.then(null, () => Promise.resolve('bar'));

setTimeout(console.log, 0, p6); // Promise {<fulfilled>: 'bar'}
setTimeout(console.log, 0, p7); // Promise {<fulfilled>: 'bar'}

// Promise.resolve() 保留返回的期约
let p8 = p1.then(null, () => new Promise(() => { }));
let p9 = p1.then(null, () => Promise.reject());
//Uncaught (in promise) undefined

setTimeout(console.log, 0, p8); // Promise {<pending>}
setTimeout(console.log, 0, p9); // Promise {<rejected>: undefined}

let p10 = p1.then(null, () => { throw 'baz'; });
// Uncaught (in promise) baz

setTimeout(console.log, 0, p10); // Promise {<rejected>: 'baz'}

let p11 = p1.then(null, () => Error('qux'));

setTimeout(console.log, 0, p11); // Promise {<fulfilled>: Error: qux