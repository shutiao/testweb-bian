(function(){
	var app = angular.module('bian', []);

	app.controller('NgmoduleController', function(){
		this.name = 'NgModule';
	});

	app.controller('AddruleController', ['$scope', '$http', function($scope, $http){
		this.rules = rules_config;
		this.rule = {};
		this.addRule = function(){
			alert('addRule is called');
			console.log(this.rules);
			this.rule.createdOn = Date.now();
			this.rule.rule_id = this.rules.length + 1;
			this.rules.push(this.rule);
			this.rule = {};
		};
		$scope.addRuleAjax = function(){
			alert('addRuleAjax is called');
			$http.get('/rules_config.json').success(function(data){
				alert('OK');
			});
		}
	}]);

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
			$http.get('/asset/rules_config.json').then(function(dataObject){
				ubbConf.rules = dataObject.data;
			});
		}
	}]);

	app.directive('commonHeader', function(){
		return {
			restrict: 'E',
			templateUrl: '/nav.html'
		};
	});

 
	app.controller('MyController', ['$scope', 'notify', function($scope, notify) {
		$scope.callNotify = function(msg) {
				notify(msg);
		};
		}]);

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
