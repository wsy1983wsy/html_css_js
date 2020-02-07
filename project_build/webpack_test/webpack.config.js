const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //自动生成html文件的插件
const CleanWebpackPlugin = require("clean-webpack-plugin"); //清除之前打包的文件

module.exports = {
    entry: "./src/js/entry.js",//入口文件的配置
    output: {//输出配置
        filename: "bundle.js",//输出的文件名
        // publicPath: "js/",    //设置为index.html提供资源服务的时候具有强制性，不推荐使用
        path: path.resolve(__dirname, "dist/js/")
    },
    devtool: "inline-source-map",//生成sourcemap
    devServer: {
        contentBase: "./dist"//webpack-dev-server默认服务于根路径下index.html
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./index.html"}),
        new CleanWebpackPlugin(["dist"])
    ]
};