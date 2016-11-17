grunt.loadNpmTasks('grunt-contrib-qunit');
    gruntConfig.qunit = {
        src: ['src/test.html']
    };
grunt.registerTask('travis', 'qunit:src');
