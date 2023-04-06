class Person {
    set name(newName) {
        console.log('set name');
        this.name_ = newName;
    }

    get name() {
        console.log('get name');
        return this.name_;
    }
}

let p = new Person();
p.name = 'Jack';
console.log(p.name); // Jack