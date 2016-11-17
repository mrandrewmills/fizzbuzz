grunt.loadNpmTasks('grunt-contrib-qunit');
    gruntConfig.qunit = {
        src: ['src/test.html']
    };
grunt.registerTask('test', 'qunit:src');
