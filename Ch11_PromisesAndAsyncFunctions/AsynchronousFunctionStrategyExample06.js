async function randomDelay(id) {
  // 延迟 0 ~ 1000毫秒
  const delay = Math.random() * 1000;
  return new Promise((resolve) => setTimeout(() => {
    console.log(`${id} finished`);
    resolve(id);
  }, delay));
}

async function foo() {
  const t0 = Date.now();

  const promises = Array(5).fill(null).map((_, i) => randomDelay(i));

  for (const p of promises) {
    console.log(`awaited ${await p}`);
  }

  console.log(`${Date.now() - t0}ms elapsed`);
}
foo();

// 2 finished
// 0 finished
// awaited 0
// 4 finished
// 3 finished
// 1 finished
// awaited 1
// awaited 2
// awaited 3
// awaited 4
// 477ms elapsed