(function(){
	var app = angular.module('test', []);
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

	app.controller('ubbApiController', ['$http', function($http){
		var ubbConf = this;
		ubbConf.rules = [];
		$http.get('/rules_config.json').success(function(data){
			ubbConf.rules = data;
		});
	}]);
})();
