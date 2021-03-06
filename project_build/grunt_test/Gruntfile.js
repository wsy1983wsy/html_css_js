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
        jshint: {
            options: {
                jshintrc: '.jshintrc' //指定配置文件
            },
            build: ['Gruntfile.js', 'src/js/*.js'] //指定检查的文件
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            build: {
                files: {
                    'build/css/output.min.css': ['src/css/*.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/css/*.css'],
                tasks: ['concat', 'jshint', 'uglify', 'cssmin'],
                options: {spawn: false}
            }
        }
    });
    // 2. 加载插件任务
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 3. 注册构建任务,任务列表按照顺序执行
    grunt.registerTask('default', ["concat", "uglify", "jshint", "cssmin"]);
    grunt.registerTask('myWatch', ['default', 'watch']);
};