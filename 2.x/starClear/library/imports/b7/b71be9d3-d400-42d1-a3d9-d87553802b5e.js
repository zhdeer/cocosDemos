"use strict";
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