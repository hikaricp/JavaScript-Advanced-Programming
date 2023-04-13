window.color = 'red';
let o = {
    color: 'blue'
};

function sayColor() {
    console.log(this.color);
}

sayColor.call();
sayColor.call(this);
sayColor.call(window);
sayColor.call(o);