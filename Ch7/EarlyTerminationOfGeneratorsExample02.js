let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();

for (let i of iter) {
    console.log(i);
    if (i > 2) {
        break;
    }
}

// 接着迭代
for (let i of iter) {
    console.log(i);
}
