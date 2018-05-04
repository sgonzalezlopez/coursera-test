(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService'];
function MyInfoController(UserService) {
  var myInfo = this;
  myInfo.user = UserService.user;
  
}

})();
