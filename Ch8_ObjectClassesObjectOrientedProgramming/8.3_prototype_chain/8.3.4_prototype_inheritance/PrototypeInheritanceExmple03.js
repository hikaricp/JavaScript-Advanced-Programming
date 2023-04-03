let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = Object.create(person, {
    name: {
        value: "Greg"
    }
});

console.log(person.name); // "Nicholas"
console.log(anotherPerson.name); // "Greg"