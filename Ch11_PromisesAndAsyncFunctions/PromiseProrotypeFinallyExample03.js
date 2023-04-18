let p1 = Promise.resolve('foo');

// 这里都会原样后传
let p2 = p1.finally();
let p3 = p1.finally(() => undefined);
let p4 = p1.finally(() => { });
let p5 = p1.finally(() => Promise.resolve());
let p6 = p1.finally(() => 'bar');
let p7 = p1.finally(() => Promise.resolve('bar'));
let p8 = p1.finally(() => Error('qux'));

setTimeout(console.log, 0, p2); // Promise {<fulfilled>: 'foo'}
setTimeout(console.log, 0, p3); // Promise {<fulfilled>: 'foo'}
setTimeout(console.log, 0, p4); // Promise {<fulfilled>: 'foo'}
setTimeout(console.log, 0, p5); // Promise {<fulfilled>: 'foo'}
setTimeout(console.log, 0, p6); // Promise {<fulfilled>: 'foo'}
setTimeout(console.log, 0, p7); // Promise {<fulfilled>: 'foo'}
setTimeout(console.log, 0, p8); // Promise {<fulfilled>: 'foo'}

// Promise.finally() 保留返回的期约
let p9 = p1.finally(() => new Promise(() => { }));
let p10 = p1.finally(() => Promise.reject());
// Uncaught (in promise) undefined

setTimeout(console.log, 0, p9); // Promise {<pending>}
setTimeout(console.log, 0, p10); // Promise {<rejected>: undefined}

let p11 = p1.finally(() => { throw 'baz' });
// Uncaught (in promise) baz

setTimeout(console.log, 0, p11); // Promise {<rejected>: 'baz'}