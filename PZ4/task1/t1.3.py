import argparse

parser = argparse.ArgumentParser()
parser.add_argument('a', help='First number of multyplication', type=float)
parser.add_argument('b', help='Second number of multyplication', type=float)
args = parser.parse_args()

print(f'The result of multiplication is {args.a * args.b}')