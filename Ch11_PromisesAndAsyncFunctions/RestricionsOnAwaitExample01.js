async function foo() {
  console.log(await Promise.resolve(3));
}
foo(); // 3

(async function () {
  console.log(await Promise.resolve(3))
})();