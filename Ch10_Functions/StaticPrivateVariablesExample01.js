(function () {
    // 私有变量和私有函数
    let privateVariable = 10;

    function privateFunction() {
        return false;
    }

    // 构造函数
    MyObject = function () { };

    // 公有和特权方法
    MyObject.prototype.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    };
})();