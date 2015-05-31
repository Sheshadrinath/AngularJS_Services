angular.module('angularServices')
	.controller('FrameworkController', function (dataService, logger) {
		var vm = this;
		
		vm.list = dataService.getAllJavaScriptFrameworks();
		logger.output('FrameworksController created');
	})