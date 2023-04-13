function sum(num1, num2) {
    return num1 + num2;
}

function callSum(num1, num2) {
    return sum.call(this, 10, 10); // 将参数一个一个地列出来
}

console.log(callSum(10, 10));