"use strict";
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