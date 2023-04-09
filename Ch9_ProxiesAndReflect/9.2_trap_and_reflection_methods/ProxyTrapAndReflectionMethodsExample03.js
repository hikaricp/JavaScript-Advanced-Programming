const myTarget = {};

const proxy = new Proxy(myTarget, {
    has(target, ptoperty) {
        console.log('has()');
        return Reflect.has(...arguments);
    }
});

'foo' in proxy;
'foo' in Object.create(proxy);