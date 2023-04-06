let p = new class Foo {
    constructor(x) {
        console.log(x);
    }
}('bar'); // bar

console.log(p); // Foo {}