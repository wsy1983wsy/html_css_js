/**
 * Buffer 缓冲区
 *  - Buffer的结构和数组很想，操作的方法也和数组类似
 *  - 数组中不能存储二进制文件，而buffer就是专门用来存储二进制文件数据
 *  - 使用buffer，不需要require,直接适用即可
 *  - 在buffer中存储的都是二进制数据，但是显示时都是以16进制的形式显示的
 *      buffer中每一个元素的范围都是从00--ff  即：0--255， 二进制：00000000--11111111
 *      buffer中一个元素，占用内存的一个字节
 *
 *  - buffer的大小一旦确定，则不能修改，Buffer实际上是对底层的直接操作
 *
 */

// let str = "Hello 世界";
// let buf = Buffer.from(str);
// console.log(buf);
// console.log(buf.length);//占用内存的大小,一个汉字占用3个字节
// console.log(str.length);//字符串的长度
//创建一个10个字节的buffer
//alloc 分配空间，并清空数据
let buff2 = Buffer.alloc(10);
//通过索引，来操作buff2中的元素
buff2[0] = 88;
buff2[1] = 255;
buff2[2] = 0xaa;
buff2[3] = 556;
console.log(buff2);
console.log(buff2[0].toString(16));

for (let i = 0; i < buff2.length; i++) {
    console.log(buff2[i]);
}
//allocUnsafe 创建一个指定大小的buffer，但是buffer中更可能含有敏感数据
let buff3 = Buffer.allocUnsafe(10);
console.log(buff3);

/**
 * Buffer.from(str) 将一个字符串转换为buffer
 * Buffer.alloc 创建一个指定大小的Buffer，并清空内容
 * Buffer.allocUnsafe 创建一个指定大小的Buffer，但是可能包含敏感数据
 * buf.toString 将缓冲区的数据转换为字符串
 */