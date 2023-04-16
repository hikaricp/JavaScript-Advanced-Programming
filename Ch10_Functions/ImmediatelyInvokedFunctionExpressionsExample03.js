// 内嵌块级作用域
{
    let i;
    for (i = 0; i < count; i++) {
        console.log(i);
    }
}

console.log(i); // 抛出错误