const s = new Set();

s.add('foo');
console.log(s.size);
s.add('foo');
console.log(s.size);

// 集合中有这个值
console.log(s.delete('foo')); // true

// 集合中没有这个值
console.log(s.delete('bar')); // false