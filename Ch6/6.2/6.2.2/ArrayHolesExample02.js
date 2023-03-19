const options = [1, , , , 5];

for (const option of options) {
    console.log(option === undefined);
}

const a = Array.from([, , ,]);
for (const val of a) {
    console.log(val == undefined);
}

console.log(Array.from([, , ,]));

for (const [index, value] of options.entries()) {
    console.log(value);
}
