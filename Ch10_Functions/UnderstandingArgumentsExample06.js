function doAdd(num1, num2) {
    arguments[1] = 10;
    console.log(arguments[0] + num2);
}

// 严格模式下 arguments[1] 赋值不再影响参数值
doAdd(10, 100) // 110