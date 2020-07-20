import subprocess


def ipcon():

    a=subprocess.run('ipconfig getifaddr en0',shell=True,text=True,capture_output=True)
    return a.stdout
    

if __name__ == '__main__':
    print(ipcon())
    

