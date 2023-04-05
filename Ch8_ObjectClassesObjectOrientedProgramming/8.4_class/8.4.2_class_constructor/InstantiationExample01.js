class Animal {}

class Person {
    constructor() {
        console.log('person crot');
    }
}

class Vegetable {
    constructor() {
        this.color = 'orange';
    }
}

let a = new Animal();

let p = new Person(); // person crot

let v = new Vegetable();
console.log(v.color); // orange