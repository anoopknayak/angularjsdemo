'use strict';

/* Services */

var shoppingCartServices = angular.module('shoppingCartServices', ['ngResource']);

shoppingCartServices.factory('Product', ['$resource',
  function($resource){
    return $resource('products/:productId.json', {}, {
      query: {method:'GET', params:{productId:'products'}, isArray:true}
    });
  }]);
