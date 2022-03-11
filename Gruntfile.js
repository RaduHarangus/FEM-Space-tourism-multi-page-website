module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            main: {
                src: [
                    'js/*.js'
                ],
                dest: 'main.js',
                options: {
                    separator: '\n\n',
                    interrupt: true
                }
            }
        },
        less: {
            files: {
                src: [
                    'less/main.less',
                ],
                dest: 'style.css'
            }
        },
        watch: {
            less: {
                files: [
                    'less/*.less',
                    'less/**/*.less'
                ],
                tasks: ['less']
            }
            ,
            js: {
                files: [
                    'js/*.js'
                ],
                tasks: ['concat']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default', ['less', 'concat', 'watch']);
}