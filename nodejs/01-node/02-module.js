/**
 * 模块化
 *  - 在node中，一个js就是一个模块
 *  - 在node中，每一个js代码中的js代码，都是独立运行在一个函数中
 *      而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
 *  -
 *
 */

console.log("Hello world");

/**
 * 向外部暴露属性或方法
 * 可以通过exports来向外部暴露变量和方法，只需要将需要暴露给外部的变量或方法设置为exports的变量或方法即可
 *
 * */

exports.x = "我是module2 中的x";
exports.y = "我是y";
exports.fn = function () {
    console.log("fn");
}