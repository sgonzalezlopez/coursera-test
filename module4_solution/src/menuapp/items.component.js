(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/item-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
