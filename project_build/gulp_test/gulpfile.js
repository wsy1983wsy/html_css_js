//引入gulp模块
var gulp = require("gulp");
var $ = require("gulp-load-plugins")()//引入的是函数，调用返回的是对象;


// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");
// var less = require("gulp-less");
// var cssClean = require("gulp-clean-css");
// var htmlmin = require("gulp-htmlmin");
// var livereload = require("gulp-livereload");
// var connect = require("gulp-connect");

//注册合并压缩js的任务
gulp.task("js", function () {
    return gulp.src("src/js/*.js")  //找到目标原文件，将数据读取到gulp的内存中
        .pipe($.concat("built.js")) //合并到临时文件
        .pipe(gulp.dest("dist/js")) //生成到目标文件夹
        .pipe($.rename({suffix: ".min"})) //重命名
        .pipe($.uglify())    //压缩文件
        .pipe(gulp.dest("dist/js"))
        .pipe($.livereload())
        .pipe($.connect.reload());
});

//注册转换less的任务
gulp.task("less", function () {
    return gulp.src("src/less/*.less")
        .pipe($.less())
        .pipe(gulp.dest("src/css/"))
        .pipe($.livereload())
        .pipe($.connect.reload());
});
//注册压缩css，依赖于less
gulp.task("css", ["less"], function () {
    return gulp.src("src/css/*.css")
        .pipe($.concat("build.css"))
        .pipe(gulp.dest("dist/css/"))
        .pipe($.rename({suffix: ".min"}))
        .pipe($.cleanCss({compatibility: "ie8"}))
        .pipe(gulp.dest("dist/css/"))
        .pipe($.livereload())
        .pipe($.connect.reload());
});

//注册压缩html
gulp.task("html", function () {
    return gulp.src("index.html")
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist"))
        .pipe($.livereload())
        .pipe($.connect.reload());
});
//注册监视任务（半自动）
gulp.task("watch", ["default"], function () {
    $.livereload.listen();
    //确认监听的目标以及绑定相应的任务
    gulp.watch("src/js/*.js", ["js"]);
    gulp.watch(["src/css/*.css", "src/less/*.less"], ["css"]);

});

//注册监视任务（全自动）
gulp.task("server", ["default"], function () {
    $.connect.server({
        root: "dist",
        livereload: true,
        port: 5000
    });
    //确认监听的目标以及绑定相应的任务
    gulp.watch("src/js/*.js", ["js"]);
    gulp.watch(["src/css/*.css", "src/less/*.less"], ["css"]);
});

gulp.task("default", ["js", "css", "html"]);//异步执行