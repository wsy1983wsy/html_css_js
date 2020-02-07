//定义一个有依赖的模块
define(['dataservice', "jquery"], function (dataservice, $) {
    let msg = "alerter.js";

    function showMsg() {
        console.log(msg, dataservice.getName());
    }

    $("body").css("background", "red");
    return {showMsg};
});