function createPerosn(name, age, job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}

let person1 = createPerosn("Nicholas", 29, "Software Engineer");
let person2 = createPerosn("Greg", 27, "Doctor");