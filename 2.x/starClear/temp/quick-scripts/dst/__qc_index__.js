
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/AnimLayerTool');
require('./assets/Script/CardSprite');
require('./assets/Script/GameConfig');
require('./assets/Script/GameData');
require('./assets/Script/GamePopStar');
require('./assets/Script/GameScene');
require('./assets/Script/GameTools');
require('./assets/Script/GameUiTools');
require('./assets/Script/LoadingScene');
require('./assets/Script/MenuUI');
require('./assets/Script/assist/AnimInAndOut');
require('./assets/Script/panel/GameHelp');
require('./assets/Script/panel/GameOver');
require('./assets/Script/panel/GamePass');
require('./assets/Script/panel/GamePropHelp');
require('./assets/Script/panel/GamePropNode');
require('./assets/Script/panel/RankingListView');
require('./assets/Script/panel/ShowMessage');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');

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