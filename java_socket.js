setImmediate(function() {   
    console.log("[*] Starting script to deal with socket");
    
    Java.perform(function () { 
        socket = Java.use("java.net.Socket");
        
        socket.$init.overload("java.net.Proxy").implementation = function() {
            send("Socket(proxy) got called");
            return this.$init(arguments[0]);
        };
        
        socket.$init.overload("java.lang.String", "int").implementation = function() {
            send("Socket(String, int) got called");
            return this.$init(arguments[0], arguments[1]);
        };
        
        socket.$init.overload("java.net.InetAddress", "int").implementation = function() {
            send("Socket(InetAddress, int) got called");
            return this.$init(arguments[0], arguments[1]);
        };
        
        socket.$init.overload("java.lang.String", "int", "java.net.InetAddress", "int").implementation = function() {
            send("Socket(String, int, InetAddress, int) got called");
            return this.$init(arguments[0], arguments[1], arguments[2], arguments[3]);
        };
        
        socket.$init.overload("java.net.InetAddress", "int", "java.net.InetAddress", "int").implementation = function() {
            send("Socket(InetAddress, int, InetAddress, int) got called");
            return this.$init(arguments[0], arguments[1], arguments[2], arguments[3]);
        };
        
        socket.$init.overload("java.lang.String", "int", "boolean").implementation = function() {
            send("Socket(String, int, boolean) got called");
            return this.$init(arguments[0], arguments[1], arguments[2]);
        };
        
        socket.$init.overload("java.net.InetAddress", "int", "boolean").implementation = function() {
            send("Socket(InetAddress, int, boolean) got called");
            return this.$init(arguments[0], arguments[1], arguments[2]);
        };
    });
});