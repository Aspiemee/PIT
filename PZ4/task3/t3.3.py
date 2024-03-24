import argparse
import math

parser = argparse.ArgumentParser()
parser.add_argument('a', help='first number to check for mutual simplicity', type=int)
parser.add_argument('b', help='second number to check for mutual simplicity', type=int)
args = parser.parse_args()

if math.gcd(args.a, args.b) == 1:
    print('mutual simple number')
else:
    print('non-mutual simple number')
