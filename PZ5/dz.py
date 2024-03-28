import argparse

def get_angles(arg):
    return list(map(int, arg.split(':')))

parser = argparse.ArgumentParser()
parser.add_argument('--time', help='Enter time here', type=str)
parser.add_argument('--angle-1', help='Enter here time or hour hand', type=int)
parser.add_argument('--angle-2', help='Enter here time or minute hand', type=int)
parser.add_argument('--angle-3', help='Enter here time or saeconds hand', type=int)
args = parser.parse_args()

if args.angle_1 and args.angle_2 and args.angle_3:
    ihours = int(args.angle_1)
    iminutes = int(args.angle_2)
    iseconds = int(args.angle_3)

    if ihours < 0 and ihours > 360:
        print('Incorrect data')
    if iminutes < 0 and iminutes > 360:
        print('Incorrect data')
    if iseconds < 0 and iseconds > 360:
        print('Incorrect data')

    print(f'{ihours//30}:{iminutes//6}:{iseconds//6}')
else:
    time = get_angles(args.time)
    print(f'Angle 1: {time[0]*30}\nAngle 2: {time[1]*6}\nAngle 3: {time[2]*6}')