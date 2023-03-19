function displayInfo(args) {
    let output = "";

    if (typeof args.name == "string") {
        output += "Name: " + args.name + "\n";
    }

    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }

    console.log(output);
}

displayInfo({
    name: "Nicholas",
    age: 20
});

displayInfo({
    name: "Greg"
});