let p1 = Promise.resolve('foo');

// 忽略解决的值
let p2 = p1.finally(() => new Promise((resolve, reject) => setTimeout(() => resolve('bar'), 100)));

setTimeout(console.log, 0, p2); // Promise {<pending>}

setTimeout(() => setTimeout(console.log, 0, p2), 200);

// 200 毫秒后:
// Promise {<fulfilled>: 'foo'}