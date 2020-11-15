(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', function($scope) {
         
        $scope.list = "";
        $scope.checkList = function() {
          var items = $scope.list.split(' ');
          console.log(items.length);
          for(var i = 0; i < items.length; i++) {
            console.log(items[i]);
          }

          $scope.response = "TESTING";
          if($scope.list == "") {
            $scope.response = "Please enter data first!";
          } else if (items.length < 4) {
            $scope.response = "Enjoy your lunch!";
          } else {
            $scope.response = "That's too much for lunch!"
          }
          }
    }]);  
    })();
// Minimized version
// !function(){"use strict";angular.module("LunchCheck",[]).controller("LunchCheckController",["$scope",function(e){e.list="",e.checkList=function(){var o=e.list.split(" ");console.log(o.length);for(var n=0;n<o.length;n++)console.log(o[n]);e.response="TESTING",""==e.list?e.response="Please enter data first!":o.length<4?e.response="Enjoy your lunch!":e.response="That's too much for lunch!"}}])}();