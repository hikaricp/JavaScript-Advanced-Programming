const m = new Map();
const loginButton = document.querySelector('#login');
m.set(loginButton, { disabled: true });

const wm = new WeakMap();
const loginButton2 = document.querySelector('#login');
wm.set(loginButton2, { disabled: true }); //  DOM树被删除后，垃圾回收可以立即释放该内存