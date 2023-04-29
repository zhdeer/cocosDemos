
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/AnimLayerTool');
require('./assets/Script/CardSprite');
require('./assets/Script/GameConfig');
require('./assets/Script/GameData');
require('./assets/Script/GamePopStar');
require('./assets/Script/GameScene');
require('./assets/Script/GameTools');
require('./assets/Script/GameUiTools');
require('./assets/Script/LoadingScene');
require('./assets/Script/MenuUI');
require('./assets/Script/assist/AnimInAndOut');
require('./assets/Script/panel/GameHelp');
require('./assets/Script/panel/GameOver');
require('./assets/Script/panel/GamePass');
require('./assets/Script/panel/GamePropHelp');
require('./assets/Script/panel/GamePropNode');
require('./assets/Script/panel/RankingListView');
require('./assets/Script/panel/ShowMessage');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dec8fHCKaxKIrsVoVxgLzJp', 'GameOver');
// Script/panel/GameOver.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var GameData = require("GameData");

cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    backButton: cc.Node,
    //返回按钮
    reviveButton: cc.Node //复活按钮

  },
  onLoad: function onLoad() {
    GameTools.submitScore(GameData.heightScore); //提交得分

    if (GameData.heightScore > GameData.getHeightScore()) {
      GameData.setHeightScore(GameData.heightScore);
    }

    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.reviveButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;

    if (this.reviveButton == button) {
      GameTools.playSimpleAudioEngine(0);

      if (GameData.getGameIntegral() >= 30) {
        GameConfig.IS_GAME_OVER = false;
        GameConfig.GameLogic.backGame();
        GameData.setGamePropNumber(0, 1);
        GameData.setGamePropNumber(1, 1);
        GameData.setGamePropNumber(2, 1);
        GameData.setGameIntegral(-30);
        GameConfig.GameScene.setGamePropNumber(0);
        GameConfig.GameScene.setGamePropNumber(1);
        GameConfig.GameScene.setGamePropNumber(2);
        this.node.destroy();

        if (GameConfig.IS_GAME_MUSIC) {
          GameTools.playBackgroundMusic();
        }
      }
    } else if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.loadingResource();
    }

    return true;
  },
  loadingResource: function loadingResource() {
    GameTools.removeRankData();
    GameData.setHaveGameData(false);
    GameData.setGamePassNum(1);
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneBackGame;
    GameConfig.mainMenu = GameConfig.MainMenu.MainMenuSpace;
    cc.director.loadScene("LoadingScene");
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZU92ZXIuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIkdhbWVEYXRhIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQ29sb3IiLCJOb2RlIiwiYmFja0J1dHRvbiIsInJldml2ZUJ1dHRvbiIsIm9uTG9hZCIsInN1Ym1pdFNjb3JlIiwiaGVpZ2h0U2NvcmUiLCJnZXRIZWlnaHRTY29yZSIsInNldEhlaWdodFNjb3JlIiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJidXR0b25GdW5jIiwiZXZlbnQiLCJidXR0b24iLCJ0YXJnZXQiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJnZXRHYW1lSW50ZWdyYWwiLCJJU19HQU1FX09WRVIiLCJHYW1lTG9naWMiLCJiYWNrR2FtZSIsInNldEdhbWVQcm9wTnVtYmVyIiwic2V0R2FtZUludGVncmFsIiwiR2FtZVNjZW5lIiwibm9kZSIsImRlc3Ryb3kiLCJJU19HQU1FX01VU0lDIiwicGxheUJhY2tncm91bmRNdXNpYyIsImxvYWRpbmdSZXNvdXJjZSIsInJlbW92ZVJhbmtEYXRhIiwic2V0SGF2ZUdhbWVEYXRhIiwic2V0R2FtZVBhc3NOdW0iLCJsb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwibWFpbk1lbnUiLCJNYWluTWVudSIsIk1haW5NZW51U3BhY2UiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRyxRQUFRLEdBQUdILE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBSSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUVMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBRE47SUFFUkMsVUFBVSxFQUFFTixFQUFFLENBQUNLLElBRlA7SUFFYTtJQUNyQkUsWUFBWSxFQUFFUCxFQUFFLENBQUNLLElBSFQsQ0FHZTs7RUFIZixDQUZQO0VBUUxHLE1BUkssb0JBUUk7SUFDTFgsU0FBUyxDQUFDWSxXQUFWLENBQXNCVixRQUFRLENBQUNXLFdBQS9CLEVBREssQ0FDd0M7O0lBQzdDLElBQUlYLFFBQVEsQ0FBQ1csV0FBVCxHQUF1QlgsUUFBUSxDQUFDWSxjQUFULEVBQTNCLEVBQXNEO01BQ2xEWixRQUFRLENBQUNhLGNBQVQsQ0FBd0JiLFFBQVEsQ0FBQ1csV0FBakM7SUFDSDs7SUFDRFosV0FBVyxDQUFDZSxvQkFBWixDQUFpQyxJQUFqQyxFQUF1QyxLQUFLUCxVQUE1QyxFQUF3RCxZQUF4RDtJQUNBUixXQUFXLENBQUNlLG9CQUFaLENBQWlDLElBQWpDLEVBQXVDLEtBQUtOLFlBQTVDLEVBQTBELFlBQTFEO0VBQ0gsQ0FmSTtFQWlCTE8sVUFBVSxFQUFFLG9CQUFVQyxLQUFWLEVBQWlCO0lBQ3pCLElBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxNQUFuQjs7SUFDQSxJQUFJLEtBQUtWLFlBQUwsSUFBcUJTLE1BQXpCLEVBQWlDO01BQzdCbkIsU0FBUyxDQUFDcUIscUJBQVYsQ0FBZ0MsQ0FBaEM7O01BQ0EsSUFBSW5CLFFBQVEsQ0FBQ29CLGVBQVQsTUFBOEIsRUFBbEMsRUFBc0M7UUFDbEN4QixVQUFVLENBQUN5QixZQUFYLEdBQTBCLEtBQTFCO1FBQ0F6QixVQUFVLENBQUMwQixTQUFYLENBQXFCQyxRQUFyQjtRQUNBdkIsUUFBUSxDQUFDd0IsaUJBQVQsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUI7UUFDQXhCLFFBQVEsQ0FBQ3dCLGlCQUFULENBQTJCLENBQTNCLEVBQThCLENBQTlCO1FBQ0F4QixRQUFRLENBQUN3QixpQkFBVCxDQUEyQixDQUEzQixFQUE4QixDQUE5QjtRQUNBeEIsUUFBUSxDQUFDeUIsZUFBVCxDQUF5QixDQUFDLEVBQTFCO1FBQ0E3QixVQUFVLENBQUM4QixTQUFYLENBQXFCRixpQkFBckIsQ0FBdUMsQ0FBdkM7UUFDQTVCLFVBQVUsQ0FBQzhCLFNBQVgsQ0FBcUJGLGlCQUFyQixDQUF1QyxDQUF2QztRQUNBNUIsVUFBVSxDQUFDOEIsU0FBWCxDQUFxQkYsaUJBQXJCLENBQXVDLENBQXZDO1FBQ0EsS0FBS0csSUFBTCxDQUFVQyxPQUFWOztRQUNBLElBQUloQyxVQUFVLENBQUNpQyxhQUFmLEVBQThCO1VBQzFCL0IsU0FBUyxDQUFDZ0MsbUJBQVY7UUFDSDtNQUNKO0lBQ0osQ0FqQkQsTUFpQk8sSUFBSSxLQUFLdkIsVUFBTCxJQUFtQlUsTUFBdkIsRUFBK0I7TUFDbENuQixTQUFTLENBQUNxQixxQkFBVixDQUFnQyxDQUFoQztNQUNBLEtBQUtZLGVBQUw7SUFDSDs7SUFDRCxPQUFPLElBQVA7RUFDSCxDQXpDSTtFQTBDTEEsZUFBZSxFQUFFLDJCQUFZO0lBQ3pCakMsU0FBUyxDQUFDa0MsY0FBVjtJQUNBaEMsUUFBUSxDQUFDaUMsZUFBVCxDQUF5QixLQUF6QjtJQUNBakMsUUFBUSxDQUFDa0MsY0FBVCxDQUF3QixDQUF4QjtJQUNBdEMsVUFBVSxDQUFDdUMsZ0JBQVgsR0FBOEJ2QyxVQUFVLENBQUN3QyxnQkFBWCxDQUE0QkMsb0JBQTFEO0lBQ0F6QyxVQUFVLENBQUMwQyxRQUFYLEdBQXNCMUMsVUFBVSxDQUFDMkMsUUFBWCxDQUFvQkMsYUFBMUM7SUFDQXZDLEVBQUUsQ0FBQ3dDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixjQUF0QjtFQUNIO0FBakRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBiYWNrQ29sb3I6IGNjLk5vZGUsXG4gICAgICAgIGJhY2tCdXR0b246IGNjLk5vZGUsIC8v6L+U5Zue5oyJ6ZKuXG4gICAgICAgIHJldml2ZUJ1dHRvbjogY2MuTm9kZSwgLy/lpI3mtLvmjInpkq5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVG9vbHMuc3VibWl0U2NvcmUoR2FtZURhdGEuaGVpZ2h0U2NvcmUpOyAvL+aPkOS6pOW+l+WIhlxuICAgICAgICBpZiAoR2FtZURhdGEuaGVpZ2h0U2NvcmUgPiBHYW1lRGF0YS5nZXRIZWlnaHRTY29yZSgpKSB7XG4gICAgICAgICAgICBHYW1lRGF0YS5zZXRIZWlnaHRTY29yZShHYW1lRGF0YS5oZWlnaHRTY29yZSk7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMucmV2aXZlQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XG4gICAgfSxcblxuICAgIGJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5yZXZpdmVCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVJbnRlZ3JhbCgpID49IDMwKSB7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5JU19HQU1FX09WRVIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5iYWNrR2FtZSgpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDAsIDEpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDEsIDEpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDIsIDEpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVJbnRlZ3JhbCgtMzApO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDApO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDEpO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDIpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQykge1xuICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJhY2tCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmVzb3VyY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGxvYWRpbmdSZXNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBHYW1lVG9vbHMucmVtb3ZlUmFua0RhdGEoKTtcbiAgICAgICAgR2FtZURhdGEuc2V0SGF2ZUdhbWVEYXRhKGZhbHNlKTtcbiAgICAgICAgR2FtZURhdGEuc2V0R2FtZVBhc3NOdW0oMSk7XG4gICAgICAgIEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVTcGFjZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f937eblcKFPZItT3ZuvdIyg', 'GameConfig');
// Script/GameConfig.js

"use strict";

var LoadingSceneType = {
  LoadingSceneFirst: 0,
  //首次进入
  LoadingSceneEnterGame: 1,
  //进入游戏
  LoadingSceneBackGame: 2 //返回游戏

};
var MainMenu = {
  MainMenuNumClassic: 0,
  // 经典模式
  MainMenuNumPop: 5,
  //消除叠加模式
  MainMenuNumPopStar: 6,
  //消灭星星模式
  MainMenuSpace: 7 //清空

};
var PropsMenu = {
  PropsMenuBackout: 0,
  //撤销功能
  PropsMenuDestroyCard: 1,
  //销毁一个卡片
  PropsMenuExchangeCard: 2,
  //调换卡片
  PropsMenuShrinkNum: 3,
  //使卡片数字除2
  PropsMenuRemoveAcross: 4,
  //使卡片横排消除
  PropsMenuRemoveVertical: 5,
  //使卡片竖排消除
  PropsMenuSpace: 6 //清空

};
var GameConfig = {
  GameName: "一起消灭星星",
  GameClubButton: null,
  //游戏圈按钮
  GameScene: null,
  GameLogic: null,
  LoadingSceneType: LoadingSceneType,
  MainMenu: MainMenu,
  PropsMenu: PropsMenu,
  DEVICE_WIDTH: 720,
  // 屏幕宽度
  DEVICE_HEIGHT: 1280,
  CARD_WIDTH: 0,
  // 卡片宽度
  CAED_LINES: 4,
  // 卡片个数
  MAIN_MENU_NUM: -1000,
  // 模式类型标识
  loadingSceneType: LoadingSceneType.LoadingSceneFirst,
  // 加载界面
  mainMenu: MainMenu.MainMenuSpace,
  // 主选择菜单
  propsMenu: PropsMenu.PropsMenuSpace,
  // 道具功能
  IS_GAME_MUSIC: true,
  // 游戏音效
  IS_GAME_SHARE: false,
  // 游戏分享
  IS_GAME_OVER: false,
  // 游戏是否结束
  IS_GAME_WIN: false //游戏是否胜利

};
module.exports = GameConfig;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVGaXJzdCIsIkxvYWRpbmdTY2VuZUVudGVyR2FtZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwiTWFpbk1lbnUiLCJNYWluTWVudU51bUNsYXNzaWMiLCJNYWluTWVudU51bVBvcCIsIk1haW5NZW51TnVtUG9wU3RhciIsIk1haW5NZW51U3BhY2UiLCJQcm9wc01lbnUiLCJQcm9wc01lbnVCYWNrb3V0IiwiUHJvcHNNZW51RGVzdHJveUNhcmQiLCJQcm9wc01lbnVFeGNoYW5nZUNhcmQiLCJQcm9wc01lbnVTaHJpbmtOdW0iLCJQcm9wc01lbnVSZW1vdmVBY3Jvc3MiLCJQcm9wc01lbnVSZW1vdmVWZXJ0aWNhbCIsIlByb3BzTWVudVNwYWNlIiwiR2FtZUNvbmZpZyIsIkdhbWVOYW1lIiwiR2FtZUNsdWJCdXR0b24iLCJHYW1lU2NlbmUiLCJHYW1lTG9naWMiLCJERVZJQ0VfV0lEVEgiLCJERVZJQ0VfSEVJR0hUIiwiQ0FSRF9XSURUSCIsIkNBRURfTElORVMiLCJNQUlOX01FTlVfTlVNIiwibG9hZGluZ1NjZW5lVHlwZSIsIm1haW5NZW51IiwicHJvcHNNZW51IiwiSVNfR0FNRV9NVVNJQyIsIklTX0dBTUVfU0hBUkUiLCJJU19HQU1FX09WRVIiLCJJU19HQU1FX1dJTiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUc7RUFDbkJDLGlCQUFpQixFQUFFLENBREE7RUFDRTtFQUNyQkMscUJBQXFCLEVBQUUsQ0FGSjtFQUVNO0VBQ3pCQyxvQkFBb0IsRUFBRSxDQUhILENBR0s7O0FBSEwsQ0FBdkI7QUFLQSxJQUFJQyxRQUFRLEdBQUc7RUFDWEMsa0JBQWtCLEVBQUUsQ0FEVDtFQUNXO0VBQ3RCQyxjQUFjLEVBQUUsQ0FGTDtFQUVPO0VBQ2xCQyxrQkFBa0IsRUFBRSxDQUhUO0VBR1c7RUFDdEJDLGFBQWEsRUFBRSxDQUpKLENBSUs7O0FBSkwsQ0FBZjtBQU9BLElBQUlDLFNBQVMsR0FBRztFQUNaQyxnQkFBZ0IsRUFBRSxDQUROO0VBQ1E7RUFDcEJDLG9CQUFvQixFQUFFLENBRlY7RUFFWTtFQUN4QkMscUJBQXFCLEVBQUUsQ0FIWDtFQUdhO0VBQ3pCQyxrQkFBa0IsRUFBRSxDQUpSO0VBSVU7RUFDdEJDLHFCQUFxQixFQUFFLENBTFg7RUFLYTtFQUN6QkMsdUJBQXVCLEVBQUUsQ0FOYjtFQU1lO0VBQzNCQyxjQUFjLEVBQUUsQ0FQSixDQU9NOztBQVBOLENBQWhCO0FBVUEsSUFBSUMsVUFBVSxHQUFHO0VBQ2JDLFFBQVEsRUFBRSxRQURHO0VBRWJDLGNBQWMsRUFBRSxJQUZIO0VBRVE7RUFDckJDLFNBQVMsRUFBRSxJQUhFO0VBSWJDLFNBQVMsRUFBRSxJQUpFO0VBTWJyQixnQkFBZ0IsRUFBRUEsZ0JBTkw7RUFPYkksUUFBUSxFQUFFQSxRQVBHO0VBUWJLLFNBQVMsRUFBRUEsU0FSRTtFQVViYSxZQUFZLEVBQUUsR0FWRDtFQVVNO0VBQ25CQyxhQUFhLEVBQUUsSUFYRjtFQWFiQyxVQUFVLEVBQUUsQ0FiQztFQWFDO0VBQ2RDLFVBQVUsRUFBRSxDQWRDO0VBY0M7RUFFZEMsYUFBYSxFQUFFLENBQUMsSUFoQkg7RUFnQlE7RUFFckJDLGdCQUFnQixFQUFFM0IsZ0JBQWdCLENBQUNDLGlCQWxCdEI7RUFrQndDO0VBQ3JEMkIsUUFBUSxFQUFFeEIsUUFBUSxDQUFDSSxhQW5CTjtFQW1Cb0I7RUFFakNxQixTQUFTLEVBQUVwQixTQUFTLENBQUNPLGNBckJSO0VBcUJ1QjtFQUVwQ2MsYUFBYSxFQUFFLElBdkJGO0VBdUJPO0VBRXBCQyxhQUFhLEVBQUUsS0F6QkY7RUF5QlE7RUFDckJDLFlBQVksRUFBRSxLQTFCRDtFQTBCTztFQUNwQkMsV0FBVyxFQUFFLEtBM0JBLENBMkJPOztBQTNCUCxDQUFqQjtBQTZCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsVUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBMb2FkaW5nU2NlbmVUeXBlID0ge1xuICAgIExvYWRpbmdTY2VuZUZpcnN0OiAwLC8v6aaW5qyh6L+b5YWlXG4gICAgTG9hZGluZ1NjZW5lRW50ZXJHYW1lOiAxLC8v6L+b5YWl5ri45oiPXG4gICAgTG9hZGluZ1NjZW5lQmFja0dhbWU6IDIsLy/ov5Tlm57muLjmiI9cbn07XG52YXIgTWFpbk1lbnUgPSB7XG4gICAgTWFpbk1lbnVOdW1DbGFzc2ljOiAwLC8vIOe7j+WFuOaooeW8j1xuICAgIE1haW5NZW51TnVtUG9wOiA1LC8v5raI6Zmk5Y+g5Yqg5qih5byPXG4gICAgTWFpbk1lbnVOdW1Qb3BTdGFyOiA2LC8v5raI54Gt5pif5pif5qih5byPXG4gICAgTWFpbk1lbnVTcGFjZTogNy8v5riF56m6XG59O1xuXG52YXIgUHJvcHNNZW51ID0ge1xuICAgIFByb3BzTWVudUJhY2tvdXQ6IDAsLy/mkqTplIDlip/og71cbiAgICBQcm9wc01lbnVEZXN0cm95Q2FyZDogMSwvL+mUgOavgeS4gOS4quWNoeeJh1xuICAgIFByb3BzTWVudUV4Y2hhbmdlQ2FyZDogMiwvL+iwg+aNouWNoeeJh1xuICAgIFByb3BzTWVudVNocmlua051bTogMywvL+S9v+WNoeeJh+aVsOWtl+mZpDJcbiAgICBQcm9wc01lbnVSZW1vdmVBY3Jvc3M6IDQsLy/kvb/ljaHniYfmqKrmjpLmtojpmaRcbiAgICBQcm9wc01lbnVSZW1vdmVWZXJ0aWNhbDogNSwvL+S9v+WNoeeJh+erluaOkua2iOmZpFxuICAgIFByb3BzTWVudVNwYWNlOiA2LC8v5riF56m6XG59O1xuXG52YXIgR2FtZUNvbmZpZyA9IHtcbiAgICBHYW1lTmFtZTogXCLkuIDotbfmtojnga3mmJ/mmJ9cIixcbiAgICBHYW1lQ2x1YkJ1dHRvbjogbnVsbCwvL+a4uOaIj+WciOaMiemSrlxuICAgIEdhbWVTY2VuZTogbnVsbCxcbiAgICBHYW1lTG9naWM6IG51bGwsXG5cbiAgICBMb2FkaW5nU2NlbmVUeXBlOiBMb2FkaW5nU2NlbmVUeXBlLFxuICAgIE1haW5NZW51OiBNYWluTWVudSxcbiAgICBQcm9wc01lbnU6IFByb3BzTWVudSxcblxuICAgIERFVklDRV9XSURUSDogNzIwLCAvLyDlsY/luZXlrr3luqZcbiAgICBERVZJQ0VfSEVJR0hUOiAxMjgwLFxuXG4gICAgQ0FSRF9XSURUSDogMCwvLyDljaHniYflrr3luqZcbiAgICBDQUVEX0xJTkVTOiA0LC8vIOWNoeeJh+S4quaVsFxuXG4gICAgTUFJTl9NRU5VX05VTTogLTEwMDAsLy8g5qih5byP57G75Z6L5qCH6K+GXG5cbiAgICBsb2FkaW5nU2NlbmVUeXBlOiBMb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUZpcnN0LC8vIOWKoOi9veeVjOmdolxuICAgIG1haW5NZW51OiBNYWluTWVudS5NYWluTWVudVNwYWNlLC8vIOS4u+mAieaLqeiPnOWNlVxuXG4gICAgcHJvcHNNZW51OiBQcm9wc01lbnUuUHJvcHNNZW51U3BhY2UsLy8g6YGT5YW35Yqf6IO9XG5cbiAgICBJU19HQU1FX01VU0lDOiB0cnVlLC8vIOa4uOaIj+mfs+aViFxuXG4gICAgSVNfR0FNRV9TSEFSRTogZmFsc2UsLy8g5ri45oiP5YiG5LqrXG4gICAgSVNfR0FNRV9PVkVSOiBmYWxzZSwvLyDmuLjmiI/mmK/lkKbnu5PmnZ9cbiAgICBJU19HQU1FX1dJTjogZmFsc2UsIC8v5ri45oiP5piv5ZCm6IOc5YipXG59O1xubW9kdWxlLmV4cG9ydHMgPSBHYW1lQ29uZmlnO1xuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d75bPsk+FALqemqL/20DvJ', 'GameData');
// Script/GameData.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameData = {
  scoreCard0: [],
  //记录当前位置
  scoreCard1: [],
  //记录第一次位置
  scoreCard2: [],
  //记录第二次位置
  scoreCard3: [],
  //记录第三次位置
  score0: 0,
  // 记录当前得分
  score1: 0,
  // 记录第一次得分
  score2: 0,
  // 记录第二次得分
  score3: 0,
  // 记录第三次得分
  heightScore: 0,
  // 最高分
  bestNum: 2,
  //最大数字
  initData: function initData() {
    this.scoreCard0 = new Array();
    this.scoreCard1 = new Array();
    this.scoreCard2 = new Array();
    this.scoreCard3 = new Array();

    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      this.scoreCard0[i] = Array();
      this.scoreCard1[i] = Array();
      this.scoreCard2[i] = Array();
      this.scoreCard3[i] = Array();
    }

    this.score0 = 0; // 记录当前得分

    this.score1 = 0; // 记录第一次得分

    this.score2 = 0; // 记录第二次得分

    this.score3 = 0; // 记录第三次得分

    this.heightScore = 0; // 最高分

    this.bestNum = 2; //最大数字
  },
  getChallengeLevelNum: function getChallengeLevelNum() {
    return 7;
  },
  getChallengeLevelData: function getChallengeLevelData(type) {
    if (type == 0) {
      return "1000100000001000000010001";
    } else if (type == 1) {
      return "1101110001000001000111011";
    } else if (type == 2) {
      return "1100100001001001000010011";
    } else if (type == 3) {
      return "0111000100000000010001110";
    } else if (type == 4) {
      return "0001100001100011000011000";
    } else if (type == 5) {
      return "0000000100011100010000000";
    } else if (type == 6) {
      return "1000101010000000101010001";
    }
  },
  getGameData: function getGameData(cardNum, cardX, cardY) {
    return GameTools.getItemByLocalStorage("gameData_" + GameConfig.MAIN_MENU_NUM + "_" + cardNum + "_" + cardX + "_" + cardY, 0);
  },
  setGameData: function setGameData(gameData, cardNum, cardX, cardY) {
    cc.sys.localStorage.setItem("gameData_" + GameConfig.MAIN_MENU_NUM + "_" + cardNum + "_" + cardX + "_" + cardY, gameData);
  },
  getGameScoreData: function getGameScoreData(scoreNum) {
    return GameTools.getItemByLocalStorage("score_" + GameConfig.MAIN_MENU_NUM + "_" + scoreNum, 0);
  },
  setGameScoreData: function setGameScoreData(score, scoreNum) {
    cc.sys.localStorage.setItem("score_" + GameConfig.MAIN_MENU_NUM + "_" + scoreNum, score);
  },
  isHaveGameData: function isHaveGameData() {
    return GameTools.getItemByLocalStorage("isHaveGameData_" + GameConfig.MAIN_MENU_NUM, false);
  },
  setHaveGameData: function setHaveGameData(isHaveGameData) {
    cc.sys.localStorage.setItem("isHaveGameData_" + GameConfig.MAIN_MENU_NUM, isHaveGameData);
  },
  getScoreNum: function getScoreNum() {
    return GameTools.getItemByLocalStorage("ScoreNum_" + GameConfig.MAIN_MENU_NUM, 0);
  },
  setScoreNum: function setScoreNum(ScoreNum) {
    cc.sys.localStorage.setItem("ScoreNum_" + GameConfig.MAIN_MENU_NUM, ScoreNum);
  },
  getHeightScore: function getHeightScore() {
    return GameTools.getItemByLocalStorage("BestScoreNum_" + GameConfig.MAIN_MENU_NUM, 0);
  },
  setHeightScore: function setHeightScore(heightScore) {
    cc.sys.localStorage.setItem("BestScoreNum_" + GameConfig.MAIN_MENU_NUM, heightScore);
  },
  getIsRecordHeightNum: function getIsRecordHeightNum(heightNum) {
    return GameTools.getItemByLocalStorage("isRecordHeightNum_" + GameConfig.MAIN_MENU_NUM + "_" + heightNum, false);
  },
  setIsRecordHeightNum: function setIsRecordHeightNum(heightNum, isRecord) {
    cc.sys.localStorage.setItem("isRecordHeightNum_" + GameConfig.MAIN_MENU_NUM + "_" + heightNum, isRecord);
  },
  setGameRewards: function setGameRewards(num) {
    //设置游戏奖励
    if (num >= 1024 && !this.getIsRecordHeightNum(num)) {
      GameTools.playSimpleAudioEngine(3);
      this.setIsRecordHeightNum(num, true);
    }

    var gameIntergralNum = 0;

    switch (num) {
      case 128:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 4 - GameConfig.CAED_LINES;
        }

        break;

      case 256:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 5 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 1;
        }

        break;

      case 512:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 6 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 2;
        }

        break;

      case 1024:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 7 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 3;
        }

        break;

      case 2048:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 8 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 4;
        }

        break;

      case 4096:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 9 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 5;
        }

        break;

      case 8192:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 10 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 6;
        }

        break;

      case 16384:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 11 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 7;
        }

        break;

      case 65536:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 12 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 8;
        }

        break;

      case 131072:
        if (GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPop && GameConfig.mainMenu != GameConfig.MainMenu.MainMenuNumPopStar) {
          gameIntergralNum = 13 - GameConfig.CAED_LINES;
        } else {
          gameIntergralNum = 9;
        }

        break;

      default:
        break;
    }

    if (gameIntergralNum > 0) {
      this.setGameIntegral(gameIntergralNum);
    }

    return gameIntergralNum;
  },
  getGamePropNumber: function getGamePropNumber(propType) {
    return GameTools.getItemByLocalStorage("gameProp" + propType, 0);
  },
  setGamePropNumber: function setGamePropNumber(propType, number) {
    GameTools.setItemByLocalStorage("gameProp" + propType, GameTools.getItemByLocalStorage("gameProp" + propType, 0) + number);
  },
  getGameIntegral: function getGameIntegral() //获取积分
  {
    return GameTools.getGameIntegral();
  },
  setGameIntegral: function setGameIntegral(letrgral) {
    GameTools.setGameIntegral(this.getGameIntegral() + letrgral);
  },
  isGameHelp: function isGameHelp() {
    //判断游戏是否进行了帮助
    return GameTools.getItemByLocalStorage("isGameHelp" + GameConfig.mainMenu, false);
  },
  setGameHelp: function setGameHelp(gameHelp) {
    cc.sys.localStorage.setItem("isGameHelp" + GameConfig.mainMenu, gameHelp);
  },
  getGamePassNum: function getGamePassNum() {
    return GameTools.getItemByLocalStorage("passNum" + GameConfig.mainMenu, 1);
  },
  setGamePassNum: function setGamePassNum(passNum) {
    cc.sys.localStorage.setItem("passNum" + GameConfig.mainMenu, passNum);
  },
  getGamePassScore: function getGamePassScore() {
    var passNum = GameData.getGamePassNum();
    return 1000 + (passNum - 1) * 1500 + (passNum - 1) * (passNum - 1) * 500;
  },
  loadGameData: function loadGameData(isLoad) {
    if (isLoad) {
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.scoreCard0[i][j] = this.getGameData(0, i, j);
          this.bestNum = this.bestNum > this.scoreCard0[i][j] ? this.bestNum : this.scoreCard0[i][j];

          if (this.checkGameData(this.scoreCard0[i][j])) {
            return true;
          }

          this.scoreCard1[i][j] = this.getGameData(1, i, j);
          this.scoreCard2[i][j] = this.getGameData(2, i, j);
          this.scoreCard3[i][j] = this.getGameData(3, i, j);
        }
      }

      this.scoreNum = this.getScoreNum();
      this.score0 = this.getGameScoreData(0);
      this.score1 = this.getGameScoreData(1);
      this.score2 = this.getGameScoreData(2);
      this.score3 = this.getGameScoreData(3);
      GameConfig.IS_GAME_WIN = this.bestNum >= 2048 ? true : false;
    } else {
      this.setHeightScore(this.heightScore);

      for (var _i = 0; _i < GameConfig.CAED_LINES; _i++) {
        for (var _j = 0; _j < GameConfig.CAED_LINES; _j++) {
          this.setGameData(this.scoreCard0[_i][_j], 0, _i, _j);
          this.setGameData(this.scoreCard1[_i][_j], 1, _i, _j);
          this.setGameData(this.scoreCard2[_i][_j], 2, _i, _j);
          this.setGameData(this.scoreCard3[_i][_j], 3, _i, _j);
        }
      }

      this.setScoreNum(this.scoreNum);
      this.setGameScoreData(this.score0, 0);
      this.setGameScoreData(this.score1, 1);
      this.setGameScoreData(this.score2, 2);
      this.setGameScoreData(this.score3, 3);
      this.setHaveGameData(true);
    }

    return false;
  },
  checkGameData: function checkGameData(gameData) {
    if (gameData == 0) {
      return false;
    }

    var num = 1;

    for (var i = 1; i < 25; i++) {
      if (gameData == num) {
        return false;
      }

      num *= 2;
    }

    if (gameData == -1) {
      return false;
    }

    return true;
  }
};
module.exports = GameData;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lRGF0YS5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVEYXRhIiwic2NvcmVDYXJkMCIsInNjb3JlQ2FyZDEiLCJzY29yZUNhcmQyIiwic2NvcmVDYXJkMyIsInNjb3JlMCIsInNjb3JlMSIsInNjb3JlMiIsInNjb3JlMyIsImhlaWdodFNjb3JlIiwiYmVzdE51bSIsImluaXREYXRhIiwiQXJyYXkiLCJpIiwiQ0FFRF9MSU5FUyIsImdldENoYWxsZW5nZUxldmVsTnVtIiwiZ2V0Q2hhbGxlbmdlTGV2ZWxEYXRhIiwidHlwZSIsImdldEdhbWVEYXRhIiwiY2FyZE51bSIsImNhcmRYIiwiY2FyZFkiLCJnZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJNQUlOX01FTlVfTlVNIiwic2V0R2FtZURhdGEiLCJnYW1lRGF0YSIsImNjIiwic3lzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEdhbWVTY29yZURhdGEiLCJzY29yZU51bSIsInNldEdhbWVTY29yZURhdGEiLCJzY29yZSIsImlzSGF2ZUdhbWVEYXRhIiwic2V0SGF2ZUdhbWVEYXRhIiwiZ2V0U2NvcmVOdW0iLCJzZXRTY29yZU51bSIsIlNjb3JlTnVtIiwiZ2V0SGVpZ2h0U2NvcmUiLCJzZXRIZWlnaHRTY29yZSIsImdldElzUmVjb3JkSGVpZ2h0TnVtIiwiaGVpZ2h0TnVtIiwic2V0SXNSZWNvcmRIZWlnaHROdW0iLCJpc1JlY29yZCIsInNldEdhbWVSZXdhcmRzIiwibnVtIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiZ2FtZUludGVyZ3JhbE51bSIsIm1haW5NZW51IiwiTWFpbk1lbnUiLCJNYWluTWVudU51bVBvcCIsIk1haW5NZW51TnVtUG9wU3RhciIsInNldEdhbWVJbnRlZ3JhbCIsImdldEdhbWVQcm9wTnVtYmVyIiwicHJvcFR5cGUiLCJzZXRHYW1lUHJvcE51bWJlciIsIm51bWJlciIsInNldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImdldEdhbWVJbnRlZ3JhbCIsImxldHJncmFsIiwiaXNHYW1lSGVscCIsInNldEdhbWVIZWxwIiwiZ2FtZUhlbHAiLCJnZXRHYW1lUGFzc051bSIsInNldEdhbWVQYXNzTnVtIiwicGFzc051bSIsImdldEdhbWVQYXNzU2NvcmUiLCJsb2FkR2FtZURhdGEiLCJpc0xvYWQiLCJqIiwiY2hlY2tHYW1lRGF0YSIsIklTX0dBTUVfV0lOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHO0VBQ1hDLFVBQVUsRUFBRSxFQUREO0VBQ0s7RUFDaEJDLFVBQVUsRUFBRSxFQUZEO0VBRUs7RUFDaEJDLFVBQVUsRUFBRSxFQUhEO0VBR0s7RUFDaEJDLFVBQVUsRUFBRSxFQUpEO0VBSUs7RUFDaEJDLE1BQU0sRUFBRSxDQUxHO0VBS0E7RUFDWEMsTUFBTSxFQUFFLENBTkc7RUFNQTtFQUNYQyxNQUFNLEVBQUUsQ0FQRztFQU9EO0VBQ1ZDLE1BQU0sRUFBRSxDQVJHO0VBUUQ7RUFDVkMsV0FBVyxFQUFFLENBVEY7RUFTSztFQUNoQkMsT0FBTyxFQUFFLENBVkU7RUFVQztFQUVaQyxRQUFRLEVBQUUsb0JBQVk7SUFDbEIsS0FBS1YsVUFBTCxHQUFrQixJQUFJVyxLQUFKLEVBQWxCO0lBQ0EsS0FBS1YsVUFBTCxHQUFrQixJQUFJVSxLQUFKLEVBQWxCO0lBQ0EsS0FBS1QsVUFBTCxHQUFrQixJQUFJUyxLQUFKLEVBQWxCO0lBQ0EsS0FBS1IsVUFBTCxHQUFrQixJQUFJUSxLQUFKLEVBQWxCOztJQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2hCLFVBQVUsQ0FBQ2lCLFVBQS9CLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO01B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LEtBQUsyQixlQUFMLENBQXFCLElBQXJCO0lBQ0g7O0lBQ0QsT0FBTyxLQUFQO0VBQ0gsQ0F6UVU7RUEwUVhvQyxhQUFhLEVBQUUsdUJBQVU5QyxRQUFWLEVBQW9CO0lBQy9CLElBQUlBLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtNQUNmLE9BQU8sS0FBUDtJQUNIOztJQUNELElBQUlxQixHQUFHLEdBQUcsQ0FBVjs7SUFDQSxLQUFLLElBQUlqQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO01BQ3pCLElBQUlZLFFBQVEsSUFBSXFCLEdBQWhCLEVBQXFCO1FBQ2pCLE9BQU8sS0FBUDtNQUNIOztNQUNEQSxHQUFHLElBQUksQ0FBUDtJQUNIOztJQUNELElBQUlyQixRQUFRLElBQUksQ0FBQyxDQUFqQixFQUFvQjtNQUNoQixPQUFPLEtBQVA7SUFDSDs7SUFDRCxPQUFPLElBQVA7RUFDSDtBQXpSVSxDQUFmO0FBNFJBZ0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUUsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lRGF0YSA9IHtcbiAgICBzY29yZUNhcmQwOiBbXSwgLy/orrDlvZXlvZPliY3kvY3nva5cbiAgICBzY29yZUNhcmQxOiBbXSwgLy/orrDlvZXnrKzkuIDmrKHkvY3nva5cbiAgICBzY29yZUNhcmQyOiBbXSwgLy/orrDlvZXnrKzkuozmrKHkvY3nva5cbiAgICBzY29yZUNhcmQzOiBbXSwgLy/orrDlvZXnrKzkuInmrKHkvY3nva5cbiAgICBzY29yZTA6IDAsIC8vIOiusOW9leW9k+WJjeW+l+WIhlxuICAgIHNjb3JlMTogMCwgLy8g6K6w5b2V56ys5LiA5qyh5b6X5YiGXG4gICAgc2NvcmUyOiAwLC8vIOiusOW9leesrOS6jOasoeW+l+WIhlxuICAgIHNjb3JlMzogMCwvLyDorrDlvZXnrKzkuInmrKHlvpfliIZcbiAgICBoZWlnaHRTY29yZTogMCwgLy8g5pyA6auY5YiGXG4gICAgYmVzdE51bTogMiwgLy/mnIDlpKfmlbDlrZdcblxuICAgIGluaXREYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NvcmVDYXJkMCA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnNjb3JlQ2FyZDEgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zY29yZUNhcmQyID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2NvcmVDYXJkMyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDBbaV0gPSBBcnJheSgpO1xuICAgICAgICAgICAgdGhpcy5zY29yZUNhcmQxW2ldID0gQXJyYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVDYXJkMltpXSA9IEFycmF5KCk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDNbaV0gPSBBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NvcmUwID0gMDsgLy8g6K6w5b2V5b2T5YmN5b6X5YiGXG4gICAgICAgIHRoaXMuc2NvcmUxID0gMDsgLy8g6K6w5b2V56ys5LiA5qyh5b6X5YiGXG4gICAgICAgIHRoaXMuc2NvcmUyID0gMDsvLyDorrDlvZXnrKzkuozmrKHlvpfliIZcbiAgICAgICAgdGhpcy5zY29yZTMgPSAwOy8vIOiusOW9leesrOS4ieasoeW+l+WIhlxuICAgICAgICB0aGlzLmhlaWdodFNjb3JlID0gMDsgLy8g5pyA6auY5YiGXG4gICAgICAgIHRoaXMuYmVzdE51bSA9IDI7IC8v5pyA5aSn5pWw5a2XXG4gICAgfSxcbiAgICBnZXRDaGFsbGVuZ2VMZXZlbE51bTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gNztcbiAgICB9LFxuICAgIGdldENoYWxsZW5nZUxldmVsRGF0YTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiMTAwMDEwMDAwMDAwMTAwMDAwMDAxMDAwMVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiMTEwMTExMDAwMTAwMDAwMTAwMDExMTAxMVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIFwiMTEwMDEwMDAwMTAwMTAwMTAwMDAxMDAxMVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIFwiMDExMTAwMDEwMDAwMDAwMDAxMDAwMTExMFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiMDAwMTEwMDAwMTEwMDAxMTAwMDAxMTAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiMDAwMDAwMDEwMDAxMTEwMDAxMDAwMDAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gNikge1xuICAgICAgICAgICAgcmV0dXJuIFwiMTAwMDEwMTAxMDAwMDAwMDEwMTAxMDAwMVwiO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRHYW1lRGF0YTogZnVuY3Rpb24gKGNhcmROdW0sIGNhcmRYLCBjYXJkWSkge1xuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImdhbWVEYXRhX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCJfXCIgKyBjYXJkTnVtICsgXCJfXCIgKyBjYXJkWCArIFwiX1wiICsgY2FyZFksIDApO1xuICAgIH0sXG5cbiAgICBzZXRHYW1lRGF0YTogZnVuY3Rpb24gKGdhbWVEYXRhLCBjYXJkTnVtLCBjYXJkWCwgY2FyZFkpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZURhdGFfXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0gKyBcIl9cIiArIGNhcmROdW0gKyBcIl9cIiArIGNhcmRYICsgXCJfXCIgKyBjYXJkWSwgZ2FtZURhdGEpO1xuICAgIH0sXG5cbiAgICBnZXRHYW1lU2NvcmVEYXRhOiBmdW5jdGlvbiAoc2NvcmVOdW0pIHtcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJzY29yZV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiX1wiICsgc2NvcmVOdW0sIDApO1xuICAgIH0sXG5cbiAgICBzZXRHYW1lU2NvcmVEYXRhOiBmdW5jdGlvbiAoc2NvcmUsIHNjb3JlTnVtKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjb3JlX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCJfXCIgKyBzY29yZU51bSwgc2NvcmUpO1xuICAgIH0sXG5cbiAgICBpc0hhdmVHYW1lRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImlzSGF2ZUdhbWVEYXRhX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLCBmYWxzZSk7XG4gICAgfSxcblxuICAgIHNldEhhdmVHYW1lRGF0YTogZnVuY3Rpb24gKGlzSGF2ZUdhbWVEYXRhKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzSGF2ZUdhbWVEYXRhX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLCBpc0hhdmVHYW1lRGF0YSk7XG4gICAgfSxcblxuICAgIGdldFNjb3JlTnVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiU2NvcmVOdW1fXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sIDApO1xuICAgIH0sXG5cbiAgICBzZXRTY29yZU51bTogZnVuY3Rpb24gKFNjb3JlTnVtKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlNjb3JlTnVtX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLCBTY29yZU51bSk7XG4gICAgfSxcbiAgICBnZXRIZWlnaHRTY29yZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkJlc3RTY29yZU51bV9cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSwgMCk7XG4gICAgfSxcblxuICAgIHNldEhlaWdodFNjb3JlOiBmdW5jdGlvbiAoaGVpZ2h0U2NvcmUpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQmVzdFNjb3JlTnVtX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLCBoZWlnaHRTY29yZSk7XG4gICAgfSxcbiAgICBnZXRJc1JlY29yZEhlaWdodE51bTogZnVuY3Rpb24gKGhlaWdodE51bSkge1xuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImlzUmVjb3JkSGVpZ2h0TnVtX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCJfXCIgKyBoZWlnaHROdW0sIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgc2V0SXNSZWNvcmRIZWlnaHROdW06IGZ1bmN0aW9uIChoZWlnaHROdW0sIGlzUmVjb3JkKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzUmVjb3JkSGVpZ2h0TnVtX1wiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNICsgXCJfXCIgKyBoZWlnaHROdW0sIGlzUmVjb3JkKTtcbiAgICB9LFxuXG4gICAgc2V0R2FtZVJld2FyZHM6IGZ1bmN0aW9uIChudW0pIHsgLy/orr7nva7muLjmiI/lpZblirFcbiAgICAgICAgaWYgKChudW0gPj0gMTAyNCkgJiYgIXRoaXMuZ2V0SXNSZWNvcmRIZWlnaHROdW0obnVtKSkge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SXNSZWNvcmRIZWlnaHROdW0obnVtLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ2FtZUludGVyZ3JhbE51bSA9IDA7XG4gICAgICAgIHN3aXRjaCAobnVtKSB7XG4gICAgICAgICAgICBjYXNlIDEyODpcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDQgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyNTY6XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA1IC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1MTI6XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA2IC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMDI0OlxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNyAtIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjA0ODpcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDggLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQwOTY6XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcCAmJiBHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3BTdGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJbnRlcmdyYWxOdW0gPSA5IC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4MTkyOlxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gMTAgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE2Mzg0OlxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gMTEgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY1NTM2OlxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLm1haW5NZW51ICE9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVOdW1Qb3AgJiYgR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3Rhcikge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gMTIgLSBHYW1lQ29uZmlnLkNBRURfTElORVM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSW50ZXJncmFsTnVtID0gODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEzMTA3MjpcbiAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5tYWluTWVudSAhPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wICYmIEdhbWVDb25maWcubWFpbk1lbnUgIT0gR2FtZUNvbmZpZy5NYWluTWVudS5NYWluTWVudU51bVBvcFN0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDEzIC0gR2FtZUNvbmZpZy5DQUVEX0xJTkVTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUludGVyZ3JhbE51bSA9IDk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZUludGVyZ3JhbE51bSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZUludGVncmFsKGdhbWVJbnRlcmdyYWxOdW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lSW50ZXJncmFsTnVtO1xuICAgIH0sXG5cbiAgICBnZXRHYW1lUHJvcE51bWJlcihwcm9wVHlwZSkge1xuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImdhbWVQcm9wXCIgKyBwcm9wVHlwZSwgMCk7XG4gICAgfSxcblxuICAgIHNldEdhbWVQcm9wTnVtYmVyKHByb3BUeXBlLCBudW1iZXIpIHtcbiAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImdhbWVQcm9wXCIgKyBwcm9wVHlwZSwgR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImdhbWVQcm9wXCIgKyBwcm9wVHlwZSwgMCkgKyBudW1iZXIpO1xuICAgIH0sXG5cbiAgICBnZXRHYW1lSW50ZWdyYWw6IGZ1bmN0aW9uICgpIC8v6I635Y+W56ev5YiGXG4gICAge1xuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEdhbWVJbnRlZ3JhbCgpO1xuICAgIH0sXG4gICAgc2V0R2FtZUludGVncmFsOiBmdW5jdGlvbiAobGV0cmdyYWwpIHtcbiAgICAgICAgR2FtZVRvb2xzLnNldEdhbWVJbnRlZ3JhbCh0aGlzLmdldEdhbWVJbnRlZ3JhbCgpICsgbGV0cmdyYWwpO1xuICAgIH0sXG4gICAgaXNHYW1lSGVscDogZnVuY3Rpb24gKCkgeyAvL+WIpOaWrea4uOaIj+aYr+WQpui/m+ihjOS6huW4ruWKqVxuICAgICAgICByZXR1cm4gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImlzR2FtZUhlbHBcIiArIEdhbWVDb25maWcubWFpbk1lbnUsIGZhbHNlKTtcbiAgICB9LFxuICAgIHNldEdhbWVIZWxwOiBmdW5jdGlvbiAoZ2FtZUhlbHApIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNHYW1lSGVscFwiICsgR2FtZUNvbmZpZy5tYWluTWVudSwgZ2FtZUhlbHApO1xuICAgIH0sXG4gICAgZ2V0R2FtZVBhc3NOdW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJwYXNzTnVtXCIgKyBHYW1lQ29uZmlnLm1haW5NZW51LCAxKTtcbiAgICB9LFxuICAgIHNldEdhbWVQYXNzTnVtOiBmdW5jdGlvbiAocGFzc051bSkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwYXNzTnVtXCIgKyBHYW1lQ29uZmlnLm1haW5NZW51LCBwYXNzTnVtKTtcbiAgICB9LFxuICAgIGdldEdhbWVQYXNzU2NvcmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHBhc3NOdW0gPSBHYW1lRGF0YS5nZXRHYW1lUGFzc051bSgpO1xuICAgICAgICByZXR1cm4gKDEwMDAgKyAocGFzc051bSAtIDEpICogMTUwMCArIChwYXNzTnVtIC0gMSkgKiAocGFzc051bSAtIDEpICogNTAwKTtcbiAgICB9LFxuXG4gICAgbG9hZEdhbWVEYXRhOiBmdW5jdGlvbiAoaXNMb2FkKSB7XG4gICAgICAgIGlmIChpc0xvYWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVDYXJkMFtpXVtqXSA9IHRoaXMuZ2V0R2FtZURhdGEoMCwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVzdE51bSA9IHRoaXMuYmVzdE51bSA+IHRoaXMuc2NvcmVDYXJkMFtpXVtqXSA/IHRoaXMuYmVzdE51bSA6IHRoaXMuc2NvcmVDYXJkMFtpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tHYW1lRGF0YSh0aGlzLnNjb3JlQ2FyZDBbaV1bal0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDFbaV1bal0gPSB0aGlzLmdldEdhbWVEYXRhKDEsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDJbaV1bal0gPSB0aGlzLmdldEdhbWVEYXRhKDIsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlQ2FyZDNbaV1bal0gPSB0aGlzLmdldEdhbWVEYXRhKDMsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2NvcmVOdW0gPSB0aGlzLmdldFNjb3JlTnVtKCk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlMCA9IHRoaXMuZ2V0R2FtZVNjb3JlRGF0YSgwKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUxID0gdGhpcy5nZXRHYW1lU2NvcmVEYXRhKDEpO1xuICAgICAgICAgICAgdGhpcy5zY29yZTIgPSB0aGlzLmdldEdhbWVTY29yZURhdGEoMik7XG4gICAgICAgICAgICB0aGlzLnNjb3JlMyA9IHRoaXMuZ2V0R2FtZVNjb3JlRGF0YSgzKTtcbiAgICAgICAgICAgIEdhbWVDb25maWcuSVNfR0FNRV9XSU4gPSAodGhpcy5iZXN0TnVtID49IDIwNDggPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRIZWlnaHRTY29yZSh0aGlzLmhlaWdodFNjb3JlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy5zY29yZUNhcmQwW2ldW2pdLCAwLCBpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lRGF0YSh0aGlzLnNjb3JlQ2FyZDFbaV1bal0sIDEsIGksIGopO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdhbWVEYXRhKHRoaXMuc2NvcmVDYXJkMltpXVtqXSwgMiwgaSwgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZURhdGEodGhpcy5zY29yZUNhcmQzW2ldW2pdLCAzLCBpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFNjb3JlTnVtKHRoaXMuc2NvcmVOdW0pO1xuICAgICAgICAgICAgdGhpcy5zZXRHYW1lU2NvcmVEYXRhKHRoaXMuc2NvcmUwLCAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZVNjb3JlRGF0YSh0aGlzLnNjb3JlMSwgMSk7XG4gICAgICAgICAgICB0aGlzLnNldEdhbWVTY29yZURhdGEodGhpcy5zY29yZTIsIDIpO1xuICAgICAgICAgICAgdGhpcy5zZXRHYW1lU2NvcmVEYXRhKHRoaXMuc2NvcmUzLCAzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SGF2ZUdhbWVEYXRhKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNoZWNrR2FtZURhdGE6IGZ1bmN0aW9uIChnYW1lRGF0YSkge1xuICAgICAgICBpZiAoZ2FtZURhdGEgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBudW0gPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI1OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChnYW1lRGF0YSA9PSBudW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudW0gKj0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2FtZURhdGEgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lRGF0YTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GamePopStar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a3ac4EJGJABo4T04pKYHlg', 'GamePopStar');
// Script/GamePopStar.js

