class Vehicle {
    identifyPrototype(id) {
        console.log(id, this);
    }

    static identifyClass(id) {
        console.log(id, this);
    }
}

class Bus extends Vehicle { }

let v = new Vehicle();
let b = new Bus();

b.identifyPrototype('bus'); // bus Bus {}
b.identifyPrototype('venicle'); // venicle Bus {}

Bus.identifyClass('bus'); // bus [Class: Bus]
Vehicle.identifyClass('vehicle'); // vehicle [Class: Vehicle]