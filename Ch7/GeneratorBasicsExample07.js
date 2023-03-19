function* generatorFn() {}

console.log(generatorFn);

console.log(generatorFn()[Symbol.iterator]);

console.log(generatorFn());

console.log(generatorFn()[Symbol.iterator]());

const g = generatorFn();

console.log(g === g[Symbol.iterator]()); // true
