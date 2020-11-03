/*
buffer  ：
1. 缓存数据 ，在内存空间开辟出固定大小的内存
2. 数组不能进行二进制数据操作
3. js数组不像 java python 高效

*/ 

var str = "hell"
let buf = Buffer.from(str)// 字符串 转为 buffer
console.log(buf)

console.log(buf.toString()) // buffer 转 字符串

              // 10个缓存区，编码格式
let buf1 = Buffer.alloc(10)// 开辟一个空对的 buffer 缓存区
buf1[0] = 255
console.log(buf1)