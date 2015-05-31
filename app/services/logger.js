//The angular framework treats the function inside a service as constructor and executes with new operator.
//One typical requirement to use this may be to implement inheritance. An example below.

(function () {
	
	angular.module('angularServices')
		.service('logger', loggerApp);
	
	function LoggerBase() {
	}
	
	LoggerBase.prototype.output = function (message) {
		console.log('LoggerBase: ' + message);
	}
	
	function loggerApp() {
		LoggerBase.call(this);
		
		this.logInfo = function (message) {
			console.log('loggerApp: ' + message.message);
		}
	}
	
	loggerApp.prototype = Object.create(LoggerBase.prototype);
	
}());