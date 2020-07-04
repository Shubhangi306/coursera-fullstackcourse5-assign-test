(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.items = " ";
  $scope.amount = 0;
  $scope.massage="";


  $scope.sayMessage = function () {
  	var v1=stringToArray($scope.items);
  	var v2=itemCount(v1);
    $scope.amount=v2;

    if($scope.amount===0){
		$scope.message="Please Enter Data First";
	}

	else{

	if($scope.amount<=3 ){
		$scope.message="Enjoy!";
	}
	else if ($scope.amount>3){
		$scope.message = "Too Much!";
	}
    }
};

 
 function stringToArray(string){
 	var string1=string.replace(/\s/g, "");
 	var array=string1.split(',');
 	return array;
 }

 function itemCount(list){
 	var count=0;
 	for(var i=0; i< list.length; i++){
 		if (list[i].length>0)
 		count=count+1;
 	}
 	return count;
 }


}

})();