"use strict";

var CardSprite = require("CardSprite");

var GameConfig = require("GameConfig");

var GameData = require("GameData");

var AnimLayerTool = require("AnimLayerTool");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var TAG_card = 1006;
var GamePopStar = cc.Class({
  "extends": cc.Node,
  properties: {
    firstX: null,
    //点击元素
    firstY: null,
    //点击元素
    endX: null,
    endY: null,
    selectNumber: 0,
    //选中数字
    selectAmount: 0,
    //选中卡片数
    score: 0,
    //分数,
    cardArr: null,
    // 储存卡片类
    firstClickNum: new Array() //记录交换位置

  },
  ctor: function ctor() {
    this.x = -GameConfig.DEVICE_WIDTH / 2;
    this.y = -GameConfig.DEVICE_HEIGHT / 2;
    this.setContentSize(GameConfig.DEVICE_WIDTH * 4, GameConfig.DEVICE_HEIGHT * 4);
    this.init();
  },
  init: function init() {
    this.cardArr = new Array();

    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      this.cardArr[i] = Array();
    }

    this.firstClickNum[0] = -1;
    this.firstClickNum[1] = -1;
    this.initUI();
  },
  initUI: function initUI() {
    //设置触摸事件监听
    this.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.createCardSprite(); //创建4X4卡片

    if (GameData.isHaveGameData()) {
      this.score = GameData.score0;

      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.cardArr[i][j].number = GameData.scoreCard0[i][j];
          this.cardArr[i][j].CardShow();

          if (GameData.scoreCard2[i][j] == 1) {
            this.cardArr[i][j].setVisible(false);
          }
        }
      }
    } else {
      for (var _i = 0; _i < GameConfig.CAED_LINES; _i++) {
        for (var _j = 0; _j < GameConfig.CAED_LINES; _j++) {
          AnimLayerTool.moveButtonAnim(this.cardArr[_i][_j], true, AnimLayerTool.MoveButtonAnimType.up);
        }
      }

      GameData.score0 = 0;
      GameData.score1 = 0;
      GameData.scoreNum = 0;
      this.score = 0;

      for (var _i2 = 0; _i2 < GameConfig.CAED_LINES; _i2++) {
        for (var _j2 = 0; _j2 < GameConfig.CAED_LINES; _j2++) {
          GameData.scoreCard3[_i2][_j2] = 0;
          GameData.scoreCard2[_i2][_j2] = 0;
          GameData.scoreCard1[_i2][_j2] = this.cardArr[_i2][_j2].number;
          GameData.scoreCard0[_i2][_j2] = this.cardArr[_i2][_j2].number;
        }
      }
    }
  },
  onTouchBegan: function onTouchBegan(event) {
    //获取触摸的X轴和Y轴
    var touchPoint = event.touch.getLocation(); //获取OpenGL坐标（即cocos2d-x坐标，原点在左下角）

    var self = event.getCurrentTarget();

    if (GameConfig.propsMenu != GameConfig.PropsMenu.PropsMenuSpace) {
      self.GamePopStarProperty(touchPoint);
      return false;
    } else {
      //碰撞检测
      if (self.selectAmount == 0) {
        for (var i = 0; i < GameConfig.CAED_LINES; i++) {
          for (var j = 0; j < GameConfig.CAED_LINES; j++) {
            if (self.cardArr[i][j].isVisible() && self.cardArr[i][j].getBoundingBoxToWorld().contains(touchPoint)) {
              GameTools.playSimpleAudioEngine(1);
              self.cardArr[i][j].CardClickShow(1);
              self.inspectionSelect(i, j);
            }
          }
        }

        self.cardVanish();
      }

      return true;
    }
  },
  //道具模式
  GamePopStarProperty: function GamePopStarProperty(touchPoint) {
    console.log("touchPoint :" + touchPoint); //碰撞检测

    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        if (this.cardArr[i][j].isVisible() && this.cardArr[i][j].getBoundingBoxToWorld().contains(touchPoint)) {
          GameTools.playSimpleAudioEngine(0);

          if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuDestroyCard) {
            this.cardArr[i][j].setVisible(false);
            this.cardVanishAni(0);
            GameData.setGamePropNumber(0, -1);
            GameConfig.GameScene.setGamePropNumber(0);
            GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            return;
          } else if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuExchangeCard) {
            if (this.firstClickNum[0] == -1) {
              this.firstClickNum[0] = i;
              this.firstClickNum[1] = j;

              if (i > 0 && this.cardArr[i - 1][j].isVisible()) {
                this.cardArr[i - 1][j].CardClickShow(1);
              }

              if (i < GameConfig.CAED_LINES - 1 && this.cardArr[i + 1][j].isVisible()) {
                this.cardArr[i + 1][j].CardClickShow(1);
              }

              if (j > 0 && this.cardArr[i][j - 1].isVisible()) {
                this.cardArr[i][j - 1].CardClickShow(1);
              }

              if (j < GameConfig.CAED_LINES - 1 && this.cardArr[i][j + 1].isVisible()) {
                this.cardArr[i][j + 1].CardClickShow(1);
              } //AnimLayerTool.createExchangeCardAnim(this.cardArr[i][j], i, j);

            } else {
              if (Math.abs(i - this.firstClickNum[0]) == 1 && j - this.firstClickNum[1] == 0 || i - this.firstClickNum[0] == 0 && Math.abs(j - this.firstClickNum[1]) == 1) {
                this.cancelSelect();
                AnimLayerTool.createMoveAnim(this.cardArr[i][j], this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]], true);
                AnimLayerTool.createMoveAnim(this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]], this.cardArr[i][j], true);
                var num = this.cardArr[i][j].getNumber();
                this.cardArr[i][j].setNumber(this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]].getNumber());
                this.cardArr[this.firstClickNum[0]][this.firstClickNum[1]].setNumber(num);
                this.firstClickNum[0] = -1;
                this.firstClickNum[1] = -1;
                GameData.setGamePropNumber(2, -1);
                GameConfig.GameScene.setGamePropNumber(2);
                this.cardVanishAni(0); //检测
              } else {
                this.firstClickNum[0] = -1;
                this.firstClickNum[1] = -1;
                this.cancelSelect();
              }

              GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            }

            return;
          } else if (GameConfig.propsMenu == GameConfig.PropsMenu.PropsMenuRemoveAcross) {
            for (var z = 0; z < GameConfig.CAED_LINES; z++) {
              AnimLayerTool.callFuncPopStarAnim(null, this.cardArr[z][j]);
              this.cardArr[z][j].setVisible(false);
              AnimLayerTool.callFuncPopStarAnim(null, this.cardArr[i][z]);
              this.cardArr[i][z].setVisible(false);
            }

            GameData.setGamePropNumber(1, -1);
            GameConfig.GameScene.setGamePropNumber(1);
            this.cardVanishAni(0);
            GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
            return;
          }
        }
      }
    }

    if (this.firstClickNum[0] != -1) {
      this.cancelSelect();
      this.firstClickNum[0] = -1;
      this.firstClickNum[1] = -1;
    }

    GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
  },
  cardVanishAni: function cardVanishAni(dt) {
    //卡片消失监听动画
    this.doDown();
    this.doLeft();
    this.doCheck(0);
    this.selectAmount = 0;
  },
  cancelSelect: function cancelSelect() {
    //取消选择
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        if (this.cardArr[i][j].getIsSelect()) {
          this.cardArr[i][j].CardClickShow(0);
        }
      }
    }

    this.selectAmount = 0;
  },
  cardVanish: function cardVanish() {
    //卡片消失
    if (this.selectAmount >= 2) {
      var firstCardI, firstCardJ;
      var deTime = 0;

      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          if (this.cardArr[i][j].getIsFirstSelect()) {
            firstCardI = i;
            firstCardJ = j;
          }

          if (this.cardArr[i][j].getIsSelect()) {
            this.cardArr[i][j].CardClickShow(0); //this.cardArr[i][j].setVisible(false);

            AnimLayerTool.createPopStarAnim(this.cardArr[i][j], deTime++ * 0.1); //AnimLayerTool.callFuncPopStarAnim(this.cardArr[i][j]);
          }
        }
      }

      this.score = this.score + this.selectAmount * this.selectAmount * 5;
      AnimLayerTool.createScoreMoveAnim(this.cardArr[firstCardI][firstCardJ], this.selectAmount * this.selectAmount * 5, false); //加分动画

      AnimLayerTool.createShowMessageBoxAward(this.getParent(), this.selectAmount); //展示奖励对话框

      var scoreNum = GameData.setGameRewards(this.selectNumber); //获取奖励

      AnimLayerTool.createScoreMoveAnim(this.cardArr[firstCardI][firstCardJ], scoreNum, true);
      GameUiTools.scheduleOnce(this, this.cardVanishAni, deTime * 0.1); //this.cardVanishAni(0);
    } else {
      this.cancelSelect();
    }

    return false;
  },
  //选择点中卡片
  inspectionSelect: function inspectionSelect(i, j) {
    this.cardArr[i][j].CardClickShow(2);
    this.selectAmount++;
    this.selectNumber = this.cardArr[i][j].getNumber();

    if (i >= 1 && this.cardArr[i - 1][j].isVisible() && !this.cardArr[i - 1][j].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i - 1][j].getNumber()) {
        this.inspectionSelect(i - 1, j);
      }
    }

    if (j < GameConfig.CAED_LINES - 1 && this.cardArr[i][j + 1].isVisible() && !this.cardArr[i][j + 1].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i][j + 1].getNumber()) {
        this.inspectionSelect(i, j + 1);
      }
    }

    if (i < GameConfig.CAED_LINES - 1 && this.cardArr[i + 1][j].isVisible() && !this.cardArr[i + 1][j].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i + 1][j].getNumber()) {
        this.inspectionSelect(i + 1, j);
      }
    }

    if (j >= 1 && this.cardArr[i][j - 1].isVisible() && !this.cardArr[i][j - 1].getIsSelect()) {
      if (this.selectNumber == this.cardArr[i][j - 1].getNumber()) {
        this.inspectionSelect(i, j - 1);
      }
    }
  },
  doDown: function doDown() {
    var isdo = false;

    for (var x = 0; x < GameConfig.CAED_LINES; x++) {
      for (var y = 0; y < GameConfig.CAED_LINES; y++) {
        for (var y1 = y + 1; y1 < GameConfig.CAED_LINES; y1++) {
          if (this.cardArr[x][y1].isVisible()) {
            if (!this.cardArr[x][y].isVisible()) {
              AnimLayerTool.createMoveAnim(this.cardArr[x][y1], this.cardArr[x][y], false);
              this.cardArr[x][y].setNumber(this.cardArr[x][y1].getNumber());
              this.cardArr[x][y].setVisible(true);
              this.cardArr[x][y1].setVisible(false);
              this.cardArr[x][y1].CardShow();
              y--;
              isdo = true;
            }

            break;
          }
        }
      }
    }

    return isdo;
  },
  doLeft: function doLeft() {
    var isdo = false;

    for (var x = 0; x < GameConfig.CAED_LINES; x++) {
      for (var x1 = x + 1; x1 < GameConfig.CAED_LINES; x1++) {
        if (this.cardArr[x1][0].isVisible()) {
          if (!this.cardArr[x][0].isVisible()) {
            for (var y = 0; y < GameConfig.CAED_LINES; y++) {
              if (this.cardArr[x1][y].isVisible()) {
                AnimLayerTool.createMoveAnim(this.cardArr[x1][y], this.cardArr[x][y], false);
              }

              this.cardArr[x][y].setNumber(this.cardArr[x1][y].getNumber());
              this.cardArr[x][y].setVisible(this.cardArr[x1][y].isVisible());
              this.cardArr[x1][y].setVisible(false);
              this.cardArr[x1][y].CardShow();
            }

            x--;
            isdo = true;
          }

          break;
        }
      }
    }

    return isdo;
  },
  //根据屏幕大小创建卡片
  createCardSprite: function createCardSprite() {
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        var card = CardSprite.createCardSprite(this.randomCreateCardNumber(), GameConfig.CARD_WIDTH * i + GameConfig.DEVICE_WIDTH / 20.0 + GameConfig.CARD_WIDTH / 2.0, GameConfig.CARD_WIDTH * j + GameConfig.DEVICE_HEIGHT / 8.0);
        this.cardArr[i][j] = card; // this.addChild(card, i, j);
        //版本调整

        this.addChild(card);
      }
    }
  },
  //随机产生数字
  randomCreateCardNumber: function randomCreateCardNumber() {
    // let num = cc.random0To1() * 5;
    var num = Math.random() * 5;
    var returnNum = Math.pow(2, Math.floor(num) + 1);
    return returnNum;
  },
  //自动生成卡片
  autoCreateCardNumber: function autoCreateCardNumber(dt) {
    // this.removeChildByTag(TAG_passSprit);
    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        this.cardArr[i][j].setVisible(true);
        this.cardArr[i][j].setNumber(this.randomCreateCardNumber());
        this.cardArr[i][j].CardShow();
        AnimLayerTool.moveButtonAnim(this.cardArr[i][j], true, AnimLayerTool.MoveButtonAnimType.up);
      }
    }

    GameData.setGamePassNum(GameData.getGamePassNum() + 1);
    GameConfig.GameScene.setPassNum();
    GameConfig.GameScene.progressBar.scaleX = 0;
    GameUiTools.scheduleOnce(this, this.doCheck, 0.15);
  },
  setScore: function setScore() {
    GameConfig.GameScene.setScore(this.score);
  },
  doCheck: function doCheck(dt) {
    this.saveMemoryInformation(); //保存临时信息
    //this.setScore(score);

    var isGameOver = true;
    var isPassGame = true;

    for (var y = 0; y < GameConfig.CAED_LINES; y++) {
      for (var x = 0; x < GameConfig.CAED_LINES; x++) {
        if (this.cardArr[x][y].isVisible()) {
          if (x < GameConfig.CAED_LINES - 1 && this.cardArr[x + 1][y].isVisible() && this.cardArr[x + 1][y].getNumber() == this.cardArr[x][y].getNumber()) {
            isPassGame = false;
            break;
          }

          if (y < GameConfig.CAED_LINES - 1 && this.cardArr[x][y + 1].isVisible() && this.cardArr[x][y + 1].getNumber() == this.cardArr[x][y].getNumber()) {
            isPassGame = false;
            break;
          }
        } else {
          isGameOver = false;
        }
      }
    }

    if (isPassGame) {
      var deTime = 0;

      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          if (this.cardArr[i][j].isVisible()) {
            if (deTime < 5) {
              AnimLayerTool.createPopStarAnim(this.cardArr[i][j], ++deTime * 0.5);
            } else {
              AnimLayerTool.createPopStarAnim(this.cardArr[i][j], deTime * 0.5);
            }
          }
        }
      }

      if (deTime < 5) {
        this.score = this.score + (5 - deTime) * (5 - deTime) * 5;
        AnimLayerTool.createScoreMoveAnim(this.cardArr[2][2], (5 - deTime) * (5 - deTime) * 5, false); //加分动画
      }

      if (this.score < GameData.getGamePassScore()) {
        GameUiTools.scheduleOnce(this, this.gameOver, 1 + deTime * 0.5);
      } else {
        AnimLayerTool.createShowMessageBoxAward(this.getParent(), -1); // GameUiTools.scheduleOnce(this, this.autoCreateCardNumber, 1 + deTime * 0.5);

        GameUiTools.scheduleOnce(this, this.gamePass, 1 + deTime * 0.5);
      }
    }
  },
  gamePass: function gamePass() {
    GameUiTools.loadingLayer("panel/GamePass");
  },
  gameOver: function gameOver(dt) //游戏结束
  {
    GameConfig.IS_GAME_OVER = true;
    GameUiTools.loadingLayer("panel/GameOver"); // cc.loader.loadRes("panel/GameOver", (err, prefab) => {
    //     let node = cc.instantiate(prefab);
    //     GameConfig.GameScene.node.addChild(node);
    // });
  },

  /**
   *撤销游戏
   */
  backGame: function backGame() {
    if (GameData.scoreNum == 1) {
      for (var i = 0; i < GameConfig.CAED_LINES; i++) {
        for (var j = 0; j < GameConfig.CAED_LINES; j++) {
          this.cardArr[i][j].setNumber(GameData.scoreCard1[i][j]);
          this.cardArr[i][j].CardShow();

          if (GameData.scoreCard3[i][j] == 1) {
            this.cardArr[i][j].setVisible(false);
          } else {
            this.cardArr[i][j].setVisible(true);
          }
        }
      }

      this.score = GameData.score1;
      GameData.scoreNum = 0;
      GameData.score0 = GameData.score1;

      for (var _i3 = 0; _i3 < GameConfig.CAED_LINES; _i3++) {
        for (var _j3 = 0; _j3 < GameConfig.CAED_LINES; _j3++) {
          GameData.scoreCard2[_i3][_j3] = GameData.scoreCard3[_i3][_j3];
          GameData.scoreCard0[_i3][_j3] = GameData.scoreCard1[_i3][_j3];
        }
      }

      this.setScore();
    } else {
      GameTools.toastMessage(4);
    }
  },
  saveMemoryInformation: function saveMemoryInformation() {
    if (GameData.scoreNum == 0) {
      GameData.scoreNum = 1;
    }

    GameData.score1 = GameData.score0;
    GameData.score0 = this.score;

    for (var i = 0; i < GameConfig.CAED_LINES; i++) {
      for (var j = 0; j < GameConfig.CAED_LINES; j++) {
        GameData.scoreCard3[i][j] = GameData.scoreCard2[i][j];
        GameData.scoreCard2[i][j] = this.cardArr[i][j].isVisible() ? 0 : 1;
        GameData.scoreCard1[i][j] = GameData.scoreCard0[i][j];
        GameData.scoreCard0[i][j] = this.cardArr[i][j].getNumber();
        GameData.bestNum = GameData.bestNum > this.cardArr[i][j].getNumber() ? GameData.bestNum : this.cardArr[i][j].getNumber();
      }
    }
  }
});
module.exports = GamePopStar;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lUG9wU3Rhci5qcyJdLCJuYW1lcyI6WyJDYXJkU3ByaXRlIiwicmVxdWlyZSIsIkdhbWVDb25maWciLCJHYW1lRGF0YSIsIkFuaW1MYXllclRvb2wiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIlRBR19jYXJkIiwiR2FtZVBvcFN0YXIiLCJjYyIsIkNsYXNzIiwiTm9kZSIsInByb3BlcnRpZXMiLCJmaXJzdFgiLCJmaXJzdFkiLCJlbmRYIiwiZW5kWSIsInNlbGVjdE51bWJlciIsInNlbGVjdEFtb3VudCIsInNjb3JlIiwiY2FyZEFyciIsImZpcnN0Q2xpY2tOdW0iLCJBcnJheSIsImN0b3IiLCJ4IiwiREVWSUNFX1dJRFRIIiwieSIsIkRFVklDRV9IRUlHSFQiLCJzZXRDb250ZW50U2l6ZSIsImluaXQiLCJpIiwiQ0FFRF9MSU5FUyIsImluaXRVSSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoQmVnYW4iLCJjcmVhdGVDYXJkU3ByaXRlIiwiaXNIYXZlR2FtZURhdGEiLCJzY29yZTAiLCJqIiwibnVtYmVyIiwic2NvcmVDYXJkMCIsIkNhcmRTaG93Iiwic2NvcmVDYXJkMiIsInNldFZpc2libGUiLCJtb3ZlQnV0dG9uQW5pbSIsIk1vdmVCdXR0b25BbmltVHlwZSIsInVwIiwic2NvcmUxIiwic2NvcmVOdW0iLCJzY29yZUNhcmQzIiwic2NvcmVDYXJkMSIsImV2ZW50IiwidG91Y2hQb2ludCIsInRvdWNoIiwiZ2V0TG9jYXRpb24iLCJzZWxmIiwiZ2V0Q3VycmVudFRhcmdldCIsInByb3BzTWVudSIsIlByb3BzTWVudSIsIlByb3BzTWVudVNwYWNlIiwiR2FtZVBvcFN0YXJQcm9wZXJ0eSIsImlzVmlzaWJsZSIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsImNvbnRhaW5zIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiQ2FyZENsaWNrU2hvdyIsImluc3BlY3Rpb25TZWxlY3QiLCJjYXJkVmFuaXNoIiwiY29uc29sZSIsImxvZyIsIlByb3BzTWVudURlc3Ryb3lDYXJkIiwiY2FyZFZhbmlzaEFuaSIsInNldEdhbWVQcm9wTnVtYmVyIiwiR2FtZVNjZW5lIiwiUHJvcHNNZW51RXhjaGFuZ2VDYXJkIiwiTWF0aCIsImFicyIsImNhbmNlbFNlbGVjdCIsImNyZWF0ZU1vdmVBbmltIiwibnVtIiwiZ2V0TnVtYmVyIiwic2V0TnVtYmVyIiwiUHJvcHNNZW51UmVtb3ZlQWNyb3NzIiwieiIsImNhbGxGdW5jUG9wU3RhckFuaW0iLCJkdCIsImRvRG93biIsImRvTGVmdCIsImRvQ2hlY2siLCJnZXRJc1NlbGVjdCIsImZpcnN0Q2FyZEkiLCJmaXJzdENhcmRKIiwiZGVUaW1lIiwiZ2V0SXNGaXJzdFNlbGVjdCIsImNyZWF0ZVBvcFN0YXJBbmltIiwiY3JlYXRlU2NvcmVNb3ZlQW5pbSIsImNyZWF0ZVNob3dNZXNzYWdlQm94QXdhcmQiLCJnZXRQYXJlbnQiLCJzZXRHYW1lUmV3YXJkcyIsInNjaGVkdWxlT25jZSIsImlzZG8iLCJ5MSIsIngxIiwiY2FyZCIsInJhbmRvbUNyZWF0ZUNhcmROdW1iZXIiLCJDQVJEX1dJRFRIIiwiYWRkQ2hpbGQiLCJyYW5kb20iLCJyZXR1cm5OdW0iLCJwb3ciLCJmbG9vciIsImF1dG9DcmVhdGVDYXJkTnVtYmVyIiwic2V0R2FtZVBhc3NOdW0iLCJnZXRHYW1lUGFzc051bSIsInNldFBhc3NOdW0iLCJwcm9ncmVzc0JhciIsInNjYWxlWCIsInNldFNjb3JlIiwic2F2ZU1lbW9yeUluZm9ybWF0aW9uIiwiaXNHYW1lT3ZlciIsImlzUGFzc0dhbWUiLCJnZXRHYW1lUGFzc1Njb3JlIiwiZ2FtZU92ZXIiLCJnYW1lUGFzcyIsImxvYWRpbmdMYXllciIsIklTX0dBTUVfT1ZFUiIsImJhY2tHYW1lIiwidG9hc3RNZXNzYWdlIiwiYmVzdE51bSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxP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LENBQUMsRUFBNUMsRUFBZ0Q7UUFDNUNyQyxRQUFRLENBQUNnRCxVQUFULENBQW9CckIsQ0FBcEIsRUFBdUJVLENBQXZCLElBQTRCckMsUUFBUSxDQUFDeUMsVUFBVCxDQUFvQmQsQ0FBcEIsRUFBdUJVLENBQXZCLENBQTVCO1FBQ0FyQyxRQUFRLENBQUN5QyxVQUFULENBQW9CZCxDQUFwQixFQUF1QlUsQ0FBdkIsSUFBNkIsS0FBS3BCLE9BQUwsQ0FBYVUsQ0FBYixFQUFnQlUsQ0FBaEIsRUFBbUJ1QixTQUFuQixLQUFpQyxDQUFqQyxHQUFxQyxDQUFsRTtRQUNBNUQsUUFBUSxDQUFDaUQsVUFBVCxDQUFvQnRCLENBQXBCLEVBQXVCVSxDQUF2QixJQUE0QnJDLFFBQVEsQ0FBQ3VDLFVBQVQsQ0FBb0JaLENBQXBCLEVBQXVCVSxDQUF2QixDQUE1QjtRQUNBckMsUUFBUSxDQUFDdUMsVUFBVCxDQUFvQlosQ0FBcEIsRUFBdUJVLENBQXZCLElBQTRCLEtBQUtwQixPQUFMLENBQWFVLENBQWIsRUFBZ0JVLENBQWhCLEVBQW1CMEMsU0FBbkIsRUFBNUI7UUFDQS9FLFFBQVEsQ0FBQytILE9BQVQsR0FBbUIvSCxRQUFRLENBQUMrSCxPQUFULEdBQW1CLEtBQUs5RyxPQUFMLENBQWFVLENBQWIsRUFBZ0JVLENBQWhCLEVBQW1CMEMsU0FBbkIsRUFBbkIsR0FBb0QvRSxRQUFRLENBQUMrSCxPQUE3RCxHQUF1RSxLQUFLOUcsT0FBTCxDQUFhVSxDQUFiLEVBQWdCVSxDQUFoQixFQUFtQjBDLFNBQW5CLEVBQTFGO01BQ0g7SUFDSjtFQUNKO0FBL2JzQixDQUFULENBQWxCO0FBa2NBaUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUgsV0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDYXJkU3ByaXRlID0gcmVxdWlyZShcIkNhcmRTcHJpdGVcIik7XG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xudmFyIEFuaW1MYXllclRvb2wgPSByZXF1aXJlKFwiQW5pbUxheWVyVG9vbFwiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xuY29uc3QgVEFHX2NhcmQgPSAxMDA2O1xudmFyIEdhbWVQb3BTdGFyID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLk5vZGUsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBmaXJzdFg6IG51bGwsLy/ngrnlh7vlhYPntKBcbiAgICAgICAgZmlyc3RZOiBudWxsLC8v54K55Ye75YWD57SgXG4gICAgICAgIGVuZFg6IG51bGwsXG4gICAgICAgIGVuZFk6IG51bGwsXG4gICAgICAgIHNlbGVjdE51bWJlcjogMCwvL+mAieS4reaVsOWtl1xuICAgICAgICBzZWxlY3RBbW91bnQ6IDAsLy/pgInkuK3ljaHniYfmlbBcbiAgICAgICAgc2NvcmU6IDAsLy/liIbmlbAsXG4gICAgICAgIGNhcmRBcnI6IG51bGwsLy8g5YKo5a2Y5Y2h54mH57G7XG4gICAgICAgIGZpcnN0Q2xpY2tOdW06IG5ldyBBcnJheSgpLC8v6K6w5b2V5Lqk5o2i5L2N572uXG4gICAgfSxcbiAgICBjdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMueCA9IC1HYW1lQ29uZmlnLkRFVklDRV9XSURUSCAvIDI7XG4gICAgICAgIHRoaXMueSA9IC1HYW1lQ29uZmlnLkRFVklDRV9IRUlHSFQgLyAyO1xuICAgICAgICB0aGlzLnNldENvbnRlbnRTaXplKEdhbWVDb25maWcuREVWSUNFX1dJRFRIICogNCwgR2FtZUNvbmZpZy5ERVZJQ0VfSEVJR0hUICogNCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhcmRBcnIgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldID0gQXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMF0gPSAtMTtcbiAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzFdID0gLTE7XG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgfSxcbiAgICBpbml0VUkoKSB7XG4gICAgICAgIC8v6K6+572u6Kem5pG45LqL5Lu255uR5ZCsXG4gICAgICAgIHRoaXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaEJlZ2FuLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmNyZWF0ZUNhcmRTcHJpdGUoKTsgLy/liJvlu7o0WDTljaHniYdcbiAgICAgICAgaWYgKEdhbWVEYXRhLmlzSGF2ZUdhbWVEYXRhKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSBHYW1lRGF0YS5zY29yZTA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0ubnVtYmVyID0gR2FtZURhdGEuc2NvcmVDYXJkMFtpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLkNhcmRTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lRGF0YS5zY29yZUNhcmQyW2ldW2pdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wubW92ZUJ1dHRvbkFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCB0cnVlLCBBbmltTGF5ZXJUb29sLk1vdmVCdXR0b25BbmltVHlwZS51cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2FtZURhdGEuc2NvcmUwID0gMDtcbiAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlMSA9IDA7XG4gICAgICAgICAgICBHYW1lRGF0YS5zY29yZU51bSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDNbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zY29yZUNhcmQyW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMVtpXVtqXSA9IHRoaXMuY2FyZEFycltpXVtqXS5udW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDBbaV1bal0gPSB0aGlzLmNhcmRBcnJbaV1bal0ubnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Ub3VjaEJlZ2FuKGV2ZW50KSB7XG4gICAgICAgIC8v6I635Y+W6Kem5pG455qEWOi9tOWSjFnovbRcbiAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpOyAvL+iOt+WPlk9wZW5HTOWdkOagh++8iOWNs2NvY29zMmQteOWdkOagh++8jOWOn+eCueWcqOW3puS4i+inku+8iVxuICAgICAgICBsZXQgc2VsZiA9IGV2ZW50LmdldEN1cnJlbnRUYXJnZXQoKTtcbiAgICAgICAgaWYgKEdhbWVDb25maWcucHJvcHNNZW51ICE9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlKSB7XG4gICAgICAgICAgICBzZWxmLkdhbWVQb3BTdGFyUHJvcGVydHkodG91Y2hQb2ludCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7IC8v56Kw5pKe5qOA5rWLXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RBbW91bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY2FyZEFycltpXVtqXS5pc1Zpc2libGUoKSAmJiBzZWxmLmNhcmRBcnJbaV1bal0uZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnModG91Y2hQb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2FyZEFycltpXVtqXS5DYXJkQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zcGVjdGlvblNlbGVjdChpLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmNhcmRWYW5pc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcblxuLy/pgZPlhbfmqKHlvI9cbiAgICBHYW1lUG9wU3RhclByb3BlcnR5KHRvdWNoUG9pbnQpIHtcblx0XHRjb25zb2xlLmxvZyhcInRvdWNoUG9pbnQgOlwiICsgdG91Y2hQb2ludCk7XG4gICAgICAgIC8v56Kw5pKe5qOA5rWLXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmlzVmlzaWJsZSgpICYmIHRoaXMuY2FyZEFycltpXVtqXS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0b3VjaFBvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5wcm9wc01lbnUgPT0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51RGVzdHJveUNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZFZhbmlzaEFuaSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5wcm9wc01lbnUgPSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVTcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChHYW1lQ29uZmlnLnByb3BzTWVudSA9PSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVFeGNoYW5nZUNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0Q2xpY2tOdW1bMF0gPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVsxXSA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIHRoaXMuY2FyZEFycltpIC0gMV1bal0uaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2kgLSAxXVtqXS5DYXJkQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEgJiYgdGhpcy5jYXJkQXJyW2kgKyAxXVtqXS5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaSArIDFdW2pdLkNhcmRDbGlja1Nob3coMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID4gMCAmJiB0aGlzLmNhcmRBcnJbaV1baiAtIDFdLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqIC0gMV0uQ2FyZENsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxICYmIHRoaXMuY2FyZEFycltpXVtqICsgMV0uaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2ogKyAxXS5DYXJkQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0FuaW1MYXllclRvb2wuY3JlYXRlRXhjaGFuZ2VDYXJkQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChNYXRoLmFicyhpIC0gdGhpcy5maXJzdENsaWNrTnVtWzBdKSA9PSAxKSAmJiAoKGogLSB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0pID09IDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAoKChpIC0gdGhpcy5maXJzdENsaWNrTnVtWzBdKSA9PSAwKSAmJiAoTWF0aC5hYnMoaiAtIHRoaXMuZmlyc3RDbGlja051bVsxXSkgPT0gMSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsU2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlTW92ZUFuaW0odGhpcy5jYXJkQXJyW2ldW2pdLCB0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbdGhpcy5maXJzdENsaWNrTnVtWzBdXVt0aGlzLmZpcnN0Q2xpY2tOdW1bMV1dLCB0aGlzLmNhcmRBcnJbaV1bal0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtID0gdGhpcy5jYXJkQXJyW2ldW2pdLmdldE51bWJlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0TnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3RoaXMuZmlyc3RDbGlja051bVswXV1bdGhpcy5maXJzdENsaWNrTnVtWzFdXS5nZXROdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt0aGlzLmZpcnN0Q2xpY2tOdW1bMF1dW3RoaXMuZmlyc3RDbGlja051bVsxXV0uc2V0TnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RDbGlja051bVsxXSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRHYW1lUHJvcE51bWJlcigyLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRWYW5pc2hBbmkoMCk7IC8v5qOA5rWLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMF0gPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzFdID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsU2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoR2FtZUNvbmZpZy5wcm9wc01lbnUgPT0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51UmVtb3ZlQWNyb3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jYWxsRnVuY1BvcFN0YXJBbmltKG51bGwsIHRoaXMuY2FyZEFyclt6XVtqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3pdW2pdLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY2FsbEZ1bmNQb3BTdGFyQW5pbShudWxsLCB0aGlzLmNhcmRBcnJbaV1bel0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVt6XS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNldEdhbWVQcm9wTnVtYmVyKDEsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVNjZW5lLnNldEdhbWVQcm9wTnVtYmVyKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkVmFuaXNoQW5pKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5wcm9wc01lbnUgPSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVTcGFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maXJzdENsaWNrTnVtWzBdICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbFNlbGVjdCgpO1xuICAgICAgICAgICAgdGhpcy5maXJzdENsaWNrTnVtWzBdID0gLTE7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2xpY2tOdW1bMV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xuICAgIH0sXG5cbiAgICBjYXJkVmFuaXNoQW5pKGR0KSB7Ly/ljaHniYfmtojlpLHnm5HlkKzliqjnlLtcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcbiAgICAgICAgdGhpcy5kb0xlZnQoKTtcbiAgICAgICAgdGhpcy5kb0NoZWNrKDApO1xuICAgICAgICB0aGlzLnNlbGVjdEFtb3VudCA9IDA7XG4gICAgfSxcblxuICAgIGNhbmNlbFNlbGVjdCgpIHsvL+WPlua2iOmAieaLqVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFycltpXVtqXS5nZXRJc1NlbGVjdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5DYXJkQ2xpY2tTaG93KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdEFtb3VudCA9IDA7XG4gICAgfSxcblxuICAgIGNhcmRWYW5pc2goKSB7Ly/ljaHniYfmtojlpLFcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QW1vdW50ID49IDIpIHtcbiAgICAgICAgICAgIGxldCBmaXJzdENhcmRJLCBmaXJzdENhcmRKO1xuICAgICAgICAgICAgbGV0IGRlVGltZSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmdldElzRmlyc3RTZWxlY3QoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RDYXJkSSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdENhcmRKID0gajtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW2ldW2pdLmdldElzU2VsZWN0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFycltpXVtqXS5DYXJkQ2xpY2tTaG93KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmNhcmRBcnJbaV1bal0uc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZVBvcFN0YXJBbmltKHRoaXMuY2FyZEFycltpXVtqXSwgKGRlVGltZSsrKSAqIDAuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0FuaW1MYXllclRvb2wuY2FsbEZ1bmNQb3BTdGFyQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gdGhpcy5zY29yZSArIHRoaXMuc2VsZWN0QW1vdW50ICogdGhpcy5zZWxlY3RBbW91bnQgKiA1O1xuICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVTY29yZU1vdmVBbmltKHRoaXMuY2FyZEFycltmaXJzdENhcmRJXVtmaXJzdENhcmRKXSwgdGhpcy5zZWxlY3RBbW91bnQgKiB0aGlzLnNlbGVjdEFtb3VudCAqIDUsIGZhbHNlKTsvL+WKoOWIhuWKqOeUu1xuICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVTaG93TWVzc2FnZUJveEF3YXJkKHRoaXMuZ2V0UGFyZW50KCksIHRoaXMuc2VsZWN0QW1vdW50KTsvL+WxleekuuWlluWKseWvueivneahhlxuXG4gICAgICAgICAgICBsZXQgc2NvcmVOdW0gPSBHYW1lRGF0YS5zZXRHYW1lUmV3YXJkcyh0aGlzLnNlbGVjdE51bWJlcik7IC8v6I635Y+W5aWW5YqxXG4gICAgICAgICAgICBBbmltTGF5ZXJUb29sLmNyZWF0ZVNjb3JlTW92ZUFuaW0odGhpcy5jYXJkQXJyW2ZpcnN0Q2FyZEldW2ZpcnN0Q2FyZEpdLCBzY29yZU51bSwgdHJ1ZSk7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5zY2hlZHVsZU9uY2UodGhpcywgdGhpcy5jYXJkVmFuaXNoQW5pLCBkZVRpbWUgKiAwLjEpO1xuICAgICAgICAgICAgLy90aGlzLmNhcmRWYW5pc2hBbmkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbFNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuLy/pgInmi6nngrnkuK3ljaHniYdcbiAgICBpbnNwZWN0aW9uU2VsZWN0KGksIGopIHtcbiAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLkNhcmRDbGlja1Nob3coMik7XG4gICAgICAgIHRoaXMuc2VsZWN0QW1vdW50Kys7XG4gICAgICAgIHRoaXMuc2VsZWN0TnVtYmVyID0gdGhpcy5jYXJkQXJyW2ldW2pdLmdldE51bWJlcigpO1xuICAgICAgICBpZiAoaSA+PSAxICYmIHRoaXMuY2FyZEFycltpIC0gMV1bal0uaXNWaXNpYmxlKCkgJiYgIXRoaXMuY2FyZEFycltpIC0gMV1bal0uZ2V0SXNTZWxlY3QoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TnVtYmVyID09IHRoaXMuY2FyZEFycltpIC0gMV1bal0uZ2V0TnVtYmVyKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3Rpb25TZWxlY3QoaSAtIDEsIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSAmJiB0aGlzLmNhcmRBcnJbaV1baiArIDFdLmlzVmlzaWJsZSgpXG4gICAgICAgICAgICAmJiAhdGhpcy5jYXJkQXJyW2ldW2ogKyAxXS5nZXRJc1NlbGVjdCgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3ROdW1iZXIgPT0gdGhpcy5jYXJkQXJyW2ldW2ogKyAxXS5nZXROdW1iZXIoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdGlvblNlbGVjdChpLCBqICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxICYmIHRoaXMuY2FyZEFycltpICsgMV1bal0uaXNWaXNpYmxlKClcbiAgICAgICAgICAgICYmICF0aGlzLmNhcmRBcnJbaSArIDFdW2pdLmdldElzU2VsZWN0KCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE51bWJlciA9PSB0aGlzLmNhcmRBcnJbaSArIDFdW2pdLmdldE51bWJlcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0aW9uU2VsZWN0KGkgKyAxLCBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaiA+PSAxICYmIHRoaXMuY2FyZEFycltpXVtqIC0gMV0uaXNWaXNpYmxlKClcbiAgICAgICAgICAgICYmICF0aGlzLmNhcmRBcnJbaV1baiAtIDFdLmdldElzU2VsZWN0KCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdE51bWJlciA9PSB0aGlzLmNhcmRBcnJbaV1baiAtIDFdLmdldE51bWJlcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0aW9uU2VsZWN0KGksIGogLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZG9Eb3duKCkge1xuICAgICAgICBsZXQgaXNkbyA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeTEgPSB5ICsgMTsgeTEgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IHkxKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFyclt4XVt5MV0uaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYXJkQXJyW3hdW3ldLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbeF1beTFdLCB0aGlzLmNhcmRBcnJbeF1beV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beV0uc2V0TnVtYmVyKHRoaXMuY2FyZEFyclt4XVt5MV0uZ2V0TnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4XVt5XS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4XVt5MV0uc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3hdW3kxXS5DYXJkU2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHktLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc2RvID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc2RvO1xuICAgIH0sXG4gICAgZG9MZWZ0KCkge1xuICAgICAgICBsZXQgaXNkbyA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4MSA9IHggKyAxOyB4MSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeDErKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmRBcnJbeDFdWzBdLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYXJkQXJyW3hdWzBdLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgeSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZEFyclt4MV1beV0uaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbeDFdW3ldLCB0aGlzLmNhcmRBcnJbeF1beV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW3hdW3ldLnNldE51bWJlcih0aGlzLmNhcmRBcnJbeDFdW3ldLmdldE51bWJlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeF1beV0uc2V0VmlzaWJsZSh0aGlzLmNhcmRBcnJbeDFdW3ldLmlzVmlzaWJsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbeDFdW3ldLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEFyclt4MV1beV0uQ2FyZFNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzZG8gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNkbztcbiAgICB9LFxuICAgIC8v5qC55o2u5bGP5bmV5aSn5bCP5Yib5bu65Y2h54mHXG4gICAgY3JlYXRlQ2FyZFNwcml0ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjYXJkID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKHRoaXMucmFuZG9tQ3JlYXRlQ2FyZE51bWJlcigpLFxuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkNBUkRfV0lEVEggKiBpICsgR2FtZUNvbmZpZy5ERVZJQ0VfV0lEVEggLyAyMC4wICsgR2FtZUNvbmZpZy5DQVJEX1dJRFRIIC8gMi4wLFxuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkNBUkRfV0lEVEggKiBqICsgR2FtZUNvbmZpZy5ERVZJQ0VfSEVJR0hUIC8gOC4wKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0gPSBjYXJkO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQoY2FyZCwgaSwgaik7XG4gICAgICAgICAgICAgICAgLy/niYjmnKzosIPmlbRcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKGNhcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+maj+acuuS6p+eUn+aVsOWtl1xuICAgIHJhbmRvbUNyZWF0ZUNhcmROdW1iZXIoKSB7XG4gICAgICAgIC8vIGxldCBudW0gPSBjYy5yYW5kb20wVG8xKCkgKiA1O1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIDU7XG4gICAgICAgIGxldCByZXR1cm5OdW0gPSBNYXRoLnBvdygyLCAoTWF0aC5mbG9vcihudW0pICsgMSkpO1xuICAgICAgICByZXR1cm4gcmV0dXJuTnVtO1xuICAgIH0sXG4gICAgLy/oh6rliqjnlJ/miJDljaHniYdcbiAgICBhdXRvQ3JlYXRlQ2FyZE51bWJlcihkdCkge1xuICAgICAgICAvLyB0aGlzLnJlbW92ZUNoaWxkQnlUYWcoVEFHX3Bhc3NTcHJpdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0TnVtYmVyKHRoaXMucmFuZG9tQ3JlYXRlQ2FyZE51bWJlcigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZFNob3coKTtcbiAgICAgICAgICAgICAgICBBbmltTGF5ZXJUb29sLm1vdmVCdXR0b25BbmltKHRoaXMuY2FyZEFycltpXVtqXSwgdHJ1ZSwgQW5pbUxheWVyVG9vbC5Nb3ZlQnV0dG9uQW5pbVR5cGUudXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEdhbWVEYXRhLnNldEdhbWVQYXNzTnVtKEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCkgKyAxKTtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUuc2V0UGFzc051bSgpO1xuICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5wcm9ncmVzc0Jhci5zY2FsZVggPSAwO1xuICAgICAgICBHYW1lVWlUb29scy5zY2hlZHVsZU9uY2UodGhpcywgdGhpcy5kb0NoZWNrLCAwLjE1KTtcbiAgICB9LFxuICAgIHNldFNjb3JlKCkge1xuICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRTY29yZSh0aGlzLnNjb3JlKTtcbiAgICB9LFxuICAgIGRvQ2hlY2soZHQpIHtcbiAgICAgICAgdGhpcy5zYXZlTWVtb3J5SW5mb3JtYXRpb24oKTsgLy/kv53lrZjkuLTml7bkv6Hmga9cbiAgICAgICAgLy90aGlzLnNldFNjb3JlKHNjb3JlKTtcbiAgICAgICAgbGV0IGlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICBsZXQgaXNQYXNzR2FtZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyB4KyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQXJyW3hdW3ldLmlzVmlzaWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSAmJiB0aGlzLmNhcmRBcnJbeCArIDFdW3ldLmlzVmlzaWJsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5jYXJkQXJyW3ggKyAxXVt5XS5nZXROdW1iZXIoKSA9PSB0aGlzLmNhcmRBcnJbeF1beV0uZ2V0TnVtYmVyKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Bhc3NHYW1lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEgJiYgdGhpcy5jYXJkQXJyW3hdW3kgKyAxXS5pc1Zpc2libGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMuY2FyZEFyclt4XVt5ICsgMV0uZ2V0TnVtYmVyKCkgPT0gdGhpcy5jYXJkQXJyW3hdW3ldLmdldE51bWJlcigpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNQYXNzR2FtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Bhc3NHYW1lKSB7XG4gICAgICAgICAgICBsZXQgZGVUaW1lID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmRBcnJbaV1bal0uaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZVRpbWUgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVQb3BTdGFyQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sICgrK2RlVGltZSkgKiAwLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbUxheWVyVG9vbC5jcmVhdGVQb3BTdGFyQW5pbSh0aGlzLmNhcmRBcnJbaV1bal0sIGRlVGltZSAqIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZVRpbWUgPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMuc2NvcmUgKyAoNSAtIGRlVGltZSkgKiAoNSAtIGRlVGltZSkgKiA1O1xuICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlU2NvcmVNb3ZlQW5pbSh0aGlzLmNhcmRBcnJbMl1bMl0sICg1IC0gZGVUaW1lKSAqICg1IC0gZGVUaW1lKSAqIDUsIGZhbHNlKTsvL+WKoOWIhuWKqOeUu1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPCBHYW1lRGF0YS5nZXRHYW1lUGFzc1Njb3JlKCkpIHtcbiAgICAgICAgICAgICAgICBHYW1lVWlUb29scy5zY2hlZHVsZU9uY2UodGhpcywgdGhpcy5nYW1lT3ZlciwgMSArIGRlVGltZSAqIDAuNSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEFuaW1MYXllclRvb2wuY3JlYXRlU2hvd01lc3NhZ2VCb3hBd2FyZCh0aGlzLmdldFBhcmVudCgpLCAtMSk7XG4gICAgICAgICAgICAgICAgLy8gR2FtZVVpVG9vbHMuc2NoZWR1bGVPbmNlKHRoaXMsIHRoaXMuYXV0b0NyZWF0ZUNhcmROdW1iZXIsIDEgKyBkZVRpbWUgKiAwLjUpO1xuICAgICAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNjaGVkdWxlT25jZSh0aGlzLCB0aGlzLmdhbWVQYXNzLCAxICsgZGVUaW1lICogMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnYW1lUGFzcygpIHtcbiAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwicGFuZWwvR2FtZVBhc3NcIik7XG4gICAgfSxcblxuICAgIGdhbWVPdmVyKGR0KS8v5ri45oiP57uT5p2fXG4gICAge1xuICAgICAgICBHYW1lQ29uZmlnLklTX0dBTUVfT1ZFUiA9IHRydWU7XG4gICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcInBhbmVsL0dhbWVPdmVyXCIpO1xuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhcInBhbmVsL0dhbWVPdmVyXCIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAvLyAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUubm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAq5pKk6ZSA5ri45oiPXG4gICAgICovXG4gICAgYmFja0dhbWUoKSB7XG4gICAgICAgIGlmIChHYW1lRGF0YS5zY29yZU51bSA9PSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uc2V0TnVtYmVyKEdhbWVEYXRhLnNjb3JlQ2FyZDFbaV1bal0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRBcnJbaV1bal0uQ2FyZFNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdhbWVEYXRhLnNjb3JlQ2FyZDNbaV1bal0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQXJyW2ldW2pdLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gR2FtZURhdGEuc2NvcmUxO1xuICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVOdW0gPSAwO1xuICAgICAgICAgICAgR2FtZURhdGEuc2NvcmUwID0gR2FtZURhdGEuc2NvcmUxO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVDYXJkMltpXVtqXSA9IEdhbWVEYXRhLnNjb3JlQ2FyZDNbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDBbaV1bal0gPSBHYW1lRGF0YS5zY29yZUNhcmQxW2ldW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U2NvcmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoNCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2F2ZU1lbW9yeUluZm9ybWF0aW9uKCkge1xuICAgICAgICBpZiAoR2FtZURhdGEuc2NvcmVOdW0gPT0gMCkge1xuICAgICAgICAgICAgR2FtZURhdGEuc2NvcmVOdW0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIEdhbWVEYXRhLnNjb3JlMSA9IEdhbWVEYXRhLnNjb3JlMDtcbiAgICAgICAgR2FtZURhdGEuc2NvcmUwID0gdGhpcy5zY29yZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNBRURfTElORVM7IGorKykge1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDNbaV1bal0gPSBHYW1lRGF0YS5zY29yZUNhcmQyW2ldW2pdO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDJbaV1bal0gPSAodGhpcy5jYXJkQXJyW2ldW2pdLmlzVmlzaWJsZSgpID8gMCA6IDEpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDFbaV1bal0gPSBHYW1lRGF0YS5zY29yZUNhcmQwW2ldW2pdO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLnNjb3JlQ2FyZDBbaV1bal0gPSB0aGlzLmNhcmRBcnJbaV1bal0uZ2V0TnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgR2FtZURhdGEuYmVzdE51bSA9IEdhbWVEYXRhLmJlc3ROdW0gPiB0aGlzLmNhcmRBcnJbaV1bal0uZ2V0TnVtYmVyKCkgPyBHYW1lRGF0YS5iZXN0TnVtIDogdGhpcy5jYXJkQXJyW2ldW2pdLmdldE51bWJlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZVBvcFN0YXI7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePropHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14994fnx85J5J1PEYcF4MrT', 'GamePropHelp');
// Script/panel/GamePropHelp.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameData = require("GameData");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    title: cc.Sprite,
    propType: cc.Sprite,
    helpText: cc.Label,
    backButton: cc.Node,
    //返回按钮
    getPropButton: cc.Node //获取按钮

  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.getPropButton, "buttonFunc");
  },
  setPropType: function setPropType(propType) {
    this.propTypeNumber = propType;

    if (propType == 0) {
      GameUiTools.getSpriteFrame("pop_game/popgame_46", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_25", this.propType);
      this.helpText.string = "敲碎你不想要的星星";
    } else if (propType == 1) {
      GameUiTools.getSpriteFrame("pop_game/popgame_38", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_31", this.propType);
      this.helpText.string = "可炸掉选中的横排和竖排的星星";
    } else if (propType == 2) {
      GameUiTools.getSpriteFrame("pop_game/popgame_57", this.title);
      GameUiTools.getSpriteFrame("pop_game/popgame_30", this.propType);
      this.helpText.string = "点击星星，可和周围星星交换";
    }
  },
  buttonFunc: function buttonFunc(event) {
    console.log("  buttonFunc");
    var button = event.target;

    if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.node.destroy();
    } else if (this.getPropButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameTools.sharePicture();
      GameData.setGamePropNumber(this.propTypeNumber, 1);
      GameConfig.GameScene.setGamePropNumber(this.propTypeNumber);
      this.node.destroy();
    }

    return true;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVByb3BIZWxwLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZURhdGEiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0NvbG9yIiwiTm9kZSIsInRpdGxlIiwiU3ByaXRlIiwicHJvcFR5cGUiLCJoZWxwVGV4dCIsIkxhYmVsIiwiYmFja0J1dHRvbiIsImdldFByb3BCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsInNldFByb3BUeXBlIiwicHJvcFR5cGVOdW1iZXIiLCJnZXRTcHJpdGVGcmFtZSIsInN0cmluZyIsImJ1dHRvbkZ1bmMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJidXR0b24iLCJ0YXJnZXQiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJub2RlIiwiZGVzdHJveSIsInNoYXJlUGljdHVyZSIsInNldEdhbWVQcm9wTnVtYmVyIiwiR2FtZVNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBRUFJLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssSUFETjtJQUVSQyxLQUFLLEVBQUVOLEVBQUUsQ0FBQ08sTUFGRjtJQUdSQyxRQUFRLEVBQUVSLEVBQUUsQ0FBQ08sTUFITDtJQUlSRSxRQUFRLEVBQUVULEVBQUUsQ0FBQ1UsS0FKTDtJQUtSQyxVQUFVLEVBQUVYLEVBQUUsQ0FBQ0ssSUFMUDtJQUthO0lBQ3JCTyxhQUFhLEVBQUVaLEVBQUUsQ0FBQ0ssSUFOVixDQU1nQjs7RUFOaEIsQ0FGUDtFQVdMUSxNQVhLLG9CQVdJO0lBQ0xkLFdBQVcsQ0FBQ2Usb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS0gsVUFBNUMsRUFBd0QsWUFBeEQ7SUFDQVosV0FBVyxDQUFDZSxvQkFBWixDQUFpQyxJQUFqQyxFQUF1QyxLQUFLRixhQUE1QyxFQUEyRCxZQUEzRDtFQUNILENBZEk7RUFnQkxHLFdBaEJLLHVCQWdCT1AsUUFoQlAsRUFnQmlCO0lBQ2xCLEtBQUtRLGNBQUwsR0FBc0JSLFFBQXRCOztJQUNBLElBQUlBLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtNQUNmVCxXQUFXLENBQUNrQixjQUFaLENBQTJCLHFCQUEzQixFQUFrRCxLQUFLWCxLQUF2RDtNQUNBUCxXQUFXLENBQUNrQixjQUFaLENBQTJCLHFCQUEzQixFQUFrRCxLQUFLVCxRQUF2RDtNQUNBLEtBQUtDLFFBQUwsQ0FBY1MsTUFBZCxHQUF1QixXQUF2QjtJQUNILENBSkQsTUFJTyxJQUFJVixRQUFRLElBQUksQ0FBaEIsRUFBbUI7TUFDdEJULFdBQVcsQ0FBQ2tCLGNBQVosQ0FBMkIscUJBQTNCLEVBQWtELEtBQUtYLEtBQXZEO01BQ0FQLFdBQVcsQ0FBQ2tCLGNBQVosQ0FBMkIscUJBQTNCLEVBQWtELEtBQUtULFFBQXZEO01BQ0EsS0FBS0MsUUFBTCxDQUFjUyxNQUFkLEdBQXVCLGdCQUF2QjtJQUNILENBSk0sTUFJQSxJQUFJVixRQUFRLElBQUksQ0FBaEIsRUFBbUI7TUFDdkJULFdBQVcsQ0FBQ2tCLGNBQVosQ0FBMkIscUJBQTNCLEVBQWtELEtBQUtYLEtBQXZEO01BQ0NQLFdBQVcsQ0FBQ2tCLGNBQVosQ0FBMkIscUJBQTNCLEVBQWtELEtBQUtULFFBQXZEO01BQ0EsS0FBS0MsUUFBTCxDQUFjUyxNQUFkLEdBQXVCLGVBQXZCO0lBQ0g7RUFDSixDQS9CSTtFQWlDTEMsVUFBVSxFQUFFLG9CQUFVQyxLQUFWLEVBQWlCO0lBQy9CQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0lBQ00sSUFBSUMsTUFBTSxHQUFHSCxLQUFLLENBQUNJLE1BQW5COztJQUNBLElBQUksS0FBS2IsVUFBTCxJQUFtQlksTUFBdkIsRUFBK0I7TUFDM0IxQixTQUFTLENBQUM0QixxQkFBVixDQUFnQyxDQUFoQztNQUNBLEtBQUtDLElBQUwsQ0FBVUMsT0FBVjtJQUNILENBSEQsTUFHTyxJQUFJLEtBQUtmLGFBQUwsSUFBc0JXLE1BQTFCLEVBQWtDO01BQ3JDMUIsU0FBUyxDQUFDNEIscUJBQVYsQ0FBZ0MsQ0FBaEM7TUFDQTVCLFNBQVMsQ0FBQytCLFlBQVY7TUFDQTlCLFFBQVEsQ0FBQytCLGlCQUFULENBQTJCLEtBQUtiLGNBQWhDLEVBQWdELENBQWhEO01BQ0FyQixVQUFVLENBQUNtQyxTQUFYLENBQXFCRCxpQkFBckIsQ0FBdUMsS0FBS2IsY0FBNUM7TUFDQSxLQUFLVSxJQUFMLENBQVVDLE9BQVY7SUFDSDs7SUFDRCxPQUFPLElBQVA7RUFDSDtBQS9DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZURhdGEgPSByZXF1aXJlKFwiR2FtZURhdGFcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBiYWNrQ29sb3I6IGNjLk5vZGUsXG4gICAgICAgIHRpdGxlOiBjYy5TcHJpdGUsXG4gICAgICAgIHByb3BUeXBlOiBjYy5TcHJpdGUsXG4gICAgICAgIGhlbHBUZXh0OiBjYy5MYWJlbCxcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSwgLy/ov5Tlm57mjInpkq5cbiAgICAgICAgZ2V0UHJvcEJ1dHRvbjogY2MuTm9kZSwgLy/ojrflj5bmjInpkq5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJhY2tCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5nZXRQcm9wQnV0dG9uLCBcImJ1dHRvbkZ1bmNcIik7XG4gICAgfSxcblxuICAgIHNldFByb3BUeXBlKHByb3BUeXBlKSB7XG4gICAgICAgIHRoaXMucHJvcFR5cGVOdW1iZXIgPSBwcm9wVHlwZTtcbiAgICAgICAgaWYgKHByb3BUeXBlID09IDApIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV80NlwiLCB0aGlzLnRpdGxlKTtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV8yNVwiLCB0aGlzLnByb3BUeXBlKTtcbiAgICAgICAgICAgIHRoaXMuaGVscFRleHQuc3RyaW5nID0gXCLmlbLnoo7kvaDkuI3mg7PopoHnmoTmmJ/mmJ9cIjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wVHlwZSA9PSAxKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzhcIiwgdGhpcy50aXRsZSk7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzFcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgICAgICB0aGlzLmhlbHBUZXh0LnN0cmluZyA9IFwi5Y+v54K45o6J6YCJ5Lit55qE5qiq5o6S5ZKM56uW5o6S55qE5pif5pifXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcFR5cGUgPT0gMikge1xuICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfNTdcIiwgdGhpcy50aXRsZSk7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzBcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgICAgICB0aGlzLmhlbHBUZXh0LnN0cmluZyA9IFwi54K55Ye75pif5pif77yM5Y+v5ZKM5ZGo5Zu05pif5pif5Lqk5o2iXCI7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0Y29uc29sZS5sb2coXCIgIGJ1dHRvbkZ1bmNcIik7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldFByb3BCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xuICAgICAgICAgICAgR2FtZURhdGEuc2V0R2FtZVByb3BOdW1iZXIodGhpcy5wcm9wVHlwZU51bWJlciwgMSk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVTY2VuZS5zZXRHYW1lUHJvcE51bWJlcih0aGlzLnByb3BUeXBlTnVtYmVyKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoadingScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa66dpbqYROFqRT9GK3/WP2', 'LoadingScene');
// Script/LoadingScene.js

"use strict";

var GameData = require("GameData");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var GameConfig = require("GameConfig");

var AnimLayerTool = require("AnimLayerTool");

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    var _this = this;

    setTimeout(function () {
      _this.loadingResource();
    }, 10);
  },
  loadingResource: function loadingResource() {
    if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneFirst) {
      // GameTools.setGameIntegral(GameTools.getGameIntegral()+1000);
      GameConfig.IS_GAME_MUSIC = GameTools.getItemByLocalStorage("IS_GAME_MUSIC", true);
      this.initFrameCache();
      this.initWxSetting();
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame) {
      GameConfig.IS_GAME_OVER = false;
      GameData.initData();
      GameData.heightScore = GameData.getHeightScore();

      if (GameData.isHaveGameData()) {
        if (GameData.loadGameData(true) || GameData.heightScore < 0 || GameData.heightScore > 1073741824) {
          GameData.setHaveGameData(false);
          GameData.heightScore = 0;
          GameData.setHeightScore(0);
        }
      }
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneBackGame) {
      if (!GameConfig.IS_GAME_OVER) {
        GameData.loadGameData(false);
      } // GameData.destroyInstance();

    }

    if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneFirst) {
      cc.director.preloadScene("MenuUI", function () {
        cc.director.loadScene("MenuUI");
      });
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame) {
      cc.director.preloadScene("GameScene", function () {
        cc.director.loadScene("GameScene");
      });
    } else if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneBackGame) {
      cc.director.preloadScene("MenuUI", function () {
        cc.director.loadScene("MenuUI");
      });
    }
  },
  initFrameCache: function initFrameCache() {
    cc.loader.loadRes("number", cc.LabelAtlas, function (err, atlas) {
      GameTools.numberLabelAtlas = atlas;
    });
  },
  initWxSetting: function initWxSetting() {
    if (CC_WECHATGAME) {
      window.wx.onHide(function () {
        //监听小游戏隐藏到后台事件
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          GameData.loadGameData(false);
          GameTools.stopBackgroundMusic();
        }
      });
      window.wx.onShow(function () {
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          if (GameConfig.IS_GAME_MUSIC) {
            GameTools.playBackgroundMusic();
          }
        }
      });
      window.wx.onAudioInterruptionBegin(function () {
        GameTools.stopBackgroundMusic();
      });
      window.wx.onAudioInterruptionEnd(function () {
        //监听音频中断结束
        if (GameConfig.loadingSceneType == GameConfig.LoadingSceneType.LoadingSceneEnterGame && !GameConfig.IS_GAME_OVER) {
          if (GameConfig.IS_GAME_MUSIC) {
            GameTools.playBackgroundMusic();
          }
        }
      });
      window.wx.showShareMenu({
        withShareTicket: true
      });
      window.wx.onShareAppMessage(function () {
        // 用户点击了“转发”按钮
        return {
          title: '来跟我一起挑战浪漫2048。',
          imageUrl: canvas.toTempFilePathSync({
            destWidth: 500,
            destHeight: 400
          })
        };
      });
      var LaunchOption = wx.getLaunchOptionsSync();

      if (LaunchOption.query != {} && LaunchOption.query.x != undefined) {
        GameConfig.MAIN_MENU_NUM = Number(LaunchOption.query.x);
      }

      var info = window.wx.getSystemInfoSync();
      GameConfig.GameClubButton = window.wx.createGameClubButton({
        icon: 'green',
        style: {
          left: info.windowWidth / 2 + 25,
          top: info.windowHeight * 90 / 100,
          width: 40,
          height: 40
        }
      });
      GameConfig.GameClubButton.hide();
    } else {// GameTools.getRankData("测试群排行");
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2FkaW5nU2NlbmUuanMiXSwibmFtZXMiOlsiR2FtZURhdGEiLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJHYW1lQ29uZmlnIiwiQW5pbUxheWVyVG9vbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwibG9hZGluZ1Jlc291cmNlIiwibG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVGaXJzdCIsIklTX0dBTUVfTVVTSUMiLCJnZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJpbml0RnJhbWVDYWNoZSIsImluaXRXeFNldHRpbmciLCJMb2FkaW5nU2NlbmVFbnRlckdhbWUiLCJJU19HQU1FX09WRVIiLCJpbml0RGF0YSIsImhlaWdodFNjb3JlIiwiZ2V0SGVpZ2h0U2NvcmUiLCJpc0hhdmVHYW1lRGF0YSIsImxvYWRHYW1lRGF0YSIsInNldEhhdmVHYW1lRGF0YSIsInNldEhlaWdodFNjb3JlIiwiTG9hZGluZ1NjZW5lQmFja0dhbWUiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsImxvYWRTY2VuZSIsImxvYWRlciIsImxvYWRSZXMiLCJMYWJlbEF0bGFzIiwiZXJyIiwiYXRsYXMiLCJudW1iZXJMYWJlbEF0bGFzIiwiQ0NfV0VDSEFUR0FNRSIsIndpbmRvdyIsInd4Iiwib25IaWRlIiwic3RvcEJhY2tncm91bmRNdXNpYyIsIm9uU2hvdyIsInBsYXlCYWNrZ3JvdW5kTXVzaWMiLCJvbkF1ZGlvSW50ZXJydXB0aW9uQmVnaW4iLCJvbkF1ZGlvSW50ZXJydXB0aW9uRW5kIiwic2hvd1NoYXJlTWVudSIsIndpdGhTaGFyZVRpY2tldCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJpbWFnZVVybCIsImNhbnZhcyIsInRvVGVtcEZpbGVQYXRoU3luYyIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJMYXVuY2hPcHRpb24iLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsInF1ZXJ5IiwieCIsInVuZGVmaW5lZCIsIk1BSU5fTUVOVV9OVU0iLCJOdW1iZXIiLCJpbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJHYW1lQ2x1YkJ1dHRvbiIsImNyZWF0ZUdhbWVDbHViQnV0dG9uIiwiaWNvbiIsInN0eWxlIiwibGVmdCIsIndpbmRvd1dpZHRoIiwidG9wIiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJoaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBLElBQUlHLFVBQVUsR0FBR0gsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUksYUFBYSxHQUFHSixPQUFPLENBQUMsZUFBRCxDQUEzQjs7QUFDQUssRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFFTEMsVUFBVSxFQUFFLEVBRlA7RUFJTEMsS0FKSyxtQkFJRztJQUFBOztJQUNKQyxVQUFVLENBQUMsWUFBTTtNQUNiLEtBQUksQ0FBQ0MsZUFBTDtJQUNILENBRlMsRUFFUCxFQUZPLENBQVY7RUFHSCxDQVJJO0VBVUxBLGVBVkssNkJBVWE7SUFDZCxJQUFJUixVQUFVLENBQUNTLGdCQUFYLElBQStCVCxVQUFVLENBQUNVLGdCQUFYLENBQTRCQyxpQkFBL0QsRUFBa0Y7TUFDOUU7TUFDQVgsVUFBVSxDQUFDWSxhQUFYLEdBQTJCZCxTQUFTLENBQUNlLHFCQUFWLENBQWdDLGVBQWhDLEVBQWlELElBQWpELENBQTNCO01BQ0EsS0FBS0MsY0FBTDtNQUNBLEtBQUtDLGFBQUw7SUFDSCxDQUxELE1BS08sSUFBSWYsVUFBVSxDQUFDUyxnQkFBWCxJ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RSxLQUFiLENBQW1CQyxDQUFwQixDQUFqQztNQUNIOztNQUNELElBQUlJLElBQUksR0FBR3hCLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVd0IsaUJBQVYsRUFBWDtNQUNBN0QsVUFBVSxDQUFDOEQsY0FBWCxHQUE0QjFCLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVMEIsb0JBQVYsQ0FBK0I7UUFDdkRDLElBQUksRUFBRSxPQURpRDtRQUV2REMsS0FBSyxFQUFFO1VBQ0hDLElBQUksRUFBRU4sSUFBSSxDQUFDTyxXQUFMLEdBQW1CLENBQW5CLEdBQXVCLEVBRDFCO1VBRUhDLEdBQUcsRUFBRVIsSUFBSSxDQUFDUyxZQUFMLEdBQW9CLEVBQXBCLEdBQXlCLEdBRjNCO1VBR0hDLEtBQUssRUFBRSxFQUhKO1VBSUhDLE1BQU0sRUFBRTtRQUpMO01BRmdELENBQS9CLENBQTVCO01BU0F2RSxVQUFVLENBQUM4RCxjQUFYLENBQTBCVSxJQUExQjtJQUNILENBbERELE1Ba0RPLENBQ0g7SUFDSDtFQUNKO0FBN0dJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xudmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBBbmltTGF5ZXJUb29sID0gcmVxdWlyZShcIkFuaW1MYXllclRvb2xcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHt9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nUmVzb3VyY2UoKTtcbiAgICAgICAgfSwgMTApO1xuICAgIH0sXG5cbiAgICBsb2FkaW5nUmVzb3VyY2UoKSB7XG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUZpcnN0KSB7XG4gICAgICAgICAgICAvLyBHYW1lVG9vbHMuc2V0R2FtZUludGVncmFsKEdhbWVUb29scy5nZXRHYW1lSW50ZWdyYWwoKSsxMDAwKTtcbiAgICAgICAgICAgIEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQyA9IEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJJU19HQU1FX01VU0lDXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5pbml0RnJhbWVDYWNoZSgpO1xuICAgICAgICAgICAgdGhpcy5pbml0V3hTZXR0aW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID09IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVFbnRlckdhbWUpIHtcbiAgICAgICAgICAgIEdhbWVDb25maWcuSVNfR0FNRV9PVkVSID0gZmFsc2U7XG4gICAgICAgICAgICBHYW1lRGF0YS5pbml0RGF0YSgpO1xuICAgICAgICAgICAgR2FtZURhdGEuaGVpZ2h0U2NvcmUgPSBHYW1lRGF0YS5nZXRIZWlnaHRTY29yZSgpO1xuICAgICAgICAgICAgaWYgKEdhbWVEYXRhLmlzSGF2ZUdhbWVEYXRhKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGEubG9hZEdhbWVEYXRhKHRydWUpIHx8IEdhbWVEYXRhLmhlaWdodFNjb3JlIDwgMCB8fCBHYW1lRGF0YS5oZWlnaHRTY29yZSA+IDEwNzM3NDE4MjQpIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuc2V0SGF2ZUdhbWVEYXRhKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuaGVpZ2h0U2NvcmUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5zZXRIZWlnaHRTY29yZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID09IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZSkge1xuICAgICAgICAgICAgaWYoIUdhbWVDb25maWcuSVNfR0FNRV9PVkVSKXtcbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5sb2FkR2FtZURhdGEoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gR2FtZURhdGEuZGVzdHJveUluc3RhbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID09IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVGaXJzdCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiTWVudVVJXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNZW51VUlcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZSkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU2NlbmVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUJhY2tHYW1lKSB7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJNZW51VUlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIk1lbnVVSVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpbml0RnJhbWVDYWNoZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIm51bWJlclwiLCBjYy5MYWJlbEF0bGFzLCBmdW5jdGlvbiAoZXJyLCBhdGxhcykge1xuICAgICAgICAgICAgR2FtZVRvb2xzLm51bWJlckxhYmVsQXRsYXMgPSBhdGxhcztcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBpbml0V3hTZXR0aW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICB3aW5kb3cud3gub25IaWRlKGZ1bmN0aW9uICgpIHsvL+ebkeWQrOWwj+a4uOaIj+makOiXj+WIsOWQjuWPsOS6i+S7tlxuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZSAmJiAhR2FtZUNvbmZpZy5JU19HQU1FX09WRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEubG9hZEdhbWVEYXRhKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnN0b3BCYWNrZ3JvdW5kTXVzaWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy53eC5vblNob3coKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChHYW1lQ29uZmlnLmxvYWRpbmdTY2VuZVR5cGUgPT0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZSAmJiAhR2FtZUNvbmZpZy5JU19HQU1FX09WRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQykge1xuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlCYWNrZ3JvdW5kTXVzaWMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93Lnd4Lm9uQXVkaW9JbnRlcnJ1cHRpb25CZWdpbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLnN0b3BCYWNrZ3JvdW5kTXVzaWMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93Lnd4Lm9uQXVkaW9JbnRlcnJ1cHRpb25FbmQoKCkgPT4gey8v55uR5ZCs6Z+z6aKR5Lit5pat57uT5p2fXG4gICAgICAgICAgICAgICAgaWYgKEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9PSBHYW1lQ29uZmlnLkxvYWRpbmdTY2VuZVR5cGUuTG9hZGluZ1NjZW5lRW50ZXJHYW1lICYmICFHYW1lQ29uZmlnLklTX0dBTUVfT1ZFUikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cud3guc2hvd1NoYXJlTWVudSh7d2l0aFNoYXJlVGlja2V0OiB0cnVlfSk7XG4gICAgICAgICAgICB3aW5kb3cud3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIOeUqOaIt+eCueWHu+S6huKAnOi9rOWPkeKAneaMiemSrlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5p2l6Lef5oiR5LiA6LW35oyR5oiY5rWq5ryrMjA0OOOAgicsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBjYW52YXMudG9UZW1wRmlsZVBhdGhTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RXaWR0aDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdEhlaWdodDogNDAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgTGF1bmNoT3B0aW9uID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcbiAgICAgICAgICAgIGlmIChMYXVuY2hPcHRpb24ucXVlcnkgIT0ge30gJiYgTGF1bmNoT3B0aW9uLnF1ZXJ5LnggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNID0gTnVtYmVyKExhdW5jaE9wdGlvbi5xdWVyeS54KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpbmZvID0gd2luZG93Lnd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDbHViQnV0dG9uID0gd2luZG93Lnd4LmNyZWF0ZUdhbWVDbHViQnV0dG9uKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZ3JlZW4nLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGluZm8ud2luZG93V2lkdGggLyAyICsgMjUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogaW5mby53aW5kb3dIZWlnaHQgKiA5MCAvIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDbHViQnV0dG9uLmhpZGUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gR2FtZVRvb2xzLmdldFJhbmtEYXRhKFwi5rWL6K+V576k5o6S6KGMXCIpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MenuUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c2b5VzgPNHI4Chk6xcuhIS', 'MenuUI');
// Script/MenuUI.js

"use strict";

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var GameConfig = require("GameConfig");

var GameData = require("GameData");

var AnimLayerTool = require("AnimLayerTool");

cc.Class({
  "extends": cc.Component,
  properties: {
    layerBack: cc.Node,
    startGameButton: cc.Node,
    musicButton: cc.Node,
    bestScoreLabel: cc.Label,
    gameIntegral: cc.Label,
    rankButton: cc.Node,
    //排行榜按钮
    shareButton: cc.Node,
    //好友分享按钮
    shareButton2: cc.Node,
    //群分享按钮
    helpButton: cc.Node //帮助按钮

  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.startGameButton, "startGameButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.musicButton, "musicButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.rankButton, "rankButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.shareButton, "shareButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.shareButton2, "shareButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.helpButton, "helpButtonFunc");

    if (!GameConfig.IS_GAME_MUSIC) {
      GameUiTools.getSpriteFrame("pop_main/popmain_78", this.musicButton.getComponent(cc.Sprite));
    }

    this.bestScoreLabel.string = GameData.getHeightScore();
    this.gameIntegral.string = GameTools.getGameIntegral();
  },
  start: function start() {
    if (CC_WECHATGAME) {
      if (GameConfig.GameClubButton != null) {
        GameConfig.GameClubButton.show();
      }
    }
  },
  startGameButtonFunc: function startGameButtonFunc(event, customEventData) {
    GameTools.playSimpleAudioEngine(0);
    this.loadingResource();
  },
  musicButtonFunc: function musicButtonFunc() {
    GameTools.playSimpleAudioEngine(0);
    GameConfig.IS_GAME_MUSIC = !GameConfig.IS_GAME_MUSIC;
    GameTools.setItemByLocalStorage("IS_GAME_MUSIC", GameConfig.IS_GAME_MUSIC);

    if (GameConfig.IS_GAME_MUSIC) {
      GameUiTools.getSpriteFrame("pop_main/popmain_58", this.musicButton.getComponent(cc.Sprite));
    } else {
      GameUiTools.getSpriteFrame("pop_main/popmain_78", this.musicButton.getComponent(cc.Sprite));
    }
  },
  rankButtonFunc: function rankButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    GameTools.getRankData();
  },
  shareButtonFunc: function shareButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    setTimeout(function () {
      GameTools.sharePicture();
    }, 100);
  },
  helpButtonFunc: function helpButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    GameUiTools.loadingLayer("panel/GameHelp");
  },
  loadingResource: function loadingResource() {
    // cc.director.loadScene('GameScene');
    GameConfig.CAED_LINES = 10;
    GameConfig.MAIN_MENU_NUM = 11;
    GameConfig.mainMenu = GameConfig.MainMenu.MainMenuNumPopStar;
    GameConfig.CARD_WIDTH = (GameConfig.DEVICE_WIDTH - GameConfig.DEVICE_WIDTH / 10.0) / GameConfig.CAED_LINES;
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneEnterGame;
    cc.director.loadScene('LoadingScene');
  },
  onDestroy: function onDestroy() {
    if (CC_WECHATGAME) {
      if (GameConfig.GameClubButton != null) {
        GameConfig.GameClubButton.hide();
      }
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNZW51VUkuanMiXSwibmFtZXMiOlsiR2FtZVRvb2xzIiwicmVxdWlyZSIsIkdhbWVVaVRvb2xzIiwiR2FtZUNvbmZpZyIsIkdhbWVEYXRhIiwiQW5pbUxheWVyVG9vbCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGF5ZXJCYWNrIiwiTm9kZSIsInN0YXJ0R2FtZUJ1dHRvbiIsIm11c2ljQnV0dG9uIiwiYmVzdFNjb3JlTGFiZWwiLCJMYWJlbCIsImdhbWVJbnRlZ3JhbCIsInJhbmtCdXR0b24iLCJzaGFyZUJ1dHRvbiIsInNoYXJlQnV0dG9uMiIsImhlbHBCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsIklTX0dBTUVfTVVTSUMiLCJnZXRTcHJpdGVGcmFtZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInN0cmluZyIsImdldEhlaWdodFNjb3JlIiwiZ2V0R2FtZUludGVncmFsIiwic3RhcnQiLCJDQ19XRUNIQVRHQU1FIiwiR2FtZUNsdWJCdXR0b24iLCJzaG93Iiwic3RhcnRHYW1lQnV0dG9uRnVuYyIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRhIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwibG9hZGluZ1Jlc291cmNlIiwibXVzaWNCdXR0b25GdW5jIiwic2V0SXRlbUJ5TG9jYWxTdG9yYWdlIiwicmFua0J1dHRvbkZ1bmMiLCJnZXRSYW5rRGF0YSIsInNoYXJlQnV0dG9uRnVuYyIsInNldFRpbWVvdXQiLCJzaGFyZVBpY3R1cmUiLCJoZWxwQnV0dG9uRnVuYyIsImxvYWRpbmdMYXllciIsIkNBRURfTElORVMiLCJNQUlOX01FTlVfTlVNIiwibWFpbk1lbnUiLCJNYWluTWVudSIsIk1haW5NZW51TnVtUG9wU3RhciIsIkNBUkRfV0lEVEgiLCJERVZJQ0VfV0lEVEgiLCJsb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lVHlwZSIsIkxvYWRpbmdTY2VuZUVudGVy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Q21ELFlBQVgsR0FBMEJuRCxVQUFVLENBQUNtRCxZQUFYLEdBQTBCLElBQXJELElBQTZEbkQsVUFBVSxDQUFDNkMsVUFBaEc7SUFDQTdDLFVBQVUsQ0FBQ29ELGdCQUFYLEdBQThCcEQsVUFBVSxDQUFDcUQsZ0JBQVgsQ0FBNEJDLHFCQUExRDtJQUNBbkQsRUFBRSxDQUFDb0QsUUFBSCxDQUFZQyxTQUFaLENBQXNCLGNBQXRCO0VBQ0gsQ0E3RUk7RUErRUxDLFNBL0VLLHVCQStFTztJQUNSLElBQUk3QixhQUFKLEVBQW1CO01BQ2YsSUFBSTVCLFVBQVUsQ0FBQzZCLGNBQVgsSUFBNkIsSUFBakMsRUFBdUM7UUFDbkM3QixVQUFVLENBQUM2QixjQUFYLENBQTBCNkIsSUFBMUI7TUFDSDtJQUNKO0VBQ0o7QUFyRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xudmFyIEFuaW1MYXllclRvb2wgPSByZXF1aXJlKFwiQW5pbUxheWVyVG9vbFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxheWVyQmFjazogY2MuTm9kZSxcbiAgICAgICAgc3RhcnRHYW1lQnV0dG9uOiBjYy5Ob2RlLFxuICAgICAgICBtdXNpY0J1dHRvbjogY2MuTm9kZSxcbiAgICAgICAgYmVzdFNjb3JlTGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBnYW1lSW50ZWdyYWw6IGNjLkxhYmVsLFxuICAgICAgICByYW5rQnV0dG9uOiBjYy5Ob2RlLCAvL+aOkuihjOamnOaMiemSrlxuICAgICAgICBzaGFyZUJ1dHRvbjogY2MuTm9kZSwgLy/lpb3lj4vliIbkuqvmjInpkq5cbiAgICAgICAgc2hhcmVCdXR0b24yOiBjYy5Ob2RlLCAvL+e+pOWIhuS6q+aMiemSrlxuICAgICAgICBoZWxwQnV0dG9uOiBjYy5Ob2RlLCAvL+W4ruWKqeaMiemSrlxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuc3RhcnRHYW1lQnV0dG9uLCBcInN0YXJ0R2FtZUJ1dHRvbkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMubXVzaWNCdXR0b24sIFwibXVzaWNCdXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnJhbmtCdXR0b24sIFwicmFua0J1dHRvbkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuc2hhcmVCdXR0b24sIFwic2hhcmVCdXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uMiwgXCJzaGFyZUJ1dHRvbkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuaGVscEJ1dHRvbiwgXCJoZWxwQnV0dG9uRnVuY1wiKTtcbiAgICAgICAgaWYgKCFHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX21haW4vcG9wbWFpbl83OFwiLCB0aGlzLm11c2ljQnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJlc3RTY29yZUxhYmVsLnN0cmluZyA9IEdhbWVEYXRhLmdldEhlaWdodFNjb3JlKCk7XG4gICAgICAgIHRoaXMuZ2FtZUludGVncmFsLnN0cmluZyA9IEdhbWVUb29scy5nZXRHYW1lSW50ZWdyYWwoKTtcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICBpZiAoR2FtZUNvbmZpZy5HYW1lQ2x1YkJ1dHRvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ2x1YkJ1dHRvbi5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnRHYW1lQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nUmVzb3VyY2UoKTtcbiAgICB9LFxuXG4gICAgbXVzaWNCdXR0b25GdW5jOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQyA9ICFHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUM7XG4gICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJJU19HQU1FX01VU0lDXCIsIEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQyk7XG4gICAgICAgIGlmIChHYW1lQ29uZmlnLklTX0dBTUVfTVVTSUMpIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX21haW4vcG9wbWFpbl81OFwiLCB0aGlzLm11c2ljQnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX21haW4vcG9wbWFpbl83OFwiLCB0aGlzLm11c2ljQnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByYW5rQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIEdhbWVUb29scy5nZXRSYW5rRGF0YSgpO1xuICAgIH0sXG5cbiAgICBzaGFyZUJ1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9LFxuICAgIGhlbHBCdXR0b25GdW5jOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwicGFuZWwvR2FtZUhlbHBcIik7XG4gICAgfSxcblxuICAgIGxvYWRpbmdSZXNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWVTY2VuZScpO1xuICAgICAgICBHYW1lQ29uZmlnLkNBRURfTElORVMgPSAxMDtcbiAgICAgICAgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNID0gMTE7XG4gICAgICAgIEdhbWVDb25maWcubWFpbk1lbnUgPSBHYW1lQ29uZmlnLk1haW5NZW51Lk1haW5NZW51TnVtUG9wU3RhcjtcbiAgICAgICAgR2FtZUNvbmZpZy5DQVJEX1dJRFRIID0gKEdhbWVDb25maWcuREVWSUNFX1dJRFRIIC0gR2FtZUNvbmZpZy5ERVZJQ0VfV0lEVEggLyAxMC4wKSAvIEdhbWVDb25maWcuQ0FFRF9MSU5FUztcbiAgICAgICAgR2FtZUNvbmZpZy5sb2FkaW5nU2NlbmVUeXBlID0gR2FtZUNvbmZpZy5Mb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUVudGVyR2FtZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMb2FkaW5nU2NlbmUnKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgaWYgKEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNsdWJCdXR0b24uaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameUiTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6633adSwotPR4cUtDy9WXUH', 'GameUiTools');
// Script/GameUiTools.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = {
  getSpriteFrame: function getSpriteFrame(spriteName, curSp) {
    // return new cc.SpriteFrame(cc.url.raw(spriteName));
    cc.loader.loadRes(spriteName, cc.SpriteFrame, function (err, spriteFrame) {
      if (err) {
        cc.error(err.message || err);
        console.log("DEBUG: err" + err);
        return;
      }

      if (curSp) {
        curSp.spriteFrame = spriteFrame;
      }
    });
  },
  newSprite: function newSprite(spriteName, isCache) {
    var sprite = new cc.Node();

    if (isCache) {
      spriteName = spriteName.split('.')[0];
      sprite.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(spriteName);
    } else {
      sprite.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/" + spriteName);
    }

    return sprite;
  },
  setNodeSpriteFrame: function setNodeSpriteFrame(node, spriteName) {
    node.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(spriteName);
  },
  setButtonClickEvents: function setButtonClickEvents(component, menu, handler, customEventData, isScale) {
    var arrayMenu = new Array();

    if (menu.length == undefined) {
      arrayMenu[0] = menu;
    } else {
      arrayMenu = menu;
    }

    for (var i = 0; i < arrayMenu.length; i++) {
      var clickEventHandler = new cc.Component.EventHandler();
      clickEventHandler.target = component.node; //这个 node 节点是你的事件处理代码组件所属的节点

      clickEventHandler.component = component.node.name; //这个是代码文件名

      clickEventHandler.handler = handler;

      if (menu.length == undefined) {
        clickEventHandler.customEventData = customEventData;
      } else {
        clickEventHandler.customEventData = i;
      }

      var button = arrayMenu[i].addComponent(cc.Button);
      button.clickEvents.push(clickEventHandler);

      if (isScale == undefined || isScale) {
        button.transition = cc.Button.Transition.SCALE;
        button.duration = 0.1;
        button.zoomScale = 1.2;
      } // this.secondSetMenu[i].on('click', this.setMenuTouchFunc, this);

    }
  },
  setSecondSetMenuSpriteFram: function setSecondSetMenuSpriteFram(secondSetMenu, isRight) {
    //设置是否勾选图片
    secondSetMenu.getChildren()[0].getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(isRight ? "menuRight" : "menuClose");
  },
  addCloseSprite: function addCloseSprite(node) {
    var menuClose = new cc.Node();
    menuClose.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame("menuClose");
    node.addChild(menuClose);
  },
  scheduleOnce: function scheduleOnce(node, callFunc, delay) {
    //事件调度
    node.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(callFunc, node)));
  },
  loadingScene: function loadingScene(sceneName, isShowLayer) {
    //加载场景
    if (isShowLayer) {
      cc.loader.loadRes("panel/LoadingLayer", function (err, prefab) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
        cc.director.preloadScene(sceneName, function () {
          cc.director.loadScene(sceneName);
        });
      });
    } else {
      cc.director.preloadScene(sceneName, function () {
        cc.director.loadScene(sceneName);
      });
    }
  },
  loadingLayer: function loadingLayer(panelName) {
    //加载图层
    cc.loader.loadRes(panelName, function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
      }
    });
  }
};
module.exports = GameUiTools;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVWlUb29scy5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiZ2V0U3ByaXRlRnJhbWUiLCJzcHJpdGVOYW1lIiwiY3VyU3AiLCJjYyIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIm5ld1Nwcml0ZSIsImlzQ2FjaGUiLCJzcHJpdGUiLCJOb2RlIiwic3BsaXQiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJsb3ZlMjA0OEZyYW1lQ2FjaGUiLCJzZXROb2RlU3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJjb21wb25lbnQiLCJtZW51IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImlzU2NhbGUiLCJhcnJheU1lbnUiLCJBcnJheSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImkiLCJjbGlja0V2ZW50SGFuZGxlciIsIkNvbXBvbmVudCIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsIm5hbWUiLCJidXR0b24iLCJCdXR0b24iLCJjbGlja0V2ZW50cyIsInB1c2giLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsIlNDQUxFIiwiZHVyYXRpb24iLCJ6b29tU2NhbGUiLCJzZXRTZWNvbmRTZXRNZW51U3ByaXRlRnJhbSIsInNlY29uZFNldE1lbnUiLCJpc1JpZ2h0IiwiZ2V0Q2hpbGRyZW4iLCJhZGRDbG9zZVNwcml0ZSIsIm1lbnVDbG9zZSIsImFkZENoaWxkIiwic2NoZWR1bGVPbmNlIiwiY2FsbEZ1bmMiLCJkZWxheSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwibG9hZGluZ1NjZW5lIiwic2NlbmVOYW1lIiwiaXNTaG93TGF5ZXIiLCJwcmVmYWIiLCJpbnN0YW50aWF0ZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJjaGlsZHJlbiIsInByZWxvYWRTY2VuZSIsImxvYWRTY2VuZSIsImxvYWRpbmdMYXllciIsInBhbmVsTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUNBLElBQUlFLFdBQVcsR0FBRztFQUNkQyxjQUFjLEVBQUUsd0JBQVVDLFVBQVYsRUFBc0JDLEtBQXRCLEVBQTZCO0lBQ3pDO0lBQ0FDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxPQUFWLENBQWtCSixVQUFsQixFQUE4QkUsRUFBRSxDQUFDRyxXQUFqQyxFQUE4QyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7TUFDdEUsSUFBSUQsR0FBSixFQUFTO1FBQ1RKLEVBQUUsQ0FBQ00sS0FBSCxDQUFTRixHQUFHLENBQUNHLE9BQUosSUFBZUgsR0FBeEI7UUFDQUksT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBYUwsR0FBekI7UUFDQTtNQUNDOztNQUNELElBQUdMLEtBQUgsRUFBUztRQUNMQSxLQUFLLENBQUNNLFdBQU4sR0FBcUJBLFdBQXJCO01BQ0g7SUFDQSxDQVRMO0VBVUgsQ0FiYTtFQWNkSyxTQUFTLEVBQUUsbUJBQVVaLFVBQVYsRUFBc0JhLE9BQXRCLEVBQStCO0lBQ3RDLElBQUlDLE1BQU0sR0FBRyxJQUFJWixFQUFFLENBQUNhLElBQVAsRUFBYjs7SUFDQSxJQUFJRixPQUFKLEVBQWE7TUFDVGIsVUFBVSxHQUFHQSxVQUFVLENBQUNnQixLQUFYLENBQWlCLEdBQWpCLEVBQXNCLENBQXRCLENBQWI7TUFDQUYsTUFBTSxDQUFDRyxZQUFQLENBQW9CZixFQUFFLENBQUNnQixNQUF2QixFQUErQlgsV0FBL0IsR0FBNkNWLFNBQVMsQ0FBQ3NCLGtCQUFWLENBQTZCcEIsY0FBN0IsQ0FB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U0FBWixDQUFzQlIsU0FBdEI7TUFDSCxDQUZEO0lBR0g7RUFDSixDQWhGYTtFQWlGZFMsWUFqRmMsd0JBaUZEQyxTQWpGQyxFQWlGVTtJQUFDO0lBQ3JCdEUsRUFBRSxDQUFDQyxNQUFILENBQVVDLE9BQVYsQ0FBa0JvRSxTQUFsQixFQUE2QixVQUFDbEUsR0FBRCxFQUFNMEQsTUFBTixFQUFpQjtNQUMxQyxJQUFJLENBQUMxRCxHQUFMLEVBQVU7UUFDTixJQUFJZSxJQUFJLEdBQUduQixFQUFFLENBQUMrRCxXQUFILENBQWVELE1BQWYsQ0FBWDtRQUNBOUQsRUFBRSxDQUFDZ0UsUUFBSCxDQUFZQyxRQUFaLEdBQXVCQyxRQUF2QixDQUFnQyxDQUFoQyxFQUFtQ2QsUUFBbkMsQ0FBNENqQyxJQUE1QztNQUNIO0lBQ0osQ0FMRDtFQU1IO0FBeEZhLENBQWxCO0FBMEZBb0QsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNUUsV0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHtcbiAgICBnZXRTcHJpdGVGcmFtZTogZnVuY3Rpb24gKHNwcml0ZU5hbWUsIGN1clNwKSB7XG4gICAgICAgIC8vIHJldHVybiBuZXcgY2MuU3ByaXRlRnJhbWUoY2MudXJsLnJhdyhzcHJpdGVOYW1lKSk7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHNwcml0ZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY2MuZXJyb3IoZXJyLm1lc3NhZ2UgfHwgZXJyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREVCVUc6IGVyclwiK2Vycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjdXJTcCl7XG4gICAgICAgICAgICAgICAgY3VyU3Auc3ByaXRlRnJhbWUgPSAgc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIG5ld1Nwcml0ZTogZnVuY3Rpb24gKHNwcml0ZU5hbWUsIGlzQ2FjaGUpIHtcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIGlmIChpc0NhY2hlKSB7XG4gICAgICAgICAgICBzcHJpdGVOYW1lID0gc3ByaXRlTmFtZS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAgICAgc3ByaXRlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZVRvb2xzLmxvdmUyMDQ4RnJhbWVDYWNoZS5nZXRTcHJpdGVGcmFtZShzcHJpdGVOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwcml0ZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShcInJlcy9yYXctYXNzZXRzL1wiICsgc3ByaXRlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcbiAgICB9LFxuICAgIHNldE5vZGVTcHJpdGVGcmFtZTogZnVuY3Rpb24gKG5vZGUsIHNwcml0ZU5hbWUpIHtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVUb29scy5sb3ZlMjA0OEZyYW1lQ2FjaGUuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlTmFtZSk7XG4gICAgfSxcbiAgICBzZXRCdXR0b25DbGlja0V2ZW50czogZnVuY3Rpb24gKGNvbXBvbmVudCwgbWVudSwgaGFuZGxlciwgY3VzdG9tRXZlbnREYXRhLCBpc1NjYWxlKSB7XG4gICAgICAgIGxldCBhcnJheU1lbnUgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgaWYgKG1lbnUubGVuZ3RoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXJyYXlNZW51WzBdID0gbWVudTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlNZW51ID0gbWVudTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TWVudS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IGNvbXBvbmVudC5ub2RlOyAvL+i/meS4qiBub2RlIOiKgueCueaYr+S9oOeahOS6i+S7tuWkhOeQhuS7o+eggee7hOS7tuaJgOWxnueahOiKgueCuVxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gY29tcG9uZW50Lm5vZGUubmFtZTsvL+i/meS4quaYr+S7o+eggeaWh+S7tuWQjVxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICBpZiAobWVudS5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gY3VzdG9tRXZlbnREYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGFycmF5TWVudVtpXS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmIChpc1NjYWxlID09IHVuZGVmaW5lZCB8fCBpc1NjYWxlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnRyYW5zaXRpb24gPSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TQ0FMRTtcbiAgICAgICAgICAgICAgICBidXR0b24uZHVyYXRpb24gPSAwLjE7XG4gICAgICAgICAgICAgICAgYnV0dG9uLnpvb21TY2FsZSA9IDEuMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuc2Vjb25kU2V0TWVudVtpXS5vbignY2xpY2snLCB0aGlzLnNldE1lbnVUb3VjaEZ1bmMsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRTZWNvbmRTZXRNZW51U3ByaXRlRnJhbTogZnVuY3Rpb24gKHNlY29uZFNldE1lbnUsIGlzUmlnaHQpIHsvL+iuvue9ruaYr+WQpuWLvumAieWbvueJh1xuICAgICAgICBzZWNvbmRTZXRNZW51LmdldENoaWxkcmVuKClbMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVG9vbHMubG92ZTIwNDhGcmFtZUNhY2hlLmdldFNwcml0ZUZyYW1lKGlzUmlnaHQgPyBcIm1lbnVSaWdodFwiIDogXCJtZW51Q2xvc2VcIik7XG4gICAgfSxcbiAgICBhZGRDbG9zZVNwcml0ZTogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgbGV0IG1lbnVDbG9zZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIG1lbnVDbG9zZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVUb29scy5sb3ZlMjA0OEZyYW1lQ2FjaGUuZ2V0U3ByaXRlRnJhbWUoXCJtZW51Q2xvc2VcIik7XG4gICAgICAgIG5vZGUuYWRkQ2hpbGQobWVudUNsb3NlKTtcbiAgICB9LFxuICAgIHNjaGVkdWxlT25jZTogZnVuY3Rpb24gKG5vZGUsIGNhbGxGdW5jLCBkZWxheSkgey8v5LqL5Lu26LCD5bqmXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkZWxheSksIGNjLmNhbGxGdW5jKGNhbGxGdW5jLCBub2RlKSkpO1xuICAgIH0sXG4gICAgbG9hZGluZ1NjZW5lKHNjZW5lTmFtZSwgaXNTaG93TGF5ZXIpIHsvL+WKoOi9veWcuuaZr1xuICAgICAgICBpZiAoaXNTaG93TGF5ZXIpIHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvTG9hZGluZ0xheWVyXCIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmNoaWxkcmVuWzBdLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lTmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBsb2FkaW5nTGF5ZXIocGFuZWxOYW1lKSB7Ly/liqDovb3lm77lsYJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGFuZWxOYW1lLCAoZXJyLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuY2hpbGRyZW5bMF0uYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xubW9kdWxlLmV4cG9ydHMgPSBHYW1lVWlUb29sczsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/assist/AnimInAndOut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c73cXTEdFOEIiRT1cSAep1', 'AnimInAndOut');
// Script/assist/AnimInAndOut.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {// onLoad要执行的全都在onEnable中进行了
  },
  onEnable: function onEnable() {
    this.node.opacity = 0;
    this.node.setScale(0);
    var fadeIn = cc.fadeIn(0.2);
    var scaleTo = cc.scaleTo(0.2, 1);
    this.node.runAction(cc.spawn(fadeIn, scaleTo));
  },
  animateAndDestroy: function animateAndDestroy() {
    var _this = this;

    if (this.isDestroying) {
      return;
    }

    this.isDestroying = true;
    var fadeOut = cc.fadeOut(0.2);
    var scaleTo = cc.scaleTo(0.2, 0);
    var callFunc = cc.callFunc(function () {
      if (_this.node) {
        _this.node.destroy();
      }
    });
    this.node.runAction(cc.sequence(cc.spawn(fadeOut, scaleTo), callFunc));
  },
  animateAndDisable: function animateAndDisable() {
    var _this2 = this;

    if (this.isDestroying) {
      return;
    }

    this.isDestroying = true;
    var fadeOut = cc.fadeOut(0.2);
    var scaleTo = cc.scaleTo(0.2, 0);
    var callFunc = cc.callFunc(function () {
      _this2.node.active = false;
    });
    this.node.runAction(cc.sequence(cc.spawn(fadeOut, scaleTo), callFunc));
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhc3Npc3RcXEFuaW1JbkFuZE91dC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm9uRW5hYmxlIiwibm9kZSIsIm9wYWNpdHkiLCJzZXRTY2FsZSIsImZhZGVJbiIsInNjYWxlVG8iLCJydW5BY3Rpb24iLCJzcGF3biIsImFuaW1hdGVBbmREZXN0cm95IiwiaXNEZXN0cm95aW5nIiwiZmFkZU91dCIsImNhbGxGdW5jIiwiZGVzdHJveSIsInNlcXVlbmNlIiwiYW5pbWF0ZUFuZERpc2FibGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBT0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZLENBQ2hCO0VBQ0gsQ0FWSTtFQVlMQyxRQUFRLEVBQUUsb0JBQVk7SUFDbEIsS0FBS0MsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLENBQXBCO0lBQ0EsS0FBS0QsSUFBTCxDQUFVRSxRQUFWLENBQW1CLENBQW5CO0lBQ0EsSUFBSUMsTUFBTSxHQUFHVCxFQUFFLENBQUNTLE1BQUgsQ0FBVSxHQUFWLENBQWI7SUFDQSxJQUFJQyxPQUFPLEdBQUdWLEVBQUUsQ0FBQ1UsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBZDtJQUNBLEtBQUtKLElBQUwsQ0FBVUssU0FBVixDQUFvQlgsRUFBRSxDQUFDWSxLQUFILENBQVNILE1BQVQsRUFBaUJDLE9BQWpCLENBQXBCO0VBQ0gsQ0FsQkk7RUFvQkxHLGlCQUFpQixFQUFFLDZCQUFZO0lBQUE7O0lBQzNCLElBQUksS0FBS0MsWUFBVCxFQUF1QjtNQUNuQjtJQUNIOztJQUNELEtBQUtBLFlBQUwsR0FBb0IsSUFBcEI7SUFFQSxJQUFJQyxPQUFPLEdBQUdmLEVBQUUsQ0FBQ2UsT0FBSCxDQUFXLEdBQVgsQ0FBZDtJQUNBLElBQUlMLE9BQU8sR0FBR1YsRUFBRSxDQUFDVSxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFkO0lBQ0EsSUFBSU0sUUFBUSxHQUFHaEIsRUFBRSxDQUFDZ0IsUUFBSCxDQUFZLFlBQUk7TUFDM0IsSUFBSSxLQUFJLENBQUNWLElBQVQsRUFBZTtRQUNYLEtBQUksQ0FBQ0EsSUFBTCxDQUFVVyxPQUFWO01BQ0g7SUFDSixDQUpjLENBQWY7SUFLQSxLQUFLWCxJQUFMLENBQVVLLFNBQVYsQ0FBb0JYLEVBQUUsQ0FBQ2tCLFFBQUgsQ0FBWWxCLEVBQUUsQ0FBQ1ksS0FBSCxDQUFTRyxPQUFULEVBQWtCTCxPQUFsQixDQUFaLEVBQXdDTSxRQUF4QyxDQUFwQjtFQUNILENBbENJO0VBb0NMRyxpQkFBaUIsRUFBRSw2QkFBWTtJQUFBOztJQUMzQixJQUFJLEtBQUtMLFlBQVQsRUFBdUI7TUFDbkI7SUFDSDs7SUFDRCxLQUFLQSxZQUFMLEdBQW9CLElBQXBCO0lBRUEsSUFBSUMsT0FBTyxHQUFHZixFQUFFLENBQUNlLE9BQUgsQ0FBVyxHQUFYLENBQWQ7SUFDQSxJQUFJTCxPQUFPLEdBQUdWLEVBQUUsQ0FBQ1UsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBZDtJQUNBLElBQUlNLFFBQVEsR0FBR2hCLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FBWSxZQUFJO01BQzNCLE1BQUksQ0FBQ1YsSUFBTCxDQUFVYyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0gsQ0FGYyxDQUFmO0lBR0EsS0FBS2QsSUFBTCxDQUFVSyxTQUFWLENBQW9CWCxFQUFFLENBQUNrQixRQUFILENBQVlsQixFQUFFLENBQUNZLEtBQUgsQ0FBU0csT0FBVCxFQUFrQkwsT0FBbEIsQ0FBWixFQUF3Q00sUUFBeEMsQ0FBcEI7RUFDSCxDQWhESSxDQWtETDtFQUNBO0VBRUE7O0FBckRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG9uTG9hZOimgeaJp+ihjOeahOWFqOmDveWcqG9uRW5hYmxl5Lit6L+b6KGM5LqGXG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDApO1xuICAgICAgICB2YXIgZmFkZUluID0gY2MuZmFkZUluKDAuMik7XG4gICAgICAgIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjIsIDEpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNwYXduKGZhZGVJbiwgc2NhbGVUbykpO1xuICAgIH0sXG5cbiAgICBhbmltYXRlQW5kRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc3Ryb3lpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGVzdHJveWluZyA9IHRydWU7XG5cbiAgICAgICAgdmFyIGZhZGVPdXQgPSBjYy5mYWRlT3V0KDAuMik7XG4gICAgICAgIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjIsIDApO1xuICAgICAgICB2YXIgY2FsbEZ1bmMgPSBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGZhZGVPdXQsIHNjYWxlVG8pLCBjYWxsRnVuYykpO1xuICAgIH0sXG5cbiAgICBhbmltYXRlQW5kRGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc3Ryb3lpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGVzdHJveWluZyA9IHRydWU7XG5cbiAgICAgICAgdmFyIGZhZGVPdXQgPSBjYy5mYWRlT3V0KDAuMik7XG4gICAgICAgIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjIsIDApO1xuICAgICAgICB2YXIgY2FsbEZ1bmMgPSBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihmYWRlT3V0LCBzY2FsZVRvKSwgY2FsbEZ1bmMpKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96845POniBJCI0lyGy969Pc', 'GamePass');
// Script/panel/GamePass.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameData = require("GameData");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    passLabel: cc.Label,
    scoreLabel: cc.Label,
    nextPassButton: cc.Node,
    //下一关按钮
    shareButton: cc.Node,
    //分享按钮
    backButton: cc.Node //返回按钮

  },
  onLoad: function onLoad() {
    this.passLabel.string = "第  " + GameData.getGamePassNum() + "  关";
    this.scoreLabel.string = GameData.score0;
    GameUiTools.setButtonClickEvents(this, this.nextPassButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.shareButton, "buttonFunc");
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;

    if (this.shareButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameTools.sharePicture();
    } else if (this.nextPassButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.node.destroy();
      GameConfig.GameLogic.autoCreateCardNumber();
    } else if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      GameConfig.GameLogic.autoCreateCardNumber();
      GameConfig.GameLogic.saveMemoryInformation();
      this.loadingResource();
    }

    return true;
  },
  loadingResource: function loadingResource() {
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneBackGame;
    GameConfig.mainMenu = GameConfig.MainMenu.MainMenuSpace;
    cc.director.loadScene("LoadingScene");
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVBhc3MuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lRGF0YSIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYXNzTGFiZWwiLCJMYWJlbCIsInNjb3JlTGFiZWwiLCJuZXh0UGFzc0J1dHRvbiIsIk5vZGUiLCJzaGFyZUJ1dHRvbiIsImJhY2tCdXR0b24iLCJvbkxvYWQiLCJzdHJpbmciLCJnZXRHYW1lUGFzc051bSIsInNjb3JlMCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwiYnV0dG9uRnVuYyIsImV2ZW50IiwiYnV0dG9uIiwidGFyZ2V0IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic2hhcmVQaWN0dXJlIiwibm9kZSIsImRlc3Ryb3kiLCJHYW1lTG9naWMiLCJhdXRvQ3JlYXRlQ2FyZE51bWJlciIsInNhdmVNZW1vcnlJbmZvcm1hdGlvbiIsImxvYWRpbmdSZXNvdXJjZSIsImxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lQmFja0dhbWUiLCJtYWluTWVudSIsIk1haW5NZW51IiwiTWFpbk1lbnVTcGFjZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxRQUFRLEdBQUdGLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQUlHLFdBQVcsR0FBR0gsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0FJLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBRUxDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssS0FETjtJQUVSQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ0ssS0FGUDtJQUdSRSxjQUFjLEVBQUVQLEVBQUUsQ0FBQ1EsSUFIWDtJQUdpQjtJQUN6QkMsV0FBVyxFQUFFVCxFQUFFLENBQUNRLElBSlI7SUFJYztJQUN0QkUsVUFBVSxFQUFFVixFQUFFLENBQUNRLElBTFAsQ0FLYTs7RUFMYixDQUZQO0VBVUxHLE1BVkssb0JBVUk7SUFDTCxLQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBd0IsUUFBUWQsUUFBUSxDQUFDZSxjQUFULEVBQVIsR0FBb0MsS0FBNUQ7SUFDQSxLQUFLUCxVQUFMLENBQWdCTSxNQUFoQixHQUF5QmQsUUFBUSxDQUFDZ0IsTUFBbEM7SUFDQWYsV0FBVyxDQUFDZ0Isb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS1IsY0FBNUMsRUFBNEQsWUFBNUQ7SUFDQVIsV0FBVyxDQUFDZ0Isb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS04sV0FBNUMsRUFBeUQsWUFBekQ7SUFDQVYsV0FBVyxDQUFDZ0Isb0JBQVosQ0FBaUMsSUFBakMsRUFBdUMsS0FBS0wsVUFBNUMsRUFBd0QsWUFBeEQ7RUFDSCxDQWhCSTtFQWtCTE0sVUFBVSxFQUFFLG9CQUFVQyxLQUFWLEVBQWlCO0lBQ3pCLElBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxNQUFuQjs7SUFDQSxJQUFJLEtBQUtWLFdBQUwsSUFBb0JTLE1BQXhCLEVBQWdDO01BQzVCckIsU0FBUyxDQUFDdUIscUJBQVYsQ0FBZ0MsQ0FBaEM7TUFDQXZCLFNBQVMsQ0FBQ3dCLFlBQVY7SUFDSCxDQUhELE1BR08sSUFBSSxLQUFLZCxjQUFMLElBQXVCVyxNQUEzQixFQUFtQztNQUN0Q3JCLFNBQVMsQ0FBQ3VCLHFCQUFWLENBQWdDLENBQWhDO01BQ0EsS0FBS0UsSUFBTCxDQUFVQyxPQUFWO01BQ0E1QixVQUFVLENBQUM2QixTQUFYLENBQXFCQyxvQkFBckI7SUFDSCxDQUpNLE1BSUEsSUFBSSxLQUFLZixVQUFMLElBQW1CUSxNQUF2QixFQUErQjtNQUNsQ3JCLFNBQVMsQ0FBQ3VCLHFCQUFWLENBQWdDLENBQWhDO01BQ0F6QixVQUFVLENBQUM2QixTQUFYLENBQXFCQyxvQkFBckI7TUFDQTlCLFVBQVUsQ0FBQzZCLFNBQVgsQ0FBcUJFLHFCQUFyQjtNQUNBLEtBQUtDLGVBQUw7SUFDSDs7SUFDRCxPQUFPLElBQVA7RUFDSCxDQWxDSTtFQW1DTEEsZUFBZSxFQUFFLDJCQUFZO0lBQ3pCaEMsVUFBVSxDQUFDaUMsZ0JBQVgsR0FBOEJqQyxVQUFVLENBQUNrQyxnQkFBWCxDQUE0QkMsb0JBQTFEO0lBQ0FuQyxVQUFVLENBQUNvQyxRQUFYLEdBQXNCcEMsVUFBVSxDQUFDcUMsUUFBWCxDQUFvQkMsYUFBMUM7SUFDQWpDLEVBQUUsQ0FBQ2tDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixjQUF0QjtFQUNIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lRGF0YSA9IHJlcXVpcmUoXCJHYW1lRGF0YVwiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwYXNzTGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCxcbiAgICAgICAgbmV4dFBhc3NCdXR0b246IGNjLk5vZGUsIC8v5LiL5LiA5YWz5oyJ6ZKuXG4gICAgICAgIHNoYXJlQnV0dG9uOiBjYy5Ob2RlLCAvL+WIhuS6q+aMiemSrlxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLCAvL+i/lOWbnuaMiemSrlxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMucGFzc0xhYmVsLnN0cmluZyA9IFwi56ysICBcIiArIEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCkgKyBcIiAg5YWzXCI7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBHYW1lRGF0YS5zY29yZTA7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMubmV4dFBhc3NCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5zaGFyZUJ1dHRvbiwgXCJidXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJhY2tCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcbiAgICB9LFxuXG4gICAgYnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLnNoYXJlQnV0dG9uID09IGJ1dHRvbikge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5leHRQYXNzQnV0dG9uID09IGJ1dHRvbikge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5hdXRvQ3JlYXRlQ2FyZE51bWJlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYmFja0J1dHRvbiA9PSBidXR0b24pIHtcbiAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVMb2dpYy5hdXRvQ3JlYXRlQ2FyZE51bWJlcigpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lTG9naWMuc2F2ZU1lbW9yeUluZm9ybWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdSZXNvdXJjZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgbG9hZGluZ1Jlc291cmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluTWVudSA9IEdhbWVDb25maWcuTWFpbk1lbnUuTWFpbk1lbnVTcGFjZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4177DMtXtOPoYZvLo1iH/g', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFQLEVBQWU7RUFDWDtFQUNBO0VBQ0FELEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQywyQkFBVixHQUF3QyxJQUF4QztBQUNIIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSBjb21wYXRpYmxlIHdpdGggcHJvamVjdHMgcHJpb3IgdG8gdjIuMS4wLlxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuVG9nZ2xlIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxuICpcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAg5LmL5YmN54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuaWYgKGNjLlRvZ2dsZSkge1xuICAgIC8vIFdoZXRoZXIgdGhlICd0b2dnbGUnIGFuZCAnY2hlY2tFdmVudHMnIGV2ZW50cyBhcmUgZmlyZWQgd2hlbiAndG9nZ2xlLmNoZWNrKCkgLyB0b2dnbGUudW5jaGVjaygpJyBpcyBjYWxsZWQgaW4gdGhlIGNvZGVcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfY2hlY2sgPSB0cnVlO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '415acQw6oNBeo2WRVLPUaoS', 'GameTools');
// Script/GameTools.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = {
  love2048FrameCache: null,
  numberLabelAtlas: null,
  backMusicIsPlay: null,
  playSimpleAudioEngine: function playSimpleAudioEngine(engineType) {
    if (GameConfig.IS_GAME_MUSIC) {
      switch (engineType) {
        case 0:
          cc.audioEngine.play(cc.url.raw('resources/sounds/pop_star.mp3'), false, 0.5);
          break;

        case 1:
          cc.audioEngine.play(cc.url.raw('resources/sounds/select.mp3'), false, 0.5);
          break;

        case 2:
          cc.audioEngine.play(cc.url.raw("resources/sounds/landing.mp3"), false, 0.5);
          break;

        case 3:
          cc.audioEngine.play(cc.url.raw("resources/sounds/cheers.mp3"), false, 0.5);
          break;

        default:
          break;
      }
    }
  },
  playBackgroundMusic: function playBackgroundMusic() {
    if (GameConfig.IS_GAME_MUSIC) {
      if (GameTools.backMusicIsPlay == null) {
        GameTools.backMusicIsPlay = cc.audioEngine.play(cc.url.raw('resources/sounds/backMusic.mp3'), true, 0.5);
      }
    }
  },
  stopBackgroundMusic: function stopBackgroundMusic() {
    if (GameTools.backMusicIsPlay != null) {
      cc.audioEngine.stop(GameTools.backMusicIsPlay);
      GameTools.backMusicIsPlay = null;
    }
  },
  getItemByLocalStorage: function getItemByLocalStorage(key, value) {
    var values = cc.sys.localStorage.getItem(key);

    if (values === undefined || values === null || values === '') {
      cc.sys.localStorage.setItem(key, value);
      return value;
    }

    if (typeof value === 'boolean') {
      if (typeof values === 'boolean') {
        return values;
      }

      return "true" == values;
    } else if (typeof value === 'number') {
      return Number(values);
    }

    return values;
  },
  setItemByLocalStorage: function setItemByLocalStorage(key, value) {
    cc.sys.localStorage.setItem(key, value);
  },
  toastMessage: function toastMessage(toastType) {
    cc.loader.loadRes("panel/ShowMessage", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        node.getComponent(cc.Component).toastType = toastType;
        cc.director.getScene().children[0].addChild(node); // cc.director.getScene().getChildByName('Canvas').addChild(node);
      }
    });
  },
  sharePicture: function sharePicture(pictureName) {
    var titleStr = '来跟我一起挑战浪漫2048吧。';

    if ("shareTicket" == pictureName) {
      titleStr = "看看你在群里排第几？来和我挑战浪漫2048吧。";
    } else if ("LotteryLayer" == pictureName) {
      //抽奖页面分享
      titleStr = "浪漫2048福利大放送！快进来抽奖吧！";
    } else if (pictureName != undefined && pictureName != null) {
      titleStr = "我得了" + pictureName + "分," + titleStr;
    }

    if (CC_WECHATGAME) {
      window.wx.shareAppMessage({
        title: titleStr,
        query: "x=" + GameConfig.MAIN_MENU_NUM,
        imageUrl: canvas.toTempFilePathSync({
          destWidth: 500,
          destHeight: 400
        }),
        success: function success(res) {
          if (res.shareTickets != undefined && res.shareTickets.length > 0) {
            if ("shareTicket" == pictureName) {
              window.wx.postMessage({
                messageType: 5,
                MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM == -1000 ? 1 : GameConfig.MAIN_MENU_NUM,
                shareTicket: res.shareTickets[0]
              });
            }
          }
        }
      });
    } else {
      cc.log("执行了截图" + titleStr);
    }
  },
  getGameIntegral: function getGameIntegral() {
    //获取积分
    return this.getItemByLocalStorage("GameIntegral", 0);
  },
  setGameIntegral: function setGameIntegral(intrgral) {
    // 设置积分
    cc.sys.localStorage.setItem("GameIntegral", intrgral);
  },
  commentGame: function commentGame() {
    //评论
    if (CC_WECHATGAME) {
      window.wx.openCustomerServiceConversation({});
    } else {
      this.toastMessage(1);
      cc.log("执行了评论");
    }
  },
  checkFirstLoginGame: function checkFirstLoginGame() {
    var _this = this;

    //检查是否首次登录
    var loginDate = Math.floor((new Date().getTime() - new Date(2018, 3, 18, 0, 0, 0, 0).getTime()) / (1000 * 60 * 60 * 24));

    if (loginDate > this.getItemByLocalStorage("FirstEnterGameDate", 0)) {
      cc.sys.localStorage.setItem("FirstEnterGameDate", loginDate);
      setTimeout(function () {
        _this.setGameIntegral(_this.getGameIntegral() + 100);

        _this.toastMessage(9);
      }, 1500);
    }
  },
  setCardBackPath: function setCardBackPath(num) //设置卡片背景路径
  {//GameConfig.setCardBackPath(num, "card/nl2048.png");
  },
  userLogin: function userLogin() {//用户登录
  },
  getRankData: function getRankData(shareTicket) {
    //获取排行榜
    cc.loader.loadRes("panel/RankingListView", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);

        if (shareTicket != undefined) {
          node.getComponent(cc.Component).shareTicket = shareTicket;
        } // node.setPosition(cc.p(0, 0));


        cc.director.getScene().children[0].addChild(node);
      }
    });
  },
  removeRankData: function removeRankData() {
    //移除排行榜数据
    if (CC_WECHATGAME) {
      window.wx.postMessage({
        messageType: 0
      });
    } else {
      cc.log("移除排行榜数据。");
    }
  },
  submitScore: function submitScore(score) {
    //提交得分
    if (CC_WECHATGAME) {
      window.wx.postMessage({
        messageType: 3,
        MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
        score: score
      });
    } else {
      cc.log("提交得分:" + GameConfig.MAIN_MENU_NUM + " : " + score);
    }
  },
  getSelectAddNum: function getSelectAddNum(num) //获取叠加数
  {
    if (num < 4) {
      num = 2;
    } else if (num < 8) {
      num = 4;
    } else if (num < 16) {
      num = 8;
    } else if (num < 32) {
      num = 16;
    } else if (num < 64) {
      num = 32;
    } else if (num < 128) {
      num = 64;
    } else if (num < 256) {
      num = 128;
    } else if (num < 512) {
      num = 256;
    } else if (num < 1024) {
      num = 512;
    } else if (num < 2048) {
      num = 1024;
    } else if (num < 4096) {
      num = 2048;
    } else if (num < 8192) {
      num = 4096;
    } else if (num < 16384) {
      num = 8192;
    } else if (num < 32768) {
      num = 16384;
    } else if (num < 65536) {
      num = 32768;
    } else if (num < 131072) {
      num = 65536;
    } else {
      num = 131072;
    }

    return num;
  }
};
module.exports = GameTools;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVG9vbHMuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJsb3ZlMjA0OEZyYW1lQ2FjaGUiLCJudW1iZXJMYWJlbEF0bGFzIiwiYmFja011c2ljSXNQbGF5IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiZW5naW5lVHlwZSIsIklTX0dBTUVfTVVTSUMiLCJjYyIsImF1ZGlvRW5naW5lIiwicGxheSIsInVybCIsInJhdyIsInBsYXlCYWNrZ3JvdW5kTXVzaWMiLCJzdG9wQmFja2dyb3VuZE11c2ljIiwic3RvcCIsImdldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImtleSIsInZhbHVlIiwidmFsdWVzIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInNldEl0ZW0iLCJOdW1iZXIiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJ0b2FzdE1lc3NhZ2UiLCJ0b2FzdFR5cGUiLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwibm9kZSIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiQ29tcG9uZW50IiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNoaWxkcmVuIiwiYWRkQ2hpbGQiLCJzaGFyZVBpY3R1cmUiLCJwaWN0dXJlTmFtZSIsInRpdGxlU3RyIiwiQ0NfV0VDSEFUR0FNRSIsIndpbmRvdyIsInd4Iiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJxdWVyeSIsIk1BSU5fTUVOVV9OVU0iLCJpbWFnZVVybCIsImNhbnZhcyIsInRvVGVtcEZpbGVQYXRoU3luYyIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJzdWNjZXNzIiwicmVzIiwic2hhcmVUaWNrZXRzIiwibGVuZ3RoIiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsInNoYXJlVGlja2V0IiwibG9nIiwiZ2V0R2FtZUludGVncmFsIiwic2V0R2FtZUludGVncmFsIiwiaW50cmdyYWwiLCJjb21tZW50R2FtZSIsIm9wZW5DdXN0b21lclNlcnZpY2VDb252ZXJzYXRpb24iLCJjaGVja0ZpcnN0TG9naW5HYW1lIiwibG9naW5EYXRlIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImdldFRpbWUiLCJzZXRUaW1lb3V0Iiwic2V0Q2FyZEJhY2tQYXRoIiwibnVtIiwidXNlckxvZ2luIiwiZ2V0UmFua0RhdGEiLCJyZW1vdmVSYW5rRGF0YSIsInN1Ym1pdFNjb3JlIiwic2NvcmUiLCJnZXRTZWxlY3RBZGROdW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHO0VBQ1pDLGtCQUFrQixFQUFFLElBRFI7RUFFWkMsZ0JBQWdCLEVBQUUsSUFGTjtFQUdaQyxlQUFlLEVBQUUsSUFITDtFQUlaQyxxQkFBcUIsRUFBRSwrQkFBVUMsVUFBVixFQUFzQjtJQUN6QyxJQUFJUCxVQUFVLENBQUNRLGFBQWYsRUFBOEI7TUFDMUIsUUFBUUQsVUFBUjtRQUNJLEtBQUssQ0FBTDtVQUNJRSxFQUFFLENBQUNDLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkYsRUFBRSxDQUFDRyxHQUFILENBQU9DLEdBQVAsQ0FBVywrQkFBWCxDQUFwQixFQUFpRSxLQUFqRSxFQUF3RSxHQUF4RTtVQUNBOztRQUNKLEtBQUssQ0FBTDtVQUNJSixFQUFFLENBQUNDLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkYsRUFBRSxDQUFDRyxHQUFILENBQU9DLEdBQVAsQ0FBVyw2QkFBWCxDQUFwQixFQUErRCxLQUEvRCxFQUFzRSxHQUF0RTtVQUNBOztRQUNKLEtBQUssQ0FBTDtVQUNJSixFQUFFLENBQUNDLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkYsRUFBRSxDQUFDRyxHQUFILENBQU9DLEdBQVAsQ0FBVyw4QkFBWCxDQUFwQixFQUFnRSxLQUFoRSxFQUF1RSxHQUF2RTtVQUNBOztRQUNK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Q0gsQ0FGTSxNQUVBLElBQUlBLEdBQUcsR0FBRyxJQUFWLEVBQWdCO01BQ25CQSxHQUFHLEdBQUcsSUFBTjtJQUNILENBRk0sTUFFQSxJQUFJQSxHQUFHLEdBQUcsS0FBVixFQUFpQjtNQUNwQkEsR0FBRyxHQUFHLElBQU47SUFDSCxDQUZNLE1BRUEsSUFBSUEsR0FBRyxHQUFHLEtBQVYsRUFBaUI7TUFDcEJBLEdBQUcsR0FBRyxLQUFOO0lBQ0gsQ0FGTSxNQUVBLElBQUlBLEdBQUcsR0FBRyxLQUFWLEVBQWlCO01BQ3BCQSxHQUFHLEdBQUcsS0FBTjtJQUNILENBRk0sTUFFQSxJQUFJQSxHQUFHLEdBQUcsTUFBVixFQUFrQjtNQUNyQkEsR0FBRyxHQUFHLEtBQU47SUFDSCxDQUZNLE1BRUE7TUFDSEEsR0FBRyxHQUFHLE1BQU47SUFDSDs7SUFDRCxPQUFPQSxHQUFQO0VBQ0g7QUEzTVcsQ0FBaEI7QUE4TUFPLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBGLFNBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHtcbiAgICBsb3ZlMjA0OEZyYW1lQ2FjaGU6IG51bGwsXG4gICAgbnVtYmVyTGFiZWxBdGxhczogbnVsbCxcbiAgICBiYWNrTXVzaWNJc1BsYXk6IG51bGwsXG4gICAgcGxheVNpbXBsZUF1ZGlvRW5naW5lOiBmdW5jdGlvbiAoZW5naW5lVHlwZSkge1xuICAgICAgICBpZiAoR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGVuZ2luZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2MudXJsLnJhdygncmVzb3VyY2VzL3NvdW5kcy9wb3Bfc3Rhci5tcDMnKSwgZmFsc2UsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KCdyZXNvdXJjZXMvc291bmRzL3NlbGVjdC5tcDMnKSwgZmFsc2UsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kcy9sYW5kaW5nLm1wM1wiKSwgZmFsc2UsIDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjYy51cmwucmF3KFwicmVzb3VyY2VzL3NvdW5kcy9jaGVlcnMubXAzXCIpLCBmYWxzZSwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlCYWNrZ3JvdW5kTXVzaWM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKEdhbWVDb25maWcuSVNfR0FNRV9NVVNJQykge1xuICAgICAgICAgICAgaWYgKEdhbWVUb29scy5iYWNrTXVzaWNJc1BsYXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIEdhbWVUb29scy5iYWNrTXVzaWNJc1BsYXkgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KGNjLnVybC5yYXcoJ3Jlc291cmNlcy9zb3VuZHMvYmFja011c2ljLm1wMycpLCB0cnVlLCAwLjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdG9wQmFja2dyb3VuZE11c2ljOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSk7XG4gICAgICAgICAgICBHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgdmFsdWVzID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmICh2YWx1ZXMgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZXMgPT09IG51bGwgfHwgdmFsdWVzID09PSAnJykge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJ0cnVlXCIgPT0gdmFsdWVzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH0sXG4gICAgc2V0SXRlbUJ5TG9jYWxTdG9yYWdlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgfSxcbiAgICB0b2FzdE1lc3NhZ2UodG9hc3RUeXBlKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvU2hvd01lc3NhZ2VcIiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpLnRvYXN0VHlwZSA9IHRvYXN0VHlwZTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmNoaWxkcmVuWzBdLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLCBzaGFyZVBpY3R1cmUocGljdHVyZU5hbWUpIHtcbiAgICAgICAgbGV0IHRpdGxlU3RyID0gJ+adpei3n+aIkeS4gOi1t+aMkeaImOa1qua8qzIwNDjlkKfjgIInO1xuICAgICAgICBpZiAoXCJzaGFyZVRpY2tldFwiID09IHBpY3R1cmVOYW1lKSB7XG4gICAgICAgICAgICB0aXRsZVN0ciA9IFwi55yL55yL5L2g5Zyo576k6YeM5o6S56ys5Yeg77yf5p2l5ZKM5oiR5oyR5oiY5rWq5ryrMjA0OOWQp+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKFwiTG90dGVyeUxheWVyXCIgPT0gcGljdHVyZU5hbWUpIHsvL+aKveWllumhtemdouWIhuS6q1xuICAgICAgICAgICAgdGl0bGVTdHIgPSBcIua1qua8qzIwNDjnpo/liKnlpKfmlL7pgIHvvIHlv6vov5vmnaXmir3lpZblkKfvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChwaWN0dXJlTmFtZSAhPSB1bmRlZmluZWQgJiYgcGljdHVyZU5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGl0bGVTdHIgPSBcIuaIkeW+l+S6hlwiICsgcGljdHVyZU5hbWUgKyBcIuWIhixcIiArIHRpdGxlU3RyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICB3aW5kb3cud3guc2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVTdHIsXG4gICAgICAgICAgICAgICAgcXVlcnk6IFwieD1cIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogY2FudmFzLnRvVGVtcEZpbGVQYXRoU3luYyh7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RXaWR0aDogNTAwLFxuICAgICAgICAgICAgICAgICAgICBkZXN0SGVpZ2h0OiA0MDBcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc2hhcmVUaWNrZXRzICE9IHVuZGVmaW5lZCAmJiByZXMuc2hhcmVUaWNrZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInNoYXJlVGlja2V0XCIgPT0gcGljdHVyZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTUFJTl9NRU5VX05VTTogR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNID09IC0xMDAwID8gMSA6IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVUaWNrZXQ6IHJlcy5zaGFyZVRpY2tldHNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwi5omn6KGM5LqG5oiq5Zu+XCIgKyB0aXRsZVN0cik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldEdhbWVJbnRlZ3JhbCgpIHsgLy/ojrflj5bnp6/liIZcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZUludGVncmFsXCIsIDApO1xuICAgIH0sXG4gICAgc2V0R2FtZUludGVncmFsKGludHJncmFsKSB7IC8vIOiuvue9ruenr+WIhlxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJHYW1lSW50ZWdyYWxcIiwgaW50cmdyYWwpO1xuICAgIH1cbiAgICAsIGNvbW1lbnRHYW1lKCkgeyAvL+ivhOiuulxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgd2luZG93Lnd4Lm9wZW5DdXN0b21lclNlcnZpY2VDb252ZXJzYXRpb24oe30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2FzdE1lc3NhZ2UoMSk7XG4gICAgICAgICAgICBjYy5sb2coXCLmiafooYzkuobor4TorrpcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICAsIGNoZWNrRmlyc3RMb2dpbkdhbWUoKSB7IC8v5qOA5p+l5piv5ZCm6aaW5qyh55m75b2VXG4gICAgICAgIGxldCBsb2dpbkRhdGUgPSBNYXRoLmZsb29yKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG5ldyBEYXRlKDIwMTgsIDMsIDE4LCAwLCAwLCAwLCAwKS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgaWYgKGxvZ2luRGF0ZSA+IHRoaXMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiRmlyc3RFbnRlckdhbWVEYXRlXCIsIDApKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJGaXJzdEVudGVyR2FtZURhdGVcIiwgbG9naW5EYXRlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZUludGVncmFsKHRoaXMuZ2V0R2FtZUludGVncmFsKCkgKyAxMDApO1xuICAgICAgICAgICAgICAgIHRoaXMudG9hc3RNZXNzYWdlKDkpO1xuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAsIHNldENhcmRCYWNrUGF0aChudW0pLy/orr7nva7ljaHniYfog4zmma/ot6/lvoRcbiAgICB7XG4gICAgICAgIC8vR2FtZUNvbmZpZy5zZXRDYXJkQmFja1BhdGgobnVtLCBcImNhcmQvbmwyMDQ4LnBuZ1wiKTtcbiAgICB9XG5cbiAgICAsIHVzZXJMb2dpbigpIHsgLy/nlKjmiLfnmbvlvZVcbiAgICB9XG5cbiAgICAsIGdldFJhbmtEYXRhKHNoYXJlVGlja2V0KSB7IC8v6I635Y+W5o6S6KGM5qacXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvUmFua2luZ0xpc3RWaWV3XCIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXJlVGlja2V0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5Db21wb25lbnQpLnNoYXJlVGlja2V0ID0gc2hhcmVUaWNrZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24oY2MucCgwLCAwKSk7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgICwgcmVtb3ZlUmFua0RhdGEoKSB7Ly/np7vpmaTmjpLooYzmppzmlbDmja5cbiAgICAgICAgaWYgKENDX1dFQ0hBVEdBTUUpIHtcbiAgICAgICAgICAgIHdpbmRvdy53eC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuenu+mZpOaOkuihjOamnOaVsOaNruOAglwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAsIHN1Ym1pdFNjb3JlKHNjb3JlKSB7IC8v5o+Q5Lqk5b6X5YiGXG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiAzLFxuICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcbiAgICAgICAgICAgICAgICBzY29yZTogc2NvcmUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuaPkOS6pOW+l+WIhjpcIiArIEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSArIFwiIDogXCIgKyBzY29yZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgICwgZ2V0U2VsZWN0QWRkTnVtKG51bSkgLy/ojrflj5blj6DliqDmlbBcbiAgICB7XG4gICAgICAgIGlmIChudW0gPCA0KSB7XG4gICAgICAgICAgICBudW0gPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDgpIHtcbiAgICAgICAgICAgIG51bSA9IDQ7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMTYpIHtcbiAgICAgICAgICAgIG51bSA9IDg7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgMzIpIHtcbiAgICAgICAgICAgIG51bSA9IDE2O1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDY0KSB7XG4gICAgICAgICAgICBudW0gPSAzMjtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAxMjgpIHtcbiAgICAgICAgICAgIG51bSA9IDY0O1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDI1Nikge1xuICAgICAgICAgICAgbnVtID0gMTI4O1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDUxMikge1xuICAgICAgICAgICAgbnVtID0gMjU2O1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDEwMjQpIHtcbiAgICAgICAgICAgIG51bSA9IDUxMjtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAyMDQ4KSB7XG4gICAgICAgICAgICBudW0gPSAxMDI0O1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDQwOTYpIHtcbiAgICAgICAgICAgIG51bSA9IDIwNDg7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgODE5Mikge1xuICAgICAgICAgICAgbnVtID0gNDA5NjtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAxNjM4NCkge1xuICAgICAgICAgICAgbnVtID0gODE5MjtcbiAgICAgICAgfSBlbHNlIGlmIChudW0gPCAzMjc2OCkge1xuICAgICAgICAgICAgbnVtID0gMTYzODQ7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtIDwgNjU1MzYpIHtcbiAgICAgICAgICAgIG51bSA9IDMyNzY4O1xuICAgICAgICB9IGVsc2UgaWYgKG51bSA8IDEzMTA3Mikge1xuICAgICAgICAgICAgbnVtID0gNjU1MzY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW0gPSAxMzEwNzI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVUb29sczsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b71benT1ABC0aPZ2HVTgCte', 'GameScene');
// Script/GameScene.js

