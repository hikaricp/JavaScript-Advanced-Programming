let arr1 = [1, 2, 3];

// 把数组的值复制到定型数组中
let typedArr1 = Int16Array.of(...arr1);
let typedArr2 = Int16Array.from(arr1);
console.log(typedArr1);
console.log(typedArr2);

// 把数组复制到Map
let map = new Map(arr1.map((x) => [x, 'val' + x]));
console.log(map);

// 把数组复制到Set
let set = new Set(typedArr2);
console.log(set);

// 把Set复制到数组
let arr2 = [...set];
console.log(arr2);