function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const g = generatorFn();

console.log(g.next()); // { value: 1, done: false }
console.log(g.return(4)); // { value: 4, done: true }
console.log(g.next()); // { value: undefined, done: true }
console.log(g.next()); // { value: undefined, done: true }
console.log(g.next()); // { value: undefined, done: true }
