"use strict";
cc._RF.push(module, '6633adSwotPR4cUtDy9WXUH', 'GameUiTools');
// Script/GameUiTools.js

"use strict";

var GameConfig = require("GameConfig");

var GameTools = require("GameTools");

var GameUiTools = {
  getSpriteFrame: function getSpriteFrame(spriteName, curSp) {
    // return new cc.SpriteFrame(cc.url.raw(spriteName));
    cc.loader.loadRes(spriteName, cc.SpriteFrame, function (err, spriteFrame) {
      if (err) {
        cc.error(err.message || err);
        console.log("DEBUG: err" + err);
        return;
      }

      if (curSp) {
        curSp.spriteFrame = spriteFrame;
      }
    });
  },
  newSprite: function newSprite(spriteName, isCache) {
    var sprite = new cc.Node();

    if (isCache) {
      spriteName = spriteName.split('.')[0];
      sprite.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(spriteName);
    } else {
      sprite.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/" + spriteName);
    }

    return sprite;
  },
  setNodeSpriteFrame: function setNodeSpriteFrame(node, spriteName) {
    node.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(spriteName);
  },
  setButtonClickEvents: function setButtonClickEvents(component, menu, handler, customEventData, isScale) {
    var arrayMenu = new Array();

    if (menu.length == undefined) {
      arrayMenu[0] = menu;
    } else {
      arrayMenu = menu;
    }

    for (var i = 0; i < arrayMenu.length; i++) {
      var clickEventHandler = new cc.Component.EventHandler();
      clickEventHandler.target = component.node; //这个 node 节点是你的事件处理代码组件所属的节点

      clickEventHandler.component = component.node.name; //这个是代码文件名

      clickEventHandler.handler = handler;

      if (menu.length == undefined) {
        clickEventHandler.customEventData = customEventData;
      } else {
        clickEventHandler.customEventData = i;
      }

      var button = arrayMenu[i].addComponent(cc.Button);
      button.clickEvents.push(clickEventHandler);

      if (isScale == undefined || isScale) {
        button.transition = cc.Button.Transition.SCALE;
        button.duration = 0.1;
        button.zoomScale = 1.2;
      } // this.secondSetMenu[i].on('click', this.setMenuTouchFunc, this);

    }
  },
  setSecondSetMenuSpriteFram: function setSecondSetMenuSpriteFram(secondSetMenu, isRight) {
    //设置是否勾选图片
    secondSetMenu.getChildren()[0].getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(isRight ? "menuRight" : "menuClose");
  },
  addCloseSprite: function addCloseSprite(node) {
    var menuClose = new cc.Node();
    menuClose.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame("menuClose");
    node.addChild(menuClose);
  },
  scheduleOnce: function scheduleOnce(node, callFunc, delay) {
    //事件调度
    node.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(callFunc, node)));
  },
  loadingScene: function loadingScene(sceneName, isShowLayer) {
    //加载场景
    if (isShowLayer) {
      cc.loader.loadRes("panel/LoadingLayer", function (err, prefab) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
        cc.director.preloadScene(sceneName, function () {
          cc.director.loadScene(sceneName);
        });
      });
    } else {
      cc.director.preloadScene(sceneName, function () {
        cc.director.loadScene(sceneName);
      });
    }
  },
  loadingLayer: function loadingLayer(panelName) {
    //加载图层
    cc.loader.loadRes(panelName, function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
      }
    });
  }
};
module.exports = GameUiTools;

cc._RF.pop();