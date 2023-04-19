// 创建解决的期约
let p = Promise.resolve();

// 添加解决处理程序
// 直觉上，这个处理程序会等期约一解决就执行
p.then(() => console.log('onResolved handler'))

// 同步输出，证明 then() 已经返回
console.log('then() returns');

// 实际的输出:
// then() returns
// onResolved handler
