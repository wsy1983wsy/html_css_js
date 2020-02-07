/**
 * 文件系统（File System）
 *      简单来说就是通过nodejs操作文件
 *      需要先引入fs模块，fs是核心模块，不需要下载
 *
 *  文件的写入：
 *      1.打开文件
 *          fs.openSync(path,flags[,mode])
 *              - path 文件路径
 *              - flags 打开文件要做的操作的类型
 *                  r 只读
 *                  w 可写的
 *              - mode 设置文件的操作权限，一般不传
 *         返回值： 该操作返回一个文件的描述符，我们可以通过该描述符来对文件进行各种操作
 *      2. 向文件写入内容
 *          fs.writeSync(fd,string[,position[,encoding]])
 *              -fd 文件描述符，需要传递要写入的文件的描述符
 *              -string 要写入的内容
 *              -position 写入的起始位置
 *              -encoding 写入的编码，默认为utf-8
 *
 *      3. 保存并关闭文件
 */

let fs = require("fs");
//打开一个文件
let fd = fs.openSync("hello.txt", "w");
fs.writeSync(fd, "hello world", 20);
//关闭文件
fs.closeSync(fd);