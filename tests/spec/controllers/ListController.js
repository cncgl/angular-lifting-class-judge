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

  // it('should attach greeting to scope', function () {
  //   expect(scope.greeting).to.equal('Hello world from ListController');
  // });

  it('6連勝を含むか○○○○○', function() {
    var data = [false, false, false, false, false,
      false, false, false, false ,false,
      false, false, false, false, false,
      false, false, false, false, false,
      true, true, true, true, true];
    var judge =  ListController.alreadyUpgraded(data, 6, 0);
    expect(judge.state).to.equal(false);
  });

  it('6連勝を含むか○○○○○○', function() {
    var data = [false, false, false, false, false,
      false, false, false, false ,true,
      true, true, true, true, true,
      false, false, false, false, false,
      false, false, false, false, false];
    var judge =  ListController.alreadyUpgraded(data, 6, 0);
    expect(judge.state).to.equal(true);
  });

  it('9勝3敗を含むか○×○○○○○○×○○', function() {
    var data = [false, false, false, false, false,
      false, false, true, false ,true,
      true, true, true, true, true,
      false, true, true, false, false,
      false, false, false, false, false];
      var judge =  ListController.alreadyUpgraded(data, 9, 3);
      expect(judge.state).to.equal(true);
  });

  it('5連勝の場合の残り勝敗', function() {
    var data = [false, false, false, false, false,
      false, false, false, false ,false,
      false, false, false, false, false,
      false, false, false, false, false,
      true, true, true, true, true];
    var scores = ListController.score(data, 0);
    // console.log(scores);
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
