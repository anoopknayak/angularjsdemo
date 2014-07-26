'use strict';

describe('service', function() {

  // load modules
  beforeEach(module('shoppingCartApp'));

  // Test service availability
  it('check the existence of Product factory', inject(function(Product) {
      expect(Product).toBeDefined();
    }));
});