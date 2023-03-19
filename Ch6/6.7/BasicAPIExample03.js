const val1 = { id: 1 }, val2 = { id: 2 }, val3 = { id: 3 };

const ws = new WeakSet().add(val1);
ws.add(val2).add(val3);

console.log(ws.has(val1));
console.log(ws.has(val2));
console.log(ws.has(val3));