const path = require('path');

module.exports = {
    entry: './src/js/entry.js',//入口文件的配置
    output: {//输出配置
        filename: 'bundle.js',//输出的文件名
        path: path.resolve(__dirname, 'dist/js/')
    }
};