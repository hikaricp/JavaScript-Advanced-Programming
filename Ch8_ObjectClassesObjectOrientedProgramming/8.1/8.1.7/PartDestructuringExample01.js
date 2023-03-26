let person = {
    name: 'Matt',
    age: 27
};

let personName, personBar, personAge;

try {
    // person.foo 是 undefined,因此会抛出错误
    ({ name: personName, foo: { bar: personBar }, age: personAge } = person);
} catch (e) { 
    console.log(e);
}

console.log(personName, personBar, personAge);