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
    // 6連勝
    expect(scores[0].win).to.equal(5);
    expect(scores[0].lose).to.equals(0);
    expect(scores[0].win_rest).to.equals(1);
    expect(scores[0].lose_rest).to.equals(0);
    // ９勝３敗
    expect(scores[1].win).to.equal(5);
    expect(scores[1].lose).to.equals(0);
    expect(scores[1].win_rest).to.equals(4);
    expect(scores[1].lose_rest).to.equals(3);
    // 11勝4敗
    

  });
});
