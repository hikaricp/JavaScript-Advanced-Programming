class Vehicle { }

function getParentClass() {
    console.log('evaluated expression');
    return Vehicle;
}

class Bus extends getParentClass() { }
// 可求值的表达式