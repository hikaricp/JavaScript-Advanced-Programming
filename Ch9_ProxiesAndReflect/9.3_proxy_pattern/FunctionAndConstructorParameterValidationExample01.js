function median(...nums) {
    return nums.sort()[Math.floor(nums.length / 2)];
}

const proxy = new Proxy(median, {
    apply(target, thisArg, ...argumentsList) {
        for (const arg of argumentsList[0]) {
            if (typeof arg !== 'number') {
                throw 'Non-number argument provided';
            }
        }
        return Reflect.apply(...arguments);
    }
});

console.log(proxy(4, 7, 1)); // 4
console.log(proxy(4, '7', 1)); // error: Uncaught "Non-number argument provided"