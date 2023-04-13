// 没问题
let sayHi;
if (condition) {
    sayHi = function () {
        console.log("Hi!");
    };
} else {
    sayHi = function () {
        console.log("Yo!");
    };
}