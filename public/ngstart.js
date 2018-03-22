(function(){
	var app = angular.module('test', []);

	app.controller('NgmoduleController', function(){
		this.name = 'NgModule';
	});

	app.controller('ubbController', function(){
		this.content = rules_config;
	});

	var rules_config = [{
		name: "rule",
		enabled: "false",
		action: "block",
		rule_id: 1,
		condition: "path == '/form/moved/'"
	}];

	app.controller('ubbApiController', ['$scope', '$http', function($scope, $http){
		var ubbConf = this;
		ubbConf.rules = [];
		$scope.fetchUbbConf = function(){
			$http.get('/rules_config.json').success(function(data){
				ubbConf.rules = data;
			});
		}
	}]);

	app.directive('customDirective', function(){
		return {
			restrict: 'E',
			templateUrl: 'APIReference.html'
		};
	});

	app.directive('commonHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'nav.html'
		};
	});

	app.controller('alertCtl', function(){
		//alert('Welcome');
	});
})();
