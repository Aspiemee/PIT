import argparse
import math

parser = argparse.ArgumentParser()
parser.add_argument('a', help='First number of getting NOD', type=int)
parser.add_argument('b', help='Second number of getting NOD', type=int)
args = parser.parse_args()

print(math.gcd(args.a, args.b))
