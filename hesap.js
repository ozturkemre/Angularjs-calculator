var app = angular.module("myApp",['pascalprecht.translate']);
app.config(["$translateProvider",function($translateProvider){
  
  var en_translations = {
    "language" : "Calculator",
    "num1" : "number 1",
	"num2" : "number 2"
  }
  
  var tr_translations = {
    "language" : "Hesap makinesi",
    "num1" : "carpan 1",
	"num2" : "carpan 2"
  }
  
  $translateProvider.translations('en',en_translations);
  
  $translateProvider.translations('tr',tr_translations);
  
  $translateProvider.preferredLanguage('tr');
  
}]);

app.controller("translateController" ,["$scope","$translate",function($scope,$translate){
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