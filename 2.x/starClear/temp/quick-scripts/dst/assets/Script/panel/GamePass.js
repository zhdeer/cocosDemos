
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