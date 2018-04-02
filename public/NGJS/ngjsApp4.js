(function(){
		var testcase4 = angular.module('NGJS4', ['ngProgress','ngRoute']);
		angular.module("NGJS4").config(function($locationProvider) {
		}).run(function($rootScope, $route, $location, $routeParams, $anchorScroll, ngProgress) {
		});
		testcase4.controller('testMarkup', function($scope){
			$scope.AmIOK = 'I Am OK';
		})
})();