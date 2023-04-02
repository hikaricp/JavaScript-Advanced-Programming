// 传递参数
function SuperType(name) {
    this.name = name;
 }

function SubType() {
    // 继承 SuperType 并传参
    SuperType.call(this, "Nicholas");

    this.age = 29;
}

let instance = new SubType();
console.log(instance.name); // Nicholas
console.log(instance.age); // 29