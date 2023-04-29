
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