'use strict';

module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt, { pattern: 'grunt-*' });
  var config = grunt.file.readJSON('config/config.json');
  
  grunt.loadNpmTasks('qzready');
  grunt.loadNpmTasks('grunt-tinypng');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      build: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          outputStyle: 'compact',
          force: true,
          noLineComments: true
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      build: {
        src: 'css/*.css'
      }
    },
    connect: {
      build: {
        options: {
          hostname: '',
          port: 8002,
          base: ['', '../'],
          useAvailablePort: true
        }
      }
    },
    watch: {
      scss: {
        files: 'scss/**/*.scss',
        tasks: ['compass:build', 'autoprefixer:build'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'js/**/*.js',
        tasks: [],
        options: {
          livereload: true
        }
      },
      once: {
        files: 'index.html',
        tasks: [],
        options: {
          livereload: true
        }
      }
    },
    qzready: {
      deploy: {
        options: {
          base: 'http://ads.qz.com/sponsors',
          client: 'example_client',
          campaign: 'example_campaign',
          date: '2014-08-07',
          unit: 'engage_desktop',
          version: '1',
          internal_scripts: [
            
          ],
          external_scripts: [
            'http://app.qz.com/js/vendor/jQuery-min.js',
            'http://app.qz.com/js/frameMessager/min/frameMessager.min.3.0.2.js',
            'http://app.qz.com/js/frameMessager/min/QZIX.min.js'
          ]
        }
      }
    },
    tinypng: {
      options: {
        apiKey: config.tinyAPIKey,
        checkSigs: true,
        sigFile: 'config/image_sigs.json',
        summarize: true,
        showProgress: true,
        stopOnImageError: true
      },
      compress: {
        expand: true, src: ['images/*.png', 'images/*.jpg'], dest: ''
      }
    }    
  });

  grunt.registerTask('default', ['compass:build', 'autoprefixer:build', 'connect:build', 'watch']);
  grunt.registerTask('ready', ['compass:build', 'autoprefixer:build', 'qzready']);
  grunt.registerTask('compress', ['tinypng:compress']);
};
