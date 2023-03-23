let person = {
    name: 'Matt',
    age: 27
};

let personName = person.name,
    personAge = person.age;

console.log(personName);
console.log(personAge);

// 对象解构
let person2 = {
    name: 'Matt',
    age: 27
};

let { name: person2Name, age: person2Age } = person2;

console.log(person2Name);
console.log(person2Age);