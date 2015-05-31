angular.module('angularServices')
	.controller('VersionController', function (version) {
		var vm = this;
		vm.appName = version.appName;
	});