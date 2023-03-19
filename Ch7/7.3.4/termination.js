function* generatorFn() {}

const g = generatorFn();

console.log(g);
console.log(g.next);
console.log(g.return);
console.log(g.throw);
