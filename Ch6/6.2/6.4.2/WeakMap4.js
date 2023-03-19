const wm = new WeakMap();
wm.set({}, "val");
console.log(wm.get({}));

const wm2 = new WeakMap();
const container = {
    key: {}
};
wm2.set(container.key, "val");
console.log(wm2.get(container.key))

function removeReference() {
    container.key = null;
}
console.log(wm2.get(container.key))