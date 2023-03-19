function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const g = generatorFn();

console.log(g);
try {
  g.throw('foo');
} catch (e) {
  console.log(e);
}
console.log(g);
