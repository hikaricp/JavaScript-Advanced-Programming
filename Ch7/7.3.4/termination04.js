function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const g = generatorFn();

for (const x of g) {
  if (x > 1) {
    g.return(4);
  }
  console.log(x);
}
