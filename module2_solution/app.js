(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.setBoughtItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name : "Milk",
      quantity : 3
    },
    {
      name : "Sugar",
      quantity : 1
    },
    {
      name : "Olive oil",
      quantity : 2
    },
    {
      name : "Apples",
      quantity : 5
    },
    {
      name : "Lemmons",
      quantity : 8
    }
  ];
  var boughtItems = [];

  service.setBoughtItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];

    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
