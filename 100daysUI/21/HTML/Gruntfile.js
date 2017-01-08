module.exports = function(grunt) {

    // Configure tasks(s)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Sass task
        sass: {

            build: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            },

            dev: {
                options: {
                    outputStyle: 'expanded',
                    sourceMap: true
                },
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },

        // Post css
        postcss: {
            options: {
                map: true, // inline sourcemaps

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                ]
            },
            dist: {
                src: 'css/style.css'
            }
        },

        // Watch task
        watch: {
            css: {
                options: {
                    livereload: true
                },
                files: ['scss/**/*.scss'],
                tasks: ['sass:dev','postcss']
            }
        },

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');

    // Register task(s)
    grunt.registerTask('default', ['sass:dev','postcss']);
    grunt.registerTask('build', ['sass:build','postcss']);

};
