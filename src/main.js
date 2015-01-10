// Entry point to app

require(['task_manager'], function(taskManager){
	'use strict';

	var aTask = taskManager.createTask("my first task!");
	console.log(aTask);
});

define();