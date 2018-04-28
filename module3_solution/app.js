(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownAppController', NarrowItDownAppController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove : '&'
    },
    controllerAs: 'list'
  };

  return ddo;
}


NarrowItDownAppController.$inject = ['MenuSearchService'];
function NarrowItDownAppController(MenuSearchService) {
  var menu = this;

  menu.searchItems = function (searchTerm) {
    if (searchTerm==="") {
      menu.found = [];
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      menu.found = response;
    })
    .catch(function (error) {
      // console.log(error);
    })
  };

  menu.removeItem = function (itemIndex) {
    menu.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      service.all = result.data.menu_items;
      return filterItems(searchTerm);
    });
  }

  function filterItems(searchTerm) {
    var foundItems = [];
    service.all.forEach(function(dish) {
      if (dish.description.toLowerCase().indexOf(searchTerm) !== -1) {
        foundItems.push(dish);
      }
    });
    return foundItems;
  };
}

})();
