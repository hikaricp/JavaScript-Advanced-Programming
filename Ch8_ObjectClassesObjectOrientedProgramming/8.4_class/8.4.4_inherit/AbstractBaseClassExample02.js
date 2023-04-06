// 抽象基类
class Vehicle {
    constructor() {
        if (new.target === Vehicle) {
            throw new Error('Vehicle cannot be direbtly instantiated');
        }

        if (!this.foo) {
            throw new Error('Inheriting class must define foo()');
        }

        console.log('success!');
    }
}

// 派生类
class Bus extends Vehicle {
    foo() { }
}

// 派生类
class Van extends Vehicle { }

new Bus(); // success
new Van(); // Error: Inheriting class must define foo()