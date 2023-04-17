let p = new Promise((resolve, reject) => {
    resolve();
    reject();
});

setTimeout(console.log, 0, p); // Promise {<fulfilled>: undefined}