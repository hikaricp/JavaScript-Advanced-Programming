function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 继承 SuperType
SubType.prototype = new SuperType();

// 通过对象字面量添加方法,会导致上一行无效
SubType.prototype = {
    getSubValue() {
        return this.subproperty;
    },

    someOtherMethod() {
        return false;
    }
};

let instance = new SubType();
console.log(instance.getSubValue()); // false
console.log(instance.someOtherMethod()); // false
console.log(instance.getSuperValue()); // 出错!