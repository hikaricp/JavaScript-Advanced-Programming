let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));

setTimeout(console.log, 0, p); // Promise { <pending> }