let p = new Promise((resolve, reject) => {
  try {
    throw Error('foo');
  } catch (e) { }

  resolve('bar');
});

setTimeout(console.log, 0, p); // Promise {<fulfilled>: 'bar'}