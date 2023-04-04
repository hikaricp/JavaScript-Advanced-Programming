function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function createAnother(origin) {
    let clone = object(origin);
    clone.sayHi = function() {
        console.log("Hi");
    };
    return clone;
}

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = createAnother(person);
anotherPerson.sayHi(); // Hi