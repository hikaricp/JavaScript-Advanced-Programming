class Person {
    constructor() {
        this.nickname = ['Jack', 'Jake', 'J-Dog'];
    }

    // 只返回迭代器实例
    [Symbol.iterator]() {
        return this.nickname.entries();
    }
}

let p = new Person();
for (let [idx, nickname] of p) {
    console.log(nickname);
}

// Jack
// Jake
// J-Dog