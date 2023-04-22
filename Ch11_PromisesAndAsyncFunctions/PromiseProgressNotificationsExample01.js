class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandlers = [];

    super((resolve, reject) => {
      return executor(resolve, reject, (status) => {
        notifyHandlers.map((handler) => handler(status));
      });
    });

    this.notifyHandlers = notifyHandlers;
  }

  notify(notifyHandler) {
    this.notifyHandlers.push(notifyHandler)
    return this;
  }
}

let p = new TrackablePromise((resolve, reject, notify) => {
  function countdown(x) {
    if (x > 0) {
      notify(`${20 * x}% remaining`);
      setTimeout(() => countdown(x - 1), 1000);
    } else {
      resolve();
    }
  }

  countdown(5);
});

// p.notify((x) => setTimeout(console.log, 0, 'progress:', x));

// p.then(() => setTimeout(console.log, 0, 'completed'));

// progress: 80% remaining
// progress: 60% remaining
// progress: 40% remaining
// progress: 20% remaining
// completed

p.notify((x) => setTimeout(console.log, 0, 'a:', x))
  .notify((x) => setTimeout(console.log, 0, 'b:', x));

p.then(() => setTimeout(console.log, 0, 'completed'));

// a: 80% remaining
// b: 80% remaining
// a: 60% remaining
// b: 60% remaining
// a: 40% remaining
// b: 40% remaining
// a: 20% remaining
// b: 20% remaining
// completed