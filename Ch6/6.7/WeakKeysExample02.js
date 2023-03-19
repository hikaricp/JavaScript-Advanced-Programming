const ws = new WeakSet();

const container = {
    val: {}
};

ws.add(container.val);

console.log(ws.has(container.val));

function removeReference() {
    container.val = null;
}

removeReference(); // 调用该方法才会被垃圾回收

console.log(ws.has(container.val));