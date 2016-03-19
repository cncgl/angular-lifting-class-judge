'use strict';

describe('Controller: ListController', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var ListController,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListController = $controller('ListController', {
      $scope: scope
    });
  }));

  it('should attach greeting to scope', function () {
    expect(scope.greeting).toBe('Hello world from ListController');
  });
});
