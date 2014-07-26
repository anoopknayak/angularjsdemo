'use strict';

/* App */

var shoppingCartApp = angular.module('shoppingCartApp', ['ngRoute',
  'shoppingCartControllers',
  'shoppingCartServices']);

shoppingCartApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/cart', {
            templateUrl: 'partials/cart.html',
            controller: 'CartCtrl'
          }).
    when('/products/:product_id', {
            templateUrl: 'partials/products.html',
            controller: 'ProductCtrl'
          }).
    when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
          }).
    otherwise({ 
      redirectTo: '/home' 
    });
}])
