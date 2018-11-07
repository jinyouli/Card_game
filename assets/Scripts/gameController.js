var EventListener = require("./eventListener");
const global = require("./global");

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad : function (){
    	global.socket = io("localhost:3000");
    	global.eventListener = EventListener({});
    	global.eventListener.on("login",function(uid){
    		cc.log("button click " + uid);
    	});
    }


});
