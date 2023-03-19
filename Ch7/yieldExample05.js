function* innerGeneratorFn() {
    yield 'foo';
    return 'bar';
}

function* outerGeneratorFn(genObj) {
    console.log('iter value:', yield* innerGeneratorFn());
}

for (const x of outerGeneratorFn()) {
    console.log('value:', x);
}
