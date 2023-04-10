function foo() { }

let bar = function () { };
let baz = () => { };

console.log(foo.name); // foo
console.log(bar.name); // bar
console.log(baz.name); // baz
console.log((() => { }).name); // 空字符串
console.log((new Function()).name); // anonymous