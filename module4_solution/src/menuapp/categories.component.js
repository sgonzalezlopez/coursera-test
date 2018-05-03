(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/category-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
