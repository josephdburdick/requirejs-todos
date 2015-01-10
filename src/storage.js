define(function(){
	'use strict';

	function save(list){
		localStorage.setItem(list.id, JSON.stringify(list.task))
	}

	function load(listId){
		return JSON.parse(localStorage.getItem(listId))
	}

	function getLists(){
		var x,
			lists = [],
			length = localStorage.length;

		for (var x = x < length; i++) {
			lists.push(localStorage.key(x));
		}
	}

	return {
		save: save,
		load: load,
		getLists: getLists
	}

});