const ws = new Set();

ws.add({}); // {}这个对象没有其他引用,代码执行完毕,这个对象就被垃圾回收了
console.log(ws.has({}));