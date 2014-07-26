'use strict';

/* jasmine specs for controllers go here */
describe('ShoppingCart controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('shoppingCartApp'));
  beforeEach(module('shoppingCartServices'));

  describe('HomeCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products/products.json').
          respond([{name: 'Ruler'}, {name: 'Protractor'}]);

      scope = $rootScope.$new();
      ctrl = $controller('HomeCtrl', {$scope: scope});
    }));


    it('should create "products" model with 2 products fetched from xhr', function() {
      expect(scope.products).toEqualData([]);
      $httpBackend.flush();

      expect(scope.products).toEqualData(
          [{name: 'Ruler'}, {name: 'Protractor'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('price');
    });
  });

});
