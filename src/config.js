require.config({
	baseUrl: 'src',
	deps: ['main'],
	enforceDefine: true,
	paths: {
		'knockout': '../bower_components/knockoutjs/dist/knockout',
		'smokesignals': '../vendor/smokesignals',
		'text': '../bower_components/requirejs-text/text',
		'views': '../views'
	}, 
	shim: {
		'smokesignals': {
			exports: 'smokesignals'
		}
	}
});

define();