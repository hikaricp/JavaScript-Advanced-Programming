// 后定义的默认值参数可以引用先定义的参数
function makeKing(name = 'Henry', numerals = name) {
    return `King ${name} ${numerals}`;
}

console.log(makeKing()); // King Henry Henry