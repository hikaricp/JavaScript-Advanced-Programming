const wm = new WeakMap();

class User {
    constructor(id) {
        this.idProperty = Symbol('id');
        console.log("this.idProperty => ", this.idProperty);
        this.setId(id);
    }

    setPrivate(property, value) {
        console.log("setPrivate#property => ", property);
        console.log("setPrivate#value => ", value);
        const privateMembers = wm.get(this) || {};
        console.log("wm.get(this) => ", wm.get(this));
        console.log("privateMembers => ", privateMembers);
        privateMembers[property] = value;
        console.log("privateMembers => ", privateMembers);
        console.log("privateMembers[property] => ", privateMembers[property]);
        wm.set(this, privateMembers);
    }

    getPrivate(property) {
        console.log("getPrivate#property => ", property);
        return wm.get(this)[property];
    }

    setId(id) {
        this.setPrivate(this.idProperty, id);
    }

    getId() {
        return this.getPrivate(this.idProperty);
    }
}

const user = new User(123);
console.log(user.getId());
user.setId(456);
console.log(user.getId());

// 并不是真正私有的
console.log(wm.get(user)[user.idProperty]);