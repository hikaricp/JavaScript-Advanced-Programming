// 在原生对象的原型上定义方法
String.prototype.startsWith = function(text) {
    return this.indexOf(text) === 0;
};

let msg = "Hello world!";
console.log(msg.startsWith("Hello")); // true