(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserService'];
function SignupController(MenuService, UserService) {
  var signup = this;
  signup.completed = false;
  signup.errorMessage = "";

  signup.validateFav = function () {
    if (signup.user && signup.user.favdish) {
      var promise = MenuService.getItem(signup.user.favdish);
      promise.then(function (response) {
        if (!response) {
          signup.errorMessage = "No such menu number exists"
        }
        else {
          signup.errorMessage = ""
        }
      })
      .catch(function (error) {
        signup.errorMessage = "No such menu number exists"
      })
    }
  };

  signup.submit = function () {
    var promise = MenuService.getItem(signup.user.favdish);
    promise.then(function (response) {
      if (!response) {
        signup.completed = false;
        signup.errorMessage = "No such menu number exists"
      }
      else {
        signup.completed = true;
        var user = {
          firstName : signup.user.firstname,
          lastName : signup.user.lastname,
          email : signup.user.email,
          phone : signup.user.phone,
          favouriteDish : response
        };

        UserService.user = user;
        signup.errorMessage = ""
    }
      })
      .catch(function (error) {
        signup.completed = false;
        signup.errorMessage = "No such menu number exists"
      })
    };
};
})();
