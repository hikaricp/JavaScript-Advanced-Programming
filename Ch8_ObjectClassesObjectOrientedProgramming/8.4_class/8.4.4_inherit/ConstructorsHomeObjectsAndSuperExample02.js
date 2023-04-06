class Vehicle {
    static identify() {
        console.log('vehicle');
    }
}

class Bus extends Vehicle {
    static identify() {
        // 通过 super 调用父类定义的静态方法
        super.identify();
    }
}

Bus.identify(); // vehicle