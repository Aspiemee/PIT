import argparse

parser = argparse.ArgumentParser()
parser.add_argument('k', help='k belongs to the interval [1,150]', type=int)
args = parser.parse_args()

n = args.k//3;
k = args.k - n * 3

if args.k > 0 and args.k < 151:
    print(str(100 + n)[k-1])
else:
    print('Incorrect data')