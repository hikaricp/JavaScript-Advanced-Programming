let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();

iter.return = function() {
    console.log('Exiting early');
    return { done: true };
};

for (let i of iter) {
    console.log(i);
    if (i > 2) {
        break
    }
}

for (let i of iter) {
    console.log(i);
}
