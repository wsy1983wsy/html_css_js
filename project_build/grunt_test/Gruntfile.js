module.exports = function (grunt) {
    // 1. 初始化插件配置
    grunt.initConfig({
        //主要编码处
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'build/build.js',
            },
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                files: {
                    'build/build.min.js': ['build/build.js']
                }
            }
        },
    });
    // 2. 加载插件任务
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 3. 注册构建任务
    grunt.registerTask('default', []);
};