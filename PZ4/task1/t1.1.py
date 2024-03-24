import argparse

parser = argparse.ArgumentParser()
parser.add_argument('a', help='Enter first number here', type=float)
parser.add_argument('b', help='Enter second number here', type=float)
args = parser.parse_args()

print(f'The sum is: {args.a + args.b}')