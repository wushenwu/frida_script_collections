setImmediate(function() {   
    console.log("[*] Starting script to InetSocketAddress");
   
    Java.perform(function () {        
        inetSockAddr = Java.use("java.net.InetSocketAddress");
        
        inetSockAddr.$init.overload().implementation = function() {
            send("InetSocketAddress() got called");
            
            return this.$init();
        };
        
        inetSockAddr.$init.overload("int").implementation = function() {
            send("InetSocketAddress(int) got called");
            
            return this.$init(arguments[0]);
        };
        
        inetSockAddr.$init.overload("java.net.InetAddress", "int").implementation = function() {
            send("InetSocketAddress(sockAddr, int) got called");
            
            return this.$init(arguments[0], arguments[1]);
        };
        
        inetSockAddr.$init.overload("java.lang.String", "int").implementation = function () {
            send("InetSocketAddress(string, int) got called");
            
            return this.$init(arguments[0], arguments[1]);
        };
        
        inetSockAddr.$init.overload('java.lang.String', 'int', 'boolean').implementation = function () {
            send("InetSocketAddress(string, int, boolean) got called");
            
            return this.$init(arguments[0], arguments[1], arguments[2]);
        };
        
    });
});