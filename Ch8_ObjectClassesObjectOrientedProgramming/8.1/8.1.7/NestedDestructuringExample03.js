let person = {
    job: {
        title: 'Software engineer'
    }
};

let personCopy = {};

({
    foo: {
        bar: personCopy.bar
    }
} = person);

console.log(personCopy);