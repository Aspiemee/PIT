import argparse

def get_entrance(arg):
    if arg%54 == 0:
        return arg//54
    else:
        return arg//54 + 1

def get_floor(arg):
    n = arg - (get_entrance(arg) - 1) * 54
    if n%6 == 0:
        return n//6;
    else:
        return n//6 + 1;

def get_apart(arg):
    return arg - (get_entrance(arg) - 1)*54 - (get_floor(arg) - 1)*6

parser = argparse.ArgumentParser()
parser.add_argument('num', help='number of the apartment', type=int)
args = parser.parse_args()

if args.num > 0 and args. num < 217:
    print(f'Номер квартиры: {args.num} | Подъезд: {get_entrance(args.num)} | Этаж: {get_floor(args.num)} | Порядок: {get_apart(args.num)}')
else:
    print('Incorrect data')