describe('Testing AngularJS Test Suite', function(){

  beforeEach(module('app'))

  describe('Testing AngularJS Controller GulpAceController', function () {
  var scope, ctrl, httpBackend, timeout, rootScope;


	  beforeEach(inject(function($controller, $rootScope, $httpBackend, $timeout, GulpFactory) {
            httpBackend = $httpBackend;
	          rootScope = $rootScope;
	          scope = $rootScope.$new();
	          ctrl = $controller('GulpAceController', {$scope:scope});
	          timeout = $timeout;
	        }))
    });
});
