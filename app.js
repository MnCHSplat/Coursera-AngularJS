(function () {
'use strict';
    
var mod = angular.module('ShoppingListCheckOff', []);
mod.controller('ToBuyController', ToBuyController); 
mod.controller('AlreadyBoughtController', AlreadyBoughtController);
mod.service('ShoppingListCheckOffService', ShoppingListCheckOffService);  //contains the getItems and moveItems functions

var shoppingList = [ //Initial shopping list defined
     {   name: "eggs",
         quantity: "1"},
     {   name: "steak",
         quantity: "2"},
     {   name: "Mountain Dew",
         quantity: "24"},
     {   name: "cookies",
         quantity: "30"},
     {   name: "Orange Juice",
         quantity: "1"}];


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getItems("toBuy");  // this is to display the list of remaining (to buy) items

    toBuyList.itemBought = function(itemIndex) {
        ShoppingListCheckOffService.moveItem(itemIndex); //moveItem function moves items from the toBuy list to the Bought list
    }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
        
    var itemsBought = this;

    itemsBought.items = ShoppingListCheckOffService.getItems("bought");  //this is to display the list of bought items
}


function ShoppingListCheckOffService() { //Shared Services function
// initialize our lists
    var service = this;
    var itemsToBuy = shoppingList;
    var itemsBought = [];

    service.getItems = function(status) { //function to return the lists, using status to identify which list to return
        if(status === "toBuy") {
            return itemsToBuy;
        } else {
            return itemsBought;
        }
    }

    service.moveItem = function(itemIndex) { //function to add a bought item to that list and remove it from the toBuy list
        itemsBought.push(itemsToBuy[itemIndex]);
        itemsToBuy.splice(itemIndex, 1);
    }

}
})();

// Line 67 is the compressed Javascript, which works identically, without error, as the code in lines 1-64
// !function(){"use strict";var t=angular.module("ShoppingListCheckOff",[]);t.controller("ToBuyController",e),t.controller("AlreadyBoughtController",i),t.service("ShoppingListCheckOffService",function(){var e=n,i=[];this.getItems=function(t){return"toBuy"===t?e:i},this.moveItem=function(t){i.push(e[t]),e.splice(t,1)}});var n=[{name:"eggs",quantity:"1"},{name:"steak",quantity:"2"},{name:"Mountain Dew",quantity:"24"},{name:"cookies",quantity:"30"},{name:"Orange Juice",quantity:"1"}];function e(e){this.items=e.getItems("toBuy"),this.itemBought=function(t){e.moveItem(t)}}function i(t){this.items=t.getItems("bought")}e.$inject=["ShoppingListCheckOffService"],i.$inject=["ShoppingListCheckOffService"]}();