//定义一个没有依赖的模块
define(function () {
    let name = "dataservice.js";

    function getName() {
        return name;
    }

    //暴露模块
    return {getName};
});