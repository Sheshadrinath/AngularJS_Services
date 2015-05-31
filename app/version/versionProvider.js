/* This example shows how to configure the values/arguments like displaying version information.*/

var app = angular.module('angularServices');

app.provider('version', function(){
	
	this.$get = function () {
		var appName = 'AngularJS Services and Usage';
		var appDescr = 'This tutorial explains what kind of services and their usage on scenarios';
		var version = '1.0';
		
		if (displayVersionInfo) {
			appName += ' ' + version; 
		}
		
		return {
			appName: appName,
			appDescr: appDescr
		};
	};
	
	var displayVersionInfo = false;
	this.setIncludeVersionInfoInTitle = function (value) {
		displayVersionInfo = value;
	};
});

app.config(function(versionProvider) {
	versionProvider.setIncludeVersionInfoInTitle(true);
});