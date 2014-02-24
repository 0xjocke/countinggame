module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true,
                files: ['public_html/css/**/*.css'],
            },
            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev'],
            },
            js: {
                files: ['public_html/js/**/*.js'],
                tasks: ['concat:all']
            }
        },
        compass: {
            dev: {
                options: {
                    relativeAssets: true,
                    require: 'susy',
                    sassDir: 'sass',
                    cssDir: 'public_html/css'
                }
            },
            prod: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'public_html/css',
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            }
        },
        concat: {
            all: {
                src: ['public_html/js/numbers.js',
                    'public_html/js/Person.js',
                    'public_html/js/Game.js',
                    'public_html/js/eventchecker.js' ],
                dest: 'public_html/js/build/script.js'    //output
            }
        },
        uglify: {
            prod: {
                files: {
                    'public_html/js/build/script.min.js': ['public_html/js/script.js']
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('prod', ['compass:prod', 'uglify:prod']);

};