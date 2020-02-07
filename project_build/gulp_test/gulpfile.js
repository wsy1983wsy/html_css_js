//引入gulp模块
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var less = require("gulp-less");
var cssClean = require("gulp-clean-css");


//定义默认任务
// gulp.task("任务名", function() {
//     // 将你的任务的任务代码放在这
// });

//注册合并压缩js的任务
gulp.task("js", function () {
    gulp.src("src/js/*.js")  //找到目标原文件，将数据读取到gulp的内存中
        .pipe(concat("built.js")) //合并到临时文件
        .pipe(gulp.dest("dist/js")) //生成到目标文件夹
        .pipe(rename({suffix: ".min"})) //重命名
        .pipe(uglify())    //压缩文件
        .pipe(gulp.dest("dist/js"));
});

//注册转换less的任务
gulp.task("less", function () {
    gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css/"));
});

gulp.task("css", function () {
    gulp.src("src/css/*.css")
        .pipe(concat("build.css"))
        .pipe(gulp.dest("dist/css/"))
        .pipe(rename({suffix: ".min"}))
        .pipe(cssClean({compatibility: "ie8"}))
        .pipe(gulp.dest("dist/css/"));
});

gulp.task("default", ["js", "less", "css"]);//异步执行