"use strict"

// 无优化：尾调用没有返回
function outerFunction() {
    innerFunction();
}

// 无优化：尾调用没有直接返回
function outerFunction() {
    let innerFunctionResult = innerFunction();
    return innerFunctionResult;
}

// 无优化：尾调用返回后必须转型为字符串
function outerFunction() {
    return innerFunction().toString();
}

// 无优化：尾调用是一个闭包
function outerFunction() {
    let foo = 'bar';
    function innerFunction() { return foo; }
    return innerFunction();
}