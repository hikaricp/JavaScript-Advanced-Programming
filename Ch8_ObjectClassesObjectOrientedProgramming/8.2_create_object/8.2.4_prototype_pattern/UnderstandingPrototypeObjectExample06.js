let biped = {
    numLegs: 2
};

let person = {
    name: 'Matt'
};

// 向 person 实例的私有属性[[Prototype]]写入一个新值
Object.setPrototypeOf(person, biped);

console.log(person.name); // Matt
console.log(person.numLegs); // 2
console.log(Object.getPrototypeOf(person) === biped); // true