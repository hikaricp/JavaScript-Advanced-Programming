// 永远待定
let p1 = Promise.all([new Promise(() => { })]);
setTimeout(console.log, 0, p1); // Promise {<pending>}

// 一次拒绝会导致最终期约拒绝
let p2 = Promise.all([
  Promise.resolve(),
  Promise.reject(),
  Promise.resolve()
]);
setTimeout(console.log, 0, p2); // Promise {<rejected>}