"use strict";
cc._RF.push(module, '3a865zfzeZBN5B19uol8RBU', 'gameController');
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