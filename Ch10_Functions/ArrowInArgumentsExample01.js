// 在箭头函数中传递的参数，不能用 arguments 关键字访问
function foo() {
    console.log(arguments[0]);
}

foo(5); // 5

let bar = () => {
    console.log(arguments[0]);
};

bar(5); // error: Uncaught ReferenceError: arguments is not defined
