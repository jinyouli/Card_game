(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/MiainWorld.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7ad90stMsNHM7OYevRGer91', 'MiainWorld', __filename);
// Scripts/MiainWorld.js

"use strict";

var global = require("./global");

cc.Class({
    extends: cc.Component,

    properties: {

        edit_box: {
            default: null,
            type: cc.EditBox
        }
    },

    start: function start() {},


    loginClick: function loginClick(event, customData) {
        cc.log("ceshi == " + customData);
        cc.log("输入框 == " + this.edit_box.string);

        global.eventListener.fire("login", this.edit_box.string);
        global.socket.emit("login", uid);
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
        //# sourceMappingURL=MiainWorld.js.map
        