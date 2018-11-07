const global = require("./global");

cc.Class({
    extends: cc.Component,

    properties: {
        
        edit_box:{
            default : null,
            type : cc.EditBox
        }
    },

    start () {

    },

    loginClick: function (event,customData){
        cc.log("ceshi == " + customData);
        cc.log("输入框 == " + this.edit_box.string);

        global.eventListener.fire("login", this.edit_box.string);
        global.socket.emit("login",uid);
    }

});
