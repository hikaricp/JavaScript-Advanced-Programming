// 生成器函数声明
function* generatorFn() {}

// 生成器函数表达式
let generatorFn = function* () {}

// 作为对象字面量方法的生成器函数
let foo = {
    * gneratorFn() {}
}

// 作为类实例方法的生成器函数
class Foo {
    * generatorFn() {}
}

// 作为静态方法的生成器函数
class Bar {
    static * generatorFn() {}
}
