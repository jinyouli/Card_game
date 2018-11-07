"use strict";
cc._RF.push(module, '7ad90stMsNHM7OYevRGer91', 'MiainWorld');
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