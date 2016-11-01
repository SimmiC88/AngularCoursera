(function(){
'use strict';

angular.module('lunchCheckerApp',[])

.controller('lunchCheckerController',lunchCheckerController);

lunchCheckerController.$inject= ['$scope','$filter'];

function lunchCheckerController($scope,$filter){
  $scope.menu="";
  $scope.response = "";

  $scope.lunchCheck =  function(){
    var itemCount= calulateItemCount($scope.menu);
//    console.log("no.of items: "+ itemCount);
    if(itemCount===0){
      $scope.response="Please enter data first";
    }
    if(itemCount<=3 && itemCount!== 0){
      $scope.response = "Enjoy!";
    }
    if(itemCount>3){
      $scope.response = "Too much!";
    }
  };

  function calulateItemCount(string){
//    console.log(string);
    var comma = ",";
    var count=0;
    var itemsArray= string.split(comma);
    if(string.length==0){
        count=0;
    }
    else{
      for(var i=0;i<itemsArray.length;i++){
        if(itemsArray[i]!= "" && itemsArray[i]!= " "){
          count +=1;
        }
    }}
    return count;
  };
};


})();
