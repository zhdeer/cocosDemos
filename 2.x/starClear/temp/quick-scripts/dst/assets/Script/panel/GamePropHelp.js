
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