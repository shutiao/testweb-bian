(function(){
	var app = angular.module('test', []);

	app.controller('NgmoduleController', function(){
		this.name = 'NgModule';
	});

	app.controller('AddruleController', function(){
		this.rules = rules_config;
		this.rule = {};
		this.addRule = function(){
			alert('addRule is called');
			console.log(this.rules);
			this.rule.createdOn = Date.now();
			this.rule.rule_id = this.rules.length + 1;
			this.rules.push(this.rule);
			this.rule = {};
		}
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

	app.directive('commonHeader', function(){
		return {
			restrict: 'E',
			templateUrl: 'nav.html'
		};
	});
})();
