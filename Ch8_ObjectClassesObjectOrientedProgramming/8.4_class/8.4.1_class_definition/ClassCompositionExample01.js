// 类的构成

// 空类定义,有效
class Foo { }

// 有构造函数的类,有效
class Bar {
    constructor() { }
}

// 有获取函数的类,有效
class Baz {
    get myBaz() { }
}

// 有静态方法的类,有效
class Qux {
    static myQux() { }
}