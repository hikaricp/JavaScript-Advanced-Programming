class Person {
    constructor() {
        // 添加到 this 上的所有内容都会存在于不同的实例上
        this.locate = () => console.log('instance', this);
    }

    // 定义在类的原型对象上
    locate() {
        console.log('prototype', this);
    }

    // 定义在类本身上
    static locate() {
        console.log('class', this);
    }
}

let p = new Person();

p.locate(); // instance, Person {}
Person.prototype.locate(); // prototype, {constructor: ...}
Person.locate(); // class, class Person {}