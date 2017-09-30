Interceptor.attach(Module.findExportByName(null, 'read'), {
    onEnter: function (args) {
        console.log('Context information:');
        console.log('Context  : ' + JSON.stringify(this.context));
        console.log('Return   : ' + this.returnAddress);
        console.log('ThreadId : ' + this.threadId);
        console.log('Depth    : ' + this.depth);
        console.log('Errornr  : ' + this.err);

        // Save arguments for processing in onLeave.
        this.fd = args[0].toInt32();
        this.buf = args[1];
        this.count = args[2].toInt32();
    },
    onLeave: function (result) {
        console.log('----------')
        // Show argument 1 (buf), saved during onEnter.
        numBytes = result.toInt32();
        if (numBytes > 0) {
            info = hexdump(this.buf, { length: numBytes, ansi: true });
            send(info)
            console.log(info);
        }
        console.log('Result   : ' + numBytes);
    }
});