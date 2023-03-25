let person = {
    name: 'Matt',
    age: 27,
    job: { title: "Software engineer" }
};

let personCopy = {};

({
    name: personCopy.name,
    age: personCopy.age,
    job: personCopy.job
} = person);

console.log(personCopy);

// 修改 person.job 也会影响到 personCopy.job
person.job.title = 'Hacker';

console.log(person);

console.log(personCopy);