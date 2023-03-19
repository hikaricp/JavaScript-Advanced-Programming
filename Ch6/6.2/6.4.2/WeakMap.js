const key1 = { id: 1 },
    key2 = { id: 2 },
    key3 = { id: 3 };

const wm1 = new WeakMap([
    [key1, "val1"],
    [key2, "val2"],
    [key3, "val3"]
]);
console.log(wm1.get(key1));
console.log(wm1.get(key2));
console.log(wm1.get(key3));

// const wm2 = new WeakMap([
//     [key1, "val1"],
//     ["BADKEY", "val2"], // TypeError: Invalid value used as weak map key
//     [key3, "val3"]
// ]);

// 原始值先包装成对象在作为键
const stringKey = new String("key1");
const wm3 = new WeakMap([
    [stringKey, "val1"]
]);
console.log(wm3.get(stringKey));