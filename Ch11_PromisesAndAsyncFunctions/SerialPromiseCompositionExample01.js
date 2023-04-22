function addTwo(x) { return x + 2; }
function addThree(x) { return x + 3; }
function addFive(x) { return x + 5; }

function addThen(x) {
  return addFive(addTwo(addThree(x)));
}

console.log(addThen(7)); // 17