"use strict";
cc._RF.push(module, '415acQw6oNBeo2WRVLPUaoS', 'GameTools');
// Script/GameTools.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = {
  love2048FrameCache: null,
  numberLabelAtlas: null,
  backMusicIsPlay: null,
  playSimpleAudioEngine: function playSimpleAudioEngine(engineType) {
    if (GameConfig.IS_GAME_MUSIC) {
      switch (engineType) {
        case 0:
          cc.audioEngine.play(cc.url.raw('resources/sounds/pop_star.mp3'), false, 0.5);
          break;

        case 1:
          cc.audioEngine.play(cc.url.raw('resources/sounds/select.mp3'), false, 0.5);
          break;

        case 2:
          cc.audioEngine.play(cc.url.raw("resources/sounds/landing.mp3"), false, 0.5);
          break;

        case 3:
          cc.audioEngine.play(cc.url.raw("resources/sounds/cheers.mp3"), false, 0.5);
          break;

        default:
          break;
      }
    }
  },
  playBackgroundMusic: function playBackgroundMusic() {
    if (GameConfig.IS_GAME_MUSIC) {
      if (GameTools.backMusicIsPlay == null) {
        GameTools.backMusicIsPlay = cc.audioEngine.play(cc.url.raw('resources/sounds/backMusic.mp3'), true, 0.5);
      }
    }
  },
  stopBackgroundMusic: function stopBackgroundMusic() {
    if (GameTools.backMusicIsPlay != null) {
      cc.audioEngine.stop(GameTools.backMusicIsPlay);
      GameTools.backMusicIsPlay = null;
    }
  },
  getItemByLocalStorage: function getItemByLocalStorage(key, value) {
    var values = cc.sys.localStorage.getItem(key);

    if (values === undefined || values === null || values === '') {
      cc.sys.localStorage.setItem(key, value);
      return value;
    }

    if (typeof value === 'boolean') {
      if (typeof values === 'boolean') {
        return values;
      }

      return "true" == values;
    } else if (typeof value === 'number') {
      return Number(values);
    }

    return values;
  },
  setItemByLocalStorage: function setItemByLocalStorage(key, value) {
    cc.sys.localStorage.setItem(key, value);
  },
  toastMessage: function toastMessage(toastType) {
    cc.loader.loadRes("panel/ShowMessage", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        node.getComponent(cc.Component).toastType = toastType;
        cc.director.getScene().children[0].addChild(node); // cc.director.getScene().getChildByName('Canvas').addChild(node);
      }
    });
  },
  sharePicture: function sharePicture(pictureName) {
    var titleStr = '来跟我一起挑战浪漫2048吧。';

    if ("shareTicket" == pictureName) {
      titleStr = "看看你在群里排第几？来和我挑战浪漫2048吧。";
    } else if ("LotteryLayer" == pictureName) {
      //抽奖页面分享
      titleStr = "浪漫2048福利大放送！快进来抽奖吧！";
    } else if (pictureName != undefined && pictureName != null) {
      titleStr = "我得了" + pictureName + "分," + titleStr;
    }

    if (CC_WECHATGAME) {
      window.wx.shareAppMessage({
        title: titleStr,
        query: "x=" + GameConfig.MAIN_MENU_NUM,
        imageUrl: canvas.toTempFilePathSync({
          destWidth: 500,
          destHeight: 400
        }),
        success: function success(res) {
          if (res.shareTickets != undefined && res.shareTickets.length > 0) {
            if ("shareTicket" == pictureName) {
              window.wx.postMessage({
                messageType: 5,
                MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM == -1000 ? 1 : GameConfig.MAIN_MENU_NUM,
                shareTicket: res.shareTickets[0]
              });
            }
          }
        }
      });
    } else {
      cc.log("执行了截图" + titleStr);
    }
  },
  getGameIntegral: function getGameIntegral() {
    //获取积分
    return this.getItemByLocalStorage("GameIntegral", 0);
  },
  setGameIntegral: function setGameIntegral(intrgral) {
    // 设置积分
    cc.sys.localStorage.setItem("GameIntegral", intrgral);
  },
  commentGame: function commentGame() {
    //评论
    if (CC_WECHATGAME) {
      window.wx.openCustomerServiceConversation({});
    } else {
      this.toastMessage(1);
      cc.log("执行了评论");
    }
  },
  checkFirstLoginGame: function checkFirstLoginGame() {
    var _this = this;

    //检查是否首次登录
    var loginDate = Math.floor((new Date().getTime() - new Date(2018, 3, 18, 0, 0, 0, 0).getTime()) / (1000 * 60 * 60 * 24));

    if (loginDate > this.getItemByLocalStorage("FirstEnterGameDate", 0)) {
      cc.sys.localStorage.setItem("FirstEnterGameDate", loginDate);
      setTimeout(function () {
        _this.setGameIntegral(_this.getGameIntegral() + 100);

        _this.toastMessage(9);
      }, 1500);
    }
  },
  setCardBackPath: function setCardBackPath(num) //设置卡片背景路径
  {//GameConfig.setCardBackPath(num, "card/nl2048.png");
  },
  userLogin: function userLogin() {//用户登录
  },
  getRankData: function getRankData(shareTicket) {
    //获取排行榜
    cc.loader.loadRes("panel/RankingListView", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);

        if (shareTicket != undefined) {
          node.getComponent(cc.Component).shareTicket = shareTicket;
        } // node.setPosition(cc.p(0, 0));


        cc.director.getScene().children[0].addChild(node);
      }
    });
  },
  removeRankData: function removeRankData() {
    //移除排行榜数据
    if (CC_WECHATGAME) {
      window.wx.postMessage({
        messageType: 0
      });
    } else {
      cc.log("移除排行榜数据。");
    }
  },
  submitScore: function submitScore(score) {
    //提交得分
    if (CC_WECHATGAME) {
      window.wx.postMessage({
        messageType: 3,
        MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
        score: score
      });
    } else {
      cc.log("提交得分:" + GameConfig.MAIN_MENU_NUM + " : " + score);
    }
  },
  getSelectAddNum: function getSelectAddNum(num) //获取叠加数
  {
    if (num < 4) {
      num = 2;
    } else if (num < 8) {
      num = 4;
    } else if (num < 16) {
      num = 8;
    } else if (num < 32) {
      num = 16;
    } else if (num < 64) {
      num = 32;
    } else if (num < 128) {
      num = 64;
    } else if (num < 256) {
      num = 128;
    } else if (num < 512) {
      num = 256;
    } else if (num < 1024) {
      num = 512;
    } else if (num < 2048) {
      num = 1024;
    } else if (num < 4096) {
      num = 2048;
    } else if (num < 8192) {
      num = 4096;
    } else if (num < 16384) {
      num = 8192;
    } else if (num < 32768) {
      num = 16384;
    } else if (num < 65536) {
      num = 32768;
    } else if (num < 131072) {
      num = 65536;
    } else {
      num = 131072;
    }

    return num;
  }
};
module.exports = GameTools;

cc._RF.pop();