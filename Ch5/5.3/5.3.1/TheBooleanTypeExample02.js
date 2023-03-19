let falseObject = new Boolean(false);
let result = falseObject && true; // 所有对象在布尔表达式中都会自动转为true
console.log(result); // true

let falseValue = false;
result = falseValue && true;
console.log(result); // false