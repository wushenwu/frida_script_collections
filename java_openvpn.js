setImmediate(function() {   
    console.log("[*] Starting script to OpenVPN");
   
    Java.perform(function () {        
        remoteServer = Java.use("de.blinkt.openvpn.RemoteServer");
        
        remoteServer.$init.implementation = function() {
            send("remoteServer() got called");
            console.log(arguments[0]);
            console.log(arguments[1]);
            console.log(arguments[2]);

            return this.$init(arguments[0], arguments[1], arguments[2]);
        };
    });
});