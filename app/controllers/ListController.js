// Generated by CoffeeScript 1.8.0

/**
@author
@description
@name ListController
 */


/* @ngInject */

(function() {
  module.exports = function($scope) {
    var vm = this;
    $scope.greeting = "Hello world from ListController";
    $scope.data = {
      group1: 0,
      cb: [false, false ,false, false, false, false,
        false, false ,false, false, false, false,
        false, false ,false, false, false, false,
        false, false ,false, false, false, false, false],
      win: function() {
        var count = 0, i;
        if(this.group1==0) {
          for(i=4; i<this.cb.length; i++) {
            if(this.cb[i]) count+=1;
          }
        } else {
          for(i=0; i<this.cb.length; i++) {
            if(this.cb[i]) count+=1;
          }
        }
        return count;
      },
      lose: function() {
        return this.group1==0 ? this.cb.length-4-this.win() : this.cb.length-this.win();
      },
      rest: function() {
        var results = [];

        var res = vm.checkUpgraded(this.cb, this.group1);
        if(res.state) {
          results.push(res.msg);
        } else {
          var arr = vm.score(this.cb, this.group1);
          for(var i=0; i<arr.length; i++) results.push(arr[i].msg);
        }

        // 6連勝 直近の連勝数を取得する
        /*
        var win_count = 0, lose_count = 0;
        for(i=17; i>11; i--) {
          if(!this.cb[i]) break;
          win_count += 1;
        }
        if(win_count>=6) {
          result.push('すでに６連勝しています');
        } else {
          result.push('現在' + win_count + '連勝中です。残り '+(6-win_count)+'連勝で昇級です');
        }
        // 9勝３敗
        for(i=17; i>8; i--) {
          if(!this.cb[i]) {
            if(lose_count>3) break;
            else lose_count += 1;
          } else {
            if(win_count>9) break;
            else win_count += 1;
          }
        }
        if(win_count>9) {
          result.push('すでに'+ win_count +'勝'+ lose_count + '敗です');
        } else {

        }
        */

        return results;
      }
    }

    // すでに昇級を満たしていないかチェックする。
    this.checkUpgraded = function(data, rank) {
      console.log(data);
      var already = false, msg = '', win_count = 0, i, j;

      if(rank == 0) {
        // 6連勝を含むか
        for (i = data.length; i >= 6; i--) {
          if (data[i - 1] && data[i - 2] && data[i - 3] && data[i - 4] && data[i - 5] && data[i - 6]) {
            already = true;
            msg = '６連勝以上の戦績があります。';
            break;
          }
        }
        // 9勝３敗を含むか
        if (!already) {
          for (i = data.length; i >= 12; i--) {
            win_count = 0;
            for (j = 0; j < 12; j++) {
              if (data[i - 1 - j]) {
                if (win_count < 9) win_count++;
                if (win_count == 9) {
                  already = true;
                  msg = '9勝3敗以上の戦績があります。';
                  break;
                }
              }
            }
            if (already) break;
          }
        }
        // 11勝4敗を含むか
        win_count = 0;
        if (!already) {
          for (i = data.length; i >= 15; i--) {
            win_count = 0;
            for (j = 0; j < 15; j++) {
              if (data[i - 1 - j]) {
                if (win_count < 11) win_count++;
                if (win_count == 11) {
                  already = true;
                  msg = '11勝4敗以上の戦績があります。';
                  break;
                }
              }
            }
            if (already) break;
          }
        }
        // 13勝5敗を含むか
        win_count = 0;
        if (!already) {
          for (i = data.length; i >= 18; i--) {
            win_count = 0;
            for (j = 0; j < 18; j++) {
              if (data[i - 1 - j]) {
                if (win_count < 13) win_count++;
                if (win_count == 13) {
                  already = true;
                  msg = '13勝5敗以上の戦績があります。';
                  break;
                }
              }
            }
            if (already) break;
          }
        }
        // １５勝６敗を含むか
        win_count = 0;
        if (!already) {
          for (i = data.length; i >= 21; i--) {
            win_count = 0;
            for (j = 0; j < 21; j++) {
              if (data[i - 1 - j]) {
                if (win_count < 15) win_count++;
                if (win_count == 15) {
                  already = true;
                  msg = '15勝6敗以上の戦績があります。';
                  break;
                }
              }
            }
            if (already) break;
          }
        }
      } else {
        // 8連勝を含むか
        for( i = data.length; i >= 8; i--) {
          if (data[i-1] && data[i-2] && data[i-3] && data[i-4] && data[i-5] && data[i-6] && data[i-7] && data[i-8]) {
            already = true;
            msg = '8連勝以上の戦績があります。';
            break;
          }
        }
        // 12勝４敗を含むか
        if (!already) {
          for (i = data.length; i >= 16; i--) {
            win_count = 0;
            for (j = 0; j < 16; j++ ) {
              if (data[i - 1 - j]) {
                if (win_count < 12) win_count++;
                if (win_count == 12) {
                  already = true;
                  msg = '12勝4敗以上の戦績があります。';
                  break;
                }
              }
            }
            if (already) break;
          }
        }
        // 14勝５敗を含むか
        win_count = 0;
        if (!already) {
          for (i = data.length; i >= 19; i--) {
            win_count = 0;
            for (j = 0; j < 19; j++ ) {
              if (data[i - 1 - j]) {
                if (win_count < 14) win_count++;
                if (win_count == 14) {
                  already = true;
                  msg = '14勝5敗以上の戦績があります。';
                  break;
                }
              }
            }
            if (already) break;
          }
        }
        // 16勝６敗を含むか
        win_count = 0;
        if (!already) {
          for (i = data.length; i >= 22; i--) {
            win_count = 0;
            for (j = 0; j < 22; j++ ) {
              if (data[i - 1 - j]) {
                if (win_count < 16) win_count++;
                if (win_count == 16) {
                  already = true;
                  msg = '16勝6敗以上の戦績があります。';
                  break;
                }
              }
            }
            if (already) break;
          }
        }
        // 18勝7敗を含むか
        win_count = 0;
        if (!already) {
          for (i = data.length; i >= 25; i--) {
            win_count = 0;
            for (j = 0; j < 25; j++ ) {
              if (data[i - 1 - j]) {
                if (win_count < 18) win_count++;
                if (win_count == 18) {
                  already = true;
                  msg = '18勝7敗以上の戦績があります。';
                  break;
                }
              }
            }
            if (already) break;
          }
        }
      }
      return {state: already, msg: msg};
    };
    // あと何勝で昇級か計算する
    this.score = function(data, rank) {
      var results = [], result = {},
        win_count = 0, lose_count = 0, win_rest = 0, lose_rest = 0, i = 0, j = 0;
      if (rank == 0) {
        // 6連勝の可能性
        results.push(vm.at_score(data, 6, 0));
        // 9勝３敗の可能性
        results.push(vm.at_score(data, 9, 3));
        // 11勝4敗の可能性
        results.push(vm.at_score(data, 11, 4));
        // 13勝5敗の可能性
        results.push(vm.at_score(data, 13, 5));
        // 15勝6敗の可能性
        results.push(vm.at_score(data, 15, 6));
      } else {
        // 8連勝の可能性
        results.push(vm.at_score(data, 8, 0));
        // 12勝4敗の可能性
        results.push(vm.at_score(data, 12, 4));
        // 14勝5敗の可能性
        results.push(vm.at_score(data, 14, 5));
        // 16勝6敗の可能性
        results.push(vm.at_score(data, 16, 6));
        // 18勝7敗の可能性
        results.push(vm.at_score(data, 18, 7));
      }
      return results;
    };
    // あと何勝何敗で昇級か
    // data: 勝敗データ, win: 昇級に必要な勝数, lose: 昇級に可能な敗数
    this.at_score = function(data, win, lose) {
      var win_count = 0, lose_count = 0, result = {}, found = false;
      for (var i = data.length; i > data.length - (win + lose -1); i--) {
        if (data[i-1]) win_count++;
        else {
          lose_count++;
          // (lose+1)敗目を探し、その直前(data[i])で切る。
          // (win+lose-1) の中で lose しか負けていない場合
          if (lose_count == (lose + 1)) {
            // 末尾の負けは削除する
            var delta = 0;
            for(var j = i; j < data.length; j++) {
              if(!data[j]) delta++;
              else break;
            }
            result = {
              win      : win_count,
              lose     : lose_count - 1 - delta,
              win_rest : win - win_count,
              lose_rest: delta,
              msg: ('現在' + win_count + '勝' + (lose_count - 1 - delta) + '敗中です。残り '+ (win - win_count) +'勝' + delta + '敗以上で昇級です')
            };
            found = true;
            break;
          }
        }
      }
      // (lose+1)敗目が見つからなかった場合は、(win-1)勝 lose敗
      if (!found) {
        result = {
          win      : win_count,
          lose     : lose_count,
          win_rest : 1,
          lose_rest: 0,
          msg: ('現在' + win_count + '勝' + lose_count + '敗中です。残り1勝で昇級です')
        }
      }
      return result;
    };
  };
}).call(this);
