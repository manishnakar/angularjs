var app = angular.module("App", []);

app.controller('MyCtrl', ['$scope', function($scope){

	$scope.value = 1;
	$scope.incrementMe = function(increment){
		$scope.value += increment;
	} 

}]);


