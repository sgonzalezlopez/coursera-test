(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
function MenuDataService($q, $timeout, $http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      service.all = result.data;
      return service.all;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: { category: categoryShortName }
    }).then(function (result) {
      service.all = result.data.menu_items;
      return service.all;
    });
  };
}

})();
