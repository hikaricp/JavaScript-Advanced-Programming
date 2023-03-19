function* generatorFn() {}

const generatorObject = generatorFn();

console.log(generatorObject);
console.log(generatorObject.next()); // { done: true, value: undefined }
