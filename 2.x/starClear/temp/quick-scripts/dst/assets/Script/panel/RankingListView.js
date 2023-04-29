
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcUmFua2luZ0xpc3RWaWV3LmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiQW5pbUxheWVyVG9vbCIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInJhbmtpbmdTY3JvbGxWaWV3IiwiU3ByaXRlIiwic2hhcmVUaWNrZXQiLCJvbkxvYWQiLCJzdGFydCIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic2hhcmVOb2RlIiwiYWRkQ29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJzZXRQb3NpdGlvbiIsIm5vZGUiLCJhZGRDaGlsZCIsIkNDX1dFQ0hBVEdBTUUiLCJ3aW5kb3ciLCJzaGFyZWRDYW52YXMiLCJ1bmRlZmluZWQiLCJ0ZXgiLCJUZXh0dXJlMkQiLCJ3aWR0aCIsImhlaWdodCIsInd4IiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsIk1BSU5fTUVOVV9OVU0iLCJnYW1lVHlwZU5vZGUiLCJsb2ciLCJzaGFyZUJ1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsInNldFRpbWVvdXQiLCJzaGFyZVBpY3R1cmUiLCJiYWNrQnV0dG9uRnVuYyIsImRlc3Ryb3kiLCJfdXBkYXRlU3ViRG9tYWluQ2FudmFzIiwiaW5pdFdpdGhFbGVtZW50IiwiaGFuZGxlTG9hZGVkVGV4dHVyZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTNCOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQUQsQ0FBdkI7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQUksRUFBRSxDQUFDQyxLQUFILENBQVM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBRFA7RUFFTDtFQUNBQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFFSixFQUFFLENBQUNLLElBRFA7SUFFUjtJQUNBQyxpQkFBaUIsRUFBRU4sRUFBRSxDQUFDTyxNQUhkO0lBR3FCO0lBQzdCQyxXQUFXLEVBQUU7RUFKTCxDQUhQO0VBU0xDLE1BVEssb0JBU0ksQ0FDUixDQVZJO0VBV0xDLEtBWEssbUJBV0c7SUFDSlgsV0FBVyxDQUFDWSxvQkFBWixDQUFpQyxJQUFqQyxFQUF1QyxLQUFLUCxVQUE1QyxFQUF3RCxnQkFBeEQsRUFESSxDQUVKOztJQUNBLElBQUksS0FBS0ksV0FBTCxJQUFvQixJQUF4QixFQUE4QjtNQUMxQixJQUFJSSxTQUFTLEdBQUcsSUFBSVosRUFBRSxDQUFDSyxJQUFQLEVBQWhCO01BQ0FPLFNBQVMsQ0FBQ0MsWUFBVixDQUF1QmIsRUFBRSxDQUFDYyxLQUExQixFQUFpQ0MsTUFBakMsR0FBMEMsS0FBMUM7TUFDQUgsU0FBUyxDQUFDSSxXQUFWLENBQXNCLENBQUMsR0FBdkIsRUFBNEIsR0FBNUI7TUFDQSxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJOLFNBQW5CO0lBQ0g7O0lBQ0QsSUFBSU8sYUFBSixFQUFtQjtNQUNmLElBQUlDLE1BQU0sQ0FBQ0MsWUFBUCxJQUF1QkMsU0FBM0IsRUFBc0M7UUFDbEMsS0FBS0MsR0FBTCxHQUFXLElBQUl2QixFQUFFLENBQUN3QixTQUFQLEVBQVg7UUFDQUosTUFBTSxDQUFDQyxZQUFQLENBQW9CSSxLQUFwQixHQUE0QixHQUE1QjtRQUNBTCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JLLE1BQXBCLEdBQTZCLElBQTdCLENBSGtDLENBSWxDOztRQUNBLElBQUksS0FBS2xCLFdBQUwsSUFBb0IsSUFBeEIsRUFBOEI7VUFDMUJZLE1BQU0sQ0FBQ08sRUFBUCxDQUFVQyxXQUFWLENBQXNCO1lBQ2xCQyxXQUFXLEVBQUUsQ0FESztZQUVsQkMsYUFBYSxFQUFFbkMsVUFBVSxDQUFDbUMsYUFGUjtZQUdsQnRCLFdBQVcsRUFBRSxLQUFLQTtVQUhBLENBQXRCO1FBS0gsQ0FORCxNQU1PO1VBQ0hZLE1BQU0sQ0FBQ08sRUFBUCxDQUFVQyxXQUFWLENBQXNCO1lBQ2xCQyxXQUFXLEVBQUUsQ0FESztZQUVsQkMsYUFBYSxFQUFFbkMsVUFBVSxDQUFDbUM7VUFGUixDQUF0QjtRQUlIO01BQ0o7SUFDSixDQW5CRCxNQW1CTztNQUNILElBQUlDLFlBQVksR0FBRyxJQUFJL0IsRUFBRSxDQUFDSyxJQUFQLEVBQW5CO01BQ0EwQixZQUFZLENBQUNsQixZQUFiLENBQTBCYixFQUFFLENBQUNjLEtBQTdCLEVBQW9DQyxNQUFwQyxHQUE2QyxTQUE3QztNQUNBLEtBQUtFLElBQUwsQ0FBVUMsUUFBVixDQUFtQmEsWUFBbkI7TUFDQS9CLEVBQUUsQ0FBQ2dDLEdBQUgsQ0FBTyxhQUFhckMsVUFBVSxDQUFDbUMsYUFBL0I7SUFDSDtFQUNKLENBN0NJO0VBK0NMRyxlQUFlLEVBQUUseUJBQVVDLEtBQVYsRUFBaUI7SUFDOUJwQyxTQUFTLENBQUNxQyxxQkFBVixDQUFnQyxDQUFoQztJQUNBQyxVQUFVLENBQUMsWUFBTTtNQUNidEMsU0FBUyxDQUFDdUMsWUFBVixDQUF1QixhQUF2QjtJQUNILENBRlMsRUFFUCxHQUZPLENBQVY7RUFHSCxDQXBESTtFQXNETEMsY0FBYyxFQUFFLHdCQUFVSixLQUFWLEVBQWlCO0lBQzdCcEMsU0FBUyxDQUFDcUMscUJBQVYsQ0FBZ0MsQ0FBaEM7SUFDQSxLQUFLbEIsSUFBTCxDQUFVc0IsT0FBVjtFQUNILENBekRJO0VBMkRMO0VBQ0FDLHNCQTVESyxvQ0E0RG9CO0lBQ3JCLElBQUlyQixhQUFKLEVBQW1CO01BQ2YsSUFBSUMsTUFBTSxDQUFDQyxZQUFQLElBQXVCQyxTQUEzQixFQUFzQztRQUNsQyxLQUFLQyxHQUFMLENBQVNrQixlQUFULENBQXlCckIsTUFBTSxDQUFDQyxZQUFoQztRQUNBLEtBQUtFLEdBQUwsQ0FBU21CLG1CQUFUO1FBQ0EsS0FBS3BDLGlCQUFMLENBQXVCcUMsV0FBdkIsR0FBcUMsSUFBSTNDLEVBQUUsQ0FBQzRDLFdBQVAsQ0FBbUIsS0FBS3JCLEdBQXhCLENBQXJDO01BQ0g7SUFDSjtFQUNKLENBcEVJO0VBcUVMc0IsTUFyRUssb0JBcUVJO0lBQ0wsS0FBS0wsc0JBQUw7RUFDSDtBQXZFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEFuaW1MYXllclRvb2wgPSByZXF1aXJlKFwiQW5pbUxheWVyVG9vbFwiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICAvLyBuYW1lOiBcIlJhbmtpbmdMaXN0Vmlld1wiLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmFja0J1dHRvbjogY2MuTm9kZSxcbiAgICAgICAgLy8gc2hhcmVCdXR0b246IGNjLk5vZGUsXG4gICAgICAgIHJhbmtpbmdTY3JvbGxWaWV3OiBjYy5TcHJpdGUsLy/mmL7npLrmjpLooYzmppxcbiAgICAgICAgc2hhcmVUaWNrZXQ6IG51bGwsXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgfSxcbiAgICBzdGFydCgpIHtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJhY2tCdXR0b25GdW5jXCIpO1xuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNoYXJlQnV0dG9uLCBcInNoYXJlQnV0dG9uRnVuY1wiKTtcbiAgICAgICAgaWYgKHRoaXMuc2hhcmVUaWNrZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHNoYXJlTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBzaGFyZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIue+pOaOkuihjFwiO1xuICAgICAgICAgICAgc2hhcmVOb2RlLnNldFBvc2l0aW9uKC0yNjAsIDUwMyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoc2hhcmVOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zaGFyZWRDYW52YXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXggPSBuZXcgY2MuVGV4dHVyZTJEKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy53aWR0aCA9IDcyMDtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2hhcmVkQ2FudmFzLmhlaWdodCA9IDEyODA7XG4gICAgICAgICAgICAgICAgLy8g5Y+R5raI5oGv57uZ5a2Q5Z+fXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhcmVUaWNrZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVRpY2tldDogdGhpcy5zaGFyZVRpY2tldFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBnYW1lVHlwZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgZ2FtZVR5cGVOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmmoLml6DmjpLooYzmppzmlbDmja5cIjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChnYW1lVHlwZU5vZGUpO1xuICAgICAgICAgICAgY2MubG9nKFwi6I635Y+W5o6S6KGM5qac5pWw5o2u44CCXCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNoYXJlQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoNCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZShcInNoYXJlVGlja2V0XCIpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH0sXG5cbiAgICBiYWNrQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcblxuICAgIC8vIOWIt+aWsOWtkOWfn+eahOe6ueeQhlxuICAgIF91cGRhdGVTdWJEb21haW5DYW52YXMoKSB7XG4gICAgICAgIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNoYXJlZENhbnZhcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleC5pbml0V2l0aEVsZW1lbnQod2luZG93LnNoYXJlZENhbnZhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXguaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmFua2luZ1Njcm9sbFZpZXcuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVN1YkRvbWFpbkNhbnZhcygpO1xuICAgIH0sXG59KTtcbiJdfQ==