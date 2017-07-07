app.controller("MainController" ,["$scope","$translate",function($scope,$translate){
  $scope.changeLanguage = function(lang){
   $translate.use(lang); 
  }
  $scope.sonuc = function() {
		if($scope.carpan1 && $scope.carpan2){
		
			if($scope.islem == "+"){
				return $scope.carpan1 + $scope.carpan2;
			}
			if($scope.islem == "-"){
				return $scope.carpan1 - $scope.carpan2;
			}
			if($scope.islem == "*"){
				return $scope.carpan1 * $scope.carpan2;
			}
			if($scope.islem == "/"){
				return $scope.carpan1 / $scope.carpan2;
			}
			if($scope.islem == "**"){
				return $scope.carpan1 ** $scope.carpan2;
			}
			if($scope.islem == "%"){
				return $scope.carpan1 % $scope.carpan2;
			}
		}
	}
}]);