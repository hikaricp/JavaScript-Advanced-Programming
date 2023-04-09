const myTarget = { foo: 'bar' };

const proxy = new Proxy(myTarget, {
    getOwnPropertyDescriptor(target, property) {
        console.log('getOwnPropertyDescriptor()');
        return Reflect.getOwnPropertyDescriptor(...arguments);
    }
});

Object.getOwnPropertyDescriptor(proxy, 'foo');