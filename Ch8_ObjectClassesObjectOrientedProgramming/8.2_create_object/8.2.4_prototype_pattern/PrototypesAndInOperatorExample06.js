let k1 = Symbol('k1'), k2 = Symbol('k2');

let o = {
    [k1]: 'k1',
    [k2]: 'k2'
};

// 获取符号为键的属性
console.log(Object.getOwnPropertySymbols(o));