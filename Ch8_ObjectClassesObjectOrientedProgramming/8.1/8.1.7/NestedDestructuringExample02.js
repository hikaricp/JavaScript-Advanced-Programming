let person = {
    name: 'Matt',
    age: 27,
    job: {
        title: 'Software engineer'
    }
};

let { job: { title } } = person;

console.log(title);