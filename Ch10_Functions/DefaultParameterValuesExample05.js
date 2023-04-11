let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
let ordinality = 0;

function getNumerals() {
    return romanNumerals[ordinality++];
}

function makeKing(name = 'Henry', numerals = getNumerals()) {
    return `King ${name} ${numerals}`;
}

console.log(makeKing()); // King Henry I
console.log(makeKing('Louis', 'XVI')); // King Louis XVI
console.log(makeKing()); // King Henry II
console.log(makeKing()); // King Henry III