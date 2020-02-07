/**
 * 1.同步文件读取
 * 2.异步文件读取
 * 3.简单文件读取
 *      fs.readFile(path[, options],callback)
 *      fs.readFileSync(path[, options])
 *      - path 文件路径
 *      - options 读取的选项
 *      - callback 回调函数
 * 4.流文件读取
 */

let fs = require("fs");
fs.readFile("an.jpg", function (err, data) {
    if (!err) {
        fs.writeFile("hello.jpg", data, function (error) {

        });
    }
});