// 异步错误只能通过异步的 onRejected 处理程序捕获

// 正确
Promise.reject(Error('foo')).catch((e) => { });

// 不正确
try {
  Promise.reject(Error('foo'));
} catch (e) { }