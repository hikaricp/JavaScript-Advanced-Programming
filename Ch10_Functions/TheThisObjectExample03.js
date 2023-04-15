window.identity = "The Window";

let object = {
    identity: 'My Object',
    getIdentity() {
        return this.identity;
    }
};

console.log(object.getIdentity()); // 'My Object'
console.log((object.getIdentity)()); // 'My Object'
console.log((object.getIdentity = object.getIdentity)()); // 'The Window'