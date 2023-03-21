let dest, src, result;

// 错误处理
dest = {};
src = {
    a: 'foo',
    get b() {
        // 抛出错误
        throw new Error();
    },
    c: 'char' // 不会拷贝
};

try {
    Object.assign(dest, src);
} catch (e) { }

// Object.assign() 不会回滚已完成的操作
console.log(dest); // { a: 'foo' }