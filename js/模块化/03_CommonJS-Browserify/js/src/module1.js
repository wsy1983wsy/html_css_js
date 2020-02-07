//module.exports 导出一个对象
module.exports = {
    msg: "module1",
    foo() {
        console.log("foo", this.msg);
    }
};