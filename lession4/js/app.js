var app = angular.module("App", []);

app.directive("show", function(){
	return {
		link : function(scope, element, attributes){			
			scope.$watch(attributes.show, function(value){
				if(value)
				 element.removeAttr("disabled")
				else
				 element.attr("disabled", true);					
			});			
		} 
	}
});