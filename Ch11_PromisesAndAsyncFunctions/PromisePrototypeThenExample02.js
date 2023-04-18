function onResolved(id) {
  setTimeout(console.log, 0, id, 'resolved');
}

function onRejected(id) {
  setTimeout(console.log, 0, id, 'rejected');
}

let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

// 非函数处理程序会被静默忽略，不推荐
p1.then('abcdef');

// 不传 onResolve 处理程序的规范写法
p2.then(null, () => onRejected('p2'));