// module.exports.name = "孙悟空";
// module.exports.age = 12;
// module.exports.sayName = function () {
//     console.log("我是孙悟空");
// };
/**
 * 不能直接使用exports = {}，必须使用module.exports = {}
 * 如果使用exports = {}，相当于将exports修改为其他对象了，不再是module.exports指向的对象了
 */
module.exports = {
    name: "zbj",
    age: 18,
    sayName() {
        console.log("我是zbj");
    }
}