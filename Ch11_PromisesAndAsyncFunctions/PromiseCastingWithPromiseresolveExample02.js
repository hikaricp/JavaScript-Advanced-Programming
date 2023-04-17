setTimeout(console.log, 0, Promise.resolve());
// Promise {<fulfilled>: undefined}

setTimeout(console.log, 0, Promise.resolve(3));
// Promise {<fulfilled>: 3}

// 多余的参数会忽略
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));
// Promise {<fulfilled>: 4}