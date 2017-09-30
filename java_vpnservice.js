setImmediate(function() {   
    console.log("[*] Starting script to deal with network");
    
    //VpnService.prepare(), establish
    var isPrepared = false;
    var isEstablished = false;
    
    Java.perform(function () {        
        vpnService = Java.use("android.net.VpnService");
        vpnService.prepare.implementation = function() {
            send("prepare() got called");
            
            recv(function (received_json_object) {
                string_to_recv = received_json_object.my_data
                send(string_to_recv)
            }).wait(); //block execution till the message is received
            
            isPrepared = true;
            return this.prepare(arguments[0]);
            
        };
        
        vpnBuilder = Java.use("android.net.VpnService$Builder"); 
        
        vpnBuilder.establish.implementation = function () {
            send("establish() got called!");
            
            isEstablished = true;
            return this.establish();
        };
    });
});