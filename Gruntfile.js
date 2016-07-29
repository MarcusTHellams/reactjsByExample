module.exports = function(grunt) {
	grunt.config.init({
		connect: {
			options: {
				livereload: 35729,
				hostname: 'localhost',
				port: 8000
			},
			server: {
				open: true
			}

		},
		watch: {
			files: ['index.html', 'js/*.*'],
			tasks: [],
			options: {
				livereload: '<%= connect.options.livereload %>'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('connect-livereload');
	grunt.registerTask('server', ['connect:server', 'watch']);
};