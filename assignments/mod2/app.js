(function(){
  'use strict';

  angular.module('ListCheckerApp',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ListCheckerService',ListCheckerService);

//Controller -1
ToBuyController.$inject=['ListCheckerService'];
  function ToBuyController(ListCheckerService){
    var buy= this;
    buy.itemName="";
    buy.quantity="";

    buy.itemCheck=function(item){
      ListCheckerService.itemCheck(item);
    };
    buy.buyList = ListCheckerService.displayItemsToBuy();

  }

//Controller -2
AlreadyBoughtController.$inject=['ListCheckerService'];
function AlreadyBoughtController(ListCheckerService){
  var bought = this;
  bought.itemName="";
  bought.quantity="";

  bought.boughtList= ListCheckerService.displayItemsBought();


}

//Service
function ListCheckerService(){
  var service =this;

  //buy List
  var shoppingList = [ {itemName:"notebook" , quantity:10},
  {itemName:"pencil",quantity:5},{itemName:"erasers",quantity:8},{itemName:"backpack",quantity:2},{itemName:"sketch pens",quantity:20},{itemName:"water bottle",quantity:1}
  ];

 //bought list
  var boughtList=[];

  service.displayItemsToBuy=function(){
    return shoppingList;
  }

  service.itemCheck = function(item){
    console.log(item);
    boughtList.push(item);
    var index = shoppingList.indexOf(item);
    console.log(index);
    console.log(shoppingList);
    shoppingList.splice(index,1);
    console.log(shoppingList);
  }

  service.displayItemsBought=function(){
    return boughtList;
  }

}














})()
