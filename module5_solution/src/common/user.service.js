(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = [];
function UserService() {
  var service = this;

  service.user = null;
}



})();
