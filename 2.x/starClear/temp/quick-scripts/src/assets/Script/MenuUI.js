"use strict";
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