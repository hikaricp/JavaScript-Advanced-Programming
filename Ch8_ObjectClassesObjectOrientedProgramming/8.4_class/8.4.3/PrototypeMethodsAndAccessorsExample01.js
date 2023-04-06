class Person {
    constructor() {
        this.locate = () => console.log('instance');
    }

    locate() {
        console.log('prototype');
    }
}

let p = new Person();

p.locate(); // instance
Person.prototype.locate(); // prototype