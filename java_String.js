setImmediate(function() {   
    console.log("[*] Starting script to OpenVPN");
   
    Java.perform(function () {        
        strObj = Java.use("java.lang.String");
        
        
        strObj.toString.implementation = function() {
            send("string.toString() got called");
            console.log(this.toString());
            
            return this.toString();
            
        };
        
        strObj.$init.overload('[B').implementation = function() {
            send("string('[B') got called");
                
            console.log(this.$init(arguments[0]).toString());

            return this.$init(arguments[0]);
        };

        strObj.$init.overload('[C').implementation = function() {
            send("string('[C') got called");
                
            console.log(this.$init(arguments[0]).toString());

            return this.$init(arguments[0]);
        };

        strObj.$init.overload('java.lang.StringBuilder').implementation = function() {
            send("string('java.lang.StringBuilder') got called");
                
            console.log(this.$init(arguments[0]).toString());

            return this.$init(arguments[0]);
        };

        strObj.$init.overload('java.lang.StringBuffer').implementation = function() {
            send("string('java.lang.StringBuffer') got called");
                
            console.log(this.$init(arguments[0]).toString());

            return this.$init(arguments[0]);
        };

        strObj.$init.overload('java.lang.String').implementation = function() {
            send("string('java.lang.String') got called");
                
            console.log(this.$init(arguments[0]).toString());

            return this.$init(arguments[0]);
        };

        strObj.$init.overload('[B', 'java.nio.charset.Charset').implementation = function() {
            send("string('[B', 'java.nio.charset.Charset') got called");
                
            console.log(this.$init(arguments[0], arguments[1]).toString());

            return this.$init(arguments[0], arguments[1]);
        };

        strObj.$init.overload('[B', 'java.lang.String').implementation = function() {
            send("string('[B', 'java.lang.String') got called");
                
            console.log(this.$init(arguments[0], arguments[1]).toString());

            return this.$init(arguments[0], arguments[1]);
        };

        strObj.$init.overload('[B', 'int').implementation = function() {
            send("string('[B', 'int') got called");
                
            console.log(this.$init(arguments[0], arguments[1]).toString());

            return this.$init(arguments[0], arguments[1]);
        };

        strObj.$init.overload('int', 'int', '[C').implementation = function() {
            send("string('int', 'int', '[C') got called");
                
            console.log(this.$init(arguments[0], arguments[1], arguments[2]).toString());

            return this.$init(arguments[0], arguments[1], arguments[2]);
        };

        strObj.$init.overload('[B', 'int', 'int').implementation = function() {
            send("string('[B', 'int', 'int') got called");
                
            console.log(this.$init(arguments[0], arguments[1], arguments[2]).toString());

            return this.$init(arguments[0], arguments[1], arguments[2]);
        };

        strObj.$init.overload('[C', 'int', 'int').implementation = function() {
            send("string('[C', 'int', 'int') got called");
                
            console.log(this.$init(arguments[0], arguments[1], arguments[2]).toString());

            return this.$init(arguments[0], arguments[1], arguments[2]);
        };

        strObj.$init.overload('[I', 'int', 'int').implementation = function() {
            send("string('[I', 'int', 'int') got called");
                
            console.log(this.$init(arguments[0], arguments[1], arguments[2]).toString());

            return this.$init(arguments[0], arguments[1], arguments[2]);
        };

        strObj.$init.overload('[B', 'int', 'int', 'int').implementation = function() {
            send("string('[B', 'int', 'int', 'int') got called");
                
            console.log(this.$init(arguments[0], arguments[1], arguments[2], arguments[3]).toString());

            return this.$init(arguments[0], arguments[1], arguments[2], arguments[3]);
        };

        strObj.$init.overload('[B', 'int', 'int', 'java.lang.String').implementation = function() {
            send("string('[B', 'int', 'int', 'java.lang.String') got called");
                
            console.log(this.$init(arguments[0], arguments[1], arguments[2], arguments[3]).toString());

            return this.$init(arguments[0], arguments[1], arguments[2], arguments[3]);
        };

        strObj.$init.overload('[B', 'int', 'int', 'java.nio.charset.Charset').implementation = function() {
            send("string('[B', 'int', 'int', 'java.nio.charset.Charset') got called");
                
            console.log(this.$init(arguments[0], arguments[1], arguments[2], arguments[3]).toString());

            return this.$init(arguments[0], arguments[1], arguments[2], arguments[3]);
        };
    });
});