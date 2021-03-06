(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/eventListener.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0e3ffwonnZJPr7M+ku7VVFb', 'eventListener', __filename);
// Scripts/eventListener.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var EventListener = function EventListener(obj) {
    var Register = {};

    obj.on = function (name, method) {
        if (!Register.hasOwnProperty(name)) {
            Register[name] = [];
        };

        Register[name].push(method);
    };

    obj.fire = function (name) {
        if (Register.hasOwnProperty(name)) {
            var handleList = Register(name);
            for (var i = 0; i < handleList.length; i++) {
                var handler = handleList[i];
                var args = [];
                for (var j = 1; j < arguments.length; j++) {
                    args.push(arguments[j]);
                    handler.apply(this, args);
                }
            }
        };
    };

    obj.off = function () {};

    obj.destory = function () {};

    return obj;
};

exports.default = EventListener;
module.exports = exports["default"];

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
        //# sourceMappingURL=eventListener.js.map
        