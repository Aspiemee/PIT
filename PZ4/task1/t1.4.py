import argparse

parser = argparse.ArgumentParser()
parser.add_argument('n', help='The number to be checked for even or odd', type=int)
args = parser.parse_args()

if (args.n % 2 == 0):
    print('The number is even')
else:
    print('The number is odd')