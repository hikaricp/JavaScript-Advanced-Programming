// 可迭代对象
let arr = ['foo', 'bar'];

// 迭代对象工厂函数
console.log(arr[Symbol.iterator]); 

// 迭代器
let iter = arr[Symbol.iterator]();
console.log(iter); // ArrayIterator {}

// 获取下一个
console.log(iter.next()); // { done: false, value: 'foo' }
console.log(iter.next()); // { done: false, value: 'bar' }
console.log(iter.next()); // { done: true, value:undefined }
