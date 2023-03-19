// let person = new Object();
// person.name = "Nicholas";
// console.log(person.name);

let name = "Nicholas";
name.age = 27;
console.log(name.age); // undefined

let name1 = "Nicholas";
let name2 = new String("Matt");
name1.age = 26;
name2.age = 27;
console.log(name1.age); // Nicholas
console.log(name2.age); // 27
console.log(typeof name1); // string
console.log(typeof name2); // object

let num1 = 5;
let num2 = num1;
num1 = 100;
console.log(num1);
console.log(num2);

let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name);

function addTen(num) {
    num += 10;
    return num;
}

let count = 20;
let result = addTen(count);
console.log(count);
console.log(result);

// function setName(obj) {
//     obj.name = "Nicholas";
// }

// let person = new Object();
// setName(person);
// console.log(person.name); // Nicholas

function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
}

let person = new Object();
setName(person);
console.log(person.name);

let s = "Nicholas";
let b = true;
let i = 10;
let u;
let n = null;
let o = new Object();
console.log(typeof s); // string
console.log(typeof b); // boolean
console.log(typeof i); // number
console.log(typeof u); // undefined
console.log(typeof n); // object
console.log(typeof o); // object