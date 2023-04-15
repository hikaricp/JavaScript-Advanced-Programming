// 创建比较函数
let compare = createComparisonFunction('name');

// 调用函数
let result = compareNames({ name: 'Nicholas' }, { name: 'Matt' });

// 解除对函数的引用，这样就可以释放内存了
compareNames = null;
