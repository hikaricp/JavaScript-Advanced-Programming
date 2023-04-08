// const target = {
//     foo: 'bar'
// };

// const handler = {
//     get() {
//         return Reflect.get(...arguments);
//     }
// };

// const proxy = new Proxy(target, handler);

// console.log(proxy.foo); // bar
// console.log(target.foo); // bar

const target = {
    foo: 'bar'
};

const handler = {
    // 更加简洁的写法
    get: Reflect.get
}

const proxy = new Proxy(target, handler);

console.log(proxy.foo); // bar
console.log(target.foo); // bar