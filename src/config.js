require.config({
	baseUrl: 'src',
	deps: ['main'],
	enforceDefine: true,
	paths: {
		'knockout': '../bower_components/knockoutjs/knockout',
		'smokesignals': '../vendor/smokesignals'
	}, 
	shim: {
		'smokesignals': {
			exports: 'smokesignals'
		}
	}
});

define();