function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 10)); // 20

let another = sum;
console.log(another(10, 10)); // 20

sum = null;
console.log(another(10, 10)); // 20