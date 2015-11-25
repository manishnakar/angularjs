var app = angular.module("App", []);

app.controller('MyCtrl', ['$scope', function($scope){

	$scope.name = "";

		$scope.$watch("name", function(newValue, oldValue){

			if ($scope.name.length > 0) {
				$scope.greeting = "Welcome " + $scope.name ;
			}else{
				$scope.greeting = "";
			}
		} );

}]);
