function delayedExecute(str, callback = null) {
  setTimeout(() => {
    console.log(str);
    callback && callback()
  }, 1000)
}

delayedExecute('p1 callback', () => {
  delayedExecute('p2 callback', () => {
    delayedExecute('p3 callback', () => {
      delayedExecute('p4 callback', () => {
      });
    });
  });
});

// p1 callback
// p2 callback
// p3 callback
// p4 callback