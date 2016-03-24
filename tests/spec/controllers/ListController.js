'use strict';

describe('Controller: ListController', function () {

  // load the controller's module
  beforeEach(angular.mock.module('{@= app_name @}'));

  var ListController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListController = $controller('ListController', { $scope: scope });
  }));

  it('should attach greeting to scope', function () {
    expect(scope.greeting).to.equal('Hello world from ListController');
  });

  it('4連勝の場合', function() {
    var data = [false, false, false, false, false,
      false, false, false, false ,false,
      false, false, false, false, false,
      false, false, false, false, false,
      true, true, true, true, true];
    var scores = ListController.score(data, 0);
    console.log(scores);
    
  });
});
