// 这两个方法是浅拷贝
const o = {
    qux: {}
};

console.log(Object.values(o)[0] === o.qux); // true

console.log(Object.entries(o)[0][1] === o.qux); // true