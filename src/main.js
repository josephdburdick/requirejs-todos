// Entry point to app

require(['text!views/app.html', 'view_models', 'renderer'], function(appView, App, renderer){
	'use strict';

	var container = document.body,
	viewModel = new App();

	renderer.render(container, appView, viewModel);
});

define();