function* generatorFn() {
    return 'foo';
}

let generatorObject = generatorFn();

console.log(generatorObject);
console.log(generatorObject.next()); // { done: true, value: 'foo' }