"use strict";

var GamePopStar = require("GamePopStar");

var GameData = require("GameData");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var GameConfig = require("GameConfig");

var AnimLayerTool = require("AnimLayerTool");

var GameScene = cc.Class({
  "extends": cc.Component,
  properties: {
    layerBack: cc.Sprite,
    backButton: cc.Node,
    //返回按钮
    cardNumberTTF: cc.Label,
    // 显示分数控件
    bestScoreTTF: cc.Label,
    // 显示最高分数控件
    progressBar: cc.Node,
    //进度条
    passNumTTF: cc.Label,
    //关数
    propMenu: [cc.Node],
    //道具按钮
    currentScore: 0,
    //当前得分
    isAddScore: false,
    //是否加分
    gameLogicLayer: cc.Node
  },
  ctor: function ctor() {
    GameConfig.GameScene = this;
    GameTools.playBackgroundMusic();
  },
  onLoad: function onLoad() {
    GameConfig.GameLogic = new GamePopStar();
    this.gameLogicLayer.addChild(GameConfig.GameLogic);
    this.currentScore = GameData.score0;
    this.cardNumberTTF.string = GameData.score0;
    this.bestScoreTTF.string = GameData.getGamePassScore();
    this.passNumTTF.string = "第 " + GameData.getGamePassNum() + " 关";
    GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
    GameUiTools.setButtonClickEvents(this, this.propMenu, "functionMenuTouchFunc");
  },
  start: function start() {},
  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.loadingResource();
  },
  functionMenuTouchFunc: function functionMenuTouchFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    var button = event.target;

    if (this.propMenu[0] == button) {
      if (GameData.getGamePropNumber(0) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuDestroyCard;
      } else {
        this.showGamePropHelp(0);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else if (this.propMenu[1] == button) {
      if (GameData.getGamePropNumber(1) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuRemoveAcross;
      } else {
        this.showGamePropHelp(1);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else if (this.propMenu[2] == button) {
      if (GameData.getGamePropNumber(2) >= 1) {
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuExchangeCard;
      } else {
        this.showGamePropHelp(2);
        GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
      }
    } else {
      GameConfig.propsMenu = GameConfig.PropsMenu.PropsMenuSpace;
    }
  },
  showGamePropHelp: function showGamePropHelp(propType) {
    cc.loader.loadRes("panel/GamePropHelp", function (err, prefab) {
      var node = cc.instantiate(prefab);
      node.getComponent("GamePropHelp").setPropType(propType);
      cc.director.getScene().children[0].addChild(node);
    });
  },
  setGamePropNumber: function setGamePropNumber(propType) {
    console.log("00000000000000-------");
    this.propMenu[propType].getComponent("GamePropNode").setPropType();
  },
  setScore: function setScore(score) {
    if (this.currentScore > score) {
      this.currentScore = score;
      this.cardNumberTTF.string = this.currentScore;
    } else {
      this.isAddScore = true;
    }

    if (score > GameData.heightScore) {
      GameData.heightScore = score;
    }

    this.progressBar.scaleX = score / GameData.getGamePassScore() * 0.8;

    if (this.progressBar.scaleX > 0.9) {
      this.progressBar.scaleX = 0.9;
    }
  },
  update: function update(dt) {
    if (this.isAddScore && this.currentScore <= GameData.score0) {
      this.cardNumberTTF.string = this.currentScore++;
      this.currentScore++;
    } else {
      this.isAddScore = false;
    }
  },
  setPassNum: function setPassNum() {
    this.passNumTTF.string = "第 " + GameData.getGamePassNum() + " 关";
    this.bestScoreTTF.string = GameData.getGamePassScore();
  },
  loadingResource: function loadingResource() {
    GameTools.stopBackgroundMusic();
    GameConfig.loadingSceneType = GameConfig.LoadingSceneType.LoadingSceneBackGame;
    cc.director.loadScene("LoadingScene");
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lU2NlbmUuanMiXSwibmFtZXMiOlsiR2FtZVBvcFN0YXIiLCJyZXF1aXJlIiwiR2FtZURhdGEiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsIkdhbWVDb25maWciLCJBbmltTGF5ZXJUb29sIiwiR2FtZVNjZW5lIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYXllckJhY2siLCJTcHJpdGUiLCJiYWNrQnV0dG9uIiwiTm9kZSIsImNhcmROdW1iZXJUVEYiLCJMYWJlbCIsImJlc3RTY29yZVRURiIsInByb2dyZXNzQmFyIiwicGFzc051bVRURiIsInByb3BNZW51IiwiY3VycmVudFNjb3JlIiwiaXNBZGRTY29yZSIsImdhbWVMb2dpY0xheWVyIiwiY3RvciIsInBsYXlCYWNrZ3JvdW5kTXVzaWMiLCJvbkxvYWQiLCJHYW1lTG9naWMiLCJhZGRDaGlsZCIsInNjb3JlMCIsInN0cmluZyIsImdldEdhbWVQYXNzU2NvcmUiLCJnZXRHYW1lUGFzc051bSIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic3RhcnQiLCJiYWNrQnV0dG9uRnVuYyIsImV2ZW50IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwibG9hZGluZ1Jlc291cmNlIiwiZnVuY3Rpb25NZW51VG91Y2hGdW5jIiwiYnV0dG9uIiwidGFyZ2V0IiwiZ2V0R2FtZVByb3BOdW1iZXIiLCJwcm9wc01lbnUiLCJQcm9wc01lbnUiLCJQcm9wc01lbnVEZXN0cm95Q2FyZCIsInNob3dHYW1lUHJvcEhlbHAiLCJQcm9wc01lbnVTcGFjZSIsIlByb3BzTWVudVJlbW92ZUFjcm9zcyIsIlByb3BzTWVudUV4Y2hhbmdlQ2FyZCIsInByb3BUeXBlIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInByZWZhYiIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsInNldFByb3BUeXBlIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNoaWxkcmVuIiwic2V0R2FtZVByb3BOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwic2V0U2NvcmUiLCJzY29yZSIsImhlaWdodFNjb3JlIiwic2NhbGVYIiwidXBkYXRlIiwiZHQiLCJzZXRQYXNzTnVtIiwic3RvcEJhY2tncm91bmRNdXNpYyIsImxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVUeXBlIiwiTG9hZGluZ1NjZW5lQmFja0dhbWUiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJSSxVQUFVLEdBQUdKLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlLLGFBQWEsR0FBR0wsT0FBTyxDQUFDLGVBQUQsQ0FBM0I7O0FBQ0EsSUFBSU0sU0FBUyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNyQixXQUFTRCxFQUFFLENBQUNFLFNBRFM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxTQUFTLEVBQUVKLEVBQUUsQ0FBQ0ssTUFETjtJQUVSQyxVQUFVLEVBQUVOLEVBQUUsQ0FBQ08sSUFGUDtJQUVhO0lBQ3JCQyxhQUFhLEVBQUVSLEVBQUUsQ0FBQ1MsS0FIVjtJQUdnQjtJQUN4QkMsWUFBWSxFQUFFVixFQUFFLENBQUNTLEtBSlQ7SUFJZTtJQUN2QkUsV0FBVyxFQUFFWCxFQUFFLENBQUNPLElBTFI7SUFLYTtJQUNyQkssVUFBVSxFQUFFWixFQUFFLENBQUNTLEtBTlA7SUFNYTtJQUNyQkksUUFBUSxFQUFFLENBQUNiLEVBQUUsQ0FBQ08sSUFBSixDQVBGO0lBT1k7SUFFcEJPLFlBQVksRUFBRSxDQVROO0lBU1E7SUFDaEJDLFVBQVUs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QUwsQ0FBaUJrRCxNQUFqQixHQUEwQkYsS0FBSyxHQUFJakUsUUFBUSxDQUFDOEIsZ0JBQVQsRUFBVCxHQUF3QyxHQUFsRTs7SUFDQSxJQUFJLEtBQUtiLFdBQUwsQ0FBaUJrRCxNQUFqQixHQUEwQixHQUE5QixFQUFtQztNQUMvQixLQUFLbEQsV0FBTCxDQUFpQmtELE1BQWpCLEdBQTBCLEdBQTFCO0lBQ0g7RUFDSixDQTNGb0I7RUE0RnJCQyxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztJQUNsQixJQUFJLEtBQUtoRCxVQUFMLElBQW1CLEtBQUtELFlBQUwsSUFBcUJwQixRQUFRLENBQUM0QixNQUFyRCxFQUE2RDtNQUN6RCxLQUFLZCxhQUFMLENBQW1CZSxNQUFuQixHQUE0QixLQUFLVCxZQUFMLEVBQTVCO01BQ0EsS0FBS0EsWUFBTDtJQUNILENBSEQsTUFHTztNQUNILEtBQUtDLFVBQUwsR0FBa0IsS0FBbEI7SUFDSDtFQUNKLENBbkdvQjtFQW9HckJpRCxVQXBHcUIsd0JBb0dSO0lBQ1QsS0FBS3BELFVBQUwsQ0FBZ0JXLE1BQWhCLEdBQXlCLE9BQU83QixRQUFRLENBQUMrQixjQUFULEVBQVAsR0FBbUMsSUFBNUQ7SUFDQSxLQUFLZixZQUFMLENBQWtCYSxNQUFsQixHQUEyQjdCLFFBQVEsQ0FBQzhCLGdCQUFULEVBQTNCO0VBQ0gsQ0F2R29CO0VBd0dyQk8sZUFBZSxFQUFFLDJCQUFZO0lBQ3pCcEMsU0FBUyxDQUFDc0UsbUJBQVY7SUFDQXBFLFVBQVUsQ0FBQ3FFLGdCQUFYLEdBQThCckUsVUFBVSxDQUFDc0UsZ0JBQVgsQ0FBNEJDLG9CQUExRDtJQUNBcEUsRUFBRSxDQUFDb0QsUUFBSCxDQUFZaUIsU0FBWixDQUFzQixjQUF0QjtFQUNIO0FBNUdvQixDQUFULENBQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZVBvcFN0YXIgPSByZXF1aXJlKFwiR2FtZVBvcFN0YXJcIik7XG52YXIgR2FtZURhdGEgPSByZXF1aXJlKFwiR2FtZURhdGFcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcbnZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgQW5pbUxheWVyVG9vbCA9IHJlcXVpcmUoXCJBbmltTGF5ZXJUb29sXCIpO1xudmFyIEdhbWVTY2VuZSA9IGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYXllckJhY2s6IGNjLlNwcml0ZSxcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSwgLy/ov5Tlm57mjInpkq5cbiAgICAgICAgY2FyZE51bWJlclRURjogY2MuTGFiZWwsLy8g5pi+56S65YiG5pWw5o6n5Lu2XG4gICAgICAgIGJlc3RTY29yZVRURjogY2MuTGFiZWwsLy8g5pi+56S65pyA6auY5YiG5pWw5o6n5Lu2XG4gICAgICAgIHByb2dyZXNzQmFyOiBjYy5Ob2RlLC8v6L+b5bqm5p2hXG4gICAgICAgIHBhc3NOdW1UVEY6IGNjLkxhYmVsLC8v5YWz5pWwXG4gICAgICAgIHByb3BNZW51OiBbY2MuTm9kZV0sLy/pgZPlhbfmjInpkq5cblxuICAgICAgICBjdXJyZW50U2NvcmU6IDAsLy/lvZPliY3lvpfliIZcbiAgICAgICAgaXNBZGRTY29yZTogZmFsc2UsLy/mmK/lkKbliqDliIZcblxuICAgICAgICBnYW1lTG9naWNMYXllcjogY2MuTm9kZSxcbiAgICB9LFxuICAgIGN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUgPSB0aGlzO1xuICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xuICAgIH0sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljID0gbmV3IEdhbWVQb3BTdGFyKCk7XG4gICAgICAgIHRoaXMuZ2FtZUxvZ2ljTGF5ZXIuYWRkQ2hpbGQoR2FtZUNvbmZpZy5HYW1lTG9naWMpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFNjb3JlID0gR2FtZURhdGEuc2NvcmUwO1xuICAgICAgICB0aGlzLmNhcmROdW1iZXJUVEYuc3RyaW5nID0gR2FtZURhdGEuc2NvcmUwO1xuICAgICAgICB0aGlzLmJlc3RTY29yZVRURi5zdHJpbmcgPSBHYW1lRGF0YS5nZXRHYW1lUGFzc1Njb3JlKCk7XG4gICAgICAgIHRoaXMucGFzc051bVRURi5zdHJpbmcgPSBcIuesrCBcIiArIEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCkgKyBcIiDlhbNcIjtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJhY2tCdXR0b25GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnByb3BNZW51LCBcImZ1bmN0aW9uTWVudVRvdWNoRnVuY1wiKTtcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuICAgIH0sXG4gICAgYmFja0J1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICB0aGlzLmxvYWRpbmdSZXNvdXJjZSgpO1xuICAgIH0sXG4gICAgZnVuY3Rpb25NZW51VG91Y2hGdW5jOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgwKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMucHJvcE1lbnVbMF0gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuZ2V0R2FtZVByb3BOdW1iZXIoMCkgPj0gMSkge1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51RGVzdHJveUNhcmQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dhbWVQcm9wSGVscCgwKTtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcE1lbnVbMV0gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuZ2V0R2FtZVByb3BOdW1iZXIoMSkgPj0gMSkge1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51UmVtb3ZlQWNyb3NzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHYW1lUHJvcEhlbHAoMSk7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5wcm9wc01lbnUgPSBHYW1lQ29uZmlnLlByb3BzTWVudS5Qcm9wc01lbnVTcGFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BNZW51WzJdID09IGJ1dHRvbikge1xuICAgICAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKDIpID49IDEpIHtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudUV4Y2hhbmdlQ2FyZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R2FtZVByb3BIZWxwKDIpO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcucHJvcHNNZW51ID0gR2FtZUNvbmZpZy5Qcm9wc01lbnUuUHJvcHNNZW51U3BhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnByb3BzTWVudSA9IEdhbWVDb25maWcuUHJvcHNNZW51LlByb3BzTWVudVNwYWNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG93R2FtZVByb3BIZWxwKHByb3BUeXBlKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvR2FtZVByb3BIZWxwXCIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoXCJHYW1lUHJvcEhlbHBcIikuc2V0UHJvcFR5cGUocHJvcFR5cGUpO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRHYW1lUHJvcE51bWJlcihwcm9wVHlwZSkge1xuXHRcdGNvbnNvbGUubG9nKFwiMDAwMDAwMDAwMDAwMDAtLS0tLS0tXCIpO1xuICAgICAgICB0aGlzLnByb3BNZW51W3Byb3BUeXBlXS5nZXRDb21wb25lbnQoXCJHYW1lUHJvcE5vZGVcIikuc2V0UHJvcFR5cGUoKTtcbiAgICB9LFxuICAgIHNldFNjb3JlOiBmdW5jdGlvbiAoc2NvcmUpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICB0aGlzLmNhcmROdW1iZXJUVEYuc3RyaW5nID0gdGhpcy5jdXJyZW50U2NvcmU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQWRkU2NvcmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzY29yZSA+IEdhbWVEYXRhLmhlaWdodFNjb3JlKSB7XG4gICAgICAgICAgICBHYW1lRGF0YS5oZWlnaHRTY29yZSA9IHNjb3JlO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5zY2FsZVggPSBzY29yZSAvIChHYW1lRGF0YS5nZXRHYW1lUGFzc1Njb3JlKCkpICogMC44O1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jhci5zY2FsZVggPiAwLjkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuc2NhbGVYID0gMC45O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZiAodGhpcy5pc0FkZFNjb3JlICYmIHRoaXMuY3VycmVudFNjb3JlIDw9IEdhbWVEYXRhLnNjb3JlMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkTnVtYmVyVFRGLnN0cmluZyA9IHRoaXMuY3VycmVudFNjb3JlKys7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY29yZSsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0FkZFNjb3JlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldFBhc3NOdW0oKSB7XG4gICAgICAgIHRoaXMucGFzc051bVRURi5zdHJpbmcgPSBcIuesrCBcIiArIEdhbWVEYXRhLmdldEdhbWVQYXNzTnVtKCkgKyBcIiDlhbNcIjtcbiAgICAgICAgdGhpcy5iZXN0U2NvcmVUVEYuc3RyaW5nID0gR2FtZURhdGEuZ2V0R2FtZVBhc3NTY29yZSgpO1xuICAgIH0sXG4gICAgbG9hZGluZ1Jlc291cmNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVUb29scy5zdG9wQmFja2dyb3VuZE11c2ljKCk7XG4gICAgICAgIEdhbWVDb25maWcubG9hZGluZ1NjZW5lVHlwZSA9IEdhbWVDb25maWcuTG9hZGluZ1NjZW5lVHlwZS5Mb2FkaW5nU2NlbmVCYWNrR2FtZTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9hZGluZ1NjZW5lXCIpO1xuICAgIH0sXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AnimLayerTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcf6e/4kv9KYrR4VIQPHtsC', 'AnimLayerTool');
// Script/AnimLayerTool.js

"use strict";

var CardSprite = require("CardSprite");

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var DEVICE_WIDTH = GameConfig.DEVICE_WIDTH;
var DEVICE_HEIGHT = GameConfig.DEVICE_HEIGHT;
var MoveButtonAnimType = {
  up: 0,
  //向上
  down: 1,
  //向下
  left: 2,
  //向左
  right: 3,
  //向右
  leftUp: 4,
  //左上
  leftDown: 5,
  //左下
  rightUp: 6,
  //右上
  rightDown: 7 //右下

};
var AnimLayerTool = {
  moveButtonAnimTime: 0.3,
  // 按钮动画移动时间
  MoveButtonAnimType: MoveButtonAnimType,
  bottonAnim: function bottonAnim(button) {
    // 创建按钮特效
    var arrayNode = new Array();

    if (button.length == undefined) {
      arrayNode[0] = button;
    } else {
      arrayNode = button;
    }

    for (var i = 0; i < arrayNode.length; i++) {
      // let time = cc.random0To1() * 5 + 1;
      var time = Math.random() * 5 + 1;
      var width = arrayNode[i].height / 20.0;
      var anim1 = cc.jumpBy(time, cc.v2(width, 0), width, 1);
      var anim2 = cc.jumpBy(time, cc.v2(-width, 0), -width, 1);
      var anim3 = cc.scaleBy(0.3, 1.1, 0.9);
      var anim4 = cc.delayTime(time);
      var actions = cc.sequence(anim1, anim2, anim3, anim3.reverse(), anim4);
      arrayNode[i].runAction(actions.repeatForever());
    }
  },
  createShowMessageBox: function createShowMessageBox(x, y, name, rotation, parentNode) {},
  createShowMessageBoxAward: function createShowMessageBoxAward(parentNode, engineType) //创建奖励消息提示框
  {
    var message = new cc.Node();

    if (engineType == -1) {// message.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame("toast6");
    } else if (engineType < 6) {
      return;
    } else if (engineType < 8) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_good", message.addComponent(cc.Sprite));
    } else if (engineType < 10) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_cool", message.addComponent(cc.Sprite));
    } else if (engineType < 12) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_verygood", message.addComponent(cc.Sprite));
    } else if (engineType < 14) {
      GameUiTools.getSpriteFrame("pop_nopack/txt_smart", message.addComponent(cc.Sprite));
    } else {
      GameUiTools.getSpriteFrame("pop_nopack/txt_boom", message.addComponent(cc.Sprite));
    }

    GameTools.playSimpleAudioEngine(3);
    message.setPosition(0, 0); // message.setOpacity(0);

    message.opacity = 0;
    parentNode.addChild(message);
    var action1 = cc.fadeIn(0.5);
    var action2 = cc.delayTime(1);
    var action3 = cc.fadeOut(0.5);
    var moveFinish = cc.callFunc(this.callFuncAddScore, this, message);
    var action4 = cc.sequence(action1, action2, action3, moveFinish);
    message.runAction(action4);
  },
  moveButtonAnim: function moveButtonAnim(button, isShow, moveButtonAnimType) {
    // 按钮消失或出现动画
    var positionX = button.x;
    var positionY = button.y;
    var size = button.getContentSize();

    if (isShow) {
      switch (moveButtonAnimType) {
        case 0:
          // up:
          button.setPosition(positionX, DEVICE_HEIGHT + size.height);
          break;

        case 1:
          // down:
          button.setPosition(positionX, -size.height);
          break;

        case 2:
          // left:
          button.setPosition(-size.width, positionY);
          break;

        case 3:
          // right:
          button.setPosition(DEVICE_WIDTH + size.width, positionY);
          break;

        case 4:
          // leftUp:
          button.setPosition(-size.width, DEVICE_HEIGHT + size.height);
          break;

        case 5:
          // leftDown:
          button.setPosition(-size.width, -size.height);
          break;

        case 6:
          // rightUp:
          button.setPosition(DEVICE_WIDTH + size.width, DEVICE_HEIGHT + size.height);
          break;

        case 7:
          // rightDown:
          button.setPosition(DEVICE_WIDTH + size.width, -size.height);
          break;

        default:
          break;
      }

      var anim1 = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, positionY));
      button.runAction(anim1);
    } else {
      var _anim;

      switch (moveButtonAnimType) {
        case 0:
          // up:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, DEVICE_HEIGHT + size.height));
          break;

        case 1:
          // down:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(positionX, -size.height));
          break;

        case 2:
          // left:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, positionY));
          break;

        case 3:
          // right:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, positionY));
          break;

        case 4:
          // leftUp:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, DEVICE_HEIGHT + size.height));
          break;

        case 5:
          // leftDown:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(-size.width, -size.height));
          break;

        case 6:
          // rightUp:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, DEVICE_HEIGHT + size.height));
          break;

        case 7:
          // rightDown:
          _anim = cc.moveTo(this.moveButtonAnimTime, cc.v2(DEVICE_WIDTH + size.width, -size.height));
          break;

        default:
          break;
      }

      button.runAction(_anim);
    }
  },
  createAddScore: function createAddScore(addScore) //创建加分动画
  {
    var addScoreSprite = new cc.Node();
    var lable = addScoreSprite.addComponent(cc.Label);
    lable.font = GameTools.numberLabelAtlas;
    lable.string = ":" + addScore;
    addScoreSprite.setPosition(-46, 505); // addScoreSprite.setOpacity(100);

    addScoreSprite.opacity = 0;
    GameConfig.GameScene.node.addChild(addScoreSprite);
    var move1 = cc.moveBy(0.3, 0, 106);
    var move2 = cc.fadeIn(0.2);
    var move3 = cc.spawn(move1, move2);
    var moveFinish = cc.callFunc(this.callFuncAddScore, this, addScoreSprite);
    addScoreSprite.runAction(cc.sequence(move3, moveFinish));
  },
  callFuncAddScore: function callFuncAddScore(sender, node) //创建加分动画监听
  {
    sender.destroy();
  },
  createScoreMoveAnim: function createScoreMoveAnim(from, score, scoreType) {
    //创建得分移动动画
    if (score > 0) {
      var scoreNumberTTF = new cc.Node();
      var lable = scoreNumberTTF.addComponent(cc.Label);
      lable.font = GameTools.numberLabelAtlas;
      lable.string = ":" + score;
      scoreNumberTTF.setPosition(from.x, from.y);
      from.getParent().addChild(scoreNumberTTF);
      var moveFinish = cc.callFunc(this.callFuncScoreMoveAnim, this, scoreNumberTTF);
      var move1 = null;

      if (scoreType) {
        move1 = cc.moveTo(1, 58 + 360, 408 + 640);
      } else {
        move1 = cc.moveTo(1, -259 + 360, 290 + 640);
      }

      move1.easing(cc.easeExponentialIn());
      scoreNumberTTF.runAction(cc.sequence(move1, moveFinish));
    }
  },
  callFuncScoreMoveAnim: function callFuncScoreMoveAnim(sender, scoreNumberTTF) {
    //得分移动动画监听
    GameConfig.GameLogic.setScore();
    scoreNumberTTF.destroy();
  },
  createChangeCardNumAnim: function createChangeCardNumAnim(card, num) //创建移除动画
  {
    var cardSprite = CardSprite.createCardSprite(card.getNumber(), card.getPositionX(), card.getPositionY());
    card.getParent().addChild(cardSprite);
    card.active = false;
    card.setNumber(num);
    cardSprite.setNumber(num);
    var action2 = cc.scaleTo(0.3, 0);
    action2.easing(cc.easeBackIn());
    var action3 = cc.scaleTo(0.1, 1);
    var moveFinish1 = cc.callFunc(this.callFuncChangeCardNum1, this, cardSprite);
    var moveFinish2 = cc.callFunc(this.callFuncChangeCardNum2, this, [cardSprite, card]);
    var actions = cc.sequence(action2, moveFinish1, action3, moveFinish2);
    cardSprite.runAction(actions);
  },
  callFuncChangeCardNum1: function callFuncChangeCardNum1(sender, cardSprite) //卡片移除特效监听
  {
    cardSprite.CardShow();
  },
  callFuncChangeCardNum2: function callFuncChangeCardNum2(sender, funData) //卡片移除特效监听
  {
    var cardSprite = funData[0];
    var card = funData[1];
    card.CardShow();
    card.active = true;
    cardSprite.destroy();
  },
  createExchangeCardAnim: function createExchangeCardAnim(card, z, x) //创建道具交换特效
  {
    var X = card.getPositionX();
    var Y = card.getPositionY();
    var unitSize = GameConfig.CARD_WIDTH / (GameConfig.CAED_LINES + 1);
    var move1 = cc.scaleBy(0.4, 1.15);
    var actions = cc.sequence(move1, move1.reverse());

    if (z > 0) {
      var card1 = CardSprite.createCardSprite(-1, X - unitSize - GameConfig.CARD_WIDTH, Y);
      card.getParent().addChild(card1);
      card1.runAction(actions.clone().repeatForever());
    }

    if (z < GameConfig.CAED_LINES - 1) {
      var card2 = CardSprite.createCardSprite(-1, X + unitSize + GameConfig.CARD_WIDTH, Y);
      card.getParent().addChild(card2);
      card2.runAction(actions.clone().repeatForever());
    }

    if (x > 0) {
      var card3 = CardSprite.createCardSprite(-1, X, Y - unitSize - GameConfig.CARD_WIDTH);
      card.getParent().addChild(card3);
      card3.runAction(actions.clone().repeatForever());
    }

    if (x < GameConfig.CAED_LINES - 1) {
      var card4 = CardSprite.createCardSprite(-1, X, Y + unitSize + GameConfig.CARD_WIDTH);
      card.getParent().addChild(card4);
      card4.runAction(actions.clone().repeatForever());
    }
  },
  createRemoveExchangeCardAnim: function createRemoveExchangeCardAnim(card, z, x) //创建道具移除交换特效
  {
    if (z > 0) {
      card.getParent().removeChildByTag(2001);
    }

    if (z < GameConfig.CAED_LINES - 1) {
      card.getParent().removeChildByTag(2002);
    }

    if (x > 0) {
      card.getParent().removeChildByTag(2003);
    }

    if (x < GameConfig.CAED_LINES - 1) {
      card.getParent().removeChildByTag(2004);
    }
  },
  createScaleToCard: function createScaleToCard(card) {
    // 创建卡片初始化动画
    var cardSprite = CardSprite.createCardSprite(card.number, card.x, card.y);
    card.getParent().addChild(cardSprite);
    card.active = false;
    cardSprite.setScale(0);
    var action2 = cc.scaleTo(0.3, 1);
    action2.easing(cc.easeBackOut());
    var moveFinish = cc.callFunc(this.callFuncCard1, this, [cardSprite, card]);
    cardSprite.runAction(cc.sequence(action2, moveFinish));
  },
  callFuncCard1: function callFuncCard1(node, cardSprite) {
    cardSprite[1].CardShow();
    cardSprite[1].active = true;
    cardSprite[0].destroy();
  },
  createMoveAnim: function createMoveAnim(from, to, isShowAnim) {
    var cardSprite = CardSprite.createCardSprite(from.number, from.x, from.y);
    to.getParent().addChild(cardSprite);
    var i = 0;
    var moveFinish = cc.callFunc(this.callFuncCard2, this, [cardSprite, to, isShowAnim]);
    var move1 = cc.moveTo(0.3, cc.v2(to.x, to.y));

    if (i < 1) {
      move1 = cc.moveTo(0.1, cc.v2(to.x, to.y));
    } else if (i < 2) {
      move1.easing(cc.easeBackIn());
    } else if (i < 3) {
      move1.easing(cc.easeBackOut());
    } else if (i < 4) {
      move1.easing(cc.easeBackInOut());
    } else if (i < 5) {
      move1 = cc.jumpTo(0.3, cc.v2(to.x, to.y), GameConfig.CARD_WIDTH, 2);
    }

    cardSprite.runAction(cc.sequence(move1, moveFinish));
  },
  callFuncCard2: function callFuncCard2(sender, to) {
    to[1].CardShow();

    if (to[2]) {
      to[0].number = to[1].number;
      to[0].CardShow();
      var scale = cc.scaleBy(0.02, 1.15);
      var moveFinish = cc.callFunc(this.callFuncCard3, this, to[0]);
      to[0].runAction(cc.sequence(scale, scale.reverse(), moveFinish));
    } else {
      to[0].destroy();
    }
  },
  callFuncCard3: function callFuncCard3(sender, card) {
    card.destroy();
  },
  createPopStarAnim: function createPopStarAnim(from, dTime) //创建卡片爆炸特效
  {
    var moveFinish2 = cc.callFunc(this.callFuncPopStarAnim, this, from); // from.runAction(cc.sequence(cc.delayTime(dTime), moveFinish2, cc.hide()));

    from.runAction(cc.sequence(cc.delayTime(dTime), moveFinish2, cc.fadeOut()));
  },
  callFuncPopStarAnim: function callFuncPopStarAnim(sender, from) //卡片爆炸特效监听
  {
    GameTools.playSimpleAudioEngine(0);
    var emitterNode = new cc.Node();
    emitterNode.setPosition(from.getPosition());
    var move_emitter = emitterNode.addComponent(cc.ParticleSystem); // let move_emitter = ParticleExplosion.createWithTotalParticles(30);
    // let move_emitter = new cc.ParticleSystem(30);

    switch (from.getNumber()) {
      // case 2:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_yellow";
      //     break;
      // case 4:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_blue";
      //     break;
      // case 8:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_green";
      //     break;
      // case 16:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_red";
      //     break;
      // case 32:
      //     move_emitter.texture = "res/raw-assets/resources/particals/noe/partical_tex_purple";
      //     break;
      case 2:
        move_emitter.texture = "pop_game/n6";
        break;

      case 4:
        move_emitter.texture = "pop_game/n6";
        break;

      case 8:
        move_emitter.texture = "pop_game/n6";
        break;

      case 16:
        move_emitter.texture = "pop_game/n6";
        break;

      case 32:
        move_emitter.texture = "pop_game/n6";
        break;
    }

    move_emitter.startColor = cc.color(255, 255, 255, 255);
    move_emitter.startColorVar = cc.color(0, 0, 0, 0);
    move_emitter.endColorVar = cc.color(0, 0, 0, 0);
    move_emitter.endColor = move_emitter.startColor;
    move_emitter.autoRemoveOnFinish = true;
    move_emitter.duration = 0.1;
    move_emitter.emissionRate = 100;
    move_emitter.life = 2;
    move_emitter.lifeVar = 0.5;
    move_emitter.angle = 90;
    move_emitter.angleVar = 360;
    move_emitter.custom = true;
    move_emitter.playOnLoad = true;
    from.getParent().addChild(emitterNode);
  }
};
module.exports = AnimLayerTool;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBbmltTGF5ZXJUb29sLmpzIl0sIm5hbWVzIjpbIkNhcmRTcHJpdGUiLCJyZXF1aXJlIiwiR2FtZUNvbmZpZyIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiREVWSUNFX1dJRFRIIiwiREVWSUNFX0hFSUdIVCIsIk1vdmVCdXR0b25BbmltVHlwZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImxlZnRVcCIsImxlZnREb3duIiwicmlnaHRVcCIsInJpZ2h0RG93biIsIkFuaW1MYXllclRvb2wiLCJtb3ZlQnV0dG9uQW5pbVRpbWUiLCJib3R0b25BbmltIiwiYnV0dG9uIiwiYXJyYXlOb2RlIiwiQXJyYXkiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpIiwidGltZSIsIk1hdGgiLCJyYW5kb20iLCJ3aWR0aCIsImhlaWdodCIsImFuaW0xIiwiY2MiLCJqdW1wQnkiLCJ2MiIsImFuaW0yIiwiYW5pbTMiLCJzY2FsZUJ5IiwiYW5pbTQiLCJkZWxheVRpbWUiLCJhY3Rpb25zIiwic2VxdWVuY2UiLCJyZXZlcnNlIiwicnVuQWN0aW9uIiwicmVwZWF0Rm9yZXZlciIsImNyZWF0ZVNob3dNZXNzYWdlQm94IiwieCIsInkiLCJuYW1lIiwicm90YXRpb24iLCJwYXJlbnROb2RlIiwiY3JlYXRlU2hvd01lc3NhZ2VCb3hBd2FyZCIsImVuZ2luZVR5cGUiLCJtZXNzYWdlIiwiTm9kZSIsImdldFNwcml0ZUZyYW1lIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic2V0UG9zaXRpb24iLCJvcGFjaXR5IiwiYWRkQ2hpbGQiLCJhY3Rpb24xIiwiZmFkZUluIiwiYWN0aW9uMiIsImFjdGlvbjMiLCJmYWRlT3V0IiwibW92ZUZpbmlzaCIsImNhbGxGdW5jIiwiY2FsbEZ1bmNBZGRTY29yZSIsImFjdGlvbjQiLCJtb3ZlQnV0dG9uQW5pbSIsImlzU2hvdyIsIm1vdmVCdXR0b25BbmltVHlwZSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInNpemUiLCJnZXRDb250ZW50U2l6ZSIsIm1vdmVUbyIsImNyZWF0ZUFkZFNjb3JlIiwiYWRkU2NvcmUiLCJhZGRTY29yZVNwcml0ZSIsImxhYmxlIiwiTGFiZWwiLCJmb250IiwibnVtYmVyTGFiZWxBdGxhcyIsInN0cmluZyIsIkdhbWVTY2VuZSIsIm5vZGUiLCJtb3ZlMSIsIm1vdmVCeSIsIm1vdmUyIiwibW92ZTMiLCJzcGF3biIsInNlbmRlciIsImRlc3Ryb3kiLCJjcmVhdGVTY29yZU1vdmVBbmltIiwiZnJvbSIsInNjb3JlIiwic2NvcmVUeXBlIiwic2NvcmVOdW1iZXJUVEYiLCJnZXRQYXJlbnQiLCJjYWxsRnVuY1Njb3JlTW92ZUFuaW0iLCJlYXNpbmciLCJlYXNlRXhwb25lbnRpYWxJbiIsIkdhbWVMb2dpYyIsInNldFNjb3JlIiwiY3JlYXRlQ2hhbmdlQ2FyZE51bUFuaW0iLCJjYXJkIiwibnVtIiwiY2FyZFNwcml0ZSIsImNyZWF0ZUNhcmRTcHJpdGUiLCJnZXROdW1iZXIiLCJnZXRQb3NpdGlvblgiLCJnZXRQb3NpdGlvblkiLCJhY3RpdmUiLCJzZXROdW1iZXIiLCJzY2FsZVRvIiwiZWFzZUJhY2tJbiIsIm1vdmVGaW5pc2gxIiwiY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMSIsIm1vdmVGaW5pc2gyIiwiY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMiIsIkNhcmRTaG93IiwiZnVuRGF0YSIsImNyZWF0ZUV4Y2hhbmdlQ2FyZEFuaW0iLCJ6IiwiWCIsIlkiLCJ1bml0U2l6ZSIsIkNBUkRfV0lEVEgiLCJDQUVEX0xJTkVTIiwiY2FyZDEiLCJjbG9uZSIsImNhcmQyIiwiY2FyZDMiLCJjYXJkNCIsImNyZWF0ZVJlbW92ZUV4Y2hhbmdlQ2FyZEFuaW0iLCJyZW1vdmVDaGlsZEJ5VGFnIiwiY3JlYXRlU2NhbGVUb0NhcmQiLCJudW1iZXIiLCJzZXRTY2FsZSIsImVhc2VCYWNrT3V0IiwiY2FsbEZ1bmNDYXJkMSIsImNyZWF0ZU1vdmVBbmltIiwidG8iLCJpc1Nob3dBbmltIiwiY2FsbEZ1bmNDYXJkMiIsImVhc2VCYWNrSW5PdXQiLCJqdW1wVG8iLCJzY2FsZSIsImNhbGxGdW5jQ2FyZDMiLCJjcmVhdGVQb3BTdGFyQW5pbSIsImRUaW1lIiwiY2FsbEZ1bmNQb3BTdGFyQW5pbSIsImVtaXR0ZXJOb2RlIiwiZ2V0UG9zaXRpb24iLCJtb3ZlX2VtaXR0ZXIiLCJQYXJ0aWNsZVN5c3RlbSIsInRleHR1cmUiLCJzdGFydENvbG9yIiwiY29sb3IiLCJzdGFydENvbG9yVmFyIiwiZW5kQ29sb3JWYXIiLCJlbmRDb2xvciIsImF1dG9SZW1vdmVPbkZpbmlzaCIsImR1cmF0aW9uIiwiZW1pc3Npb25SYXRlIiwibGlmZSIsImxpZmVWYXIiLCJhbmdsZSIsImFuZ2xlVmFyIiwiY3VzdG9tIiwicGxheU9uTG9hZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJSSxZQUFZLEdBQUdILFVBQVUsQ0FBQ0csWUFBOUI7QUFDQSxJQUFJQyxhQUFhLEdBQUdKLFVBQVUsQ0FBQ0ksYUFBL0I7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRztFQUNyQkMsRUFBRSxFQUFFLENBRGlCO0VBQ2Y7RUFDTkMsSUFBSSxFQUFFLENBRmU7RUFFYjtFQUNSQyxJQUFJLEVBQUUsQ0FIZTtFQUdiO0VBQ1JDLEtBQUssRUFBRSxDQUpjO0VBSVo7RUFDVEMsTUFBTSxFQUFFLENBTGE7RUFLWDtFQUNWQyxRQUFRLEVBQUUsQ0FOVztFQU1UO0VBQ1pDLE9BQU8sRUFBRSxDQVBZO0VBT1Y7RUFDWEMsU0FBUyxFQUFFLENBUlUsQ0FRUjs7QUFS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SCxDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLENBQTFCO0lBQ0FKLFlBQVksQ0FBQ0ssYUFBYixHQUE2QmxJLEVBQUUsQ0FBQ2lJLEtBQUgsQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBN0I7SUFDQUosWUFBWSxDQUFDTSxXQUFiLEdBQTJCbkksRUFBRSxDQUFDaUksS0FBSCxDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUEzQjtJQUNBSixZQUFZLENBQUNPLFFBQWIsR0FBd0JQLFlBQVksQ0FBQ0csVUFBckM7SUFDQUgsWUFBWSxDQUFDUSxrQkFBYixHQUFrQyxJQUFsQztJQUVBUixZQUFZLENBQUNTLFFBQWIsR0FBd0IsR0FBeEI7SUFDQVQsWUFBWSxDQUFDVSxZQUFiLEdBQTRCLEdBQTVCO0lBQ0FWLFlBQVksQ0FBQ1csSUFBYixHQUFvQixDQUFwQjtJQUNBWCxZQUFZLENBQUNZLE9BQWIsR0FBdUIsR0FBdkI7SUFDQVosWUFBWSxDQUFDYSxLQUFiLEdBQXFCLEVBQXJCO0lBQ0FiLFlBQVksQ0FBQ2MsUUFBYixHQUF3QixHQUF4QjtJQUNBZCxZQUFZLENBQUNlLE1BQWIsR0FBc0IsSUFBdEI7SUFDQWYsWUFBWSxDQUFDZ0IsVUFBYixHQUEwQixJQUExQjtJQUNBNUUsSUFBSSxDQUFDSSxTQUFMLEdBQWlCeEMsUUFBakIsQ0FBMEI4RixXQUExQjtFQUNIO0FBbldlLENBQXBCO0FBc1dBbUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCOUosYUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDYXJkU3ByaXRlID0gcmVxdWlyZShcIkNhcmRTcHJpdGVcIik7XG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG52YXIgREVWSUNFX1dJRFRIID0gR2FtZUNvbmZpZy5ERVZJQ0VfV0lEVEg7XG52YXIgREVWSUNFX0hFSUdIVCA9IEdhbWVDb25maWcuREVWSUNFX0hFSUdIVDtcbnZhciBNb3ZlQnV0dG9uQW5pbVR5cGUgPSB7XG4gICAgdXA6IDAsLy/lkJHkuIpcbiAgICBkb3duOiAxLC8v5ZCR5LiLXG4gICAgbGVmdDogMiwvL+WQkeW3plxuICAgIHJpZ2h0OiAzLC8v5ZCR5Y+zXG4gICAgbGVmdFVwOiA0LC8v5bem5LiKXG4gICAgbGVmdERvd246IDUsLy/lt6bkuItcbiAgICByaWdodFVwOiA2LC8v5Y+z5LiKXG4gICAgcmlnaHREb3duOiA3LC8v5Y+z5LiLXG59O1xudmFyIEFuaW1MYXllclRvb2wgPSB7XG4gICAgbW92ZUJ1dHRvbkFuaW1UaW1lOiAwLjMsLy8g5oyJ6ZKu5Yqo55S756e75Yqo5pe26Ze0XG4gICAgTW92ZUJ1dHRvbkFuaW1UeXBlOiBNb3ZlQnV0dG9uQW5pbVR5cGUsXG4gICAgYm90dG9uQW5pbTogZnVuY3Rpb24gKGJ1dHRvbikgey8vIOWIm+W7uuaMiemSrueJueaViFxuICAgICAgICBsZXQgYXJyYXlOb2RlID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGlmIChidXR0b24ubGVuZ3RoID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXJyYXlOb2RlWzBdID0gYnV0dG9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlOb2RlID0gYnV0dG9uO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBsZXQgdGltZSA9IGNjLnJhbmRvbTBUbzEoKSAqIDUgKyAxO1xuICAgICAgICAgICAgbGV0IHRpbWUgPSBNYXRoLnJhbmRvbSgpICogNSArIDE7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSBhcnJheU5vZGVbaV0uaGVpZ2h0IC8gMjAuMDtcbiAgICAgICAgICAgIGxldCBhbmltMSA9IGNjLmp1bXBCeSh0aW1lLCBjYy52Mih3aWR0aCwgMCksIHdpZHRoLCAxKTtcbiAgICAgICAgICAgIGxldCBhbmltMiA9IGNjLmp1bXBCeSh0aW1lLCBjYy52Migtd2lkdGgsIDApLCAtd2lkdGgsIDEpO1xuICAgICAgICAgICAgbGV0IGFuaW0zID0gY2Muc2NhbGVCeSgwLjMsIDEuMSwgMC45KTtcbiAgICAgICAgICAgIGxldCBhbmltNCA9IGNjLmRlbGF5VGltZSh0aW1lKTtcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gY2Muc2VxdWVuY2UoYW5pbTEsIGFuaW0yLCBhbmltMywgYW5pbTMucmV2ZXJzZSgpLCBhbmltNCk7XG4gICAgICAgICAgICBhcnJheU5vZGVbaV0ucnVuQWN0aW9uKGFjdGlvbnMucmVwZWF0Rm9yZXZlcigpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlU2hvd01lc3NhZ2VCb3goeCwgeSwgbmFtZSwgcm90YXRpb24sIHBhcmVudE5vZGUpIHtcbiAgICB9LFxuICAgIGNyZWF0ZVNob3dNZXNzYWdlQm94QXdhcmQocGFyZW50Tm9kZSwgZW5naW5lVHlwZSkgLy/liJvlu7rlpZblirHmtojmga/mj5DnpLrmoYZcbiAgICB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgaWYgKGVuZ2luZVR5cGUgPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIG1lc3NhZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVG9vbHMubG92ZTIwNDhGcmFtZUNhY2hlLmdldFNwcml0ZUZyYW1lKFwidG9hc3Q2XCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGVuZ2luZVR5cGUgPCA2KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoZW5naW5lVHlwZSA8IDgpIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX25vcGFjay90eHRfZ29vZFwiLCBtZXNzYWdlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbmdpbmVUeXBlIDwgMTApIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX25vcGFjay90eHRfY29vbFwiLG1lc3NhZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGVuZ2luZVR5cGUgPCAxMikge1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3Bfbm9wYWNrL3R4dF92ZXJ5Z29vZFwiLCBtZXNzYWdlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbmdpbmVUeXBlIDwgMTQpIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX25vcGFjay90eHRfc21hcnRcIiwgbWVzc2FnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9ub3BhY2svdHh0X2Jvb21cIiwgbWVzc2FnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgbWVzc2FnZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgLy8gbWVzc2FnZS5zZXRPcGFjaXR5KDApO1xuICAgICAgICBtZXNzYWdlLm9wYWNpdHkgPSAwO1xuICAgICAgICBwYXJlbnROb2RlLmFkZENoaWxkKG1lc3NhZ2UpO1xuXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuZmFkZUluKDAuNSk7XG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuZGVsYXlUaW1lKDEpO1xuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLmZhZGVPdXQoMC41KTtcbiAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQWRkU2NvcmUsIHRoaXMsIG1lc3NhZ2UpO1xuICAgICAgICBsZXQgYWN0aW9uNCA9IGNjLnNlcXVlbmNlKGFjdGlvbjEsIGFjdGlvbjIsIGFjdGlvbjMsIG1vdmVGaW5pc2gpO1xuICAgICAgICBtZXNzYWdlLnJ1bkFjdGlvbihhY3Rpb240KTtcbiAgICB9LFxuICAgIG1vdmVCdXR0b25BbmltOiBmdW5jdGlvbiAoYnV0dG9uLCBpc1Nob3csIG1vdmVCdXR0b25BbmltVHlwZSkgey8vIOaMiemSrua2iOWkseaIluWHuueOsOWKqOeUu1xuICAgICAgICBsZXQgcG9zaXRpb25YID0gYnV0dG9uLng7XG4gICAgICAgIGxldCBwb3NpdGlvblkgPSBidXR0b24ueTtcbiAgICAgICAgbGV0IHNpemUgPSBidXR0b24uZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgaWYgKGlzU2hvdykge1xuICAgICAgICAgICAgc3dpdGNoIChtb3ZlQnV0dG9uQW5pbVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6Ly8gdXA6XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRQb3NpdGlvbihwb3NpdGlvblgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTovLyBkb3duOlxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0UG9zaXRpb24ocG9zaXRpb25YLCAtc2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly8gbGVmdDpcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKC1zaXplLndpZHRoLCBwb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly8gcmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRQb3NpdGlvbihERVZJQ0VfV0lEVEggKyBzaXplLndpZHRoLCBwb3NpdGlvblkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6Ly8gbGVmdFVwOlxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0UG9zaXRpb24oLXNpemUud2lkdGgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTovLyBsZWZ0RG93bjpcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKC1zaXplLndpZHRoLCAtc2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6Ly8gcmlnaHRVcDpcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNldFBvc2l0aW9uKERFVklDRV9XSURUSCArIHNpemUud2lkdGgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzovLyByaWdodERvd246XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRQb3NpdGlvbihERVZJQ0VfV0lEVEggKyBzaXplLndpZHRoLCAtc2l6ZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIocG9zaXRpb25YLCBwb3NpdGlvblkpKTtcbiAgICAgICAgICAgIGJ1dHRvbi5ydW5BY3Rpb24oYW5pbTEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFuaW0xO1xuICAgICAgICAgICAgc3dpdGNoIChtb3ZlQnV0dG9uQW5pbVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6Ly8gdXA6XG4gICAgICAgICAgICAgICAgICAgIGFuaW0xID0gY2MubW92ZVRvKHRoaXMubW92ZUJ1dHRvbkFuaW1UaW1lLCBjYy52Mihwb3NpdGlvblgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly8gZG93bjpcbiAgICAgICAgICAgICAgICAgICAgYW5pbTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlQnV0dG9uQW5pbVRpbWUsIGNjLnYyKHBvc2l0aW9uWCwgLXNpemUuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjovLyBsZWZ0OlxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIoLXNpemUud2lkdGgsIHBvc2l0aW9uWSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly8gcmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIGFuaW0xID0gY2MubW92ZVRvKHRoaXMubW92ZUJ1dHRvbkFuaW1UaW1lLCBjYy52MihERVZJQ0VfV0lEVEggKyBzaXplLndpZHRoLCBwb3NpdGlvblkpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8vIGxlZnRVcDpcbiAgICAgICAgICAgICAgICAgICAgYW5pbTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlQnV0dG9uQW5pbVRpbWUsIGNjLnYyKC1zaXplLndpZHRoLCBERVZJQ0VfSEVJR0hUICsgc2l6ZS5oZWlnaHQpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1Oi8vIGxlZnREb3duOlxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIoLXNpemUud2lkdGgsIC1zaXplLmhlaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6Ly8gcmlnaHRVcDpcbiAgICAgICAgICAgICAgICAgICAgYW5pbTEgPSBjYy5tb3ZlVG8odGhpcy5tb3ZlQnV0dG9uQW5pbVRpbWUsIGNjLnYyKERFVklDRV9XSURUSCArIHNpemUud2lkdGgsIERFVklDRV9IRUlHSFQgKyBzaXplLmhlaWdodCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc6Ly8gcmlnaHREb3duOlxuICAgICAgICAgICAgICAgICAgICBhbmltMSA9IGNjLm1vdmVUbyh0aGlzLm1vdmVCdXR0b25BbmltVGltZSwgY2MudjIoREVWSUNFX1dJRFRIICsgc2l6ZS53aWR0aCwgLXNpemUuaGVpZ2h0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9uLnJ1bkFjdGlvbihhbmltMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlQWRkU2NvcmUoYWRkU2NvcmUpIC8v5Yib5bu65Yqg5YiG5Yqo55S7XG4gICAge1xuICAgICAgICBsZXQgYWRkU2NvcmVTcHJpdGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBsZXQgbGFibGUgPSBhZGRTY29yZVNwcml0ZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsYWJsZS5mb250ID0gR2FtZVRvb2xzLm51bWJlckxhYmVsQXRsYXM7XG4gICAgICAgIGxhYmxlLnN0cmluZyA9IFwiOlwiICsgYWRkU2NvcmU7XG4gICAgICAgIGFkZFNjb3JlU3ByaXRlLnNldFBvc2l0aW9uKC00NiwgNTA1KTtcbiAgICAgICAgLy8gYWRkU2NvcmVTcHJpdGUuc2V0T3BhY2l0eSgxMDApO1xuICAgICAgICBhZGRTY29yZVNwcml0ZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lU2NlbmUubm9kZS5hZGRDaGlsZChhZGRTY29yZVNwcml0ZSk7XG4gICAgICAgIGxldCBtb3ZlMSA9IGNjLm1vdmVCeSgwLjMsIDAsIDEwNik7XG4gICAgICAgIGxldCBtb3ZlMiA9IGNjLmZhZGVJbigwLjIpO1xuICAgICAgICBsZXQgbW92ZTMgPSBjYy5zcGF3bihtb3ZlMSwgbW92ZTIpO1xuICAgICAgICBsZXQgbW92ZUZpbmlzaCA9IGNjLmNhbGxGdW5jKHRoaXMuY2FsbEZ1bmNBZGRTY29yZSwgdGhpcywgYWRkU2NvcmVTcHJpdGUpO1xuICAgICAgICBhZGRTY29yZVNwcml0ZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UobW92ZTMsIG1vdmVGaW5pc2gpKTtcbiAgICB9LFxuICAgIGNhbGxGdW5jQWRkU2NvcmUoc2VuZGVyLCBub2RlKSAvL+WIm+W7uuWKoOWIhuWKqOeUu+ebkeWQrFxuICAgIHtcbiAgICAgICAgc2VuZGVyLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIGNyZWF0ZVNjb3JlTW92ZUFuaW06IGZ1bmN0aW9uIChmcm9tLCBzY29yZSwgc2NvcmVUeXBlKSB7IC8v5Yib5bu65b6X5YiG56e75Yqo5Yqo55S7XG4gICAgICAgIGlmIChzY29yZSA+IDApIHtcbiAgICAgICAgICAgIGxldCBzY29yZU51bWJlclRURiA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBsZXQgbGFibGUgPSBzY29yZU51bWJlclRURi5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGFibGUuZm9udCA9IEdhbWVUb29scy5udW1iZXJMYWJlbEF0bGFzO1xuICAgICAgICAgICAgbGFibGUuc3RyaW5nID0gXCI6XCIgKyBzY29yZTtcbiAgICAgICAgICAgIHNjb3JlTnVtYmVyVFRGLnNldFBvc2l0aW9uKGZyb20ueCwgZnJvbS55KTtcbiAgICAgICAgICAgIGZyb20uZ2V0UGFyZW50KCkuYWRkQ2hpbGQoc2NvcmVOdW1iZXJUVEYpO1xuICAgICAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jU2NvcmVNb3ZlQW5pbSwgdGhpcywgc2NvcmVOdW1iZXJUVEYpO1xuICAgICAgICAgICAgbGV0IG1vdmUxID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChzY29yZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBtb3ZlMSA9IGNjLm1vdmVUbygxLCA1OCArIDM2MCwgNDA4ICsgNjQwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW92ZTEgPSBjYy5tb3ZlVG8oMSwgLTI1OSArIDM2MCwgMjkwICsgNjQwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlRXhwb25lbnRpYWxJbigpKTtcbiAgICAgICAgICAgIHNjb3JlTnVtYmVyVFRGLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShtb3ZlMSwgbW92ZUZpbmlzaCkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjYWxsRnVuY1Njb3JlTW92ZUFuaW06IGZ1bmN0aW9uIChzZW5kZXIsIHNjb3JlTnVtYmVyVFRGKSB7IC8v5b6X5YiG56e75Yqo5Yqo55S755uR5ZCsXG4gICAgICAgIEdhbWVDb25maWcuR2FtZUxvZ2ljLnNldFNjb3JlKCk7XG4gICAgICAgIHNjb3JlTnVtYmVyVFRGLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlQ2hhbmdlQ2FyZE51bUFuaW06IGZ1bmN0aW9uIChjYXJkLCBudW0pIC8v5Yib5bu656e76Zmk5Yqo55S7XG4gICAge1xuICAgICAgICBsZXQgY2FyZFNwcml0ZSA9IENhcmRTcHJpdGUuY3JlYXRlQ2FyZFNwcml0ZShjYXJkLmdldE51bWJlcigpLCBjYXJkLmdldFBvc2l0aW9uWCgpLCBjYXJkLmdldFBvc2l0aW9uWSgpKTtcbiAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkU3ByaXRlKTtcbiAgICAgICAgY2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2FyZC5zZXROdW1iZXIobnVtKTtcbiAgICAgICAgY2FyZFNwcml0ZS5zZXROdW1iZXIobnVtKTtcblxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLnNjYWxlVG8oMC4zLCAwKTtcbiAgICAgICAgYWN0aW9uMi5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKVxuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLnNjYWxlVG8oMC4xLCAxKTtcbiAgICAgICAgbGV0IG1vdmVGaW5pc2gxID0gY2MuY2FsbEZ1bmModGhpcy5jYWxsRnVuY0NoYW5nZUNhcmROdW0xLCB0aGlzLCBjYXJkU3ByaXRlKTtcbiAgICAgICAgbGV0IG1vdmVGaW5pc2gyID0gY2MuY2FsbEZ1bmModGhpcy5jYWxsRnVuY0NoYW5nZUNhcmROdW0yLCB0aGlzLCBbY2FyZFNwcml0ZSwgY2FyZF0pO1xuICAgICAgICBsZXQgYWN0aW9ucyA9IGNjLnNlcXVlbmNlKGFjdGlvbjIsIG1vdmVGaW5pc2gxLCBhY3Rpb24zLCBtb3ZlRmluaXNoMik7XG4gICAgICAgIGNhcmRTcHJpdGUucnVuQWN0aW9uKGFjdGlvbnMpO1xuICAgIH0sXG4gICAgY2FsbEZ1bmNDaGFuZ2VDYXJkTnVtMTogZnVuY3Rpb24gKHNlbmRlciwgY2FyZFNwcml0ZSkgLy/ljaHniYfnp7vpmaTnibnmlYjnm5HlkKxcbiAgICB7XG4gICAgICAgIGNhcmRTcHJpdGUuQ2FyZFNob3coKTtcbiAgICB9LFxuICAgIGNhbGxGdW5jQ2hhbmdlQ2FyZE51bTI6IGZ1bmN0aW9uIChzZW5kZXIsIGZ1bkRhdGEpIC8v5Y2h54mH56e76Zmk54m55pWI55uR5ZCsXG4gICAge1xuICAgICAgICBsZXQgY2FyZFNwcml0ZSA9IGZ1bkRhdGFbMF07XG4gICAgICAgIGxldCBjYXJkID0gZnVuRGF0YVsxXTtcbiAgICAgICAgY2FyZC5DYXJkU2hvdygpO1xuICAgICAgICBjYXJkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNhcmRTcHJpdGUuZGVzdHJveSgpO1xuICAgIH0sXG4gICAgY3JlYXRlRXhjaGFuZ2VDYXJkQW5pbTogZnVuY3Rpb24gKGNhcmQsIHosIHgpIC8v5Yib5bu66YGT5YW35Lqk5o2i54m55pWIXG4gICAge1xuICAgICAgICBsZXQgWCA9IGNhcmQuZ2V0UG9zaXRpb25YKCk7XG4gICAgICAgIGxldCBZID0gY2FyZC5nZXRQb3NpdGlvblkoKTtcbiAgICAgICAgbGV0IHVuaXRTaXplID0gR2FtZUNvbmZpZy5DQVJEX1dJRFRIIC8gKEdhbWVDb25maWcuQ0FFRF9MSU5FUyArIDEpO1xuICAgICAgICBsZXQgbW92ZTEgPSBjYy5zY2FsZUJ5KDAuNCwgMS4xNSk7XG4gICAgICAgIGxldCBhY3Rpb25zID0gY2Muc2VxdWVuY2UobW92ZTEsIG1vdmUxLnJldmVyc2UoKSk7XG4gICAgICAgIGlmICh6ID4gMCkge1xuICAgICAgICAgICAgbGV0IGNhcmQxID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKC0xLCBYIC0gdW5pdFNpemUgLSBHYW1lQ29uZmlnLkNBUkRfV0lEVEgsIFkpO1xuICAgICAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkMSk7XG4gICAgICAgICAgICBjYXJkMS5ydW5BY3Rpb24oYWN0aW9ucy5jbG9uZSgpLnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHogPCBHYW1lQ29uZmlnLkNBRURfTElORVMgLSAxKSB7XG4gICAgICAgICAgICBsZXQgY2FyZDIgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUoLTEsIFggKyB1bml0U2l6ZSArIEdhbWVDb25maWcuQ0FSRF9XSURUSCwgWSk7XG4gICAgICAgICAgICBjYXJkLmdldFBhcmVudCgpLmFkZENoaWxkKGNhcmQyKTtcbiAgICAgICAgICAgIGNhcmQyLnJ1bkFjdGlvbihhY3Rpb25zLmNsb25lKCkucmVwZWF0Rm9yZXZlcigpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjYXJkMyA9IENhcmRTcHJpdGUuY3JlYXRlQ2FyZFNwcml0ZSgtMSwgWCwgWSAtIHVuaXRTaXplIC0gR2FtZUNvbmZpZy5DQVJEX1dJRFRIKTtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkuYWRkQ2hpbGQoY2FyZDMpO1xuICAgICAgICAgICAgY2FyZDMucnVuQWN0aW9uKGFjdGlvbnMuY2xvbmUoKS5yZXBlYXRGb3JldmVyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4IDwgR2FtZUNvbmZpZy5DQUVEX0xJTkVTIC0gMSkge1xuICAgICAgICAgICAgbGV0IGNhcmQ0ID0gQ2FyZFNwcml0ZS5jcmVhdGVDYXJkU3ByaXRlKC0xLCBYLCBZICsgdW5pdFNpemUgKyBHYW1lQ29uZmlnLkNBUkRfV0lEVEgpO1xuICAgICAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkNCk7XG4gICAgICAgICAgICBjYXJkNC5ydW5BY3Rpb24oYWN0aW9ucy5jbG9uZSgpLnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlUmVtb3ZlRXhjaGFuZ2VDYXJkQW5pbTogZnVuY3Rpb24gKGNhcmQsIHosIHgpIC8v5Yib5bu66YGT5YW356e76Zmk5Lqk5o2i54m55pWIXG4gICAge1xuICAgICAgICBpZiAoeiA+IDApIHtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeiA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEpIHtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA+IDApIHtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDAzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeCA8IEdhbWVDb25maWcuQ0FFRF9MSU5FUyAtIDEpIHtcbiAgICAgICAgICAgIGNhcmQuZ2V0UGFyZW50KCkucmVtb3ZlQ2hpbGRCeVRhZygyMDA0KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjcmVhdGVTY2FsZVRvQ2FyZDogZnVuY3Rpb24gKGNhcmQpIHsvLyDliJvlu7rljaHniYfliJ3lp4vljJbliqjnlLtcbiAgICAgICAgbGV0IGNhcmRTcHJpdGUgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUoY2FyZC5udW1iZXIsIGNhcmQueCwgY2FyZC55KTtcbiAgICAgICAgY2FyZC5nZXRQYXJlbnQoKS5hZGRDaGlsZChjYXJkU3ByaXRlKTtcbiAgICAgICAgY2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2FyZFNwcml0ZS5zZXRTY2FsZSgwKTtcbiAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5zY2FsZVRvKDAuMywgMSk7XG4gICAgICAgIGFjdGlvbjIuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpO1xuICAgICAgICBsZXQgbW92ZUZpbmlzaCA9IGNjLmNhbGxGdW5jKHRoaXMuY2FsbEZ1bmNDYXJkMSwgdGhpcywgW2NhcmRTcHJpdGUsIGNhcmRdKTtcbiAgICAgICAgY2FyZFNwcml0ZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9uMiwgbW92ZUZpbmlzaCkpO1xuICAgIH0sXG4gICAgY2FsbEZ1bmNDYXJkMTogZnVuY3Rpb24gKG5vZGUsIGNhcmRTcHJpdGUpIHtcbiAgICAgICAgY2FyZFNwcml0ZVsxXS5DYXJkU2hvdygpO1xuICAgICAgICBjYXJkU3ByaXRlWzFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgY2FyZFNwcml0ZVswXS5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIGNyZWF0ZU1vdmVBbmltOiBmdW5jdGlvbiAoZnJvbSwgdG8sIGlzU2hvd0FuaW0pIHtcbiAgICAgICAgbGV0IGNhcmRTcHJpdGUgPSBDYXJkU3ByaXRlLmNyZWF0ZUNhcmRTcHJpdGUoZnJvbS5udW1iZXIsIGZyb20ueCwgZnJvbS55KTtcbiAgICAgICAgdG8uZ2V0UGFyZW50KCkuYWRkQ2hpbGQoY2FyZFNwcml0ZSk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQ2FyZDIsIHRoaXMsIFtjYXJkU3ByaXRlLCB0bywgaXNTaG93QW5pbV0pO1xuICAgICAgICBsZXQgbW92ZTEgPSBjYy5tb3ZlVG8oMC4zLCBjYy52Mih0by54LCB0by55KSk7XG4gICAgICAgIGlmIChpIDwgMSkge1xuICAgICAgICAgICAgbW92ZTEgPSBjYy5tb3ZlVG8oMC4xLCBjYy52Mih0by54LCB0by55KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA8IDIpIHtcbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlQmFja0luKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICBtb3ZlMS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgIG1vdmUxLmVhc2luZyhjYy5lYXNlQmFja0luT3V0KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgPCA1KSB7XG4gICAgICAgICAgICBtb3ZlMSA9IGNjLmp1bXBUbygwLjMsIGNjLnYyKHRvLngsIHRvLnkpLCBHYW1lQ29uZmlnLkNBUkRfV0lEVEgsIDIpO1xuICAgICAgICB9XG4gICAgICAgIGNhcmRTcHJpdGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKG1vdmUxLCBtb3ZlRmluaXNoKSk7XG4gICAgfSxcbiAgICBjYWxsRnVuY0NhcmQyOiBmdW5jdGlvbiAoc2VuZGVyLCB0bykge1xuICAgICAgICB0b1sxXS5DYXJkU2hvdygpO1xuICAgICAgICBpZiAodG9bMl0pIHtcbiAgICAgICAgICAgIHRvWzBdLm51bWJlciA9IHRvWzFdLm51bWJlcjtcbiAgICAgICAgICAgIHRvWzBdLkNhcmRTaG93KCk7XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBjYy5zY2FsZUJ5KDAuMDIsIDEuMTUpO1xuICAgICAgICAgICAgbGV0IG1vdmVGaW5pc2ggPSBjYy5jYWxsRnVuYyh0aGlzLmNhbGxGdW5jQ2FyZDMsIHRoaXMsIHRvWzBdKTtcbiAgICAgICAgICAgIHRvWzBdLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZSwgc2NhbGUucmV2ZXJzZSgpLCBtb3ZlRmluaXNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b1swXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNhbGxGdW5jQ2FyZDM6IGZ1bmN0aW9uIChzZW5kZXIsIGNhcmQpIHtcbiAgICAgICAgY2FyZC5kZXN0cm95KCk7XG4gICAgfSxcbiAgICBjcmVhdGVQb3BTdGFyQW5pbShmcm9tLCBkVGltZSkgLy/liJvlu7rljaHniYfniIbngrjnibnmlYhcbiAgICB7XG4gICAgICAgIGxldCBtb3ZlRmluaXNoMiA9IGNjLmNhbGxGdW5jKHRoaXMuY2FsbEZ1bmNQb3BTdGFyQW5pbSwgdGhpcywgZnJvbSk7XG4gICAgICAgIC8vIGZyb20ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkVGltZSksIG1vdmVGaW5pc2gyLCBjYy5oaWRlKCkpKTtcbiAgICAgICAgZnJvbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGRUaW1lKSwgbW92ZUZpbmlzaDIsIGNjLmZhZGVPdXQoKSkpO1xuICAgIH0sXG4gICAgY2FsbEZ1bmNQb3BTdGFyQW5pbShzZW5kZXIsIGZyb20pIC8v5Y2h54mH54iG54K454m55pWI55uR5ZCsXG4gICAge1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICBsZXQgZW1pdHRlck5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBlbWl0dGVyTm9kZS5zZXRQb3NpdGlvbihmcm9tLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICBsZXQgbW92ZV9lbWl0dGVyID0gZW1pdHRlck5vZGUuYWRkQ29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcbiAgICAgICAgLy8gbGV0IG1vdmVfZW1pdHRlciA9IFBhcnRpY2xlRXhwbG9zaW9uLmNyZWF0ZVdpdGhUb3RhbFBhcnRpY2xlcygzMCk7XG4gICAgICAgIC8vIGxldCBtb3ZlX2VtaXR0ZXIgPSBuZXcgY2MuUGFydGljbGVTeXN0ZW0oMzApO1xuICAgICAgICBzd2l0Y2ggKGZyb20uZ2V0TnVtYmVyKCkpIHtcbiAgICAgICAgICAgIC8vIGNhc2UgMjpcbiAgICAgICAgICAgIC8vICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicmVzL3Jhdy1hc3NldHMvcmVzb3VyY2VzL3BhcnRpY2Fscy9ub2UvcGFydGljYWxfdGV4X3llbGxvd1wiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSA0OlxuICAgICAgICAgICAgLy8gICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJyZXMvcmF3LWFzc2V0cy9yZXNvdXJjZXMvcGFydGljYWxzL25vZS9wYXJ0aWNhbF90ZXhfYmx1ZVwiO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSA4OlxuICAgICAgICAgICAgLy8gICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJyZXMvcmF3LWFzc2V0cy9yZXNvdXJjZXMvcGFydGljYWxzL25vZS9wYXJ0aWNhbF90ZXhfZ3JlZW5cIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgMTY6XG4gICAgICAgICAgICAvLyAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInJlcy9yYXctYXNzZXRzL3Jlc291cmNlcy9wYXJ0aWNhbHMvbm9lL3BhcnRpY2FsX3RleF9yZWRcIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgMzI6XG4gICAgICAgICAgICAvLyAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInJlcy9yYXctYXNzZXRzL3Jlc291cmNlcy9wYXJ0aWNhbHMvbm9lL3BhcnRpY2FsX3RleF9wdXJwbGVcIjtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicG9wX2dhbWUvbjZcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicG9wX2dhbWUvbjZcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBtb3ZlX2VtaXR0ZXIudGV4dHVyZSA9IFwicG9wX2dhbWUvbjZcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgbW92ZV9lbWl0dGVyLnRleHR1cmUgPSBcInBvcF9nYW1lL242XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIG1vdmVfZW1pdHRlci50ZXh0dXJlID0gXCJwb3BfZ2FtZS9uNlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIG1vdmVfZW1pdHRlci5zdGFydENvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgbW92ZV9lbWl0dGVyLnN0YXJ0Q29sb3JWYXIgPSBjYy5jb2xvcigwLCAwLCAwLCAwKTtcbiAgICAgICAgbW92ZV9lbWl0dGVyLmVuZENvbG9yVmFyID0gY2MuY29sb3IoMCwgMCwgMCwgMCk7XG4gICAgICAgIG1vdmVfZW1pdHRlci5lbmRDb2xvciA9IG1vdmVfZW1pdHRlci5zdGFydENvbG9yO1xuICAgICAgICBtb3ZlX2VtaXR0ZXIuYXV0b1JlbW92ZU9uRmluaXNoID0gdHJ1ZTtcblxuICAgICAgICBtb3ZlX2VtaXR0ZXIuZHVyYXRpb24gPSAwLjE7XG4gICAgICAgIG1vdmVfZW1pdHRlci5lbWlzc2lvblJhdGUgPSAxMDA7XG4gICAgICAgIG1vdmVfZW1pdHRlci5saWZlID0gMjtcbiAgICAgICAgbW92ZV9lbWl0dGVyLmxpZmVWYXIgPSAwLjU7XG4gICAgICAgIG1vdmVfZW1pdHRlci5hbmdsZSA9IDkwO1xuICAgICAgICBtb3ZlX2VtaXR0ZXIuYW5nbGVWYXIgPSAzNjA7XG4gICAgICAgIG1vdmVfZW1pdHRlci5jdXN0b20gPSB0cnVlO1xuICAgICAgICBtb3ZlX2VtaXR0ZXIucGxheU9uTG9hZCA9IHRydWU7XG4gICAgICAgIGZyb20uZ2V0UGFyZW50KCkuYWRkQ2hpbGQoZW1pdHRlck5vZGUpO1xuICAgIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFuaW1MYXllclRvb2w7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/RankingListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31b56tJWjpPlrcCAXTwiyUM', 'RankingListView');
// Script/panel/RankingListView.js

