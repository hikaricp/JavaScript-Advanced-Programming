console.log(Array.from("Matt"));

const m = new Map().set(1, 2)
    .set(3, 4);
const s = new Set().add(1).add(2).add(3).add(4);

console.log(Array.from(m));
console.log(Array.from(s));

// 浅拷贝
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
console.log(a1);
console.log(a1 === a2); // false

// 使用任何可迭代的对象
const iter = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};
console.log(Array.from(iter)); // [1, 2, 3, 4]

// 将arguments对象转为数组
function getArgsArray() {
    return Array.from(arguments);
}
console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]

const arrayLikeObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
};
console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]

console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
console.log(Array.of(undefined)); // [undefined]