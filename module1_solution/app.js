(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchDescription = ""; // Field to store and link user entry
  $scope.message = "";          // Field to store output message
  $scope.msgStyle = "";         // Field to store message styles
  $scope.txtStyle = "";         // Field to store textBox styles

  $scope.processLunch = function () {
    // Calculate the number of items on the lunch description
    var numItems = calculateItems($scope.lunchDescription);

    // Evaluates the outputs (message and styles) depending on the number of items.
    if (numItems == 0) {      // In case empty string as imput
      $scope.message = "Please enter data first";
      $scope.msgStyle = {"color" : "red"};
      $scope.txtStyle = {"border-color" : "red"};
    }
    else if (numItems <= 3) { // Less or equal than the required limit
      $scope.message = "Enjoy!";
      $scope.msgStyle = {"color" : "green"};
      $scope.txtStyle = {"border-color" : "green"};
    }
    else {                    // More items than the minimum number
      $scope.message = "Too Much!";
      $scope.msgStyle = {"color" : "green"};
      $scope.txtStyle = {"border-color" : "green"};
    }
  };
}

function calculateItems(string) {
  var numItems = 0;

  // In case the string is not empty, we calculate the number of items. Otherwise, the result is 0.
  if (string != "") {
    var items = string.split(',');

    // Checks if items are different than '' and does NOT considered empty items.
    var i;
    for (i = 0; i < items.length; i++) {
      if (items[i].trim() != "") numItems++;  // If the item is empty or with spaces, it is not considered.
    }
  }
  return numItems;
}

})();
