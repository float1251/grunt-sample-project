module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src:["src/*.ts"],
        dest:"js"
      },
      options: {
        base_path:"src/",
        module:"amd",
      }
    },
    coffee:{
        glob_to_multiple:{
            expand:true,
            cwd:"src/",
            src:["*.coffee"],
            dest:"./js",
            ext:".js"
        }
    },
    watch:{
        scripts:{
            files:["src/*.coffee","src/*.ts"],
            tasks:["coffee","typescript"]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};
