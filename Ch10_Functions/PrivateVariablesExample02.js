function MyObject() {
    // 私有变量和私有方法
    let privateVariable = 10;

    function privateFunction() {
        return false;
    }

    // 特权方法
    this.publicMethod = function () {
        privateFunction++;
        return privateFunction();
    };
}