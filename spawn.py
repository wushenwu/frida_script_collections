import frida
import time

'''
this mainly from 
https://11x256.github.io/Frida-hooking-android-part-1/
'''

device = frida.get_usb_device()
pid = device.spawn(["com.github.shadowsocks"])
device.resume(pid)
time.sleep(1) #Without it Java.perform silently fails
session = device.attach(pid)
script = session.create_script(open("view.js").read())
script.load()

#prevent the python script from terminating
raw_input()