let singleton = function () {
    // 私有变量和私有函数
    let privateVariable = 10;

    function privateFunction() {
        return false;
    }

    // 创建对象
    let object = new CustomType();

    // 添加特权/公有属性和方法
    object.publicProperty = true;

    object.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    };

    // 返回对象
    return object;
}();