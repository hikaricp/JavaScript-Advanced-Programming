const target = new Date();
const proxy = new Proxy(target, {});

console.log(proxy instanceof Date);

proxy.getDate();
// TypeError: this is not a Date object.