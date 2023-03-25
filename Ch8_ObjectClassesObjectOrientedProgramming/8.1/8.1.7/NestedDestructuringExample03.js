// 在外层属性没有定义的情况下不能使用解构
let person = {
    job: {
        title: 'Software engineer'
    }
};

let personCopy = {};

// foo 在 person 中是 undefined 不能解构
({
    foo: {
        bar: personCopy.bar
    }
} = person);

console.log(personCopy);

// job 在 personCopy 中是 undefined
({
    job: {
        title: personCopy.job.title
    }
} = person);

console.log(personCopy);