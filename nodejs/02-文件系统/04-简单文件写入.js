/**
 * 简单文件写入
 *  fs.writeFile(file, data[, options], callback)
 *      file:要操作的文件路径
 *      data:要写入的数据
 *      options，选项，可以对写入进行一些设置，
 *      callback，当写入完成以后执行的函数
 *      flag:
 *          r 只读
 *          w 写
 *          a 追加
 */

let fs = require("fs");
fs.writeFile("hello3.txt", "1231231", {flag: "a"}, function (err) {
    if (!err) {
        console.log("写入成功");
    }
});
