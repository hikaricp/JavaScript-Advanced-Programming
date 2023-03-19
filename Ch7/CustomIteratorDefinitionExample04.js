let arr = ['foo', 'bar', 'baz'];
let iter1 = arr[Symbol.iterator]();

console.log(iter1[Symbol.iterator]);

let iter2 = iter1[Symbol.iterator]();

console.log(iter1 === iter2);
