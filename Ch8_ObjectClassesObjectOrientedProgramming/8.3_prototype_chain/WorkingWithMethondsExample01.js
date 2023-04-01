function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 继承 SuperType
SubType.prototype = new SuperType();

// 新方法
SubType.prototype.getSubValue = function () {
    return this.subproperty;
}

// 覆盖已有方法
SubType.prototype.getSuperValue = function() {
    return false;
}

let instance = new SubType();
console.log(instance.getSuperValue()); // false