function* generatorFn() {
    console.log('foobar');
}

// 初次调用生成器函数不会打印日志
let generatorObject = generatorFn();

generatorObject.next();
