# 1. Reference 

http://www.jianshu.com/p/ca8381d3e094
https://11x256.github.io/Frida-hooking-android-part-1/



# 2. Auto Generate Overload

Two many overloads,  how to generate them with freedom?

1.  overload with any fake params, 

   ```
   socket.$init.overload("fake params")
   ```

2. then it will triger the infos below

   ```
   "Error: <init>(): specified argument types do not match any of:\n\t.overload()\n\t.overload('org.json.JSONTokener')\n\t.overload('java.lang.String')\n\t.overload('java.util.Map')\n\t.overload('org.json.JSONObject', '[Ljava.lang.String;')"
   ```

3. That's it,  it provides all the overload types.  You can make your own script on it.

4. Now I provide a sample, you can use like this

   ```
   python generate_overload.py  overload_string.txt
   ```

   make sure that overload_string.txt contains the **Error** info:

   ```
   "Error: <init>(): specified argument types do not match any of:\n\t.overload()\n\t.overload('org.json.JSONTokener')\n\t.overload('java.lang.String')\n\t.overload('java.util.Map')\n\t.overload('org.json.JSONObject', '[Ljava.lang.String;')"
   ```

5. Modify the **info** as your will.

# 3. frida_loader

usage:

```
python frida_loader.py  yourpackagename
```



# 4. Lists To Hook

Normal:

```
1. String
2. JSONObject   
```

Network:

```
1. lib*.connect
2. 
```

