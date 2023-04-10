function sayHi() {
    console.log(`Hello ${arguments[0]} ${arguments[1]}`);
}

sayHi(); // Hello undefined undefined
sayHi("James") // Hello James undefined
sayHi("James", "King!"); // Hello James King!