"use strict";

var GameConfig = require("GameConfig");

var AnimLayerTool = require("AnimLayerTool");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  // name: "RankingListView",
  properties: {
    backButton: cc.Node,
    // shareButton: cc.Node,
    rankingScrollView: cc.Sprite,
    //显示排行榜
    shareTicket: null
  },
  onLoad: function onLoad() {},
  start: function start() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc"); // GameUiTools.setButtonClickEvents(this, this.shareButton, "shareButtonFunc");

    if (this.shareTicket != null) {
      var shareNode = new cc.Node();
      shareNode.addComponent(cc.Label).string = "群排行";
      shareNode.setPosition(-260, 503);
      this.node.addChild(shareNode);
    }

    if (CC_WECHATGAME) {
      if (window.sharedCanvas != undefined) {
        this.tex = new cc.Texture2D();
        window.sharedCanvas.width = 720;
        window.sharedCanvas.height = 1280; // 发消息给子域

        if (this.shareTicket != null) {
          window.wx.postMessage({
            messageType: 5,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
            shareTicket: this.shareTicket
          });
        } else {
          window.wx.postMessage({
            messageType: 1,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM
          });
        }
      }
    } else {
      var gameTypeNode = new cc.Node();
      gameTypeNode.addComponent(cc.Label).string = "暂无排行榜数据";
      this.node.addChild(gameTypeNode);
      cc.log("获取排行榜数据。" + GameConfig.MAIN_MENU_NUM);
    }
  },
  shareButtonFunc: function shareButtonFunc(event) {
    GameTools.playSimpleAudioEngine(4);
    setTimeout(function () {
      GameTools.sharePicture("shareTicket");
    }, 100);
  },
  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.node.destroy();
  },
  // 刷新子域的纹理
  _updateSubDomainCanvas: function _updateSubDomainCanvas() {
    if (CC_WECHATGAME) {
      if (window.sharedCanvas != undefined) {
        this.tex.initWithElement(window.sharedCanvas);
        this.tex.handleLoadedTexture();
        this.rankingScrollView.spriteFrame = new cc.SpriteFrame(this.tex);
      }
    }
  },
  update: function update() {
    this._updateSubDomainCanvas();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcUmFua2luZ0xpc3RWaWV3LmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiQW5pbUxheWVyVG9vbCIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInJhbmtpbmdTY3JvbGxWaWV3IiwiU3ByaXRlIiwic2hhcmVUaWNrZXQiLCJvbkxvYWQiLCJzdGFydCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic2hhcmVOb2RlIiwiYWRkQ29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzZXRQb3NpdGlvbiIsIm5vZGUiLCJhZGRDaGlsZCIsIkNDX1dFQ0hBVEdBTUUiLCJ3aW5kb3ciLCJzaGFyZWRDYW52YXMiLCJ1bmRlZmluZWQiLCJ0ZXgiLCJUZXh0dXJlMkQiLCJ3aWR0aCIsImhlaWdodCIsInd4IiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsIk1BSU5fTUVOVV9OVU0iLCJnYW1lVHlwZU5vZGUiLCJsb2ciLCJzaGFyZUJ1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsInNldFRpbWVvdXQiLCJzaGFyZVBpY3R1cmUiLCJiYWNrQnV0dG9uRnVuYyIsImRlc3Ryb3kiLCJfdXBkYXRlU3ViRG9tYWluQ2FudmFzIiwiaW5pdFdpdGhFbGVtZW50IiwiaGFuZGxlTG9hZGVkVGV4dHVyZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTNCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsV0FB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LEtBQUtFLEdBQUwsQ0FBU21CLG1CQUFUO1FBQ0EsS0FBS3BDLGlCQUFMLENBQXVCcUMsV0FBdkIsR0FBcUMsSUFBSTNDLEVBQUUsQ0FBQzRDLFdBQVAsQ0FBbUIsS0FBS3JCLEdBQXhCLENBQXJDO01BQ0g7SUFDSjtFQUNKLENBcEVJO0VBcUVMc0IsTUFyRUssb0JBcUVJO0lBQ0wsS0FBS0wsc0JBQUw7RUFDSDtBQXZFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEFuaW1MYXllclRvb2wgPSByZXF1aXJlKFwiQW5pbUxheWVyVG9vbFwiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICAvLyBuYW1lOiBcIlJhbmtpbmdMaXN0Vmlld1wiLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSxcbiAgICAgICAgLy8gc2hhcmVCdXR0b246IGNjLk5vZGUsXG4gICAgICAgIHJhbmtpbmdTY3JvbGxWaWV3OiBjYy5TcHJpdGUsLy/mmL7npLrmjpLooYzmppxcbiAgICAgICAgc2hhcmVUaWNrZXQ6IG51bGwsXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgfSxcbiAgICBzdGFydCgpIHtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJhY2tCdXR0b25GdW5jXCIpO1xuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uLCBcInNoYXJlQnV0dG9uRnVuY1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmVUaWNrZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHNoYXJlTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBzaGFyZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIue+pOaOkuihjFwiO1xuICAgICAgICAgICAgc2hhcmVOb2RlLnNldFBvc2l0aW9uKC0yNjAsIDUwMyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hhcmVOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zaGFyZWRDYW52YXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXggPSBuZXcgY2MuVGV4dHVyZTJEKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy53aWR0aCA9IDcyMDtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2hhcmVkQ2FudmFzLmhlaWdodCA9IDEyODA7XG4gICAgICAgICAgICAgICAgLy8g5Y+R5raI5oGv57uZ5a2Q5Z+fXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhcmVUaWNrZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVRpY2tldDogdGhpcy5zaGFyZVRpY2tldFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBnYW1lVHlwZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgZ2FtZVR5cGVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmmoLml6DmjpLooYzmppzmlbDmja5cIjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lVHlwZU5vZGUpO1xuICAgICAgICAgICAgY2MubG9nKFwi6I635Y+W5o6S6KGM5qac5pWw5o2u44CCXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNoYXJlQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoNCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZShcInNoYXJlVGlja2V0XCIpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH0sXG5cbiAgICBiYWNrQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIC8vIOWIt+aWsOWtkOWfn+eahOe6ueeQhlxuICAgIF91cGRhdGVTdWJEb21haW5DYW52YXMoKSB7XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNoYXJlZENhbnZhcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleC5pbml0V2l0aEVsZW1lbnQod2luZG93LnNoYXJlZENhbnZhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXguaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmFua2luZ1Njcm9sbFZpZXcuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN1YkRvbWFpbkNhbnZhcygpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CardSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4ef50jralNeI7oo4DmKqQv', 'CardSprite');
// Script/CardSprite.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

var CardSprite = cc.Class({
  "extends": cc.Node,
  properties: {
    cardSprite: null,
    number: 0,
    // 显示数字
    isSelect: false,
    //记录是否选中
    isFirstSelect: false //记录是否为第一次选中

  },
  ctor: function ctor() {
    this.cardSprite = this.addComponent(cc.Sprite);
  },
  statics: {
    createCardSprite: function createCardSprite(numbers, CardSpriteX, CardSpriteY) {
      var cardSprite = new CardSprite(); // 自定义初始化

      cardSprite.initCard(numbers, CardSpriteX, CardSpriteY);
      return cardSprite;
    }
  },
  initCard: function initCard(numbers, CardSpriteX, CardSpriteY) // 初始化
  {
    // 初始化数字
    this.number = numbers;
    this.CardShow();
    this.setPosition(CardSpriteX, CardSpriteY);
    this.width = GameConfig.CARD_WIDTH;
    this.height = GameConfig.CARD_WIDTH;
    this.cardSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
  },
  CardShow: function CardShow() {
    // 判断数字的大小来调整颜色
    if (this.number == 1) {
      GameUiTools.getSpriteFrame("pop_game/barrier", this.cardSprite);
    } else if (this.number == -1) {
      GameUiTools.getSpriteFrame("pop_game/popgame_61", this.cardSprite);
    } else if (this.number == 0) {
      // this.cardSprite.spriteFrame = GameUiTools.getSpriteFrame("pop_game/emptyl");
      GameUiTools.getSpriteFrame("pop_game/emptyl", this.cardSprite);
    } else if (this.number >= 2 && this.number <= 131072) {
      // this.cardSprite.spriteFrame = GameUiTools.getSpriteFrame("pop_game/n" + this.number);
      GameUiTools.getSpriteFrame("pop_game/n" + this.number, this.cardSprite);
    }
  },
  setNumber: function setNumber(number) {
    this.number = number;
  },
  getNumber: function getNumber() {
    return this.number;
  },

  /*
  *创建点击特效
  *ClickType 0移除特效 1点击动画特效 2点击静态特效
  */
  CardClickShow: function CardClickShow(ClickType) {
    if (ClickType == 0) {
      this.removeAllChildren();
      this.isSelect = false;
      this.isFirstSelect = false;
    } else {
      var move = cc.moveBy(0.05, cc.v2(0, 2));
      this.runAction(cc.sequence(move, move.reverse()));
      this.isSelect = true;
      var effects = new cc.Node();
      GameUiTools.getSpriteFrame("pop_game/popgame_61", effects.addComponent(cc.Sprite));
      var w = effects.getContentSize().height;
      var scale = this.getContentSize().height / w;
      effects.setScale(scale);
      this.addChild(effects);

      if (ClickType == 1) {
        this.isFirstSelect = true;
        var move1 = cc.scaleBy(0.4, 1.15);
        var actions = cc.sequence(move1, move1.reverse());
        effects.runAction(actions.repeatForever());
      } else if (ClickType == 2) {
        effects.setScale(scale + 0.05);
      }
    }
  },
  getIsSelect: function getIsSelect() {
    return this.isSelect;
  },
  getIsFirstSelect: function getIsFirstSelect() {
    return this.isFirstSelect;
  },
  isVisible: function isVisible() {
    return this.opacity == 255;
  },
  setVisible: function setVisible(isTrue) {
    this.opacity = isTrue ? 255 : 0;
  }
});
module.exports = CardSprite;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDYXJkU3ByaXRlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJDYXJkU3ByaXRlIiwiY2MiLCJDbGFzcyIsIk5vZGUiLCJwcm9wZXJ0aWVzIiwiY2FyZFNwcml0ZSIsIm51bWJlciIsImlzU2VsZWN0IiwiaXNGaXJzdFNlbGVjdCIsImN0b3IiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzdGF0aWNzIiwiY3JlYXRlQ2FyZFNwcml0ZSIsIm51bWJlcnMiLCJDYXJkU3ByaXRlWCIsIkNhcmRTcHJpdGVZIiwiaW5pdENhcmQiLCJDYXJkU2hvdyIsInNldFBvc2l0aW9uIiwid2lkdGgiLCJDQVJEX1dJRFRIIiwiaGVpZ2h0Iiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsImdldFNwcml0ZUZyYW1lIiwic2V0TnVtYmVyIiwiZ2V0TnVtYmVyIiwiQ2FyZENsaWNrU2hvdyIsIkNsaWNrVHlwZSIsInJlbW92ZUFsbENoaWxkcmVuIiwibW92ZSIsIm1vdmVCeSIsInYyIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJyZXZlcnNlIiwiZWZmZWN0cyIsInciLCJnZXRDb250ZW50U2l6ZSIsInNjYWxlIiwic2V0U2NhbGUiLCJhZGRDaGlsZCIsIm1vdmUxIiwic2NhbGVCeSIsImFjdGlvbnMiLCJyZXBlYXRGb3JldmVyIiwiZ2V0SXNTZWxlY3QiLCJnZXRJc0ZpcnN0U2VsZWN0IiwiaXNWaXNpYmxlIiwib3BhY2l0eSIsInNldFZpc2libGUiLCJpc1RydWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxh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QUFaO0VBQ0gsQ0FuRnFCO0VBb0Z0QjBDLFNBcEZzQix1QkFvRlY7SUFDUixPQUFPLEtBQUtDLE9BQUwsSUFBZ0IsR0FBdkI7RUFDSCxDQXRGcUI7RUF1RnRCQyxVQXZGc0Isc0JBdUZYQyxNQXZGVyxFQXVGSDtJQUNmLEtBQUtGLE9BQUwsR0FBZUUsTUFBTSxHQUFHLEdBQUgsR0FBUyxDQUE5QjtFQUNIO0FBekZxQixDQUFULENBQWpCO0FBNEZBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2RCxVQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xudmFyIENhcmRTcHJpdGUgPSBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuTm9kZSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNhcmRTcHJpdGU6IG51bGwsXG4gICAgICAgIG51bWJlcjogMCwvLyDmmL7npLrmlbDlrZdcbiAgICAgICAgaXNTZWxlY3Q6IGZhbHNlLC8v6K6w5b2V5piv5ZCm6YCJ5LitXG4gICAgICAgIGlzRmlyc3RTZWxlY3Q6IGZhbHNlLC8v6K6w5b2V5piv5ZCm5Li656ys5LiA5qyh6YCJ5LitXG4gICAgfSxcbiAgICBjdG9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FyZFNwcml0ZSA9IHRoaXMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgfSxcbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGNyZWF0ZUNhcmRTcHJpdGU6IGZ1bmN0aW9uIChudW1iZXJzLCBDYXJkU3ByaXRlWCwgQ2FyZFNwcml0ZVkpIHtcbiAgICAgICAgICAgIGxldCBjYXJkU3ByaXRlID0gbmV3IENhcmRTcHJpdGUoKTtcbiAgICAgICAgICAgIC8vIOiHquWumuS5ieWIneWni+WMllxuICAgICAgICAgICAgY2FyZFNwcml0ZS5pbml0Q2FyZChudW1iZXJzLCBDYXJkU3ByaXRlWCwgQ2FyZFNwcml0ZVkpO1xuICAgICAgICAgICAgcmV0dXJuIGNhcmRTcHJpdGU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRDYXJkOiBmdW5jdGlvbiAobnVtYmVycywgQ2FyZFNwcml0ZVgsIENhcmRTcHJpdGVZKS8vIOWIneWni+WMllxuICAgIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW5pWw5a2XXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVycztcbiAgICAgICAgdGhpcy5DYXJkU2hvdygpO1xuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKENhcmRTcHJpdGVYLCBDYXJkU3ByaXRlWSk7XG4gICAgICAgIHRoaXMud2lkdGggPSBHYW1lQ29uZmlnLkNBUkRfV0lEVEg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gR2FtZUNvbmZpZy5DQVJEX1dJRFRIO1xuICAgICAgICB0aGlzLmNhcmRTcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICAgIH0sXG4gICAgQ2FyZFNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g5Yik5pat5pWw5a2X55qE5aSn5bCP5p2l6LCD5pW06aKc6ImyXG4gICAgICAgIGlmICh0aGlzLm51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9iYXJyaWVyXCIsIHRoaXMuY2FyZFNwcml0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgPT0gLTEpIHtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvcG9wZ2FtZV82MVwiLCB0aGlzLmNhcmRTcHJpdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyID09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FyZFNwcml0ZS5zcHJpdGVGcmFtZSA9IEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvZW1wdHlsXCIpO1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9lbXB0eWxcIiwgdGhpcy5jYXJkU3ByaXRlICk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5udW1iZXIgPj0gMiAmJiB0aGlzLm51bWJlciA8PSAxMzEwNzIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FyZFNwcml0ZS5zcHJpdGVGcmFtZSA9IEdhbWVVaVRvb2xzLmdldFNwcml0ZUZyYW1lKFwicG9wX2dhbWUvblwiICsgdGhpcy5udW1iZXIpO1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMuZ2V0U3ByaXRlRnJhbWUoXCJwb3BfZ2FtZS9uXCIgKyB0aGlzLm51bWJlciwgdGhpcy5jYXJkU3ByaXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0TnVtYmVyOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIH0sXG4gICAgZ2V0TnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgICB9LFxuICAgIC8qXG4q5Yib5bu654K55Ye754m55pWIXG4qQ2xpY2tUeXBlIDDnp7vpmaTnibnmlYggMeeCueWHu+WKqOeUu+eJueaViCAy54K55Ye76Z2Z5oCB54m55pWIXG4qL1xuICAgIENhcmRDbGlja1Nob3coQ2xpY2tUeXBlKSB7XG4gICAgICAgIGlmIChDbGlja1R5cGUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy5pc1NlbGVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0U2VsZWN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbW92ZSA9IGNjLm1vdmVCeSgwLjA1LCBjYy52MigwLCAyKSk7XG4gICAgICAgICAgICB0aGlzLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShtb3ZlLCBtb3ZlLnJldmVyc2UoKSkpO1xuICAgICAgICAgICAgdGhpcy5pc1NlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgZWZmZWN0cyA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfNjFcIiwgZWZmZWN0cy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgICAgICBsZXQgdyA9IGVmZmVjdHMuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQ7XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSB0aGlzLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8gdztcbiAgICAgICAgICAgIGVmZmVjdHMuc2V0U2NhbGUoc2NhbGUpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChlZmZlY3RzKTtcbiAgICAgICAgICAgIGlmIChDbGlja1R5cGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmUxID0gY2Muc2NhbGVCeSgwLjQsIDEuMTUpO1xuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25zID0gY2Muc2VxdWVuY2UobW92ZTEsIG1vdmUxLnJldmVyc2UoKSk7XG4gICAgICAgICAgICAgICAgZWZmZWN0cy5ydW5BY3Rpb24oYWN0aW9ucy5yZXBlYXRGb3JldmVyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChDbGlja1R5cGUgPT0gMikge1xuICAgICAgICAgICAgICAgIGVmZmVjdHMuc2V0U2NhbGUoc2NhbGUgKyAwLjA1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0SXNTZWxlY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2VsZWN0O1xuICAgIH0sXG4gICAgZ2V0SXNGaXJzdFNlbGVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaXJzdFNlbGVjdDtcbiAgICB9LFxuICAgIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BhY2l0eSA9PSAyNTU7XG4gICAgfSxcbiAgICBzZXRWaXNpYmxlKGlzVHJ1ZSkge1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSBpc1RydWUgPyAyNTUgOiAwO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhcmRTcHJpdGU7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GamePropNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'baa95mizZVN5pOs1SeqB98u', 'GamePropNode');
// Script/panel/GamePropNode.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameData = require("GameData");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    propType: cc.Sprite,
    porpNumberLabel: cc.Label,
    porpNumberNode: cc.Node,
    addNode: cc.Node,
    propTypeNumber: 0
  },
  onLoad: function onLoad() {
    if (this.propTypeNumber == 0) {
      GameUiTools.getSpriteFrame("pop_game/popgame_25", this.propType);
    } else if (this.propTypeNumber == 1) {
      GameUiTools.getSpriteFrame("pop_game/popgame_31", this.propType);
    } else if (this.propTypeNumber == 2) {
      GameUiTools.getSpriteFrame("pop_game/popgame_30", this.propType);
    }

    this.setPropType();
  },
  setPropType: function setPropType() {
    if (GameData.getGamePropNumber(this.propTypeNumber) > 0) {
      this.porpNumberNode.active = true;
      this.porpNumberLabel.string = GameData.getGamePropNumber(this.propTypeNumber);
      this.addNode.active = false;
    } else {
      this.porpNumberNode.active = false;
      this.addNode.active = true;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZVByb3BOb2RlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZURhdGEiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJvcFR5cGUiLCJTcHJpdGUiLCJwb3JwTnVtYmVyTGFiZWwiLCJMYWJlbCIsInBvcnBOdW1iZXJOb2RlIiwiTm9kZSIsImFkZE5vZGUiLCJwcm9wVHlwZU51bWJlciIsIm9uTG9hZCIsImdldFNwcml0ZUZyYW1lIiwic2V0UHJvcFR5cGUiLCJnZXRHYW1lUHJvcE51bWJlciIsImFjdGl2ZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFDQSxJQUFJRyxXQUFXLEdBQUdILE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBSSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUVMQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFFSixFQUFFLENBQUNLLE1BREw7SUFFUkMsZUFBZSxFQUFFTixFQUFFLENBQUNPLEtBRlo7SUFHUkMsY0FBYyxFQUFFUixFQUFFLENBQUNTLElBSFg7SUFJUkMsT0FBTyxFQUFFVixFQUFFLENBQUNTLElBSko7SUFLUkUsY0FBYyxFQUFFO0VBTFIsQ0FGUDtFQVVMQyxNQVZLLG9CQVVJO0lBQ0wsSUFBSSxLQUFLRCxjQUFMLElBQXVCLENBQTNCLEVBQThCO01BQzFCWixXQUFXLENBQUNjLGNBQVosQ0FBMkIscUJBQTNCLEVBQWtELEtBQUtULFFBQXZEO0lBQ0gsQ0FGRCxNQUVPLElBQUksS0FBS08sY0FBTCxJQUF1QixDQUEzQixFQUE4QjtNQUNqQ1osV0FBVyxDQUFDYyxjQUFaLENBQTJCLHFCQUEzQixFQUFrRCxLQUFLVCxRQUF2RDtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtPLGNBQUwsSUFBdUIsQ0FBM0IsRUFBOEI7TUFDakNaLFdBQVcsQ0FBQ2MsY0FBWixDQUEyQixxQkFBM0IsRUFBa0QsS0FBS1QsUUFBdkQ7SUFDSDs7SUFDRCxLQUFLVSxXQUFMO0VBQ0gsQ0FuQkk7RUFxQkxBLFdBckJLLHlCQXFCUztJQUNWLElBQUloQixRQUFRLENBQUNpQixpQkFBVCxDQUEyQixLQUFLSixjQUFoQyxJQUFrRCxDQUF0RCxFQUF5RDtNQUNyRCxLQUFLSCxjQUFMLENBQW9CUSxNQUFwQixHQUE2QixJQUE3QjtNQUNBLEtBQUtWLGVBQUwsQ0FBcUJXLE1BQXJCLEdBQThCbkIsUUFBUSxDQUFDaUIsaUJBQVQsQ0FBMkIsS0FBS0osY0FBaEMsQ0FBOUI7TUFDQSxLQUFLRCxPQUFMLENBQWFNLE1BQWIsR0FBc0IsS0FBdEI7SUFDSCxDQUpELE1BSU87TUFDSCxLQUFLUixjQUFMLENBQW9CUSxNQUFwQixHQUE2QixLQUE3QjtNQUNBLEtBQUtOLE9BQUwsQ0FBYU0sTUFBYixHQUFzQixJQUF0QjtJQUNIO0VBQ0o7QUE5QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVEYXRhID0gcmVxdWlyZShcIkdhbWVEYXRhXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHByb3BUeXBlOiBjYy5TcHJpdGUsXG4gICAgICAgIHBvcnBOdW1iZXJMYWJlbDogY2MuTGFiZWwsXG4gICAgICAgIHBvcnBOdW1iZXJOb2RlOiBjYy5Ob2RlLFxuICAgICAgICBhZGROb2RlOiBjYy5Ob2RlLFxuICAgICAgICBwcm9wVHlwZU51bWJlcjogMCxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wVHlwZU51bWJlciA9PSAwKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMjVcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wVHlwZU51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzFcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wVHlwZU51bWJlciA9PSAyKSB7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5nZXRTcHJpdGVGcmFtZShcInBvcF9nYW1lL3BvcGdhbWVfMzBcIiwgdGhpcy5wcm9wVHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQcm9wVHlwZSgpO1xuICAgIH0sXG5cbiAgICBzZXRQcm9wVHlwZSgpIHtcbiAgICAgICAgaWYgKEdhbWVEYXRhLmdldEdhbWVQcm9wTnVtYmVyKHRoaXMucHJvcFR5cGVOdW1iZXIpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3JwTnVtYmVyTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wb3JwTnVtYmVyTGFiZWwuc3RyaW5nID0gR2FtZURhdGEuZ2V0R2FtZVByb3BOdW1iZXIodGhpcy5wcm9wVHlwZU51bWJlcik7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcnBOdW1iZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hZGROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShowMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38b70CDgDNDRrOc8pj7+Z2r', 'ShowMessage');
// Script/panel/ShowMessage.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    messageLabel: cc.Label,
    backButton: cc.Node,
    //返回按钮
    toastType: 0
  },
  start: function start() {
    var toastMessage = null;

    if (this.toastType == 0) {
      toastMessage = "欢迎进入浪漫2048";
    } else if (this.toastType == 1) {
      toastMessage = "该功能苦逼的程序员还在努力开发中，欢迎留言反馈！";
    } else if (this.toastType == 2) {
      toastMessage = "积分不足！！！您可以玩游戏来获取积分，还可以每天登录赚取积分！";
    } else if (this.toastType == 3) {
      toastMessage = "最多只能后退3步！！！";
    } else if (this.toastType == 4) {
      toastMessage = "只能后退1步！！！";
    } else if (this.toastType == 5) {
      toastMessage = "该模式暂无帮助，谢谢！！！";
    } else if (this.toastType == 6) {
      toastMessage = "积分不足！！！您需要300积分来复活。";
    } else if (this.toastType == 7) {
      toastMessage = "恭喜充值成功，感谢您对浪漫2048的支持！！！";
    } else if (this.toastType == 8) {
      toastMessage = "充值失败，谢谢支持！！！";
    } else if (this.toastType == 9) {
      toastMessage = "今天首次进入奖励100积分，每天首次进入游戏都会获取积分哟！！！";
    } else if (this.toastType == 10) {
      toastMessage = "没有找到应用市场";
    } else if (this.toastType == 11) {
      toastMessage = "恭喜获得奖励10积分，感谢您对浪漫2048的支持";
    } else if (this.toastType == 12) {
      toastMessage = "您今天已经领过奖励了，谢谢";
    } else if (this.toastType == 13) {
      toastMessage = "聚合模式暂无自动功能，谢谢";
    } else if (this.toastType == 14) {
      toastMessage = "恭喜获得奖励100积分，感谢您对浪漫2048的支持";
    } else if (this.toastType == 15) {
      toastMessage = "经典模式不能使用道具功能，您可以去试试其它玩法哟！";
    } else if (this.toastType == 16) {
      toastMessage = "上传得分失败，请检查网络";
    } else if (this.toastType == 17) {
      toastMessage = "排行榜数据失败，请检查网络";
    } else if (this.toastType == 18) {
      toastMessage = "上传得分成功，赶紧去看看排行榜吧";
    } else if (this.toastType == 19) {
      toastMessage = "视频奖励";
    } else if (this.toastType == 20) {
      toastMessage = "保存图片成功";
    } else if (this.toastType == 21) {
      toastMessage = "保存图片失败";
    } else if (this.toastType == 22) {
      toastMessage = "点击需要消除的爱心即可消除该爱心！";
    } else if (this.toastType == 23) {
      toastMessage = "点击需要换位的爱心将会选中该爱心，继续点击该爱心周边的爱心即可实现爱心的换位！";
    } else if (this.toastType == 24) {
      toastMessage = "点击需要缩小数字的爱心即可将该爱心的数字缩小2倍";
    } else if (this.toastType == 25) {
      toastMessage = "点击需要消除的爱心即可消除与该爱心同横排的爱心！";
    } else if (this.toastType == 26) {
      toastMessage = "点击需要消除的爱心即可消除与该爱心同竖排的爱心！";
    } else if (this.toastType == 27) {
      toastMessage = "视频播放失败，谢谢！！";
    } else if (this.toastType == 28) {
      toastMessage = "滑动屏幕来移动小方块，两个数字一样的小方块相撞时就会相加合成一个方块，每次操作之后会在空白的方格处随机生成一个2或4的方块，最终得到一个2048的方块就算胜利了，如果16个格子全部填满无法移动的话则游戏结束。";
    } else if (this.toastType == 29) {
      toastMessage = "点击空白爱心，爱心会向点击的位置靠拢，当两个数字相同的爱心相遇时就会合并为两数字之和，全部填满无法移动的话则游戏结束。";
    } else if (this.toastType == 30) {
      toastMessage = "选中连接在一起的相同数字，点击的数字会聚合为更大的数字，其它数字则消除，完成通关所需得分即可进入下一关，否则游戏结束。";
    } else if (this.toastType == 31) {
      toastMessage = "选中连接在一起的相同数字，选中的数字将会被消除，完成通关所需得分即可进入下一关，否则游戏结束。";
    } else {
      toastMessage = this.toastType;
    }

    this.messageLabel.string = toastMessage; // GameUiTools.setButtonClickEvents(this, this.backButton, "backButtonFunc");
    // GameUiTools.setButtonClickEvents(this, this.node, "backButtonFunc");
    // if (CC_WECHATGAME) {
    //     this.node.destroy();
    //     wx.showModal({title: "浪漫提示", content: toastMessage,showCancel:false});
    // }
  },
  backButtonFunc: function backButtonFunc(event) {
    GameTools.playSimpleAudioEngine(0);
    this.node.destroy();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvd01lc3NhZ2UuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWVzc2FnZUxhYmVsIiwiTGFiZWwiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInRvYXN0VHlwZSIsInN0YXJ0IiwidG9hc3RNZXNzYWdlIiwic3RyaW5nIiwiYmFja0J1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsWUFBWSxFQUFFSixFQUFFLENBQUNLLEtBRFQ7SUFFUkMsVUFBVSxFQUFFTixFQUFFLENBQUNPLElBRlA7SUFFWTtJQUNwQkMsU0FBUyxFQUFFO0VBSEgsQ0FIUDtFQVNMQyxLQVRLLG1CQVNHO0lBQ0osSUFBSUMsWUFBWSxHQUFHLElBQW5COztJQUNBLElBQUksS0FBS0YsU0FBTCxJQUFrQixDQUF0QixFQUF5QjtNQUNyQkUsWUFBWSxHQUFHLFlBQWY7SUFDSCxDQUZELE1BRU8sSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO01BQzVCRSxZQUFZLEdBQUcsMEJBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO01BQzVCRSxZQUFZLEdBQUcsaUNBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO01BQzVCRSxZQUFZLEdBQUcsYUFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsQ0FBdEIsRUFBeUI7TUFDNUJFLFlBQVksR0FBRyxXQUFmO0lBQ0gsQ0FGTSxNQUVBLElBQUksS0FBS0YsU0FBTCxJQUFrQixDQUF0QixFQUF5QjtNQUM1QkUsWUFBWSxHQUFHLGVBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO01BQzVCRSxZQUFZLEdBQUcscUJBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO01BQzVCRSxZQUFZLEdBQUcseUJBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO01BQzVCRSxZQUFZLEdBQUcsY0FBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsQ0FBdEIsRUFBeUI7TUFDNUJFLFlBQVksR0FBRyxrQ0FBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyxVQUFmO0lBQ0gsQ0FGTSxNQUVBLElBQUksS0FBS0YsU0FBTCxJQUFrQixFQUF0QixFQUEwQjtNQUM3QkUsWUFBWSxHQUFHLDBCQUFmO0lBQ0gsQ0FGTSxNQUVBLElBQUksS0FBS0YsU0FBTCxJQUFrQixFQUF0QixFQUEwQjtNQUM3QkUsWUFBWSxHQUFHLGVBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcsZUFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRywyQkFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRywyQkFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyxjQUFmO0lBQ0gsQ0FGTSxNQUVBLElBQUksS0FBS0YsU0FBTCxJQUFrQixFQUF0QixFQUEwQjtNQUM3QkUsWUFBWSxHQUFHLGVBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcsa0JBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcsTUFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyxRQUFmO0lBQ0gsQ0FGTSxNQUVBLElBQUksS0FBS0YsU0FBTCxJQUFrQixFQUF0QixFQUEwQjtNQUM3QkUsWUFBWSxHQUFHLFFBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcsbUJBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcseUNBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcsMEJBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcsMEJBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcsMEJBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLEVBQXRCLEVBQTBCO01BQzdCRSxZQUFZLEdBQUcsYUFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRywwR0FBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyw2REFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyw2REFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyxpREFBZjtJQUNILENBRk0sTUFFRDtNQUNGQSxZQUFZLEdBQUcsS0FBS0YsU0FBcEI7SUFDSDs7SUFDRCxLQUFLSixZQUFMLENBQWtCTyxNQUFsQixHQUEyQkQsWUFBM0IsQ0FyRUksQ0F1RUo7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0gsQ0F0Rkk7RUF3RkxFLGNBQWMsRUFBRSx3QkFBVUMsS0FBVixFQUFpQjtJQUM3QmYsU0FBUyxDQUFDZ0IscUJBQVYsQ0FBZ0MsQ0FBaEM7SUFDQSxLQUFLQyxJQUFMLENBQVVDLE9BQVY7RUFDSDtBQTNGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLC8v6L+U5Zue5oyJ6ZKuXG4gICAgICAgIHRvYXN0VHlwZTogMCxcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy50b2FzdFR5cGUgPT0gMCkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmrKLov47ov5vlhaXmtarmvKsyMDQ4XCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMSkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLor6Xlip/og73oi6bpgLznmoTnqIvluo/lkZjov5jlnKjliqrlipvlvIDlj5HkuK3vvIzmrKLov47nlZnoqIDlj43ppojvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuenr+WIhuS4jei2s++8ge+8ge+8geaCqOWPr+S7peeOqea4uOaIj+adpeiOt+WPluenr+WIhu+8jOi/mOWPr+S7peavj+WkqeeZu+W9lei1muWPluenr+WIhu+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5pyA5aSa5Y+q6IO95ZCO6YCAM+atpe+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDQpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5Y+q6IO95ZCO6YCAMeatpe+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDUpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+l5qih5byP5pqC5peg5biu5Yqp77yM6LCi6LCi77yB77yB77yBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gNikge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLnp6/liIbkuI3otrPvvIHvvIHvvIHmgqjpnIDopoEzMDDnp6/liIbmnaXlpI3mtLvjgIJcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA3KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaBreWWnOWFheWAvOaIkOWKn++8jOaEn+iwouaCqOWvuea1qua8qzIwNDjnmoTmlK/mjIHvvIHvvIHvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA4KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuWFheWAvOWksei0pe+8jOiwouiwouaUr+aMge+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDkpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5LuK5aSp6aaW5qyh6L+b5YWl5aWW5YqxMTAw56ev5YiG77yM5q+P5aSp6aaW5qyh6L+b5YWl5ri45oiP6YO95Lya6I635Y+W56ev5YiG5ZOf77yB77yB77yBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTApIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5rKh5pyJ5om+5Yiw5bqU55So5biC5Zy6XCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTEpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTDnp6/liIbvvIzmhJ/osKLmgqjlr7nmtarmvKsyMDQ455qE5pSv5oyBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTIpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oKo5LuK5aSp5bey57uP6aKG6L+H5aWW5Yqx5LqG77yM6LCi6LCiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTMpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6IGa5ZCI5qih5byP5pqC5peg6Ieq5Yqo5Yqf6IO977yM6LCi6LCiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTQpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTAw56ev5YiG77yM5oSf6LCi5oKo5a+55rWq5ryrMjA0OOeahOaUr+aMgVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE1KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIue7j+WFuOaooeW8j+S4jeiDveS9v+eUqOmBk+WFt+WKn+iDve+8jOaCqOWPr+S7peWOu+ivleivleWFtuWug+eOqeazleWTn++8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE2KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS4iuS8oOW+l+WIhuWksei0pe+8jOivt+ajgOafpee9kee7nFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE3KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaOkuihjOamnOaVsOaNruWksei0pe+8jOivt+ajgOafpee9kee7nFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE4KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS4iuS8oOW+l+WIhuaIkOWKn++8jOi1tue0p+WOu+eci+eci+aOkuihjOamnOWQp1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE5KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuinhumikeWlluWKsVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIwKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS/neWtmOWbvueJh+aIkOWKn1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIxKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS/neWtmOWbvueJh+Wksei0pVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIyKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgea2iOmZpOeahOeIseW/g+WNs+WPr+a2iOmZpOivpeeIseW/g++8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIzKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgeaNouS9jeeahOeIseW/g+WwhuS8mumAieS4reivpeeIseW/g++8jOe7p+e7reeCueWHu+ivpeeIseW/g+WRqOi+ueeahOeIseW/g+WNs+WPr+WunueOsOeIseW/g+eahOaNouS9je+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDI0KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgee8qeWwj+aVsOWtl+eahOeIseW/g+WNs+WPr+WwhuivpeeIseW/g+eahOaVsOWtl+e8qeWwjzLlgI1cIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNSkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHmtojpmaTnmoTniLHlv4PljbPlj6/mtojpmaTkuI7or6XniLHlv4PlkIzmqKrmjpLnmoTniLHlv4PvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNikge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHmtojpmaTnmoTniLHlv4PljbPlj6/mtojpmaTkuI7or6XniLHlv4PlkIznq5bmjpLnmoTniLHlv4PvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNykge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLop4bpopHmkq3mlL7lpLHotKXvvIzosKLosKLvvIHvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyOCkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmu5HliqjlsY/luZXmnaXnp7vliqjlsI/mlrnlnZfvvIzkuKTkuKrmlbDlrZfkuIDmoLfnmoTlsI/mlrnlnZfnm7jmkp7ml7blsLHkvJrnm7jliqDlkIjmiJDkuIDkuKrmlrnlnZfvvIzmr4/mrKHmk43kvZzkuYvlkI7kvJrlnKjnqbrnmb3nmoTmlrnmoLzlpITpmo/mnLrnlJ/miJDkuIDkuKoy5oiWNOeahOaWueWdl++8jOacgOe7iOW+l+WIsOS4gOS4qjIwNDjnmoTmlrnlnZflsLHnrpfog5zliKnkuobvvIzlpoLmnpwxNuS4quagvOWtkOWFqOmDqOWhq+a7oeaXoOazleenu+WKqOeahOivneWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDI5KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+epuueZveeIseW/g++8jOeIseW/g+S8muWQkeeCueWHu+eahOS9jee9rumdoOaLou+8jOW9k+S4pOS4quaVsOWtl+ebuOWQjOeahOeIseW/g+ebuOmBh+aXtuWwseS8muWQiOW5tuS4uuS4pOaVsOWtl+S5i+WSjO+8jOWFqOmDqOWhq+a7oeaXoOazleenu+WKqOeahOivneWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMwKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIumAieS4rei/nuaOpeWcqOS4gOi1t+eahOebuOWQjOaVsOWtl++8jOeCueWHu+eahOaVsOWtl+S8muiBmuWQiOS4uuabtOWkp+eahOaVsOWtl++8jOWFtuWug+aVsOWtl+WImea2iOmZpO+8jOWujOaIkOmAmuWFs+aJgOmcgOW+l+WIhuWNs+WPr+i/m+WFpeS4i+S4gOWFs++8jOWQpuWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMxKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIumAieS4rei/nuaOpeWcqOS4gOi1t+eahOebuOWQjOaVsOWtl++8jOmAieS4reeahOaVsOWtl+WwhuS8muiiq+a2iOmZpO+8jOWujOaIkOmAmuWFs+aJgOmcgOW+l+WIhuWNs+WPr+i/m+WFpeS4i+S4gOWFs++8jOWQpuWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSB0aGlzLnRvYXN0VHlwZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSB0b2FzdE1lc3NhZ2U7XG5cbiAgICAgICAgLy8gR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJhY2tCdXR0b25GdW5jXCIpO1xuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLm5vZGUsIFwiYmFja0J1dHRvbkZ1bmNcIik7XG4gICAgICAgIC8vIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAvLyAgICAgd3guc2hvd01vZGFsKHt0aXRsZTogXCLmtarmvKvmj5DnpLpcIiwgY29udGVudDogdG9hc3RNZXNzYWdlLHNob3dDYW5jZWw6ZmFsc2V9KTtcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBiYWNrQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/GameHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92d33tkzdhLxrs4dxYAfPUo', 'GameHelp');
// Script/panel/GameHelp.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = require("GameUiTools");

cc.Class({
  "extends": cc.Component,
  properties: {
    backColor: cc.Node,
    backButton: cc.Node //返回按钮

  },
  onLoad: function onLoad() {
    GameUiTools.setButtonClickEvents(this, this.backButton, "buttonFunc");
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;

    if (this.backButton == button) {
      GameTools.playSimpleAudioEngine(0);
      this.node.destroy();
    }

    return true;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcR2FtZUhlbHAuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja0NvbG9yIiwiTm9kZSIsImJhY2tCdXR0b24iLCJvbkxvYWQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsImJ1dHRvbkZ1bmMiLCJldmVudCIsImJ1dHRvbiIsInRhcmdldCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUVMQyxVQUFVLEVBQUU7SUFDUkMsU0FBUyxFQUFFSixFQUFFLENBQUNLLElBRE47SUFFUkMsVUFBVSxFQUFFTixFQUFFLENBQUNLLElBRlAsQ0FFYTs7RUFGYixDQUZQO0VBT0xFLE1BUEssb0JBT0k7SUFDTFIsV0FBVyxDQUFDUyxvQkFBWixDQUFpQyxJQUFqQyxFQUF1QyxLQUFLRixVQUE1QyxFQUF3RCxZQUF4RDtFQUNILENBVEk7RUFXTEcsVUFBVSxFQUFFLG9CQUFVQyxLQUFWLEVBQWlCO0lBQ3pCLElBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxNQUFuQjs7SUFDQSxJQUFJLEtBQUtOLFVBQUwsSUFBbUJLLE1BQXZCLEVBQStCO01BQzNCYixTQUFTLENBQUNlLHFCQUFWLENBQWdDLENBQWhDO01BQ0EsS0FBS0MsSUFBTCxDQUFVQyxPQUFWO0lBQ0g7O0lBQ0QsT0FBTyxJQUFQO0VBQ0g7QUFsQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJhY2tDb2xvcjogY2MuTm9kZSxcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSwgLy/ov5Tlm57mjInpkq5cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmJhY2tCdXR0b24sIFwiYnV0dG9uRnVuY1wiKTtcbiAgICB9LFxuXG4gICAgYnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24gPT0gYnV0dG9uKSB7XG4gICAgICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDApO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
