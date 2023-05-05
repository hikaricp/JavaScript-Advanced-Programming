function fooPromiseExecutor(resolve, reject) {
  setTimeout(reject, 1000, 'bar');
}

function foo() {
  new Promise(fooPromiseExecutor);
}

foo();

// Uncaught (in promise) bar
// setTimeout (async)
// fooPromiseExecutor @ VM43:2
// foo @ VM43:6
// (anonymous) @ VM43:9