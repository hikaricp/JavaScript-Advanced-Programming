try {
    throw new Error('foo');
} catch (e) {
    console.log(e); // Error: foo
}

try {
    Promise.reject(new Error('bar'));
} catch (e) {
    console.log(e); // error: Uncaught (in promise) Error: bar
}