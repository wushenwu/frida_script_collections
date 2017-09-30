import sys
import re

def main():
    info = r'''obj.$init.overload({0}).implementation = function() \\left
    send("string({1}) got called");
    
    info = this.$init({2}).toString();
    if (info) \\left
        console.log(info);
    \\right

    return this.$init({2});
\\right;
'''


    pattern = '.overload\((.*?)\)'
    prog = re.compile(pattern)
    with open(sys.argv[1], 'rb') as fr:
        content = fr.read()
        #\n\t.overload()\n\t.overload('[B')\n\t
        for items in prog.findall(content):
            if not items:
                continue

            args = items.split(',')
            info_args = ''
            for i in range(len(args)):
                info_args += "arguments[%d], "%i
            
            print(info.format(items, items, info_args).replace(r'\\left', '{').replace(r'\\right', '}').replace(', )', ')'))
                

if __name__ == "__main__":
    main()