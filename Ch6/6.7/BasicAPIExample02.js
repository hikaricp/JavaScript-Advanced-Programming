const ws = new WeakSet();

const val1 = { id: 1 }, val2 = { id: 2 };

ws.add(val1).add(val2);

console.log(ws.has(val1));
console.log(ws.has(val2));