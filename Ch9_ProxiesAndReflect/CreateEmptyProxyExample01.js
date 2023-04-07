const target = {
    id: 'target'
};

const handler = {};

const proxy = new Proxy(target, handler);

console.log(target.id); // target
console.log(proxy.id); // target

target.id = 'foo';
console.log(target.id); // foo
console.log(proxy.id); // foo

proxy.id = 'bar';
console.log(target.id); // bar
console.log(proxy.id); // bar

console.log(target.hasOwnProperty('id')); // true
console.log(proxy.hasOwnProperty('id')); // true

// Proxy.prototype 是 undefined,因此不能使用 instanceof 操作符
// console.log(target instanceof Proxy);
// TypeError: Function has non-object prototype 'undefined' in instanceof check
// console.log(proxy instanceof Proxy);
// TypeError: Function has non-object prototype 'undefined' in instanceof check

// 严格相等可以用来区分代理和目标
console.log(target === proxy); // false