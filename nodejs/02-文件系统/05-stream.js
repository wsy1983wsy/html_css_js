/**
 *  同步，异步，简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
 *  fs.createWriteStream(path[, options])
 *      - path 文件路径
 *      - options 配置的参数
 */
let fs = require("fs");
//流式文件写入
let ws = fs.createWriteStream("hello3.txt");

//可以监听流的open和close时间来监听流的打开和关闭
ws.once("open", function () {
    console.log("流打开了");
});
ws.once("close", function () {
    console.log("流关闭了");
});
//创建流
ws.write("通过可写流写入的文件内容");
ws.write("1");
ws.write("2");
ws.write("3");

//关闭流，不能调用close
ws.end();