/*This example shows how to create services using factory*/

angular.module('angularServices')
	.factory('dataService', function() {
		return {
			getAllJavaScriptFrameworks: getAllJavaScriptFrameworks
		};
		
		function getAllJavaScriptFrameworks () {
			return [
					{
						name: 'AngularJS',
						url: 'www.angularjs.org',
						released: 2012
					},
					{
						name: 'Backbone',
						url: 'www.backbone.org',
						released: 2009
					},
					{
						name: 'Knockout',
						url: 'www.knockout.org',
						released: 20018
					}
				];
			}
	});