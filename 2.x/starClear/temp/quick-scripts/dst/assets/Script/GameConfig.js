
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f937eblcKFPZItT3ZuvdIyg', 'GameConfig');
// Script/GameConfig.js

"use strict";

var LoadingSceneType = {
  LoadingSceneFirst: 0,
  //首次进入
  LoadingSceneEnterGame: 1,
  //进入游戏
  LoadingSceneBackGame: 2 //返回游戏

};
var MainMenu = {
  MainMenuNumClassic: 0,
  // 经典模式
  MainMenuNumPop: 5,
  //消除叠加模式
  MainMenuNumPopStar: 6,
  //消灭星星模式
  MainMenuSpace: 7 //清空

};
var PropsMenu = {
  PropsMenuBackout: 0,
  //撤销功能
  PropsMenuDestroyCard: 1,
  //销毁一个卡片
  PropsMenuExchangeCard: 2,
  //调换卡片
  PropsMenuShrinkNum: 3,
  //使卡片数字除2
  PropsMenuRemoveAcross: 4,
  //使卡片横排消除
  PropsMenuRemoveVertical: 5,
  //使卡片竖排消除
  PropsMenuSpace: 6 //清空

};
var GameConfig = {
  GameName: "一起消灭星星",
  GameClubButton: null,
  //游戏圈按钮
  GameScene: null,
  GameLogic: null,
  LoadingSceneType: LoadingSceneType,
  MainMenu: MainMenu,
  PropsMenu: PropsMenu,
  DEVICE_WIDTH: 720,
  // 屏幕宽度
  DEVICE_HEIGHT: 1280,
  CARD_WIDTH: 0,
  // 卡片宽度
  CAED_LINES: 4,
  // 卡片个数
  MAIN_MENU_NUM: -1000,
  // 模式类型标识
  loadingSceneType: LoadingSceneType.LoadingSceneFirst,
  // 加载界面
  mainMenu: MainMenu.MainMenuSpace,
  // 主选择菜单
  propsMenu: PropsMenu.PropsMenuSpace,
  // 道具功能
  IS_GAME_MUSIC: true,
  // 游戏音效
  IS_GAME_SHARE: false,
  // 游戏分享
  IS_GAME_OVER: false,
  // 游戏是否结束
  IS_GAME_WIN: false //游戏是否胜利

};
module.exports = GameConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkxvYWRpbmdTY2VuZVR5cGUiLCJMb2FkaW5nU2NlbmVGaXJzdCIsIkxvYWRpbmdTY2VuZUVudGVyR2FtZSIsIkxvYWRpbmdTY2VuZUJhY2tHYW1lIiwiTWFpbk1lbnUiLCJNYWluTWVudU51bUNsYXNzaWMiLCJNYWluTWVudU51bVBvcCIsIk1haW5NZW51TnVtUG9wU3RhciIsIk1haW5NZW51U3BhY2UiLCJQcm9wc01lbnUiLCJQcm9wc01lbnVCYWNrb3V0IiwiUHJvcHNNZW51RGVzdHJveUNhcmQiLCJQcm9wc01lbnVFeGNoYW5nZUNhcmQiLCJQcm9wc01lbnVTaHJpbmtOdW0iLCJQcm9wc01lbnVSZW1vdmVBY3Jvc3MiLCJQcm9wc01lbnVSZW1vdmVWZXJ0aWNhbCIsIlByb3BzTWVudVNwYWNlIiwiR2FtZUNvbmZpZyIsIkdhbWVOYW1lIiwiR2FtZUNsdWJCdXR0b24iLCJHYW1lU2NlbmUiLCJHYW1lTG9naWMiLCJERVZJQ0VfV0lEVEgiLCJERVZJQ0VfSEVJR0hUIiwiQ0FSRF9XSURUSCIsIkNBRURfTElORVMiLCJNQUlOX01FTlVfTlVNIiwibG9hZGluZ1NjZW5lVHlwZSIsIm1haW5NZW51IiwicHJvcHNNZW51IiwiSVNfR0FNRV9NVVNJQyIsIklTX0dBTUVfU0hBUkUiLCJJU19HQU1FX09WRVIiLCJJU19HQU1FX1dJTiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUc7RUFDbkJDLGlCQUFpQixFQUFFLENBREE7RUFDRTtFQUNyQkMscUJBQXFCLEVBQUUsQ0FGSjtFQUVNO0VBQ3pCQyxvQkFBb0IsRUFBRSxDQUhILENBR0s7O0FBSEwsQ0FBdkI7QUFLQSxJQUFJQyxRQUFRLEdBQUc7RUFDWEMsa0JBQWtCLEVBQUUsQ0FEVDtFQUNXO0VBQ3RCQyxjQUFjLEVBQUUsQ0FGTDtFQUVPO0VBQ2xCQyxrQkFBa0IsRUFBRSxDQUhUO0VBR1c7RUFDdEJDLGFBQWEsRUFBRSxDQUpKLENBSUs7O0FBSkwsQ0FBZjtBQU9BLElBQUlDLFNBQVMsR0FBRztFQUNaQyxnQkFBZ0IsRUFBRSxDQUROO0VBQ1E7RUFDcEJDLG9CQUFvQixFQUFFLENBRlY7RUFFWTtFQUN4QkMscUJBQXFCLEVBQUUsQ0FIWDtFQUdhO0VBQ3pCQyxrQkFBa0IsRUFBRSxDQUpSO0VBSVU7RUFDdEJDLHFCQUFxQixFQUFFLENBTFg7RUFLYTtFQUN6QkMsdUJBQXVCLEVBQUUsQ0FOYjtFQU1lO0VBQzNCQyxjQUFjLEVBQUUsQ0FQSixDQU9NOztBQVBOLENBQWhCO0FBVUEsSUFBSUMsVUFBVSxHQUFHO0VBQ2JDLFFBQVEsRUFBRSxRQURHO0VBRWJDLGNBQWMsRUFBRSxJQUZIO0VBRVE7RUFDckJDLFNBQVMsRUFBRSxJQUhFO0VBSWJDLFNBQVMsRUFBRSxJQUpFO0VBTWJyQixnQkFBZ0IsRUFBRUEsZ0JBTkw7RUFPYkksUUFBUSxFQUFFQSxRQVBHO0VBUWJLLFNBQVMsRUFBRUEsU0FSRTtFQVViYSxZQUFZLEVBQUUsR0FWRDtFQVVNO0VBQ25CQyxhQUFhLEVBQUUsSUFYRjtFQWFiQyxVQUFVLEVBQUUsQ0FiQztFQWFDO0VBQ2RDLFVBQVUsRUFBRSxDQWRDO0VBY0M7RUFFZEMsYUFBYSxFQUFFLENBQUMsSUFoQkg7RUFnQlE7RUFFckJDLGdCQUFnQixFQUFFM0IsZ0JBQWdCLENBQUNDLGlCQWxCdEI7RUFrQndDO0VBQ3JEMkIsUUFBUSxFQUFFeEIsUUFBUSxDQUFDSSxhQW5CTjtFQW1Cb0I7RUFFakNxQixTQUFTLEVBQUVwQixTQUFTLENBQUNPLGNBckJSO0VBcUJ1QjtFQUVwQ2MsYUFBYSxFQUFFLElBdkJGO0VBdUJPO0VBRXBCQyxhQUFhLEVBQUUsS0F6QkY7RUF5QlE7RUFDckJDLFlBQVksRUFBRSxLQTFCRDtFQTBCTztFQUNwQkMsV0FBVyxFQUFFLEtBM0JBLENBMkJPOztBQTNCUCxDQUFqQjtBQTZCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEIsVUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBMb2FkaW5nU2NlbmVUeXBlID0ge1xuICAgIExvYWRpbmdTY2VuZUZpcnN0OiAwLC8v6aaW5qyh6L+b5YWlXG4gICAgTG9hZGluZ1NjZW5lRW50ZXJHYW1lOiAxLC8v6L+b5YWl5ri45oiPXG4gICAgTG9hZGluZ1NjZW5lQmFja0dhbWU6IDIsLy/ov5Tlm57muLjmiI9cbn07XG52YXIgTWFpbk1lbnUgPSB7XG4gICAgTWFpbk1lbnVOdW1DbGFzc2ljOiAwLC8vIOe7j+WFuOaooeW8j1xuICAgIE1haW5NZW51TnVtUG9wOiA1LC8v5raI6Zmk5Y+g5Yqg5qih5byPXG4gICAgTWFpbk1lbnVOdW1Qb3BTdGFyOiA2LC8v5raI54Gt5pif5pif5qih5byPXG4gICAgTWFpbk1lbnVTcGFjZTogNy8v5riF56m6XG59O1xuXG52YXIgUHJvcHNNZW51ID0ge1xuICAgIFByb3BzTWVudUJhY2tvdXQ6IDAsLy/mkqTplIDlip/og71cbiAgICBQcm9wc01lbnVEZXN0cm95Q2FyZDogMSwvL+mUgOavgeS4gOS4quWNoeeJh1xuICAgIFByb3BzTWVudUV4Y2hhbmdlQ2FyZDogMiwvL+iwg+aNouWNoeeJh1xuICAgIFByb3BzTWVudVNocmlua051bTogMywvL+S9v+WNoeeJh+aVsOWtl+mZpDJcbiAgICBQcm9wc01lbnVSZW1vdmVBY3Jvc3M6IDQsLy/kvb/ljaHniYfmqKrmjpLmtojpmaRcbiAgICBQcm9wc01lbnVSZW1vdmVWZXJ0aWNhbDogNSwvL+S9v+WNoeeJh+erluaOkua2iOmZpFxuICAgIFByb3BzTWVudVNwYWNlOiA2LC8v5riF56m6XG59O1xuXG52YXIgR2FtZUNvbmZpZyA9IHtcbiAgICBHYW1lTmFtZTogXCLkuIDotbfmtojnga3mmJ/mmJ9cIixcbiAgICBHYW1lQ2x1YkJ1dHRvbjogbnVsbCwvL+a4uOaIj+WciOaMiemSrlxuICAgIEdhbWVTY2VuZTogbnVsbCxcbiAgICBHYW1lTG9naWM6IG51bGwsXG5cbiAgICBMb2FkaW5nU2NlbmVUeXBlOiBMb2FkaW5nU2NlbmVUeXBlLFxuICAgIE1haW5NZW51OiBNYWluTWVudSxcbiAgICBQcm9wc01lbnU6IFByb3BzTWVudSxcblxuICAgIERFVklDRV9XSURUSDogNzIwLCAvLyDlsY/luZXlrr3luqZcbiAgICBERVZJQ0VfSEVJR0hUOiAxMjgwLFxuXG4gICAgQ0FSRF9XSURUSDogMCwvLyDljaHniYflrr3luqZcbiAgICBDQUVEX0xJTkVTOiA0LC8vIOWNoeeJh+S4quaVsFxuXG4gICAgTUFJTl9NRU5VX05VTTogLTEwMDAsLy8g5qih5byP57G75Z6L5qCH6K+GXG5cbiAgICBsb2FkaW5nU2NlbmVUeXBlOiBMb2FkaW5nU2NlbmVUeXBlLkxvYWRpbmdTY2VuZUZpcnN0LC8vIOWKoOi9veeVjOmdolxuICAgIG1haW5NZW51OiBNYWluTWVudS5NYWluTWVudVNwYWNlLC8vIOS4u+mAieaLqeiPnOWNlVxuXG4gICAgcHJvcHNNZW51OiBQcm9wc01lbnUuUHJvcHNNZW51U3BhY2UsLy8g6YGT5YW35Yqf6IO9XG5cbiAgICBJU19HQU1FX01VU0lDOiB0cnVlLC8vIOa4uOaIj+mfs+aViFxuXG4gICAgSVNfR0FNRV9TSEFSRTogZmFsc2UsLy8g5ri45oiP5YiG5LqrXG4gICAgSVNfR0FNRV9PVkVSOiBmYWxzZSwvLyDmuLjmiI/mmK/lkKbnu5PmnZ9cbiAgICBJU19HQU1FX1dJTjogZmFsc2UsIC8v5ri45oiP5piv5ZCm6IOc5YipXG59O1xubW9kdWxlLmV4cG9ydHMgPSBHYW1lQ29uZmlnO1xuXG4iXX0=