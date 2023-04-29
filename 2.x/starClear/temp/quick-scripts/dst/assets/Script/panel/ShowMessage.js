
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvd01lc3NhZ2UuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJHYW1lVWlUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWVzc2FnZUxhYmVsIiwiTGFiZWwiLCJiYWNrQnV0dG9uIiwiTm9kZSIsInRvYXN0VHlwZSIsInN0YXJ0IiwidG9hc3RNZXNzYWdlIiwic3RyaW5nIiwiYmFja0J1dHRvbkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7QUFDQSxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsWUFBWSxFQUFFSixFQUFFLENBQUNLLEtBRFQ7SUFFUkMsVUFBVSxFQUFFTixFQUFFLENBQUNPLElBRlA7SUFFWTtJQUNwQkMsU0FBUyxFQUFFO0VBSEgsQ0FIUDtFQVNMQyxLQVRLLG1CQVNHO0lBQ0osSUFBSUMsWUFBWSxHQUFHLElBQW5COztJQUNBLElBQUksS0FBS0YsU0FBTCxJQUFrQixDQUF0QixFQUF5QjtNQUNyQkUsWUFBWSxHQUFHLFlBQWY7SUFDSCxDQUZELE1BRU8sSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO01BQzVCRSxZQUFZLEdBQUcsMEJBQWY7SUFDSCxDQUZNLE1BRUEsSUFBSSxLQUFLRixTQUFMLElBQWtCLENBQXRCLEVBQXlCO01BQzVCRSxZQUFZLEdBQUcsaUNBQWY7SUFDSCxD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LEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRywwR0FBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyw2REFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyw2REFBZjtJQUNILENBRk0sTUFFQSxJQUFJLEtBQUtGLFNBQUwsSUFBa0IsRUFBdEIsRUFBMEI7TUFDN0JFLFlBQVksR0FBRyxpREFBZjtJQUNILENBRk0sTUFFRDtNQUNGQSxZQUFZLEdBQUcsS0FBS0YsU0FBcEI7SUFDSDs7SUFDRCxLQUFLSixZQUFMLENBQWtCTyxNQUFsQixHQUEyQkQsWUFBM0IsQ0FyRUksQ0F1RUo7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0gsQ0F0Rkk7RUF3RkxFLGNBQWMsRUFBRSx3QkFBVUMsS0FBVixFQUFpQjtJQUM3QmYsU0FBUyxDQUFDZ0IscUJBQVYsQ0FBZ0MsQ0FBaEM7SUFDQSxLQUFLQyxJQUFMLENBQVVDLE9BQVY7RUFDSDtBQTNGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtZXNzYWdlTGFiZWw6IGNjLkxhYmVsLFxuICAgICAgICBiYWNrQnV0dG9uOiBjYy5Ob2RlLC8v6L+U5Zue5oyJ6ZKuXG4gICAgICAgIHRvYXN0VHlwZTogMCxcbiAgICB9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCB0b2FzdE1lc3NhZ2UgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy50b2FzdFR5cGUgPT0gMCkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmrKLov47ov5vlhaXmtarmvKsyMDQ4XCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMSkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLor6Xlip/og73oi6bpgLznmoTnqIvluo/lkZjov5jlnKjliqrlipvlvIDlj5HkuK3vvIzmrKLov47nlZnoqIDlj43ppojvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuenr+WIhuS4jei2s++8ge+8ge+8geaCqOWPr+S7peeOqea4uOaIj+adpeiOt+WPluenr+WIhu+8jOi/mOWPr+S7peavj+WkqeeZu+W9lei1muWPluenr+WIhu+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5pyA5aSa5Y+q6IO95ZCO6YCAM+atpe+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDQpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5Y+q6IO95ZCO6YCAMeatpe+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDUpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+l5qih5byP5pqC5peg5biu5Yqp77yM6LCi6LCi77yB77yB77yBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gNikge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLnp6/liIbkuI3otrPvvIHvvIHvvIHmgqjpnIDopoEzMDDnp6/liIbmnaXlpI3mtLvjgIJcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA3KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaBreWWnOWFheWAvOaIkOWKn++8jOaEn+iwouaCqOWvuea1qua8qzIwNDjnmoTmlK/mjIHvvIHvvIHvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA4KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuWFheWAvOWksei0pe+8jOiwouiwouaUr+aMge+8ge+8ge+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDkpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5LuK5aSp6aaW5qyh6L+b5YWl5aWW5YqxMTAw56ev5YiG77yM5q+P5aSp6aaW5qyh6L+b5YWl5ri45oiP6YO95Lya6I635Y+W56ev5YiG5ZOf77yB77yB77yBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTApIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5rKh5pyJ5om+5Yiw5bqU55So5biC5Zy6XCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTEpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTDnp6/liIbvvIzmhJ/osKLmgqjlr7nmtarmvKsyMDQ455qE5pSv5oyBXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTIpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oKo5LuK5aSp5bey57uP6aKG6L+H5aWW5Yqx5LqG77yM6LCi6LCiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTMpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6IGa5ZCI5qih5byP5pqC5peg6Ieq5Yqo5Yqf6IO977yM6LCi6LCiXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTQpIHtcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac6I635b6X5aWW5YqxMTAw56ev5YiG77yM5oSf6LCi5oKo5a+55rWq5ryrMjA0OOeahOaUr+aMgVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE1KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIue7j+WFuOaooeW8j+S4jeiDveS9v+eUqOmBk+WFt+WKn+iDve+8jOaCqOWPr+S7peWOu+ivleivleWFtuWug+eOqeazleWTn++8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE2KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS4iuS8oOW+l+WIhuWksei0pe+8jOivt+ajgOafpee9kee7nFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE3KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaOkuihjOamnOaVsOaNruWksei0pe+8jOivt+ajgOafpee9kee7nFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE4KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS4iuS8oOW+l+WIhuaIkOWKn++8jOi1tue0p+WOu+eci+eci+aOkuihjOamnOWQp1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDE5KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuinhumikeWlluWKsVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIwKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS/neWtmOWbvueJh+aIkOWKn1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIxKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS/neWtmOWbvueJh+Wksei0pVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIyKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgea2iOmZpOeahOeIseW/g+WNs+WPr+a2iOmZpOivpeeIseW/g++8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDIzKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgeaNouS9jeeahOeIseW/g+WwhuS8mumAieS4reivpeeIseW/g++8jOe7p+e7reeCueWHu+ivpeeIseW/g+WRqOi+ueeahOeIseW/g+WNs+WPr+WunueOsOeIseW/g+eahOaNouS9je+8gVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDI0KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+mcgOimgee8qeWwj+aVsOWtl+eahOeIseW/g+WNs+WPr+WwhuivpeeIseW/g+eahOaVsOWtl+e8qeWwjzLlgI1cIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNSkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHmtojpmaTnmoTniLHlv4PljbPlj6/mtojpmaTkuI7or6XniLHlv4PlkIzmqKrmjpLnmoTniLHlv4PvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNikge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLngrnlh7vpnIDopoHmtojpmaTnmoTniLHlv4PljbPlj6/mtojpmaTkuI7or6XniLHlv4PlkIznq5bmjpLnmoTniLHlv4PvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyNykge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLop4bpopHmkq3mlL7lpLHotKXvvIzosKLosKLvvIHvvIFcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyOCkge1xuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmu5HliqjlsY/luZXmnaXnp7vliqjlsI/mlrnlnZfvvIzkuKTkuKrmlbDlrZfkuIDmoLfnmoTlsI/mlrnlnZfnm7jmkp7ml7blsLHkvJrnm7jliqDlkIjmiJDkuIDkuKrmlrnlnZfvvIzmr4/mrKHmk43kvZzkuYvlkI7kvJrlnKjnqbrnmb3nmoTmlrnmoLzlpITpmo/mnLrnlJ/miJDkuIDkuKoy5oiWNOeahOaWueWdl++8jOacgOe7iOW+l+WIsOS4gOS4qjIwNDjnmoTmlrnlnZflsLHnrpfog5zliKnkuobvvIzlpoLmnpwxNuS4quagvOWtkOWFqOmDqOWhq+a7oeaXoOazleenu+WKqOeahOivneWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDI5KSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIueCueWHu+epuueZveeIseW/g++8jOeIseW/g+S8muWQkeeCueWHu+eahOS9jee9rumdoOaLou+8jOW9k+S4pOS4quaVsOWtl+ebuOWQjOeahOeIseW/g+ebuOmBh+aXtuWwseS8muWQiOW5tuS4uuS4pOaVsOWtl+S5i+WSjO+8jOWFqOmDqOWhq+a7oeaXoOazleenu+WKqOeahOivneWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMwKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIumAieS4rei/nuaOpeWcqOS4gOi1t+eahOebuOWQjOaVsOWtl++8jOeCueWHu+eahOaVsOWtl+S8muiBmuWQiOS4uuabtOWkp+eahOaVsOWtl++8jOWFtuWug+aVsOWtl+WImea2iOmZpO+8jOWujOaIkOmAmuWFs+aJgOmcgOW+l+WIhuWNs+WPr+i/m+WFpeS4i+S4gOWFs++8jOWQpuWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDMxKSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIumAieS4rei/nuaOpeWcqOS4gOi1t+eahOebuOWQjOaVsOWtl++8jOmAieS4reeahOaVsOWtl+WwhuS8muiiq+a2iOmZpO+8jOWujOaIkOmAmuWFs+aJgOmcgOW+l+WIhuWNs+WPr+i/m+WFpeS4i+S4gOWFs++8jOWQpuWImea4uOaIj+e7k+adn+OAglwiO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSB0aGlzLnRvYXN0VHlwZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSB0b2FzdE1lc3NhZ2U7XG5cbiAgICAgICAgLy8gR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5iYWNrQnV0dG9uLCBcImJhY2tCdXR0b25GdW5jXCIpO1xuICAgICAgICAvLyBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLm5vZGUsIFwiYmFja0J1dHRvbkZ1bmNcIik7XG4gICAgICAgIC8vIGlmIChDQ19XRUNIQVRHQU1FKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAvLyAgICAgd3guc2hvd01vZGFsKHt0aXRsZTogXCLmtarmvKvmj5DnpLpcIiwgY29udGVudDogdG9hc3RNZXNzYWdlLHNob3dDYW5jZWw6ZmFsc2V9KTtcbiAgICAgICAgLy8gfVxuICAgIH0sXG5cbiAgICBiYWNrQnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgfSxcbn0pO1xuIl19