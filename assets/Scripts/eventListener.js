const EventListener = function(obj){
    const Register = {};

    obj.on = function(name, method){
        if (!Register.hasOwnProperty(name)) {
            Register[name] = [];
        };

        Register[name].push(method);
    };

    obj.fire = function(name){
        if (Register.hasOwnProperty(name)) {
            var handleList = Register(name);
            for(let i=0; i < handleList.length; i++){
                var handler = handleList[i];
                let args = [];
                for(let j = 1; j< arguments.length; j++){
                    args.push(arguments[j]);
                    handler.apply(this,args);
                }
            }
        };
    };

    obj.off = function(){

    };

    obj.destory = function(){
        
    };

    return obj;
};

export default EventListener;





