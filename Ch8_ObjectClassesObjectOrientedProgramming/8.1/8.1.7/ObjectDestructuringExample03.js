let person = {
    name: 'Matt',
    age: 27 // 解构时可以忽略一些值
};

// 不存在属性的值是 undefined
let { name, job } = person;

console.log(name); // Matt
console.log(job); // undefined