(function(){
	angular.module('NGJS4', [])

	/*
	app.controller('NotifyServiceCtrl', ['$scope', 'notify', function($scope, notify) {
		$scope.callNotify = function(msg) {
				notify(msg);
		};
		}]);
	*/
	
	.controller('NotifyServiceCtrl', function($scope, notify) {
		$scope.callNotify = function(msg) {
				notify(msg);
		};
	})

	.factory('notify', ['$window', function(win) {
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