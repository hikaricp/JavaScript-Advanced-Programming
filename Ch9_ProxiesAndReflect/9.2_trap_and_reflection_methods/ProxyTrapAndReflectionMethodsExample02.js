const myTarget = {};

const proxy = new Proxy(myTarget, {
    set(target, property, receiver) {
        console.log('set()');
        return Reflect.set(...arguments);
    }
});

proxy.foo = 'bar';