(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['itemsForCategory'];
function ItemsController(itemsForCategory) {
  var items = this;
  items.itemsList = itemsForCategory;
}

})();
