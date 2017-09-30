#coding:utf8
import sys
import frida
import time

'''
most of this come from 
http://www.jianshu.com/p/ca8381d3e094
https://11x256.github.io/Frida-hooking-android-part-3/

'''
g_device = None
g_session = None
g_d_type_script = {}   #used within message handler, for each specific script to communicate

def msgHandlerNet(message, payload):
    print message
    print payload
    if message["type"] == "send":
        print message["payload"]
        #data = message["payload"].split(":")[1].strip()
        #
        #data = data.decode("base64")
        #user, pw = data.split(":")
        #data = ("admin" + ":" + pw).encode("base64")
        # print "encoded data:", data
        g_d_type_script[msgHandlerNet].post({"my_data": "from recv"}) #send JSON object

def msgHandler(message, payload):
    print message
    print payload    
    
def loadScript(jsfile, session, msgHandler):
    global g_d_type_script
    with open(jsfile) as f:
        script = session.create_script(f.read())
        g_d_type_script[msgHandler] = script
        
    script.on("message", msgHandler)  
    script.load()
    
def main():
    device = frida.get_usb_device()
    
    pkgname = sys.argv[1]
    pid = device.spawn([pkgname])
    device.resume(pid)
    time.sleep(1)  
    
    session = device.attach(pid)
    
    #java layer hook
    loadScript("java_vpnservice.js", session, msgHandlerNet)
    #loadScript("java_socket.js", session, msgHandler)
    #loadScript("java_InetSocketAddress.js", session, msgHandler)
    #loadScript("java_openvpn.js", session, msgHandler)
    
    loadScript("java_JSONObject.js", session, msgHandler)
    loadScript("java_String.js", session, msgHandler)
    
    #lib layer hook
    #loadScript("lib_read.js", session, msgHandler)
    #loadScript("lib_connect.js", session, msgHandler)
    
    loadScript("java_JSONObject.js", session, msgHandler)
    loadScript("java_String.js", session, msgHandler)

    #view
    #loadScript("view.js", session, msgHandler)
    
    #prevent the python script from terminating
    raw_input()
      
if __name__ == "__main__":
    main()