function King() {
    this.royaltyName = 'Henrry';
    // this 引用 King 的实例
    setTimeout(() => console.log(this.royaltyName), 1000);
}

function Queen() {
    this.royaltyName = 'Elizabeth';

    // this 引用 window 对象
    setTimeout(() => console.log(this.royaltyName), 1000);
}

new King();
new Queen();