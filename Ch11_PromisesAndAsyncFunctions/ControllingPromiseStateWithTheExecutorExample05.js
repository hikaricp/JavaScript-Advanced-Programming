let p = new Promise((resolve, reject) => {
    setTimeout(reject, 10000); // 10 秒以后调用 reject()
    // 执行函数的逻辑
});

setTimeout(console.log, 0, p); // Promise {<pending>}
setTimeout(console.log, 11000, p); // 11 秒后再检查状态

// (After 10 seconds) Uncaught error
// (After 11 seconds) Promise <rejected>