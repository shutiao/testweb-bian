(function(){
	var app = angular.module('tSuite-1-url', []);

	app.controller('NgmoduleController', function(){
		this.name = 'NgModule';
	});

	app.controller('ubbApiController', ['$scope', '$http', function($scope, $http){
		var ubbConf = this;
		ubbConf.rules = [];
		$scope.fetchUbbConf = function(){
			$http.get('/asset/rules_config.json').then(function(dataObject){
				ubbConf.rules = dataObject.data;
			});
		}
	}]);

	app.directive('commonHeader', function(){
		return {
			restrict: 'E',
			templateUrl: '/partials/nav.html'
		};
	});

	/*
	app.controller('NotifyServiceCtrl', ['$scope', 'notify', function($scope, notify) {
		$scope.callNotify = function(msg) {
				notify(msg);
		};
		}]);
	*/
	
	app.controller('NotifyServiceCtrl', function($scope, notify) {
		$scope.callNotify = function(msg) {
				notify(msg);
		};
	});


	app.factory('notify', ['$window', function(win) {
		var msgs = [];
		return function(msg) {
			msgs.push(msg);
			if (msgs.length === 3) {
				win.alert(msgs.join('\n'));
				msgs = [];
			}
		};
	}]);
})();
