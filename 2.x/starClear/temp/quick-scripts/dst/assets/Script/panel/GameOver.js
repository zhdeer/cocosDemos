
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