class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1, limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ };
                } else {
                    return { done: true };
                }
            },
            return() {
                console.log('Exting early');
                return { done: true };
            }
        };
    }
}

let counter1 = new Counter(5);

for (let i of counter1) {
    if (i > 2) {
        break;
    }
    console.log(i);
}

console.log("--------");

// 接着迭代,测试是否关闭了迭代器
for (let i of counter1) {
    console.log(i);
}

let counter2 = new Counter(5);

try {
    for (let i of counter2) {
        if (i > 2) {
            throw 'err';
        }
        console.log(i);
    }
} catch(e) {}

let counter3 = new Counter(5);

let [a, b] = counter3;
