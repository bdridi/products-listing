


angular.module('Controllers',[])


.controller('homeController', function($scope,mainFactory,deviFactory){
	
  //mainFactory.loadData();
  //$scope.liste = mainFactory.getItems();
	$scope.total = 0;
	
	mainFactory.getItems2()
					.success(function(response) {
							 
							 $scope.liste = response ;
							 console.log("succes");
							 mainFactory.setList(response);
					});
					
					
	/**    Add product to quotation  	*/ 
	$scope.addItem = function(id,name,price){
			deviFactory.add(id,name,price);
			//$scope.total = deviFactory.getTotal();			
			//$scope.devi = deviFactory.getDevi();
	
	};
	

})

.controller('helpController', function($scope){
	$scope.message = 'ApplicationHelp Panel  ';
	$scope.precedent = "#/home";
}).

controller('deviController',function($scope,deviFactory){
  $scope.precedent = "#/home";
  $scope.total = deviFactory.getTotal();			
	$scope.devi = deviFactory.getDevi();
  
  
	$scope.reset = function(){
		console.log("Reset function ! ");
		$scope.devi = [];
		deviFactory.reset();
		$scope.total = 0 ;
	};
	
	$scope.remove = function(id){
				console.log("Remove function ! ");
				deviFactory.remove(id);
				$scope.total = deviFactory.getTotal();							
	};
  
})


.controller('detailsController',['$scope','$routeParams','mainFactory', function($scope,$routeParams,mainFactory){
	

	$scope.product = mainFactory.getItem($routeParams.id);
	//$scope.id = $routeParams.id;

}]);
