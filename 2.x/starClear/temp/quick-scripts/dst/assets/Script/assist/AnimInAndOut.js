
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/assist/AnimInAndOut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0c73cXTEdFOEIiRT1cSAep1', 'AnimInAndOut');
// Script/assist/AnimInAndOut.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {// onLoad要执行的全都在onEnable中进行了
  },
  onEnable: function onEnable() {
    this.node.opacity = 0;
    this.node.setScale(0);
    var fadeIn = cc.fadeIn(0.2);
    var scaleTo = cc.scaleTo(0.2, 1);
    this.node.runAction(cc.spawn(fadeIn, scaleTo));
  },
  animateAndDestroy: function animateAndDestroy() {
    var _this = this;

    if (this.isDestroying) {
      return;
    }

    this.isDestroying = true;
    var fadeOut = cc.fadeOut(0.2);
    var scaleTo = cc.scaleTo(0.2, 0);
    var callFunc = cc.callFunc(function () {
      if (_this.node) {
        _this.node.destroy();
      }
    });
    this.node.runAction(cc.sequence(cc.spawn(fadeOut, scaleTo), callFunc));
  },
  animateAndDisable: function animateAndDisable() {
    var _this2 = this;

    if (this.isDestroying) {
      return;
    }

    this.isDestroying = true;
    var fadeOut = cc.fadeOut(0.2);
    var scaleTo = cc.scaleTo(0.2, 0);
    var callFunc = cc.callFunc(function () {
      _this2.node.active = false;
    });
    this.node.runAction(cc.sequence(cc.spawn(fadeOut, scaleTo), callFunc));
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhc3Npc3RcXEFuaW1JbkFuZE91dC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm9uRW5hYmxlIiwibm9kZSIsIm9wYWNpdHkiLCJzZXRTY2FsZSIsImZhZGVJbiIsInNjYWxlVG8iLCJydW5BY3Rpb24iLCJzcGF3biIsImFuaW1hdGVBbmREZXN0cm95IiwiaXNEZXN0cm95aW5nIiwiZmFkZU91dCIsImNhbGxGdW5jIiwiZGVzdHJveSIsInNlcXVlbmNlIiwiYW5pbWF0ZUFuZERpc2FibGUiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRSxFQUhQO0VBT0w7RUFDQUMsTUFBTSxFQUFFLGtCQUFZLENBQ2hCO0VBQ0gsQ0FWSTtFQVlMQyxRQUFRLEVBQUUsb0JBQVk7SUFDbEIsS0FBS0MsSUFBTCxDQUFVQyxPQUFWLEdBQW9CLENBQXBCO0lBQ0EsS0FBS0QsSUFBTCxDQUFVRSxRQUFWLENBQW1CLENBQW5CO0lBQ0EsSUFBSUMsTUFBTSxHQUFHVCxFQUFFLENBQUNTLE1BQUgsQ0FBVSxHQUFWLENBQWI7SUFDQSxJQUFJQyxPQUFPLEdBQUdWLEVBQUUsQ0FBQ1UsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBZDtJQUNBLEtBQUtKLElBQUwsQ0FBVUssU0FBVixDQUFvQlgsRUFBRSxDQUFDWSxLQUFILENBQVNILE1BQVQsRUFBaUJDLE9BQWpCLENBQXBCO0VBQ0gsQ0FsQkk7RUFvQkxHLGlCQUFpQixFQUFFLDZCQUFZO0lBQUE7O0lBQzNCLElBQUksS0FBS0MsWUFBVCxFQUF1QjtNQUNuQjtJQUNIOztJQUNELEtBQUtBLFlBQUwsR0FBb0IsSUFBcEI7SUFFQSxJQUFJQyxPQUFPLEdBQUdmLEVBQUUsQ0FBQ2UsT0FBSCxDQUFXLEdBQVgsQ0FBZDtJQUNBLElBQUlMLE9BQU8sR0FBR1YsRUFBRSxDQUFDVSxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFkO0lBQ0EsSUFBSU0sUUFBUSxHQUFHaEIsRUFBRSxDQUFDZ0IsUUFBSCxDQUFZLFlBQUk7TUFDM0IsSUFBSSxLQUFJLENBQUNWLElBQVQsRUFBZTtRQUNYLEtBQUksQ0FBQ0EsSUFBTCxDQUFVVyxPQUFWO01BQ0g7SUFDSixDQUpjLENBQWY7SUFLQSxLQUFLWCxJQUFMLENBQVVLLFNBQVYsQ0FBb0JYLEVBQUUsQ0FBQ2tCLFFBQUgsQ0FBWWxCLEVBQUUsQ0FBQ1ksS0FBSCxDQUFTRyxPQUFULEVBQWtCTCxPQUFsQixDQUFaLEVBQXdDTSxRQUF4QyxDQUFwQjtFQUNILENBbENJO0VBb0NMRyxpQkFBaUIsRUFBRSw2QkFBWTtJQUFBOztJQUMzQixJQUFJLEtBQUtMLFlBQVQsRUFBdUI7TUFDbkI7SUFDSDs7SUFDRCxLQUFLQSxZQUFMLEdBQW9CLElBQXBCO0lBRUEsSUFBSUMsT0FBTyxHQUFHZixFQUFFLENBQUNlLE9BQUgsQ0FBVyxHQUFYLENBQWQ7SUFDQSxJQUFJTCxPQUFPLEdBQUdWLEVBQUUsQ0FBQ1UsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBZDtJQUNBLElBQUlNLFFBQVEsR0FBR2hCLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FBWSxZQUFJO01BQzNCLE1BQUksQ0FBQ1YsSUFBTCxDQUFVYyxNQUFWLEdBQW1CLEtBQW5CO0lBQ0gsQ0FGYyxDQUFmO0lBR0EsS0FBS2QsSUFBTCxDQUFVSyxTQUFWLENBQW9CWCxFQUFFLENBQUNrQixRQUFILENBQVlsQixFQUFFLENBQUNZLEtBQUgsQ0FBU0csT0FBVCxFQUFrQkwsT0FBbEIsQ0FBWixFQUF3Q00sUUFBeEMsQ0FBcEI7RUFDSCxDQWhESSxDQWtETDtFQUNBO0VBRUE7O0FBckRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG9uTG9hZOimgeaJp+ihjOeahOWFqOmDveWcqG9uRW5hYmxl5Lit6L+b6KGM5LqGXG4gICAgfSxcblxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDApO1xuICAgICAgICB2YXIgZmFkZUluID0gY2MuZmFkZUluKDAuMik7XG4gICAgICAgIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjIsIDEpO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNwYXduKGZhZGVJbiwgc2NhbGVUbykpO1xuICAgIH0sXG5cbiAgICBhbmltYXRlQW5kRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc3Ryb3lpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGVzdHJveWluZyA9IHRydWU7XG5cbiAgICAgICAgdmFyIGZhZGVPdXQgPSBjYy5mYWRlT3V0KDAuMik7XG4gICAgICAgIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjIsIDApO1xuICAgICAgICB2YXIgY2FsbEZ1bmMgPSBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGZhZGVPdXQsIHNjYWxlVG8pLCBjYWxsRnVuYykpO1xuICAgIH0sXG5cbiAgICBhbmltYXRlQW5kRGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rlc3Ryb3lpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGVzdHJveWluZyA9IHRydWU7XG5cbiAgICAgICAgdmFyIGZhZGVPdXQgPSBjYy5mYWRlT3V0KDAuMik7XG4gICAgICAgIHZhciBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjIsIDApO1xuICAgICAgICB2YXIgY2FsbEZ1bmMgPSBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihmYWRlT3V0LCBzY2FsZVRvKSwgY2FsbEZ1bmMpKTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pOyJdfQ==