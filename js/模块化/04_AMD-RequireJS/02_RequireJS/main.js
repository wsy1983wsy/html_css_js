(function () {
    requirejs.config({
        //js基础路径
        baseUrl: "./js",
        paths: {//配置路径
            dataservice: "./modules/dataservice",
            alerter: "./modules/alerter",
            jquery: "./libs/jquery-1.10.1"
        }
    });
    requirejs(['alerter'], function (alerter) {
        alerter.showMsg();
    });
})();