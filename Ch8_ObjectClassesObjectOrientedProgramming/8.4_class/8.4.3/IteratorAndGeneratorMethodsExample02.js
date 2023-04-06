class Person {
    constructor() {
        this.nickname = ['Jack', 'Jake', 'J-Dog'];
    }

    *[Symbol.iterator]() {
        yield* this.nickname.entries();
    }
}

let p = new Person();
for (let [idx, nickname] of p) {
    console.log(nickname);
}

// Jack
// Jake
// J-Dog