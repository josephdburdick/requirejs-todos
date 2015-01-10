// Entry point to app

require(['task_manager', 'smokesignals'], function(taskManager, smokesignls){
	'use strict';

	var aTask = taskManager.createTask("my first task!");
	console.log(smokesignls);
});

define();