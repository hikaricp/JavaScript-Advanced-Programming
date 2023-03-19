const a = ["foo", "bar", "baz", "qux"];

for (const [idx, element] of a.entries()) {
    console.log(idx);
    console.log(element);
}