import sys
import re

def main():
    info = r'''vpnService.{0}.overload({1}).implementation = function() \\left
    send("{0}({1}) got called");
    
    info = this.{0}({2}).toString();
    if (info) \\left
        console.log(info);
    \\right

    return this.{0}({2});
\\right;
'''


    pattern = '.overload\((.*?)\)'
    prog = re.compile(pattern)
    with open(sys.argv[1], 'rb') as fr:
        content = fr.read()
        
        #"Error: protect():
        method = content.split(':')[1].strip().replace('(', '').replace(')', '')
        
        #\n\t.overload()\n\t.overload('[B')\n\t
        for items in prog.findall(content):
            if not items:
                continue

            args = items.split(',')
            info_args = ''
            for i in range(len(args)):
                info_args += "arguments[%d], "%i
            
            print(info.format(method, items, info_args, method).replace(r'\\left', '{').replace(r'\\right', '}').replace(', )', ')'))
                

if __name__ == "__main__":
    main()