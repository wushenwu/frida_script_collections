Interceptor.attach(Module.findExportByName(null, 'connect'), {
    onEnter: function (args) {
        if (args[2].toInt32() == 16) {
            console.log('Context information:');
            console.log('Context  : ' + JSON.stringify(this.context));
            console.log('Return   : ' + this.returnAddress);
            console.log('ThreadId : ' + this.threadId);
            console.log('Depth    : ' + this.depth);
            console.log('Errornr  : ' + this.err);

            // Save arguments for processing in onLeave.
            console.log(hexdump(Memory.readByteArray(args[1], args[2].toInt32())));
        }

    },
    onLeave: function (result) {        
    }
});