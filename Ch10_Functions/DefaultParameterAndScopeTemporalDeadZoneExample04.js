// 报错，暂时性死区
function makeKing(name = numerals, numerals = 'VIII') {
    return `King ${name} ${numerals}`;
}

console.log(makeKing());
