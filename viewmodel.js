var demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', 'guidService', function($scope, guidService) 
{
	// Setup view model
	var vm = {};
	
	vm.list = [
		{ _id: guidService.createGuid(), details: 'Learn Angular JS', done: false },
		{ _id: guidService.createGuid(), details: 'Build an Angular JS TO-DO List application', done: false },
		{ _id: guidService.createGuid(), details: 'Learn more Angular JS', done: false },
		{ _id: guidService.createGuid(), details: 'Become an expert at Angular JS', done: false }
	];
	
	vm.getAllCount = function()
    {
        return vm.list.length;
    }

	vm.getCompletedCount = function()
    {
        return vm.list.filter(function(item) { return item.done }).length;
    }

	vm.getUncompletedCount = function()
    {
        return vm.list.filter(function(item) { return !item.done }).length;
    }

	vm.addItem = function()
	{
		// TODO: add to the server then...
		vm.list.push(
		{
			_id: guidService.createGuid(),
			details: vm.newItemDetails
		});
		// After adding new item clear input using binded view model property.
		vm.newItemDetails = '';
	}
	
	vm.removeItem = function(itemToRemove)
	{
		// TODO: delete from the server then...
		vm.list = vm.list.filter(function(item) { return item._id !== itemToRemove._id; });
	}
	
	vm.newItemDetails = '';
	
	$scope.vm = vm;
	
}]);

// TODO: can this be moved to a seperate file?
demoApp.service('guidService', function()
{
	return {
		createGuid: function()
		{
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
			{
				var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		}
	};
});
