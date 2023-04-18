let p1 = Promise.resolve('foo');

// 若调用 then() 时不传处理程序，则原样向后传
let p2 = p1.then();
setTimeout(console.log, 0, p2); // Promise {<fulfilled>: 'foo'}

let p3 = p1.then(() => undefined);
let p4 = p1.then(() => { });
let p5 = p1.then(() => Promise.resolve());

setTimeout(console.log, 0, p3); // Promise {<fulfilled>: undefined}
setTimeout(console.log, 0, p4); // Promise {<fulfilled>: undefined}
setTimeout(console.log, 0, p5); // Promise {<fulfilled>: undefined}

let p6 = p1.then(() => 'bar');
let p7 = p1.then(() => Promise.resolve('bar'));

setTimeout(console.log, 0, p6); // Promise {<fulfilled>: 'bar'}
setTimeout(console.log, 0, p7); // Promise {<fulfilled>: 'bar'}

// 保留返回的期约
let p8 = p1.then(() => new Promise(() => { }));
let p9 = p1.then(() => Promise.reject());
// Uncaught (in promise) undefined

setTimeout(console.log, 0, p8); // Promise {<pending>}
setTimeout(console.log, 0, p9); // Promise {<rejected>: undefined}

// 抛出异常后返回拒绝的期约
let p10 = p1.then(() => { throw 'baz'; });
// Uncaught (in promise) baz

setTimeout(console.log, 0, p10); // Promise {<rejected>: 'baz'}

// 返回错误值不会触发拒绝行为，而会把错误对象包装在一个解决的期约中
let p11 = p1.then(() => Error('qux'));
setTimeout(console.log, 0, p11); // Promise {<fulfilled>: Error: qux