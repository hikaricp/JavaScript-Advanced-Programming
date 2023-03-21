let dest, src, result;

// 覆盖属性
dest = { id: 'dest' };

result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });

console.log(dest); // { id: 'src2', a: 'foo', b: 'bar' }

// 通过目标对象上的设置函数观察到覆盖的过程
dest = {
    set id(x) {
        console.log(x);
    }
};

Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' });
// first
// second
// third

// 对象引用
dest = {};
src = { a: {} };

Object.assign(dest, src);

// 浅拷贝意味着只会复制对象的引用
console.log(dest); // { a: {} }
console.log(dest.a === src.a); // true