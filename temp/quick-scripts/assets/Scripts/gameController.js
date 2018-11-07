(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/gameController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3a865zfzeZBN5B19uol8RBU', 'gameController', __filename);
// Scripts/gameController.js

"use strict";

var EventListener = require("./eventListener");
var global = require("./global");

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        global.socket = io("localhost:3000");
        global.eventListener = EventListener({});
        global.eventListener.on("login", function (uid) {
            cc.log("button click " + uid);
        });
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=gameController.js.map
        