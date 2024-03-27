import argparse

def get_hours(arg):
    return arg//3600
def get_mins(arg):
    return (arg - get_hours(arg) * 3600) // 60;
def get_secs(arg):
    return arg - get_hours(arg)*3600 - get_mins(arg) * 60

parser = argparse.ArgumentParser()
parser.add_argument('time', help='Number of seconds since the beginning of the day', type=int)
args = parser.parse_args()

shours = ''
smins = ''
ssecs = ''

if(args.time > 0 and args.time < 86400):
    if len(str(get_hours(args.time))) == 1:
        shours = '0' + str(get_hours(args.time))
    else:
        shours = str(get_hours(args.time))

    if len(str(get_mins(args.time))) == 1:
        smins = '0' + str(get_mins(args.time))
    else:
        smins = str(get_mins(args.time))

    if len(str(get_secs(args.time))) == 1:
        ssecs = '0' + str(get_secs(args.time))
    else:
        ssecs = str(get_secs(args.time))

    print(f'{shours}:{smins}:{ssecs}')
else :
    print('incorrect data')