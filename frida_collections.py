#coding:utf8
import sys
import frida

'''
most of this come from 
http://www.jianshu.com/p/ca8381d3e094

'''

udev = frida.get_usb_device()

def getTopApp():
    front_app = udev.get_frontmost_application()
    print front_app

def enumerateProcess():
    processes = udev.enumerate_processes()
    for process in processes:
        print process
 
def enumerateModules(): 
    session = udev.attach("com.github.shadowsocks")  #如果存在两个一样的进程名可以采用rdev.attach(pid)的方式
    modules = session.enumerate_modules()
    for module in modules:
        print module
        export_funcs = module.enumerate_exports()
        print "\tfunc_name\tRVA"
        for export_func in export_funcs:
            print "\t%s\t%s"%(export_func.name,hex(export_func.relative_address))
 
def hookNative(): 
    session = udev.attach("com.github.shadowsocks")
    
    scr = """
    Interceptor.attach(Module.findExportByName("libc.so" , "connect"), {
        onEnter: function(args) {
            hex = hexdump(Memory.readByteArray(args[1], args[2].toInt32()));
            info = "connect paddr=" +args[1] + ", len=" + args[2].toInt32();
            if (args[2].toInt32() != 110) {
                console.log(hexdump(Memory.readByteArray(args[1], args[2].toInt32())));
                send(info);
            }
            
        },
        onLeave:function(retval){

        }
    });
    """
    
    script = session.create_script(scr)
    script.on("message" , on_message)
    script.load()
    sys.stdin.read()
    
def hookJava():
    session = udev.attach("com.tencent.mm")

    scr = """
    Java.perform(function () {
    var ay = Java.use("com.tencent.mm.sdk.platformtools.ay");
    ay.pu.implementation = function(){
        var type = arguments[0];
        send("type="+type);
        if (type == 2)
        {
        return this.pu(type);
        }
        else
        {
        return 5;
        }
    };

    });
    """

    script = session.create_script(scr)
    script.on("message" , on_message)
    script.load()
    sys.stdin.read()

def on_message(message ,data):
    print message


        
def main():
    enumerateModules()
    #hookNative()
        
if __name__ == "__main__":
    main()