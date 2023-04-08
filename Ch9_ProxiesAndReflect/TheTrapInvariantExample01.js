// 捕获器不变式
const target = {};
Object.defineProperty(target, 'foo', {
    configurable: false,
    writable: false,
    value: 'bar'
});

const handler = {
    get() {
        return 'qux';
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo);
// TypeError