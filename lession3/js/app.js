angular.module('myApp', [])
.controller('MyCtrl',  ['$scope', function($scope) {
			
	$scope.visible = true;

	$scope.toggle = function() {	 
	 $scope.visible = !$scope.visible;
	};   

}]);
