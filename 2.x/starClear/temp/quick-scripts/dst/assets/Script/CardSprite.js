
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