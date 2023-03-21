let dest, src, result;

// 简单对象
dest = {};
src = { id: 'src'};

result = Object.assign(dest, src);

console.log(dest === result); // true
console.log(dest !== src); // true
console.log(result); // { id: 'src' }
console.log(dest); // { id: 'src' }

// 多个源对象
dest = {};

result = Object.assign(dest, { a: 'foo'}, { b : 'bar' });

console.log(result); // { a: 'foo', b: 'bar' }

// 获取函数与设置函数
dest = {
    set a(val) {
        console.log(`Invoked dest setter with param ${val}`);
    }
};

src = {
    get a() {
        console.log('Invoked src getter');
        return 'foo';
    }
}

Object.assign(dest, src);

console.log(dest);