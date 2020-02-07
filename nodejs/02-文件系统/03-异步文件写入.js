/**
 * 异步文件写入
 *  1.打开文件，fs.open(path,flags[,mode],callback)
 *      结果通过回调函数callback，两个参数，第一个为错误信息，第二个为文件的描述符
 *  2.fs.write(fd, buffer[, offset[, length[, position]]], callback)
 *      异步写入一个文件
 *  3.fs.close(fd, callback)
 *      异步关闭文件
 */

let fs = require("fs");
//打开文件
fs.open("hello2.txt", "w",  function (err, fd) {
    if (!err) {
        console.log(fd);
        //异步写入内容到文件
        fs.write(fd, "异步写入的内容", function (err) {
            if (!err) {
                console.log("写入成功");
            }
            //关闭文件
            fs.close(fd, function (err) {
                if (!err) {
                    console.log("文件已关闭....");
                }
            });
        });
    } else {
        console.log(err);
    }
});